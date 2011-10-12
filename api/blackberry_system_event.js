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
* <div><p>
*       The System Object is static; all of its functions and properties are used directly from the object.
*     </p></div>
* @toc {System} System Event
* @featureID blackberry.system.event
* @BB50+
* @RIPPLE
* @namespace The System Event object allows you to get access to events triggered by system events on the BlackBerry device.
* @example
* // This example is for BlackBerry OS 5.0+
* &lt;html&gt;
* &lt;head&gt;
* &lt;script type="text/javascript" src="jquery.min.js"&gt;&lt;/script&gt;
* &lt;script type="text/javascript"&gt;
* $.support.cors = true; // this is needed in BB5.0 for jQuery to support cross-domain request
*
* function asyncCall(method, args, callback) {
*   $.ajax({
*      url : "http://localhost:8472/blackberry/system/event/" + method,
*      data : args,
*      type : "GET",
*      success : callback,
*      async : true,
*      error : function(jqXHR, textStatus, errorThrown) {
*        alert('error:' + textStatus + ' errorThrown:' + errorThrown);
*      }
*   });
* }
*
* function poll(method, args, callback) {
*   asyncCall(method, args, function(response) {
*      if (callback(response)) {
*         poll(method, args, callback);
*      }
*   });
* }
*
* function getCallback(callback) {
*   return function(response) {
*      var result = JSON.parse(response);
*
*      if (result.code < 0) {
*         return false;
*      }
*
*      if (callback) {
*         callback();
*      }
*
*      return !!callback;
*   };
* }
*
* function coverageChanged() {
*   $("#status").html((new Date()).toLocaleString() + " coverage changed!");
* }
*
* function volumeUpKeyPressed() {
*   $("#status").html((new Date()).toLocaleString() + " volume up key pressed!");
* }
* &lt;/script&gt;
* &lt;/head&gt;
* &lt;body&gt;
* &lt;input type="button" id="setCoverageChange" value="Listen coverage change"&gt;&lt;br&gt;&lt;br&gt;
* &lt;input type="button" id="unsetCoverageChange" value="Stop listen coverage change"&gt;&lt;br&gt;&lt;br&gt;
* &lt;input type="button" id="setVolumeUp" value="Listen volume up key press"&gt;&lt;br&gt;&lt;br&gt;
* &lt;input type="button" id="unsetVolumeUp" value="Stop listen volume up key press"&gt;&lt;br&gt;&lt;br&gt;
* &lt;div id="status"&gt;&lt;/div&gt;
* &lt;script type="text/javascript"&gt;
* $("#setCoverageChange").click(function() {
*   var callback = coverageChanged;
*   poll("onCoverageChange", { "monitor" : true }, getCallback(callback));
* });
* $("#unsetCoverageChange").click(function(){
*   var callback = null;
*   poll("onCoverageChange", { "monitor" : false }, getCallback(callback));
* });
* $("#setVolumeUp").click(function() {
*   var callback = volumeUpKeyPressed;
*   poll("onHardwareKey", { "key" : blackberry.system.event.KEY_VOLUMEUP, "monitor" : true }, getCallback(callback));
* });
* $("#unsetVolumeUp").click(function(){
*   var callback = null;
*   poll("onHardwareKey", { "key" : blackberry.system.event.KEY_VOLUMEUP, "monitor" : false }, getCallback(callback));
* });
* &lt;/script&gt;
* &lt;/body&gt;
* &lt;/html&gt;
*/
blackberry.system.event = { };

/**
* Constant representing the back button.
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.system.event.KEY_BACK = 0;

/**
* Constant representing the menu button.
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.system.event.KEY_MENU = 1;

/**
* Constant representing the first convenience button.
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.system.event.KEY_CONVENIENCE_1 = 2;

/**
* Constant representing the second convenience button.
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.system.event.KEY_CONVENIENCE_2 = 3;

/**
* Constant representing the call button.
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.system.event.KEY_STARTCALL = 4;

/**
* Constant representing the end call button.
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.system.event.KEY_ENDCALL = 5;

/**
* Constant representing the volume down button.
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.system.event.KEY_VOLUMEDOWN = 6;

/**
* Constant representing the volume up button.
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.system.event.KEY_VOLUMEUP = 7;

/**
* @name blackberry.system.event.onHardwareKey^2
* @description Assigns a listener for the click of one of the hardware buttons on the device.
* @param {Number} key Hardware key to listen for.  A list of constants allowed for these keys is shown above.
* @callback {function} onSystemEvent Function to be called when the key is clicked - this function takes no parameters and no return value is required.  If you attempt to subscribe more than one callback function to a particular key, only the newest callback will be used when the key is pressed.  To remove the callback simply call the onHardwareKey with null as the callback parameter.
* @BB50+
* @function
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   function trapForBackKey() {
*     blackberry.system.event.onHardwareKey(blackberry.system.event.KEY_BACK, handleBack);
*   }
*
*   function handleBack() {
*     alert(&quot;handle back button&quot;);
*   }
* &lt;&sol;script&gt;
*/
/**
* @name blackberry.system.event.onHardwareKey
* @description Get notification when one of the hardware buttons on the device is clicked.<br><br>To invoke this API, issue an <b>asychronous</b> HTTP request.<br><br>An HTTP response will be returned when the specified key is clicked. When the response is received, it is the caller's responsibility to perform necessary actions (e.g. invoke a callback function). Once that is done, a new HTTP request should be issued again to listen to further clicks to the key.
* @param {Number} key Hardware key to listen for. A list of constants allowed for these keys is shown above.
* @param {Boolean} monitor Flag to indicate whether the caller wants to get notifications for clicks to the hardware buttons or not. Pass true to start monitoring, or false to stop monitoring.
* @returns {Object Literal}
* {
*    "data" : {
*       "key" : &lt;key that was passed&gt;,
*       "monitor" : &lt;the flag that was passed&gt;
*    }
* }
* @BB50+
* @RIPPLE
* @uri
* @function
*/
blackberry.system.event.onHardwareKey = function(key,onSystemEvent) { };

/**
* @name blackberry.system.event.onCoverageChange^2
* @description Assigns a listener for when the coverage status changes.
* @callback {function} onSystemEvent Function to be called when coverage changes.  Only one function can be assigned to this event. To unregister the callback, call the onCoverageChange method and pass in null for the callback parameter.
* @BB50+
* @RIPPLE
* @function
*/
/**
* @name blackberry.system.event.onCoverageChange
* @description Get notification whenever the coverage status changes.<br><br>To invoke this API, issue an <b>asychronous</b> HTTP request.<br><br>An HTTP response will be returned when there is a coverage change. When the response is received, it is the caller's responsibility to perform necessary actions (e.g. invoke a callback function). Once that is done, a new HTTP request should be issued again to listen to further coverage changes.
* @param {Boolean} monitor Flag to indicate whether the caller wants to get notifications for coverage status changes or not. Pass true to start monitoring, or false to stop monitoring.
* @returns {Object Literal}
* {
*    "data" : {
*       "monitor" : &lt;the flag that was passed&gt;
*    }
* }
* @BB50+
* @uri
* @function
*/
blackberry.system.event.onCoverageChange = function(onSystemEvent) { };

/**
 * @function
 * @description Assigns a listener for when the battery level changes.
 * Battery level is a percentage value.
 * @callback {function} onBatteryLevelChange Function to be called when the battery level changes. The level is passed as its only argument.
 * @callback {Number} onBatteryLevelChange.level battery level of the device ranging from 0 to 100
 * @PB10
 * @RIPPLE
 * @example
 * &lt;script type="text/javascript"&gt;
 *  function onBatteryLevelChange(level) {
 *    alert("Battery Level: " + level);
 *  }
 *
 *  function notifyOnBatteryLevelChange(batteryLevelChangeCb) {
 *    blackberry.system.event.deviceBatteryLevelChange(batteryLevelChangeCb);
 *  }
 *
 *  notifyOnBatteryLevelChange(onBatteryLevelChange);
 * &lt;/script&gt;
 */
blackberry.system.event.deviceBatteryLevelChange =  function(onBatteryLevelChange){};

/**
 * @function
 * @description Assigns a listener for when the battery state changes.
 * <p/>
 * States are defined as
 * <br>UNKNOWN		= 0;
 * <br>FULL		= 1;
 * <br>CHARGING 	= 2;
 * <br>UNPLUGGED	= 3;
 * @callback {function} onBatteryStateChange Function to be called when the battery charge state changes. The new state is passed as its only argument.
 * @callback {Number} onBatteryStateChange.state battery state of the device
 * @PB10
 * @RIPPLE
 */
blackberry.system.event.deviceBatteryStateChange = function(onBatteryStateChange){};
