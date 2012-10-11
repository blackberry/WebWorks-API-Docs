/*
* Copyright 2010-2012 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
* @namespace The <code>PushService</code> object allows you to leverage the BlackBerry push architecture to receive push data in your application. 
* The push solution includes a push-enabled application on a BlackBerry device and a content provider's server-side application (also known as the Push Initiator). 
* The Push Initiator can deliver up to 8 kB of content (images, text, etc.) and headers (metadata name-value pairs) using a Push Proxy Gateway (PPG). 
* <br/><br/>
* Two PPGs are available: the public/BlackBerry Internet Service (BIS) PPG and the enterprise/Blackberry Enterprise Server (BES) PPG. The <code>PushService</code>
* object will allow your application to receive push messages sent through either of these PPGs.
* <br/><br/>
* To work with a <code>PushService</code> object, you must first call the static <code>create</code> function.  On a successful create, you will then be able
* to perform operations using the <code>PushService</code> object you receive in the success callback.
* <br/><br/>
* For a great sample app that demonstrates how to use the push APIs, see <a href="https://github.com/blackberry/BB10-WebWorks-Samples/tree/master/pushCapture">Push Capture</a>.
* <br/><br/>
* There is also a very valuable developer guide for the Push Capture sample app that you can find <a href='https://developer.blackberry.com/html5/documentation/push_service.html'>here</a>. 
* @toc {Push} PushService 
* @class The <code>PushService</code> object allows you to perform all the push-related operations.
* @BB10X
* @featureID blackberry.push
* @permission {system} _sys_use_consumer_push Permits your consumer (public) application to use push. This permission is not needed to use enterprise push.
*/
blackberry.push.PushService = {};

/**
* <p>
* Creates a <code>PushService</code> object.  The <code>PushService</code> object will only be available if the <code>successCallback</code> function is called.
* It will not be available if the <code>failCallback</code> function is called instead.
* </p>
* @param {Object} options Object literal that allows the user to specify various options.
* @param {String} options.invokeTargetId Your application's unique invoke target ID, as set in your config.xml, related to when a new push notification 
* is received and the application needs to be invoked.
* @param {String} [options.appId] The provider application ID. If writing a consumer application, this corresponds to the application ID you received after registering 
* to use the public/BIS PPG push service.  If writing an enterprise application, you have the choice of not specifying <code>appId</code> 
* (in which case a unique one will be generated for you under the covers) or specifying a unique value of your choosing (this second option is useful if you plan
* to subscribe with the Push Initiator in your application).  
* @param {String} [options.ppgUrl] The PPG URL to register with.  If writing a consumer application, you will be provided with this URL after registering to 
* use the public/BIS PPG push service.  The URL will point to either the eval or the production environment (for eval, https://cp{cpid}.pushapi.eval.blackberry.com; 
* for production, https://cp{cpid}.pushapi.na.blackberry.com where {cpid} is replaced with your content provider ID).  If writing an enterprise application, 
* no <code>ppgUrl</code> value should be specified.
* @callback {function} successCallback The callback that is invoked when the <code>create</code> operation is successful.
* @callback {PushService} successCallback.pushService The <code>PushService</code> object that can be used on a successful <code>create</code> operation.
* @callback {function} failCallback The callback that is invoked when the <code>create</code> operation has failed.
* @callback {Number} failCallback.result The reason for the failure. See the constants provided to see what result codes apply for this operation.
* @callback {function} simChangeCallback The callback that is invoked when a SIM card change has occurred.  This callback only applies on a successful create.  
* When a SIM card change occurs, the channel will automatically be destroyed since this scenario may indicate the possibility of a new user using the device. 
* Care should be taken by the application to handle this situation as well. For example, the application may wish to re-authenticate the user with the Push Initiator 
* (if your Push Initiator implementation supports subscription) and then re-create the channel using <code>createChannel</code>. 
* @callback {function} pushTransportReadyCallback The callback that is invoked after a create channel or destroy operation has failed with a result error code of
* <code>PUSH_TRANSPORT_UNAVAILABLE</code> and the network/push transport is now available again.
* @callback {Number} pushTransportReadyCallback.lastFailedOperation The last operation that was performed that failed with a result error code of 
* <code>PUSH_TRANSPORT_UNAVAILABLE</code>. It should be one of <code>CREATE_CHANNEL_OPERATION</code> or <code>DESTROY_CHANNEL_OPERATION</code>.
* Use this value to determine which operation should be tried again.
* @throws {String} An exception is thrown if <code>create</code> is called more than once with different values for <code>options.invokeTargetId</code> and/or 
* <code>options.appId</code>.
* @BB10X
* @static
* @example 
* // For a consumer application (using the public/BIS PPG)
* var ops = { invokeTargetId : 'com.sample.pushtest.target', 
*             appId : 'appId1', 
*             ppgUrl : 'https://cp123.pushapi.na.blackberry.com' };
*
* // For an enterprise application (using the enterprise/BES PPG)
* // var ops = { invokeTargetId : 'com.sample.pushtest.target' }; 
* 
* // Or, for an enterprise application with an application ID: 
* // var ops = { invokeTargetId : 'com.sample.pushtest.target', 
* //             appId : 'appId1' };
* 
* try {
*     blackberry.push.PushService.create(ops, 
*         successCallback, 
*         failCallback, 
*         simChangeCallback, 
*         pushTransportReadyCallback);
* } catch (err) {
*     console.log("Create was called more than once with different " 
*         + "values for options.invokeTargetId or options.appId.");
*     console.log(err);
* }
*
* function successCallback(pushService) {
*     // The create operation was a success
*     // Save the pushService object to a global variable
*     // Now, use the pushService object to now perform a 
*     // launchApplicationOnPush, createChannel, destroyChannel, etc.
*     pushService.createChannel(createChannelCallback);
* }
*
* function failCallback(result) {
*     // The create operation failed
*     // You should compare the result code against the error  
*     // constants in this PushService class that apply for 
*     // create and take the recommended action for that constant
*     if (result === blackberry.push.PushService.INTERNAL_ERROR) {
*         // Retry the create up to a certain number of attempts 
*         // and then display an error to the user
*     }
*     // ... handle the other possible error constants 
*     // from the PushService class
* }
*
* function simChangeCallback() {
*     // The SIM card was changed and the channel has been 
*     // destroyed since a new user might be using the device.
*     // It is recommended that the user of this application be 
*     // re-authenticated with the Push Initiator (if your 
*     // Push Initiator implementation supports subscription) 
*     // followed by a call to createChannel.
* }
*
* function pushTransportReadyCallback(lastFailedOperation) {
*     // This callback will be called when a create channel
*     // or destroy channel was previously attempted and it 
*     // failed with the PUSH_TRANSPORT_UNAVAILABLE error code
*     // and now the network/push transport is available again. 
*     // The operation indicated by lastFailedOperation should 
*     // be retried again.
*     if (lastFailedOperation === 
*         blackberry.push.PushService.CREATE_CHANNEL_OPERATION) {
*         pushService.createChannel(createChannelCallback);
*     } else if (lastFailedOperation === 
*        blackberry.push.PushService.DESTROY_CHANNEL_OPERATION) {
*        pushService.destroyChannel(destroyChannelCallback);
*     }
* }
*/
blackberry.push.PushService.create = function(options, successCallback, failCallback, simChangeCallback, pushTransportReadyCallback) { };

/**
* <p>
* Creates a push channel for the given application. Once a channel is created, it will survive application restarts and therefore
* does not necessarily need to be called on every application start up. 
* </p>
* <p>
* However, for a consumer application, since it is possible for the public/BIS PPG to destroy a channel under certain circumstances it 
* may be advisable to periodicially re-create the channel (e.g. once a month).     
* </p>
* <p>
* A successful <code>create</code> must have been done before calling this function.
* </p>
* <p>
* This function should be called in order for an application to be able to start receiving pushes.  If a <code>destroyChannel</code> call 
* is then made, no pushes will be able to be received until a <code>createChannel</code> call is made again.
* </p>
* @callback {function} createChannelCallback The callback that is invoked when the result of the create channel operation is received. 
* @callback {Number} createChannelCallback.result The create channel operation result. See the constants provided to see what result codes apply for this operation.
* @callback {String} createChannelCallback.token On a successful create channel operation (result of <code>SUCCESS</code>), a token is returned.  This token must then be communicated 
* back to the content provider's server-side application (the Push Initiator).  This token is then used by the content provider as the means to address the application on the device 
* when initiating a push request to the PPG. 
* @BB10X
* @example
* pushService.createChannel(createChannelCallback);
*
* function createChannelCallback(result, token) {
*     if (result === blackberry.push.PushService.SUCCESS) {
*         // Success, so a token should be available
*         // Subscribe with the Push Initiator using this  
*         // token (if your Push Initiator supports subscription) 
*         // so that you can push to this user using this token
*     } else if (result === 
*         blackberry.push.PushService.INTERNAL_ERROR) {
*         // Retry the createChannel up to a certain number of  
*         // attempts and then display an error to the user
*     } else if ... (handle all the error codes possible for 
*                    createChannel - see the error constants 
*                    in this PushService class)
* }
*/
blackberry.push.PushService.prototype.createChannel = function(createChannelCallback) { };

/**
* <p>
* Destroys a push channel for the given application.
* </p>
* <p>
* A successful <code>create</code> must have been done and a channel must have been created using <code>createChannel</code> before calling this function.
* </p>
* <p>
* This function should be called in order for an application to stop receiving pushes.
* No pushes will be received after a <code>destroyChannel</code> call until a <code>createChannel</code> call is made after that.
* </p>
* @callback {function} destroyChannelCallback The callback that is invoked when the result of the destroy channel operation is received. 
* @callback {Number} destroyChannelCallback.result The destroy channel operation result. See the constants provided to see what result codes apply for this operation.
* @BB10X
* @example
* pushService.destroyChannel(destroyChannelCallback);
*
* function destroyChannelCallback(result) {
*     if (result === blackberry.push.PushService.INTERNAL_ERROR) {
*         // Retry the destroyChannel up to a certain number  
*         // of attempts and then display an error to the user
*     } else if ... (handle all the error codes possible for 
*                    destroyChannel - see the error constants 
*                    in this PushService class)
* }
*/
blackberry.push.PushService.prototype.destroyChannel = function(destroyChannelCallback) { };

/**
* <p>
* Extracts the <code>PushPayload</code> from the passed in invoke request.
* </p>
* <p>
* A successful <code>create</code> must have been done before calling this function.
* </p>
* @param {JSON} invokeRequest The invoke request to parse.
* @returns {PushPayload} Returns the parsed out <code>PushPayload</code> object.
* @throws {String} An exception is thrown if the <code>invokeRequest</code> passed in is not valid and cannot be parsed.
* @BB10X
* @example
* try {
*     var pushPayload = 
*         pushService.extractPushPayload(invokeRequest);
*
*     // pushPayload.data is of type Blob
*     // If the Blob is known to contain text, 
*     // then do something like this:
*     blobToText(pushPayload.data, "UTF-8", textConversionCallback);
*
*     // If the Blob is known to contain binary, then do 
*     // something like this to get an ArrayBuffer:
*     // blobToArrayBuffer(pushPayload.data, 
*     //     binaryConversionCallback);
* } catch (err) {
*     console.log("Was unable to parse the invoke request.");
*     console.log(err);
* }
* 
* function blobToText(blob, encoding, callback) {
*     var reader = new FileReader();
*   	
*     reader.onload = function(evt) {
*         // No errors, get the result and call the callback
*         callback(evt.target.result);
*     };
*    	
*     reader.onerror = function(evt) {
*         console.log("Error converting Blob to string: " + 
*             evt.target.error);
*     };
*        
*     reader.readAsText(blob, encoding);
* }
*
* function textConversionCallback(str) {
*     console.log("Data received: " + str);
* }
*
* function blobToArrayBuffer(blob, callback) {
*     var reader = new FileReader();
*    	
*     reader.onload = function(evt) {
*         // No errors, get the result and call the callback
*         callback(evt.target.result);
*     };
*    	
*     reader.onerror = function(evt) {
*         console.log("Error converting Blob to ArrayBuffer: " + 
*             evt.target.error);
*     };
*        
*     reader.readAsArrayBuffer(blob);
* }
*
* function binaryConversionCallback(arrayBuffer) {
*     // Process the ArrayBuffer containing 
*     // binary content as needed
* }
*/
blackberry.push.PushService.prototype.extractPushPayload = function(invokeRequest) { };

/**
* <p>
* Indicates whether or not the application should be launched (started up) if it is currently closed (not running)
* and a new push is received.  The default system behaviour is to not launch the application. 
* </p>
* <p>
* A successful <code>create</code> must have been done before calling this function.
* </p>
* <p>
* It is important to note that the <code>shouldLaunch</code> flag is only persisted once a channel has been created using the <code>createChannel</code> function.
* In other words, once the create channel function has been called the state of the <code>shouldLaunch</code> flag is persisted between application and device restarts. 
* The flag is only removed once the destroy channel function is called.  This flag can be toggled at any time using this function but, again, its value 
* is only persisted once the create channel function has been called at least once for the lifetime of the application. 
* </p>
* @param {Boolean} shouldLaunch True if the application should be launched on a new push; false if the application should not be launched when a new push comes in
* @callback {function} launchApplicationCallback The callback that is invoked when the result of the launch application operation is received. 
* @callback {Number} launchApplicationCallback.result The launch application operation result. See the constants provided to see what result codes apply for this operation.
* @BB10X
* @example
* // Indicate that you want the application to launch on a new push
* pushService.launchApplicationOnPush(true, 
*     launchApplicationCallback);
* 
* // To indicate that you do not want to launch on a new push, 
* // either leave the default behaviour or call:
* // pushService.launchApplicationOnPush(false, 
* //     launchApplicationCallback);
* 
* function launchApplicationOnPush(result) {
*    if (result === blackberry.push.PushService.INTERNAL_ERROR) {
*      // Retry the launchApplicationOnPush up to a certain number 
*      // of attempts and then display an error to the user
*    } else if ... (handle all the error codes possible for 
*                   launchApplicationOnPush - see the error 
*                   constants in this PushService class)
* }
*/
blackberry.push.PushService.prototype.launchApplicationOnPush = function(shouldLaunch, launchApplicationCallback) { };

/**
* Result code for an operation that was performed successfully. 
* <br/><br/>
* Operations this code applies to: create, createChannel, destroyChannel, launchApplicationOnPush
* @type Number
* @constant
* @static
* @BB10X
* @default 0
*/
blackberry.push.PushService.SUCCESS : 0;

/**
* Result error code for an internal error. 
* <br/><br/> 
* Operations this error can occur on: create, createChannel, destroyChannel, launchApplicationOnPush
* <br/><br/>
* Recommended action: Retrying the operation might correct the issue.
* @type Number
* @constant
* @static
* @BB10X
* @default 500
*/
blackberry.push.PushService.INTERNAL_ERROR : 500;

/**
* Result error code for an invalid device PIN as determined by the PPG.
* <br/><br/>
* Operations this error can occur on: createChannel, destroyChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: Retrying the operation might correct the issue.  The PIN is obtained under the covers
* by the public/BIS PPG.  It very rarely has issues obtaining the device PIN, so a retry might fix this.
* @type Number
* @constant
* @static
* @BB10X
* @default 10001
*/
blackberry.push.PushService.INVALID_DEVICE_PIN : 10001;

/**
* Result error code for an invalid provider application ID.  Either an invalid one was specified or none at all.
* <br/><br/>
* Operations this error can occur on: create, createChannel, destroyChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: Specifying a valid value for <code>options.appId</code> in the static <code>create</code> 
* function and retrying might correct the issue.
* @type Number
* @constant
* @static
* @BB10X
* @default 10002
*/
blackberry.push.PushService.INVALID_PROVIDER_APPLICATION_ID : 10002;

/**
* Result error code when attempting to call destroy channel again after a successful destroy channel has already been done.  
* <br/><br/>
* Operations this error can occur on: destroyChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: Most applications will typically want to just ignore this error code when it comes back.
* @type Number
* @constant
* @static
* @BB10X
* @default 10004
*/
blackberry.push.PushService.CHANNEL_ALREADY_DESTROYED : 10004;

/**
* Result error code when attempting to call destroy channel after a content provider has already done the destroying of the channel
* by unregistering a user.  
* <br/><br/>
* Operations this error can occur on: destroyChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: Most applications will typically want to just ignore this error code when it comes back.
* @type Number
* @constant
* @static
* @BB10X
* @default 10005
*/
blackberry.push.PushService.CHANNEL_ALREADY_DESTROYED_BY_PROVIDER : 10005;

/**
* This result error code should not typically be encountered.  
* It would only occur if a create or destroy channel operation internally causes the state of a subscriber on the PPG to be in an invalid state.
* <br/><br/>
* Operations this error can occur on: createChannel, destroyChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: If this error occurs, it should be logged and reported to the RIM support team.
* @type Number
* @constant
* @static
* @BB10X
* @default 10006
*/
blackberry.push.PushService.INVALID_PPG_SUBSCRIBER_STATE : 10006;

/**
* Result error code for when a destroy channel operation fails because the subscriber could not be found on the PPG's end.  
* <br/><br/>
* Operations this error can occur on: destroyChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: This error can most likely be ignored since if the subscriber could not be found on the PPG's end, then
* destroying the channel will have no effect anyway (it is as if they were never registered with the PPG using create channel).
* @type Number
* @constant
* @static
* @BB10X
* @default 10007
*/
blackberry.push.PushService.PPG_SUBSCRIBER_NOT_FOUND : 10007;

/**
* Result error code for when a create channel or destroy channel operation internally passes an expired authentication token to the PPG.  
* <br/><br/>
* Operations this error can occur on: createChannel, destroyChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: Retrying the operation might correct the issue.
* @type Number
* @constant
* @static
* @BB10X
* @default 10008
*/
blackberry.push.PushService.EXPIRED_AUTHENTICATION_TOKEN_PROVIDED_TO_PPG : 10008;

/**
* This result error code should not typically be encountered.  
* It would only occur if a create channel or destroy channel operation internally passes an invalid authentication token to the PPG.
* <br/><br/>
* Operations this error can occur on: createChannel, destroyChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: If this error occurs, it should be logged and reported to the RIM support team.
* @type Number
* @constant
* @static
* @BB10X
* @default 10009
*/
blackberry.push.PushService.INVALID_AUTHENTICATION_TOKEN_PROVIDED_TO_PPG : 10009;

/**
* Result error code for when too many devices have already performed a create channel for the provider application ID.
* (A create channel will effectively register a user with the PPG for public/BIS.)
* <br/><br/>
* Operations this error can occur on: createChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: No action can be taken by the application for this error, but it should somehow be communicated  
* back to the content provider and then to RIM to try to increase the allowed subscription limit.  
* @type Number
* @constant
* @static
* @BB10X
* @default 10010
*/
blackberry.push.PushService.PPG_SUBSCRIBER_LIMIT_REACHED : 10010;

/**
* Result error code for when a device attempting to do a create channel has an invalid operating system version number or an invalid device model number.
* <br/><br/>
* Operations this error can occur on: createChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: Retrying the operation is not recommended since this is an unrecoverable error that is out of control of the application.
* It might make sense to communicate this issue up to the user. 
* @type Number
* @constant
* @static
* @BB10X
* @default 10011
*/
blackberry.push.PushService.INVALID_OS_VERSION_OR_DEVICE_MODEL_NUMBER : 10011;

/**
* Result error code when attempting to call destroy channel after a content provider 
* has manually suspended a user.
* <br/><br/>
* Operations this error can occur on: destroyChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: Most applications will typically want to just ignore this error code when it comes back. 
* @type Number
* @constant
* @static
* @BB10X
* @default 10012
*/
blackberry.push.PushService.CHANNEL_SUSPENDED_BY_PROVIDER : 10012;

/**
* Result error code when attempting to perform an operation and a create session has not been done beforehand.
* <br/><br/>
* Operations this error can occur on: createChannel, destroyChannel, launchApplicationOnPush
* <br/><br/>
* Recommended action: This usually means a programming error in the application.
* @type Number
* @constant
* @static
* @BB10X
* @default 10100
*/
blackberry.push.PushService.CREATE_SESSION_NOT_DONE : 10100;

/**
* Result error code when attempting to perform a create channel and a PPG URL was missing.
* <br/><br/>
* Operations this error can occur on: createChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: Specifying a value for <code>options.ppgUrl</code> in the static <code>create</code> function
* and retrying might correct the issue.
* @type Number
* @constant
* @static
* @BB10X
* @default 10102
*/
blackberry.push.PushService.MISSING_PPG_URL : 10102;

/**
* Result error code when a create channel or destroy channel operation has failed due to network issues or the push transport being down.
* <br/><br/>
* Operations this error can occur on: Create Channel, Destroy Channel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: Wait until <code>pushTransportReadyCallback</code> (one of the arguments in the static <code>create</code> function) 
* is called before retrying. This error can also occur when the user's wireless connection (e.g. Wi-Fi, Mobile Network) is 
* off or temporarily down, so it might make sense to communicate this issue up to the user to double check their wireless connection.
* @type Number
* @constant
* @static
* @BB10X
* @default 10103
*/
blackberry.push.PushService.PUSH_TRANSPORT_UNAVAILABLE : 10103;

/**
* Result error code when a certain operation is currently not supported.
* <br/><br/>
* Recommended action: This operation might not yet be implemented and so should not be performed.
* @type Number
* @constant
* @static
* @BB10X
* @default 10105
*/
blackberry.push.PushService.OPERATION_NOT_SUPPORTED : 10105;

/**
* Result error code when attempting to perform a destroy channel and a create channel has not been done beforehand.
* <br/><br/>
* Operations this error can occur on: destroyChannel
* <br/><br/>
* Recommended action: This might mean a programming error in the application.
* @type Number
* @constant
* @static
* @BB10X
* @default 10106
*/
blackberry.push.PushService.CREATE_CHANNEL_NOT_DONE : 10106;

/**
* Result error code as a result of an issue on a create channel operation obtaining a port from the PPG.
* <br/><br/>
* Operations this error can occur on: createChannel
* <br/><br/>
* Recommended action: Retrying the operation might correct the issue.
* @type Number
* @constant
* @static
* @BB10X
* @default 10107
*/
blackberry.push.PushService.MISSING_PORT_FROM_PPG : 10107;

/**
* Result error code as a result of an issue on a create channel operation obtaining a subscription return code from the PPG.
* <br/><br/>
* Operations this error can occur on: createChannel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: Retrying the operation might correct the issue.
* @type Number
* @constant
* @static
* @BB10X
* @default 10108
*/
blackberry.push.PushService.MISSING_SUBSCRIPTION_RETURN_CODE_FROM_PPG : 10108;

/**
* Result error code when no invoke target ID is specified on a create operation.
* <br/><br/>
* Operations this error can occur on: create
* <br/><br/>
* Recommended action: Specifying a value for <code>options.invokeTargetId</code> in the 
* static <code>create</code> function and retrying might correct the issue.
* @type Number
* @constant
* @static
* @BB10X
* @default 10111
*/
blackberry.push.PushService.MISSING_INVOKE_TARGET_ID : 10111;

/**
* Result error code when an underlying session already exists.
* <br/><br/>
* Operations this error can occur on: create
* <br/><br/>
* Recommended action: Check <code>options.appId</code> and <code>options.invokeTargetId</code> 
* in the static <code>create</code> function to ensure that they are valid and unique to your application.
* @type Number
* @constant
* @static
* @BB10X
* @default 10112
*/
blackberry.push.PushService.SESSION_ALREADY_EXISTS : 10112;

/**
* Result error code when the PPG is currently unavailable or an invalid PPG URL was specified.
* <br/><br/>
* Operations this error can occur on: Create Channel, Destroy Channel (only if using public/BIS PPG)
* <br/><br/>
* Recommended action: Check the value for <code>options.ppgUrl</code> in the static <code>create</code> function.
* If the value looks correct, then the issue might be that the PPG is temporarily unavailable.
* Waiting a bit and retrying the operation might correct the issue.
* @type Number
* @constant
* @static
* @BB10X
* @default 10113
*/
blackberry.push.PushService.INVALID_PPG_URL_OR_PPG_UNAVAILABLE : 10113;

/**
* Constant associated with the create channel operation.
* <br/><br/>
* Compare this constant against <code>pushTransportReadyCallback.lastFailedOperation</code> to determine
* which failed operation should be tried again.
* @type Number
* @constant
* @static
* @BB10X
* @default 1
*/
blackberry.push.PushService.CREATE_CHANNEL_OPERATION : 1;

/**
* Constant associated with the destroy channel operation.
* <br/><br/>
* Compare this constant against <code>pushTransportReadyCallback.lastFailedOperation</code> to determine
* which failed operation should be tried again.
* @type Number
* @constant
* @static
* @BB10X
* @default 2
*/
blackberry.push.PushService.DESTROY_CHANNEL_OPERATION : 2; 
