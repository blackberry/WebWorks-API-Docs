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
 * @featureID blackberry.event
 */
blackberry.event = {

   /**
    * @event
    * @signature static void blackberry.events.addEventListener("batterystatus", yourCallbackFunction : function)
    * @description Allows you to attach a callback function to the <b>batterystatus</b> event. The callback is triggered whenever the: <ul><li>battery level changes</li><li>device starts to receive a charge</li><li>device stops receiving a charge</li></ul>
    * @callback {function} yourCallbackFunction The callback function that will be invoked on the batterystatus event
    * @callback {Number} yourCallbackFunction.level The percentage of the battery charge (0-100).
    * @callback {Boolean} yourCallbackFunction.isPlugged A boolean that represents whether or not the device is receiving a charge.
    * @BB10X
    * @example
    * &lt;script type="text/javascript"&gt;
    * 
    * function onBatteryStatusChange(level, isPlugged) {
    *   alert("Battery Charge: " + level + "%");
    * }
    *
    * blackberry.event.addEventListener("batterystatus", onBatteryStatusChange);
    * 
    * &lt;/script&gt;
    */
   batterystatus : function(){},

   /**
    * @event
    * @signature static void blackberry.events.addEventListener("batterylow", yourCallbackFunction : function)
    * @description Allows you to attach a listener to the <b>batterylow</b> event which is triggered whenever the battery level reaches the low threshold. 
    * @callback {function} yourCallbackFunction The callback function that will be invoked on the batterylow event
    * @callback {Number} yourCallbackFunction.level The percentage of the battery charge (0-100).
    * @callback {Boolean} yourCallbackFunction.isPlugged A boolean that represents whether or not the device is receiving a charge.
    * @BB10X
    * @example
    * &lt;script type="text/javascript"&gt;
    * 
    * function onBatteryLow(level, isPlugged) {
    *   alert("Your Battery Charge is low!");
    * }
    *
    * blackberry.event.addEventListener("batterylow", onBatteryLow);
    * 
    * &lt;/script&gt;
    */
   batterylow : function(){},

   /**
    * @event
    * @signature static void blackberry.events.addEventListener("batterycritical", yourCallbackFunction : function)
    * @description Allows you to attach a listener to the <b>batterycritical</b> event which is triggered whenever the battery level reaches the critical threshold. 
    * @callback {function} yourCallbackFunction The callback function that will be invoked on the batterycritical event
    * @callback {Number} yourCallbackFunction.level The percentage of the battery charge (0-100).
    * @callback {Boolean} yourCallbackFunction.isPlugged A boolean that represents whether or not the device is receiving a charge.
    * @BB10X
    * @example
    * &lt;script type="text/javascript"&gt;
    * 
    * function onBatteryCritical(level, isPlugged) {
    *   alert("Your Battery Charge is critically low!");
    * }
    *
    * blackberry.event.addEventListener("batterycritical", onBatteryCritical);
    * 
    * &lt;/script&gt;
    */
   batterycritical : function(){},

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
