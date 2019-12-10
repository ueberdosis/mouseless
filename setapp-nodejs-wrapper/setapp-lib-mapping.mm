#import "Setapp.h"
#import <nan.h>

#pragma mark - Release Notes API

void _SCShowReleaseNotesWindowIfNeeded(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
    SCShowReleaseNotesWindowIfNeeded();
}

void _SCShowReleaseNotesWindow(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
    SCShowReleaseNotesWindow();
}

void _SCCanShowReleaseNotesWindow(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
    BOOL canShow = SCCanShowReleaseNotesWindow();
    info.GetReturnValue().Set(canShow ? Nan::True() : Nan::False());
}

#pragma mark - Usage Events API

void _SCReportUsageEvent(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
    if (info.Length() < 1)
    {
        Nan::ThrowTypeError("Wrong number of arguments. Should be at least 1 string arg.");
        return;
    }
    
    v8::String::Utf8Value utf8Str(info[0].As<v8::String>());
    NSString *eventName = [NSString stringWithUTF8String:*utf8Str] ?: @"";
    
    if (info.Length() > 1)
    {
        Nan::ThrowTypeError("Second argument is not supportted rignt now");
    }
    
    SCReportUsageEvent(eventName, nil);
}

#pragma mark - User Permissions API

void _SCGetLastUserEmailSharingResponse(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
    SCUserEmailSharingResponse response = SCGetLastUserEmailSharingResponse();
    info.GetReturnValue().Set(Nan::New((int32_t)response));
}

void _SCAskUserToShareEmail(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
    void (^completionHandler)(SCUserEmailSharingResponse) = nil;
    if (info.Length() > 0)
    {
        Nan::Callback *pCallback = new Nan::Callback(info[0].As<v8::Function>());
        completionHandler = ^(SCUserEmailSharingResponse response) {
            v8::Local<v8::Value> argv[] = { Nan::New((int32_t)response) };
            pCallback->Call(1, argv);
            delete pCallback;
        };
    }
    BOOL didShowDialog = SCAskUserToShareEmail(completionHandler);
    info.GetReturnValue().Set(didShowDialog ? Nan::True() : Nan::False());
}

#pragma mark - Debug Logging API

void _SCEnableDebugLogging(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
    if (info.Length() < 1)
    {
        Nan::ThrowTypeError("Wrong number of arguments. Should be 1.");
        return;
    }

    if (!info[0]->IsBoolean())
    {
        Nan::ThrowTypeError("Wrong argument type. Should be Boolean.");
        return;
    }

    BOOL shouldEnable = info[0].As<v8::Boolean>()->Value() ? YES : NO;
    SCEnableDebugLogging(shouldEnable);
}

/**********************************************************/
void Init(v8::Local<v8::Object> exports)
{
    // Release Notes API
    exports->Set(Nan::New("SCShowReleaseNotesWindowIfNeeded").ToLocalChecked(),
                 Nan::New<v8::FunctionTemplate>(_SCShowReleaseNotesWindowIfNeeded)->GetFunction());
    exports->Set(Nan::New("SCShowReleaseNotesWindow").ToLocalChecked(),
                 Nan::New<v8::FunctionTemplate>(_SCShowReleaseNotesWindow)->GetFunction());
    exports->Set(Nan::New("SCCanShowReleaseNotesWindow").ToLocalChecked(),
                 Nan::New<v8::FunctionTemplate>(_SCCanShowReleaseNotesWindow)->GetFunction());

    // Usage Events API
    exports->Set(Nan::New("SCReportUsageEvent").ToLocalChecked(),
                 Nan::New<v8::FunctionTemplate>(_SCReportUsageEvent)->GetFunction());
    // User Permissions API
    exports->Set(Nan::New("SCGetLastUserEmailSharingResponse").ToLocalChecked(),
                 Nan::New<v8::FunctionTemplate>(_SCGetLastUserEmailSharingResponse)->GetFunction());
    exports->Set(Nan::New("SCAskUserToShareEmail").ToLocalChecked(),
                 Nan::New<v8::FunctionTemplate>(_SCAskUserToShareEmail)->GetFunction());

    // Debug Logging API
    exports->Set(Nan::New("SCEnableDebugLogging").ToLocalChecked(),
                 Nan::New<v8::FunctionTemplate>(_SCEnableDebugLogging)->GetFunction());
}

NODE_MODULE(setapp, Init)
