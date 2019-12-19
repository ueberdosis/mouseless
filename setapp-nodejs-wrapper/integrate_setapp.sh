function print_usage
{
    echo "USAGE: *script* -app <path_to_application_bundle>"
    echo "                [-sign <codesign_identity> [-entitlements <path_to_entitlements_file>]]"
}

function check_result()
{
    RESULT="$1"
    MESSAGE="$2"
    if [ $RESULT != 0 ]; then
        echo "$MESSAGE"
        exit $RESULT
    fi
}

# ----------------------------------------------
# check input params

APP_PATH=""
SIGN_IDENTITY=""
ENTITLEMENTS=""
while test $# -gt 0; do
    case "$1" in
        -h|--help)
            print_usage
            exit 0
            ;;
        -app)
            shift
            if test $# -gt 0; then
                APP_PATH="$1"
            fi
            shift
            ;;
        -sign)
            shift
            if test $# -gt 0; then
                SIGN_IDENTITY="$1"
            fi
            shift
            ;;
        -entitlements)
            shift
            if test $# -gt 0; then
            ENTITLEMENTS="$1"
            fi
            shift
            ;;
        *)
            echo "Unknown input parameter \"$1\""
            exit 1
            ;;
    esac
done

if [ ! -d "$APP_PATH" ]; then
    echo "Path to application bundle is absent."
    exit 1
fi

# replace Setapp library resources
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
LIB_DIR_PATH="$SCRIPT_DIR/libSetapp"
if [ ! -d "$LIB_DIR_PATH" ]; then
    echo "libSetapp directory is absent"
    exit 1
fi

CUR_DIR="$PWD"
cd "$SCRIPT_DIR"

# build setapp.node
npm install && npm run build
check_result $?
cd "$CUR_DIR"

# copy node to application bundle
SETAPP_NODE="$SCRIPT_DIR/build/Release/setapp.node"
APP_RESOURCES_DIR="$APP_PATH/Contents/Resources"
cp -p "$SETAPP_NODE" "$APP_RESOURCES_DIR"
check_result $?

# copy localized resources to application bundle
LIB_RESOURCES_DIR="$SCRIPT_DIR/libSetapp/Resources"
LOCALIZED_FILES=$(find "$LIB_RESOURCES_DIR" -name "*.strings")
IFS=$'\n\b'
for FILE in $LOCALIZED_FILES; do
    DIR_NAME="$(basename $(dirname $FILE))"
    if [ -d "$APP_RESOURCES_DIR/$DIR_NAME" ]; then
        cp -p "$FILE" "$APP_RESOURCES_DIR/$DIR_NAME"
        check_result $?
    fi
done

# codesign if needed
if [ -n "$SIGN_IDENTITY" ]; then
    if [ -n "$ENTITLEMENTS" ]; then
        codesign -fv -s "$SIGN_IDENTITY" --entitlements "$ENTITLEMENTS" "$APP_PATH"
        check_result $?
    else
        codesign -fv -s "$SIGN_IDENTITY" "$APP_PATH"
        check_result $?
    fi
fi

echo "Now your app is ready to be submitted to Setapp ;)"
exit 0
