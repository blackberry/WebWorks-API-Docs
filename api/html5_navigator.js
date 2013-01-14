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
 * @toc {System} HTML5 Navigator
 * @namespace This Navigator API provides functionality to return the online status of the browser.
*/
navigator = {

    /**
     * @description The property returns a boolean value to indicate the status online or offline
     * @readOnly
     * @type Boolean
     * @PB10+
     * @BB60+
     * @BB10X
     * @RIPPLE
     * @example
     * function supportNavigatorOnline() {
     *  if(window.navigator.onLine) {
     *    alert("onLine");
     *  } else {
     *    alert("offline");
     *  }
     * }
     */
    onLine: false

};

/**
 * @noSignature
 * @event
 * @PB10+
 * @BB60+
 * @BB10X
 * @RIPPLE
 * @description The <b>online</b> event is triggered whenever browser switches to online
 * @callback {function} CallbackFunction The callback function that will be invoked on the online event
 * @param {Boolean} useCapture A boolean that indicates whether the user wishes to initiate capture
 * @apiNotice {Warning} Only listeners added to window will be triggered. The event will not be triggered on document.

 * @example
 *
 * function onOnline() {}
 *   window.addEventListener("online", function() { alert("online")}, false);
 * }
 */
 navigator.prototype.online = function(){};

/**
 * @noSignature
 * @event
 * @PB10+
 * @BB60+
 * @BB10X
 * @RIPPLE
 * @description The <b>offline</b> event is triggered whenever browser switches to offline
 * @callback {function} CallbackFunction The callback function that will be invoked on the offline event
 * @param {Boolean} useCapture A boolean that indicates whether the user wishes to initiate capture
 * @apiNotice {Warning} Only listeners added to window will be triggered. The event will not be triggered on document.
 * @example
 *
 * function onOffline() {}
 *   window.addEventListener("offline", function() { alert("offline")}, false);
 * }
 */
navigator.prototype.offline = function(){};

