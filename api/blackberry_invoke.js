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
		 * @PB10
		 */
		invoke : function(appType, args){},
		
		/**
		 * @default 0
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Address Book.
		 */

         APP_ADDRESSBOOK : 0,
		/**
		 * @default 1
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Bluetooth Configuration.
		 */

         APP_BLUETOOTH_CONFIG : 1,
		/**
		 * @default 2
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Calculator.
		 */

         APP_CALCULATOR : 2,
		/**
		 * @default 3
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Calendar.
		 */

         APP_CALENDAR : 3,
		/**
		 * @default 4
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10
		 * @description Camera.
		 */

         APP_CAMERA : 4,
		/**
		 * @default 5
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10
		 * @description Maps.
		 */
		APP_MAPS : 5,
		/**
		 * @default 6
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Memopad.
		 */

         APP_MEMOPAD : 6,
		/**
		 * @default 7
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Messages Application.
		 */

         APP_MESSAGES : 7,
		/**
		 * @default 8
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Phone.
		 */

         APP_PHONE : 8,
		/**
		 * @default 9
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Search.
		 */

         APP_SEARCH : 9,
		/**
		 * @default 10
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Tasks.
		 */
		APP_TASKS : 10,
		/**
		 * @default 11
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10
		 * @description Browser.
		 */
		APP_BROWSER : 11,
		/**
		 * @default 12
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke a Java Application.
		 */
		APP_JAVA : 12,
		/**
		 * @default 13
		 * @type Number
		 * @constant
		 * @PB10
		 * @description Music Application.
		 */
		APP_MUSIC : 13,
		/**
		 * @default 14
		 * @type Number
		 * @constant
		 * @PB10
		 * @description Photos Application.
		 */
		APP_PHOTOS : 14,
		/**
		 * @default 15
		 * @type Number
		 * @constant
		 * @PB10
		 * @description Videos Application.
		 */
		APP_VIDEOS : 15,
		/**
		 * @default 16
		 * @type Number
		 * @constant
		 * @PB10
		 * @description App World Application.
		 */
		APP_APPWORLD : 16
}