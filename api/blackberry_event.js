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
    * @signature static void blackberry.events.addEventListener("batteryStatus", yourCallbackFunction : function)
    * @description Allows you to attach a callback function to the battery status event. The callback is triggered whenever the battery level changes, the device starts to receive a charge and when the device no longer receives a charge. 
    * @callback {function} yourCallbackFunction The callback function that will be invoked on the batterystatus event
    * @callback {Number} yourCallbackFunction.level The percentage of the battery charge (0-100).
    * @callback {Boolean} yourCallbackFunction.isPlugged A boolean that represents whether or not the device is receiving a charge.
    * @BB10X
    * @example
    * &lt;script type="text/javascript"&gt;
    * 
    * function callBackFunc(level, isPlugged) {
    *   alert("Battery Charge: " + level + "%");
    * }
    *
    * blackberry.event.addEventListener("batterystatus", callBackFunc);
    * 
    * &lt;/script&gt;
    */
   batteryStatus : function(){}
}
