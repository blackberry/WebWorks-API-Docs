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
* @name blackberry.system.event.onHardwareKey
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
blackberry.system.event.onHardwareKey = function(key,onSystemEvent) { };

/**
* @name blackberry.system.event.onCoverageChange
* @description Assigns a listener for when the coverage status changes.
* @callback {function} onSystemEvent Function to be called when coverage changes.  Only one function can be assigned to this event. To unregister the callback, call the onCoverageChange method and pass in null for the callback parameter.
* @BB50+
* @RIPPLE
* @function
*/
blackberry.system.event.onCoverageChange = function(onSystemEvent) { };

/**
 * @function
 * @description Assigns a listener for when the battery level changes.
 * Battery level is a percentage value.
 * @callback {function} onBatteryLevelChange Function to be called when the battery level changes. The level is passed as its only argument.
 * @callback {Number} onBatteryLevelChange.level battery level of the device ranging from 0 to 100
 * @PB10+
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
 * @PB10+
 * @RIPPLE
 */
blackberry.system.event.deviceBatteryStateChange = function(onBatteryStateChange){};
