//
//  Setapp.h
//  Setapp
//
//  Created on 7/15/2016.
//  Copyright © 2016 Setapp Ltd. All rights reserved.
//

#if __has_feature(modules)
@import Foundation;
#else
#import <Foundation/Foundation.h>
#endif

#if !__has_feature(nullability)
#define _Nonnull
#define _Nullable
#define NS_ASSUME_NONNULL_BEGIN
#define NS_ASSUME_NONNULL_END
#endif


NS_ASSUME_NONNULL_BEGIN

#pragma mark - Library Version API

/*! @brief Constant that shows library version
 */
static NSString * const SCLibraryVersion = @"1.5.0";


#pragma mark - Release Notes API

/*! @brief Shows a release notes window if the application is
 *          launched for the first time after update.
 */
FOUNDATION_EXTERN void SCShowReleaseNotesWindowIfNeeded(void);


/*! @brief Shows a window with release notes.
 */
FOUNDATION_EXTERN void SCShowReleaseNotesWindow(void);


/*! @brief Checks if a release notes window can be shown.
 *  @deprecated This method is deprecated and always returns YES.
 */
FOUNDATION_EXTERN BOOL SCCanShowReleaseNotesWindow(void) DEPRECATED_ATTRIBUTE;


#pragma mark - Usage Events API

/*! @brief Reports special application events that denote app usage.
 *  @discussion More information about special Setapp events is available in
 *              <a href="https://docs.setapp.com/docs/library-integration">the knowledge base</a>.
 *  @discussion Events must be reported only after the @c applicationDidFinishLaunching
 *              method is called (if applicable).
 *  @param eventName    Setapp event names are described in the knowledge base.
 *  @param eventInfo    Additional info about an event. Currently, not supported.
 */
FOUNDATION_EXTERN void SCReportUsageEvent(NSString *eventName, NSDictionary *_Nullable eventInfo);


#pragma mark - User Permissions API

/*!
 *  @typedef SCUserEmailSharingResponse
 *  @brief A list of a user’s possible actions in response to an email sharing dialog.
 */
typedef NS_ENUM(NSInteger, SCUserEmailSharingResponse)
{
    /// User haven’t seen the dialog yet.
    SCUserEmailSharingResponseAbsent = 0,
    
    /// User has made a choice (allow or forbid email sharing).
    SCUserEmailSharingResponseMadeChoice,
    
    /// User has just closed the dialog without making a choice.
    SCUserEmailSharingResponseAskLater,
    
    /// The app couldn't connect to the Setapp Agent.
    SCUserEmailSharingResponseUndefined = NSNotFound
};

/*! @brief Get the user’s last action in response to the email sharing dialog.
 *  @return Returns the user’s last action.
 */
FOUNDATION_EXTERN SCUserEmailSharingResponse SCGetLastUserEmailSharingResponse(void);

/*! @brief Shows the dialog that offers sharing an email address
 *  @param completionHandler Completion block with the user’s response as an input param.
 *  @returns YES if the dialog is shown. If the user has already been asked to share an email,
 *              the dialog won't be shown, and the function returns NO.
 */
FOUNDATION_EXTERN BOOL SCAskUserToShareEmail(void (^_Nullable completionHandler)(SCUserEmailSharingResponse userResponse));


#pragma mark - Debug Logging API

/*! @brief Enables debug logging of Setapp Library.
 *  @discussion Disable debug logging in release builds.
 *  @code
 *  #ifdef DEBUG
 *      SCEnableDebugLogging(YES);
 *  #endif
 *  @endcode
 *  @param shouldEnable If set to YES, enables debug logging. If NO, disables it.
 */
FOUNDATION_EXTERN void SCEnableDebugLogging(BOOL shouldEnable);


NS_ASSUME_NONNULL_END
