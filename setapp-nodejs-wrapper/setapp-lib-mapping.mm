#import "Setapp.h"
#import <nan.h>

using v8::Context;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::FunctionCallbackInfo;
using v8::FunctionTemplate;
using v8::Function;
using v8::String;
using v8::Value;
using v8::NewStringType;
using v8::Exception;

#pragma mark - Release Notes API

void _SCShowReleaseNotesWindowIfNeeded(const FunctionCallbackInfo<Value>& info)
{
    SCShowReleaseNotesWindowIfNeeded();
}

void _SCShowReleaseNotesWindow(const FunctionCallbackInfo<Value>& info)
{
    SCShowReleaseNotesWindow();
}

void _SCCanShowReleaseNotesWindow(const FunctionCallbackInfo<Value>& info)
{
    BOOL canShow = SCCanShowReleaseNotesWindow();
    info.GetReturnValue().Set(canShow ? Nan::True() : Nan::False());
}

#pragma mark - Usage Events API

void _SCReportUsageEvent(const FunctionCallbackInfo<Value>& info)
{
    Isolate* isolate = info.GetIsolate();

    if (info.Length() < 1)
    {
        Nan::ThrowTypeError("Wrong number of arguments. Should be at least 1 string arg.");
        return;
    }
    
    String::Utf8Value utf8Str(isolate, info[0].As<String>());
    NSString *eventName = [NSString stringWithUTF8String:*utf8Str] ?: @"";
    
    if (info.Length() > 1)
    {
        Nan::ThrowTypeError("Second argument is not supportted rignt now");
    }
    
    SCReportUsageEvent(eventName, nil);
}

#pragma mark - User Permissions API

void _SCGetLastUserEmailSharingResponse(const FunctionCallbackInfo<Value>& info)
{
    SCUserEmailSharingResponse response = SCGetLastUserEmailSharingResponse();
    info.GetReturnValue().Set(Nan::New((int32_t)response));
}

void _SCAskUserToShareEmail(const FunctionCallbackInfo<Value>& info)
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

void _SCEnableDebugLogging(const FunctionCallbackInfo<Value>& info)
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
void Init(Local<Object> exports)
{
    Isolate* isolate = exports->GetIsolate();
    Local<Context> context = isolate->GetCurrentContext();
    
    // Release Notes API
    exports->Set(context,
                 String::NewFromUtf8(isolate, "SCShowReleaseNotesWindowIfNeeded", NewStringType::kNormal).ToLocalChecked(),
                 FunctionTemplate::New(isolate, _SCShowReleaseNotesWindowIfNeeded)->GetFunction(context).ToLocalChecked());
    exports->Set(context,
                 String::NewFromUtf8(isolate, "SCShowReleaseNotesWindow", NewStringType::kNormal).ToLocalChecked(),
                 FunctionTemplate::New(isolate, _SCShowReleaseNotesWindow)->GetFunction(context).ToLocalChecked());
    exports->Set(context,
                 String::NewFromUtf8(isolate, "SCCanShowReleaseNotesWindow", NewStringType::kNormal).ToLocalChecked(),
                 FunctionTemplate::New(isolate, _SCCanShowReleaseNotesWindow)->GetFunction(context).ToLocalChecked());

    // Usage Events API
    exports->Set(context,
                 String::NewFromUtf8(isolate, "SCReportUsageEvent", NewStringType::kNormal).ToLocalChecked(),
                 FunctionTemplate::New(isolate, _SCReportUsageEvent)->GetFunction(context).ToLocalChecked());
    // User Permissions API
    exports->Set(context,
                 String::NewFromUtf8(isolate, "SCGetLastUserEmailSharingResponse", NewStringType::kNormal).ToLocalChecked(),
                 FunctionTemplate::New(isolate, _SCGetLastUserEmailSharingResponse)->GetFunction(context).ToLocalChecked());
    exports->Set(context,
                 String::NewFromUtf8(isolate, "SCAskUserToShareEmail", NewStringType::kNormal).ToLocalChecked(),
                 FunctionTemplate::New(isolate, _SCAskUserToShareEmail)->GetFunction(context).ToLocalChecked());

    // Debug Logging API
    exports->Set(context,
                 String::NewFromUtf8(isolate, "SCEnableDebugLogging", NewStringType::kNormal).ToLocalChecked(),
                 FunctionTemplate::New(isolate, _SCEnableDebugLogging)->GetFunction(context).ToLocalChecked());
}

NODE_MODULE(setapp, Init)
