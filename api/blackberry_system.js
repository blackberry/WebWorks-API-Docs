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
 * @toc {System} System
 * @featureID blackberry.system
 * @namespace The System object allows you to get access to system level functions and attributes of the BlackBerry PlayBook.<br>
 * <br> The System object is static; all of its functions and properties are used directly from the object.
 * @example
 * &lt;script type="text/javascript"&gt;
 * // See if we are in coverage
 *    if (!blackberry.system.hasDataCoverage()) {
 *        alert("You are not in coverage, we will attempt to send later");
 *    }
 *
 *    // Check if we have GPS capability
 *    if (blackberry.system.hasCapability("location.gps")) {
 *        alert("This PlayBook has a GPS.");
 *    }
 * &lt;/script&gt;
 */
blackberry.system ={

    /**
     * @param {String} capability The capability being checked for.
     * @description This method will determine if the BlackBerry PlayBook or the BlackBerry Smartphone device is capable of the given service.<br>
     * <br> hasCapability() returns true if the BlackBerry device is capable of the service; false otherwise. <br>
     * <br> The supported string values for 'capability' are:
     * <br>input.keyboard.issuretype (returns if the user is currently using SureType),
     * <br>input.touch,
     * <br>media.audio.capture,
     * <br>media.video.capture,
     * <br>media.recording,
     * <br>location.gps,
     * <br>location.maps,
     * <br>storage.memorycard (checks for an EXTERNAL SD card only),
     * <br>network.bluetooth,
     * <br>network.wlan (WLAN wireless family includes 802.11, 802.11a, 802.11b, 802.11g),
     * <br>network.3gpp (3GPP wireless family includes GPRS, EDGE, UMTS, GERAN, UTRAN, and GAN),
     * <br>network.cdma (CDMA wireless family includes CDMA1x and EVDO),
     * <br>and network.iden.
     * @returns {Boolean} Returns true if the device is capable of the given service.
     * @BB50+
     * @PB10+
     * @BB10X
     * @RIPPLE
     */
    hasCapability : function(capability){},

    /**
     * @function
     * @description This method returns true so long as the device is connected to any network. This can be used in conjunction with the {@link blackberry.network} property to find out what kind of coverage it is in. On the smartphone this can be used in conjunction with {@link blackberry.system.event.onCoverageChange} to track changes.
     * @returns {Boolean} Returns true if the BlackBerry PlayBook or the BlackBerry Smartphone device has any network interface active, otherwise returns false. Always returns true on the PlayBook simulator. Please note, that on the PlayBook device, there might be a small delay of 2-3 seconds between the time the device connects until the method returns true.
     * @BB50+
     * @PB10+
     * @RIPPLE
     */
    hasDataCoverage : function(){},

    /**
     * @function
     * @description  Set the image that appears as the background of the Home screen on a BlackBerry device.
     * @param {String} uri URI path to an image file that resides in flash memory or a microSD Card.
     * @BB50+
     * @RIPPLE
     */
    setHomeScreenBackground : function(uri){},

    /**
     * @param {String} module The BlackBerry WebWorks namespace or class to check for access. For example blackberry.system, blackberry.app.
     * @description Determines the level of access to the requested module.
     * @returns {Number} The possible return values: 0 - ALLOW 1 - DENY
     * @BB50+
     * @PB10+
     * @BB10X
     * @RIPPLE
     */
    hasPermission : function(module){},

    /**
     * @description Returns whether USB MassStorage mode is active.
     * @returns {Boolean} Always returns false on the BlackBerry PlayBook since Mass Storage Mode is not supported. All memory is presented as a network share when connected by USB and is not blocked.
     * @BB50+
     * @PB10+
     * @RIPPLE
     */
    isMassStorageActive : function(){},

    /**
     * @uri
     * @BB50+
     * @PB10+
     * @description The objects in hasPermission will always be ALLOW (0). They will correspond to all the entries in the whitelist. If they are not whitelisted, they are omitted from the list. Similarly, all of the objects in hasCapability will be true, otherwise they will be omitted.
     * @returns {JSON of all the properties}
     * {
     *     "data":{
     *         "hasCapability":[
     *             "location.gps",
     *             "media.audio.capture",
     *             "media.video.capture",
     *             "media.recording",
     *             "network.bluetooth",
     *             "network.wlan"
     *         ],
     *         "softwareVersion":"QNX",
     *         "hasPermission":[
     *             "blackberry.invoke",
     *             "blackberry.system",
     *             "blackberry.app",
     *             "blackberry.app.event",
     *             "blackberry.system.event",
     *             "blackberry.ui.dialog",
     *             "blackberry.utils"
     *         ],
     *         "model":100669958,
     *         "hasDataCoverage":true,
     *         "scriptApiVersion":"1.0.0.0",
     *         "isMassStorageActive":false
     *     }
     * }
     * @example
     * &lt;html&gt;
     * &lt;head&gt;
     *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt;
     *     &lt;script type="text/javascript" src="js/jquery.form.js" &gt;&lt;/script&gt;
     *     &lt;script type="text/javascript" src="js/jquery.populate.js" &gt;&lt;/script&gt;
     *
     *     &lt;script type="text/javascript"&gt;
     *          function getSystemData(){
     *              $.ajax({
     *                  type: "get",
     *                  url: "http://localhost:8472/blackberry/system/get",
     *                  success: function(msg){
     *                      $('#mySystemDiv').populate(JSON.parse(msg).data);
     *                  }
     *               });
     *           }
     *      &lt;/script&gt;
     *
     *&lt;/head&gt;
     *&lt;body&gt;
     *
     *    &lt;input type="button" onclick="getSystemData();" value="Populate - System"/&gt;
     *    &lt;div id="mySystemDiv"&gt;
     *        Software Version: &lt;span id="softwareVersion"&gt;&lt;/span&gt;&lt;br/&gt;
     *        Mass Storage Active: &lt;span id="isMassStorageActive"&gt;&lt;/span&gt;
     *    &lt;/div&gt;
     *
     *&lt;/body&gt;
     *&lt;/html&gt;
     */
    get: function(){},

    /**
     * @type String
     * @description Returns the hardware identifier for the device.
     * @readOnly
     * @BB10X
     */
    hardwareId: null,

    /**
     * @type String
     * @description Returns the current UI language for the device. Examples of
     * possible values include, but are not limited to "fr_CA", "en_CA",
     * "en_US", and "es_ES". The format of the response conforms to
     * <a href="http://tools.ietf.org/html/bcp47">BCP47</a>.
     * @RIPPLE
     * @BB10X
     */
    language: null,

    /**
     * @type String
     * @description Returns the model number of the BlackBerry PlayBook or the BlackBerry Smartphone device.
     * @readOnly
     * @BB50+
     * @PB10+
     * @RIPPLE
     */
    model: null,

    /**
     * @type String
     * @description Returns the current country setting for the device. The
     * region determines the format of items such as the date, time, numbers,
     * and the calendar. Examples of possible values include, but are not
     * limited to "fr_CA", "en_CA", "en_US", and "es_ES". The format of the
     * response conforms to <a href="http://tools.ietf.org/html/bcp47">BCP47</a>.
     * @RIPPLE
     * @BB10X
     */
    region: null,

    /**
     * @type String
     * @description Returns the current version of the operating system, for example, 1.0.0.0.
     * @readOnly
     * @BB50+
     * @PB10+
     * @RIPPLE
     */
    scriptApiVersion:null,

    /**
     * @type String
     * @description Returns the current version of the operating system, for example, 1.0.0.0.
     * @readOnly
     * @BB50+
     * @PB10+
     * @BB10X
     * @RIPPLE
     */
    softwareVersion:null,

    /**
     * @constant
     * @type Number
     * @description Returned by hasPermission() indicating that the module requested is accessible.
     * @default 0
     * @BB50+
     * @PB10+
     * @BB10X
     * @RIPPLE
     */
    ALLOW : 0,
    /**
     * @constant
     * @type Number
     * @description Returned by hasPermission() indicating that the module is not accessible.
     * @default 1
     * @BB50+
     * @PB10+
     * @BB10X
     * @RIPPLE
     */
    DENY:1,

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
    * @callback {JSON} yourCallbackFunction.info An object with the pertinent information
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
    * @description The <b>languagechange</b> event is triggered whenever the language setting of the device is changed.
    * @callback {Function} yourCallbackFunction The callback function that will be triggered on the languagechange event.
    * @param {String} yourCallbackFunction.newLanguage The new language setting of the device. Its format conforms to <a href="http://tools.ietf.org/html/bcp47">BCP47</a>.
    * @example
    * &lt;script type="text/javascript"&gt;
    *
    * function onLanguageChange(newLanguage) {
    *   alert("The laguage has changed to " + newLanguage);
    * }
    *
    * blackberry.event.addEventListener("languagechanged", onLanguageChange);
    * &lt;/script&gt;
    */
   languagechanged: function(){},

   /**
    * @description The <b>regionChange</b> event is triggered whenever the regional setting of the device is changed.
    * @callback {Function} yourCallbackFunction The callback function that will be triggered on the regionchange event.
    * @param {String} yourCallbackFunction.newRegion The new regional setting of the device. Its format conforms to <a href="http://tools.ietf.org/html/bcp47">BCP47</a>.
    * @example
    * &lt;script type="text/javascript"&gt;
    *
    * function onRegionChange(newRegion) {
    *   alert("The current region has changed to " + newRegion);
    * }
    *
    * blackberry.event.addEventListener("regionchanged", onRegionChange);
    * &lt;/script&gt;
    */
   regionchanged: function(){}

   /**#@-*/
};
