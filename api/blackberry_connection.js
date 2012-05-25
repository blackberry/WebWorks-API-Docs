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
 * @namespace The Connection object gives access to the device's cellular and wifi connection information.
 * @toc {Connection} Connection
 * @featureID blackberry.connection
 */
blackberry.connection = {

        /**
         * @description The type of network connection that is being used by the application.
         * @type Number
         * @readOnly
         * @BB10X
         */
        type : 0,

       /**#@+
        * @noSignature
        * @event
        * @BB10X
        * @description This event is fired by the system. If you want to listen to the event you can do so using the {@link blackberry.event.addEventListener} function and remove the listener using the {@link blackberry.event.removeEventListener} function. <br/>
        */
        
       /**
        * @description The <b>connectionchange</b> event is triggered whenever the network connection type changes.
        * @callback {function} yourCallbackFunction The callback function that will be invoked on the connectionchange event.
        * @callback {Object} yourCallbackFunction.info An object with the pertinent information.
        * @callback {Number} yourCallbackFunction.info.oldType The network connection type prior to the event.
        * @callback {Number} yourCallbackFunction.info.newType The new network connection type.
        * @example
        * &lt;script type="text/javascript"&gt;
        *
        * function onChange(info) {
        *   alert("The network connection type used to be: " + info.oldType + " and is now: " + info.newType);
        * }
        *
        * blackberry.event.addEventListener("connectionchange", onChange);
        *
        * &lt;/script&gt;
        */
       connectionchange : function(){},

        /**#@-*/

        /**
         * @type Number
         * @constant
         * @BB10X
         * @description BlackBerry Bridge connection
         */

         BB : 6,
        /**
         * @type Number
         * @constant
         * @BB10X
         * @description Bluetooth tethering connection
         */

         BLUETOOTH_DUN : 3,
        /**
         * @type Number
         * @constant
         * @BB10X
         * @description Cellular connection
         */

         CELLULAR : 7,
        /**
         * @type Number
         * @constant
         * @BB10X
         * @description Wired ethernet connection
         */

         ETHERNET : 1,
        /**
         * @type Number
         * @constant
         * @BB10X
         * @description No connection
         */

         NONE : 8,
        /**
         * @type Number
         * @constant
         * @BB10X
         * @description Unknown connection
         */
        UNKNOWN : 0,
        /**
         * @type Number
         * @constant
         * @BB10X
         * @description USB connection
         */

         USB : 4,
        /**
         * @type Number
         * @constant
         * @BB10X
         * @description VPN connection
         */

         VPN : 5,
        /**
         * @type Number
         * @constant
         * @BB10X
         * @description Wi-fi connection
         */

         WIFI : 2
}
