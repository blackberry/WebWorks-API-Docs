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
 * @toc {System} Connection
 * @featureID blackberry.connection
 */
blackberry.connection = {

        /**
         * @description The type of network connection that is being used by the application. Note that CELL_4G is always returned for cellular connection.
         * @type String
         * @readOnly
         * @BB10X
         */
        type : "",

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
         * @type String
         * @constant
         * @BB10X
         * @description BlackBerry Bridge connection
         */

         BB : "rim-bb",
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Bluetooth tethering connection
         */

         BLUETOOTH_DUN : "bluetooth_dun",
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Cellular 2G connection
         */

         CELL_2G : "2g",
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Cellular 3G connection
         */

         CELL_3G : "3g",
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Cellular 4G connection
         */

         CELL_4G : "4g",
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Wired ethernet connection
         */

         ETHERNET : "ethernet",
        /**
         * @type String
         * @constant
         * @BB10X
         * @description No connection
         */

         NONE : "none",
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Unknown connection
         */
        UNKNOWN : "unknown",
        /**
         * @type String
         * @constant
         * @BB10X
         * @description USB connection
         */

         USB : "usb",
        /**
         * @type String
         * @constant
         * @BB10X
         * @description VPN connection
         */

         VPN : "vpn",
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Wi-fi connection
         */

         WIFI : "wifi"
};
