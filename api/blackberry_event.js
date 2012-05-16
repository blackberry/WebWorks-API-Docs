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
 * @namespace The event Object contains functions for dealing with specific events.
 * @toc {Event} Event
 * @example
 * &lt;html&gt;
 * &lt;head&gt;
 * &lt;title&gt;WebWorks Pause Example&lt;/title&gt;
 * 
 * &lt;script type="text/javascript" charset="utf-8" src="webworks.js"&gt;&lt;/script&gt;
 * &lt;script type="text/javascript" charset="utf-8"&gt;
 * 
 * // Call onWebworksReady when WebWorks is loaded.
 * //
 * function onLoad() {
 *    document.addEventListener("webworksready", onWebworksReady, false);
 * }
 * 
 * // WebWorks is loaded and it is now safe to make calls WebWorks API
 * //
 * function onWebworksReady() {
 *    blackberry.event.addEventListener("pause", onPause);
 * }
 * 
 * // Handle the pause event
 * //
 * function onPause() {
 * }
 * 
 * &lt;/script&gt;
 * &lt;/head&gt;
 * &lt;body onload="onLoad()"&gt;
 * &lt;/body&gt;
 * &lt;/html&gt;
 */
blackberry.event = {

   /**#@+
    * @noSignature
    * @event
    * @BB10X
    * @description This event is fired by the system. If you want to listen to the event you can do so using the {@link blackberry.event.addEventListener} function and remove the listener using the {@link blackberry.event.removeEventListener} function. <br/>
    */
  
   /**
    * @description The <b>batterycritical</b> event is triggered whenever the battery level changes to the value lower than 5%.
    * @callback {function} yourCallbackFunction The callback function that will be invoked on the batterycritical event
    * @callback {JSON} yourCallbackFunction.info An object  the pertinent information
    * @callback {Number} yourCallbackFunction.info.level The percentage of the battery charge (0-100).
    * @callback {Boolean} yourCallbackFunction.info.isPlugged A boolean that represents whether or not the device is receiving a charge.
    * @example
    * &lt;script type="text/javascript"&gt;
    *
    * function onBatteryCritical(info) {
    *   alert("The battery level is critical: " + info.level + (info.isPlugged?".":" and will shutdown soon. Save your work or connect device to a charging source."));
    * }
    *
    * blackberry.event.addEventListener("batterycritical", onBatteryCritical);
    *
    * &lt;/script&gt;
    */
   batterycritical : function(){},

   /**
    * @description The <b>batterylow</b> event is triggered whenever the battery level changes to the value lower than 15%.
    * @callback {function} yourCallbackFunction The callback function that will be invoked on the batterylow event
    * @callback {JSON} yourCallbackFunction.info An object  the pertinent information
    * @callback {Number} yourCallbackFunction.info.level The percentage of the battery charge (0-100).
    * @callback {Boolean} yourCallbackFunction.info.isPlugged A boolean that represents whether or not the device is receiving a charge.
    * @example
    * &lt;script type="text/javascript"&gt;
    *
    * function onBatteryLow(info) {
    *   alert("The battery level is low: " + info.level + (info.isPlugged?".":". Consider connecting your device to a charging source."));
    * }
    *
    * blackberry.event.addEventListener("batterylow", onBatteryLow);
    *
    * &lt;/script&gt;
    */
   batterylow : function(){},

   /**
    * @description The <b>batterystatus</b> event is triggered whenever the: <ul><li>battery level changes</li><li>device starts to receive a charge</li><li>device stops receiving a charge</li></ul>
    * @callback {function} yourCallbackFunction The callback function that will be invoked on the batterystatus event
    * @callback {JSON} yourCallbackFunction.info An object  the pertinent information
    * @callback {Number} yourCallbackFunction.info.level The percentage of the battery charge (0-100).
    * @callback {Boolean} yourCallbackFunction.info.isPlugged A boolean that represents whether or not the device is receiving a charge.
    * @example
    * &lt;script type="text/javascript"&gt;
    * 
    * function onBatteryStatusChange(info) {
    *   alert("The playbook " + info.isPlugged?"is ":"is not " + "plugged in with " + info.level + "% battery remaining");
    * }
    *
    * blackberry.event.addEventListener("batterystatus", onBatteryStatusChange);
    *
    * &lt;/script&gt;
    */
   batterystatus : function(){},

   /**
    * @description The <b>pause</b> event is triggered whenever the the application is put into the background.
    * @callback {function} yourCallbackFunction The callback function that will be invoked on the pause event
    * @example
    * &lt;script type="text/javascript"&gt;
    * 
    * function onPause() {
    *   alert("The app is about to be paused.");
    * }
    *
    * blackberry.event.addEventListener("pause", onPause);
    *
    * &lt;/script&gt;
    */
   pause : function(){},

   /**
    * @description The <b>resume</b> event is triggered whenever the the application is retrieved from the background.
    * @callback {function} yourCallbackFunction The callback function that will be invoked on the resume event
    * @example
    * &lt;script type="text/javascript"&gt;
    * 
    * function onResume() {
    *   alert("The app is resumed.");
    * }
    *
    * blackberry.event.addEventListener("resume", onResume);
    *
    * &lt;/script&gt;
    */
   resume : function(){},

   /**#@-*/

   /**
    * @description Allows you to attach a callback function to an event. You can attach multuple callback functions to a single event.
    * @param {String} eventName The event you want to attach the callback function to.
    * @callback {function} yourCallbackFunction The callback function that will execute when the event occurs.
    * @BB10X 
    */
   addEventListener : function(){},

   /**
    * @description Allows you to remove a callback function from an event.
    * @param {String} eventName The event you want to remove the callback function from.
    * @callback {function} yourCallbackFunction The callback function that will be removed from the event.
    * @BB10X 
    */
   removeEventListener : function(){}
}
