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
 *	if (!blackberry.system.hasDataCoverage()) {
 *		alert("You are not in coverage, we will attempt to send later");
 *	}
 *
 *	// Check if we have GPS capability
 *	if (blackberry.system.hasCapability("location.gps")) {
 *		alert("This PlayBook has a GPS.");
 *	}
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
		 * @RIPPLE
		 */
		hasCapability : function(capability){},

		/**
         * @function
		 * @description Returns true if the device is in coverage, otherwise returns false. This can be used in conjunction with the blackberry.network property to find out what kind of coverage it is in.
		 * @returns {Boolean} Returns true if the BlackBerry PlayBook or the BlackBerry Smartphone device has any network interface active.
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
		 * @description Returns the model number of the BlackBerry PlayBook or the BlackBerry Smartphone device.
		 * @readOnly
		 * @BB50+
		 * @PB10+
		 * @RIPPLE
		 */
		model: null,

		/**
		 * @type String
		 * @description Returns the current version of the WebWorks library being used.
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
		 * @RIPPLE
		 */
		DENY:1
};
