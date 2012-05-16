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
 *    // Make sure "blackberry.app" is declared in config.xml if you intend to use the "pause" event
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
