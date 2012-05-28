/*
* Copyright 2010-2011 Research In Motion Limited.
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
 * @namespace The Invoke object contains methods that interact with other applications on a BlackBerry PlayBook. 
 * <p/>
 * The invoke() method on the invoke object allows you to pass arguments to the target application. </br>The types of arguments can be one of: {@link blackberry.invoke.AddressBookArguments}, {@link blackberry.invoke.BrowserArguments},
 {@link blackberry.invoke.CalendarArguments}, {@link blackberry.invoke.CameraArguments}, {@link blackberry.invoke.JavaArguments}, {@link blackberry.invoke.MapsArguments}, {@link blackberry.invoke.MemoArguments}, {@link blackberry.invoke.MessageArguments},
 {@link blackberry.invoke.PhoneArguments}, {@link blackberry.invoke.SearchArguments}, and {@link blackberry.invoke.TaskArguments}.
 * @toc {Invoke} Invoke
 * @featureID blackberry.invoke
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * function startCameraApp() {
 *              var args = new blackberry.invoke.CameraArguments();
 *              args.view = blackberry.invoke.CameraArguments.VIEW_RECORDER;
 *
 *              blackberry.invoke.invoke(blackberry.invoke.APP_CAMERA, args);
 * }
 *  
 * startCameraApp();
 * &lt;/script&gt;
 */
blackberry.invoke = {
                
		/**

		 * @description Invokes another application on the BlackBerry Playbook.
		 * @param {Number} appType an integer value representing the type of application to launch. Must be one of the 'APP_*' constants.
		 * @param {Object} [args] An arguments object specifying information for the application being invoked.
		 * @throws {Exception} If values supplied are not correct. 
		 * @BB50+
		 * @PB10+
         * @BB10X
		 * @RIPPLE
		 */
		invoke : function(appType, args){},

       /**#@+
        * @noSignature
        * @event
        * @BB10X
        * @description This event is fired by the system. If you want to listen to the event you can do so using the {@link blackberry.event.addEventListener} function and remove the listener using the {@link blackberry.event.removeEventListener} function. <br/>
        */

       /**
        * @description The <b>invoked</b> event is triggered by the system when the application is invoked by another application.
        * @callback {function} yourCallbackFunction The callback function that will be invoked on the invoked event
        * @callback {JSON} yourCallbackFunction.info An object  the pertinent information
        * @callback {String} yourCallbackFunction.info.source [optional] Identifier of invocation target (as stated in its BAR manifest) to which the receiver can send results. Omitting the source attribute implies that the sender does NOT support results.
        * @callback {String} yourCallbackFunction.info.target [optional] Identifier of target (as stated in its BAR manifest) to which invocation should be delivered. If the target is supplied then brokering is bypassed and attempt is made to invoke the specified target.
        * @callback {String} yourCallbackFunction.info.action [optional] Identifier of action to be performed by target. Omitting action implies brokering should apply to any action supported for the specified type or that the target should infer the action.
        * @callback {String} yourCallbackFunction.info.type [optional] MIME type of data to be acted on. If the mime type is not specified then Invocation Framework would attempt to infer the mime type from the given URI. If the mime type can not be inferred or URI field is empty then invocation will be rejected.
        * @callback {String} yourCallbackFunction.info.uri [optional] URI pointing to invocation data. If no URI is provided then this implies the data://local URI indicating that the invocation data is provided in-band in the data field of the invocation message.
        * @callback {String} yourCallbackFunction.info.data [optional] Data passed to target. Omitting the data implies that the action-type are sufficient to carry out the invocation. Note that target invocation allows passing arbitrary binary data that will be encoded into Base64 encoded string.        
        * @example
        * &lt;script type="text/javascript"&gt;
        *
        * function onInvoked(onInvokedInfo) {
        *    if(onInvokedInfo.source) {
        *        console.log("Source: " + onInvokedInfo.source);
        *    }
        *    if(onInvokedInfo.target) {
        *        console.log("Target(me): " + onInvokedInfo.target);
        *    }
        *    if(onInvokedInfo.action) {
        *        console.log("Action: " + onInvokedInfo.action);
        *    }
        *    if(onInvokedInfo.data) {
        *        console.log("Data: " + onInvokedInfo.data);
        *        //the data comes in as a base64 string you can convert it using atob(...)
        *        //note that atob will fail if you are being passed unicode strings
        *        console.log("Data: " + atob(onInvokedInfo.data));
        *    }
        * }
        *
        * blackberry.event.addEventListener("invoked", onInvoked);
        *
        * &lt;/script&gt;
        */
       invoked : function(){},

        /**#@-*/
		
		/**
		 * @default 0
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Address Book.
		 */

         APP_ADDRESSBOOK : 0,
		/**
		 * @default 1
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Bluetooth Configuration.
		 */

         APP_BLUETOOTH_CONFIG : 1,
		/**
		 * @default 2
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Calculator.
		 */

         APP_CALCULATOR : 2,
		/**
		 * @default 3
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Calendar.
		 */

         APP_CALENDAR : 3,
		/**
		 * @default 4
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10+
		 * @RIPPLE
		 * @description Camera.
		 */

         APP_CAMERA : 4,
		/**
		 * @default 5
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10+
		 * @RIPPLE
		 * @description Maps.
		 */
		APP_MAPS : 5,
		/**
		 * @default 6
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Memopad.
		 */

         APP_MEMOPAD : 6,
		/**
		 * @default 7
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Messages Application.
		 */

         APP_MESSAGES : 7,
		/**
		 * @default 8
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Phone.
		 */

         APP_PHONE : 8,
		/**
		 * @default 9
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Search.
		 */

         APP_SEARCH : 9,
		/**
		 * @default 10
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Tasks.
		 */
		APP_TASKS : 10,
		/**
		 * @default 11
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10+
         * @BB10X
		 * @RIPPLE
		 * @description Browser.
		 */
		APP_BROWSER : 11,
		/**
		 * @default 12
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke a Java Application.
		 */
		APP_JAVA : 12,
		/**
		 * @default 13
		 * @type Number
		 * @constant
		 * @PB10+
		 * @RIPPLE
		 * @description Music Application.
		 */
		APP_MUSIC : 13,
		/**
		 * @default 14
		 * @type Number
		 * @constant
		 * @PB10+
		 * @RIPPLE
		 * @description Photos Application.
		 */
		APP_PHOTOS : 14,
		/**
		 * @default 15
		 * @type Number
		 * @constant
		 * @PB10+
		 * @RIPPLE
		 * @description Videos Application.
		 */
		APP_VIDEOS : 15,
		/**
		 * @default 16
		 * @type Number
		 * @constant
		 * @PB10+
		 * @RIPPLE
		 * @description App World Application.
		 */
		APP_APPWORLD : 16
}
