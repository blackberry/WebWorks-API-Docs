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
 * @class The Geolocation object is used by scripts to programmatically determine the location information associated with the hosting device. The location information is acquired by applying a user-agent specific algorithm, creating a Position object, and populating that object with appropriate data accordingly.
 * @toc {GPS} HTML5 Geolocation
 * @notice {Warning (BlackBerry 5.0 Notice):}
 * Geolocation support on BlackBerry OS 5.0 is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 * @learns {Sample - Using HTML5 Geolocation} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Using-HTML5-Geolocation-in-your-Web-or-BlackBerry-WebWorks/ta-p/630406 Sample that demonstrates how to use the HTML5 Geolocation API [BlackBerry Developer Resource Center].
 * @learns {How To - Enable GPS on PlayBook} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/How-To-Enable-GPS-capability-in-BlackBerry-WebWorks-for-Tablet/ta-p/1035855 How to enable GPS capability when using the BlackBerry WebWorks SDK for Tablet OS [BlackBerry Developer Resource Center].
 */
navigator.geolocation = {

        /**
         * @description  Attempt to obtain the current location of the device.
         * @callback {function} positionCallback This method is called if the attempt is successful i.e. the handleEvent operation must be called on the {@link Position} object
         * @callback {Position} positionCallback.position Object that contains the position that was just received
         * @callback {function} [positionErrorCallback] This optional method is called if the attempt fails, the errorCallback must be invoked with a new {@link PositionError} object, reflecting the reason for the failure.
         * @callback {PositionError} [positionErrorCallback.error] Error call if there is an error.
         * @param {PositionOptions} [options] return {@link PositionOptions} of a current position.
         * @BB50+
         * @PB10
         * @example
         * <b>To get current position</b>
         *
         *  var startPos;
         *  navigator.geolocation.getCurrentPosition(function(position) {
         *     startPos = position;
         *     latitude = startPos.coords.latitude;
         *     longitude = startPos.coords.longitude;
         *  });
         *
         * <b>Handle Errors</b>
         *
         *  var startPos;
         *  navigator.geolocation.getCurrentPosition(
         *      function(position) {
         *         startPos = position;
         *         latitude = startPos.coords.latitude;
         *         longitude = startPos.coords.longitude;
         *      },
         *      function(error) {
         *          switch(error.code) {
         *               case PositionError.PERMISSION_DENIED :
         *                 alert("Error. PERMISSION_DENIED");
         *                 break;
         *               case PositionError.POSITION_UNAVAILABLE:
         *                 alert("Error. POSITION_UNAVAILABLE");
         *                 break;
         *               case PositionError.TIMEOUT:
         *                 alert("Error. TIMEOUT");
         *                 break;
         *               default:
         *                 alert("unknow error code");
         *           }
         *      }
         * );
         */
        getCurrentPosition : function(PositionCallback, PositionErrorCallback, positionOptions) {},


        /**
         * @description  Like {@link getCurrentPosition} continue to monitor the position of the device and invoke the appropriate callback every time this position changes. It continues until the clearWatch method is called with the corresponding identifier.
         * @callback {function} positionCallback This method is called if the attempt is successful i.e. the handleEvent operation must be called on the {@link Position} object
         * @callback {Position} positionCallback.position Object that contains the position that was just received
         * @callback {function} [positionErrorCallback] This optional method is called if the attempt fails, the errorCallback must be invoked with a new {@link PositionError} object, reflecting the reason for the failure.
         * @callback {PositionError} [positionErrorCallback.error] Error call if there is an error.
         * @param {PositionOptions} [options] Return {@link PositionOptions} of a watch position.
         * @returns {Long} Return a watchId so that it can be use in function {@link navigator.geolocation.clearWatch}.
         * @BB50+
         * @PB10
         */
        watchPosition : function(PositionCallback, PositionErrorCallback, positionOptions) {},


        /**
         * @description  Like {@link getCurrentPosition} continue to monitor the position of the device and invoke the appropriate callback every time this position changes. It continues until the clearWatch method is called with the corresponding identifier.
         * @param {long} watchId A unique identifier return from {@link navigator.geolocation.watchPosition}.
         * @PB10
         * @BB50+
         */
        clearWatch : function(watchId) {}
};

/**
 * @namespace The Position is the container for the geolocation information.
 * @toc {GPS} HTML5 Position
 * @notice {Warning (BlackBerry 5.0 Notice):}
 * Geolocation support on BlackBerry OS 5.0 is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 * @learns {Sample - Using HTML5 Geolocation} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Using-HTML5-Geolocation-in-your-Web-or-BlackBerry-WebWorks/ta-p/630406 Sample that demonstrates how to use the HTML5 Geolocation API [BlackBerry Developer Resource Center].
 * @learns {How To - Enable GPS on PlayBook} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/How-To-Enable-GPS-capability-in-BlackBerry-WebWorks-for-Tablet/ta-p/1035855 How to enable GPS capability when using the BlackBerry WebWorks SDK for Tablet OS [BlackBerry Developer Resource Center].
 */
Position = {};

    /**
     * @description The coords attribute contains a set of geographic coordinates together with their associated accuracy, as well as a set of other optional attributes such as altitude and speed.
     * @BB50+
     * @PB10
     * @type Coordinates
     */
    Position.prototype.coords = undefined;

    /**
     * @description The timestamp attribute represents the time when the Position object was acquired and is represented as a Date.
     * @BB50+
     * @PB10
     * @type Date
     */
    Position.prototype.timestamp = undefined;

/**
 * @namespace The PositionError is reflecting the reason for the failure.
 * @toc {GPS} HTML5 PositionError
 * @notice {Warning (BlackBerry 5.0 Notice):}
 * Geolocation support on BlackBerry OS 5.0 is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 * @learns {Sample - Using HTML5 Geolocation} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Using-HTML5-Geolocation-in-your-Web-or-BlackBerry-WebWorks/ta-p/630406 Sample that demonstrates how to use the HTML5 Geolocation API [BlackBerry Developer Resource Center].
 * @learns {How To - Enable GPS on PlayBook} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/How-To-Enable-GPS-capability-in-BlackBerry-WebWorks-for-Tablet/ta-p/1035855 How to enable GPS capability when using the BlackBerry WebWorks SDK for Tablet OS [BlackBerry Developer Resource Center].
 */
PositionError  = {

    /**
     * @description The location acquisition process failed because the document does not have permission to use the Geolocation API.
     * @constant
     * @default 1
     * @BB50+
     * @PB10
     * @type Number
     */
    PERMISSION_DENIED : 1,

    /**
     * @description The position of the device could not be determined.
     * @constant
     * @default 2
     * @BB50+
     * @PB10
     * @type Number
     */
    POSITION_UNAVAILABLE : 2,

    /**
     * @description The length of time specified by the {@link PositionOptions.timeout}  property has elapsed.
     * @constant
     * @default 3
     * @BB50+
     * @PB10
     * @type Number
     */
    TIMEOUT : 3

};

    /**
     * @description Error code. One of the {@link PositionError.PERMISSION_DENIED}, {@link PositionError.POSITION_UNAVAILABLE} or {@link PositionError.TIMEOUT}
     * @BB50+
     * @PB10
     * @readonly
     * @type Number
     */
    PositionError.prototype.code  = "";
    
    /**
     * @description Error message describing the details of the error encountered.
     * @BB50+
     * @PB10
     * @readonly
     * @type String
     */
    PositionError.prototype.message = "";

/**
 * @namespace The PositionOptions represented a native objects with optional properties named enableHighAccuracy, timeout and maximumAge to use in {@link navigator.geolocation.getCurrentPosition} or {@link navigator.geolocation.watchPosition}.
 * @toc {GPS} HTML5 PositionOptions
 * @learns {Sample - Using HTML5 Geolocation} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Using-HTML5-Geolocation-in-your-Web-or-BlackBerry-WebWorks/ta-p/630406 Sample that demonstrates how to use the HTML5 Geolocation API [BlackBerry Developer Resource Center].
 * @learns {How To - Enable GPS on PlayBook} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/How-To-Enable-GPS-capability-in-BlackBerry-WebWorks-for-Tablet/ta-p/1035855 How to enable GPS capability when using the BlackBerry WebWorks SDK for Tablet OS [BlackBerry Developer Resource Center].
 * @notice {Warning (BlackBerry 5.0 Notice):}
 * Geolocation support on BlackBerry OS 5.0 is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 */
PositionOptions = {};

    /**
     * @description The enableHighAccuracy attribute provides a hint that the application would like to receive the best possible results. This may result in slower response times or increased power consumption. The user might also deny this capability, or the device might not be able to provide more accurate results than if the flag wasn't specified. The intended purpose of this attribute is to allow applications to inform the implementation that they do not require high accuracy geolocation fixes and, therefore, the implementation can avoid using geolocation providers that consume a significant amount of power (e.g. GPS). This is especially useful for applications running on battery-powered devices, such as mobile phones.
     * @BB50+
     * @PB10
     * @type Boolean
     */
    PositionOptions.prototype.enableHighAccuracy = "";

    /**
     * @description The timeout attribute denotes the maximum length of time (expressed in milliseconds) that is allowed to pass from the call to getCurrentPosition() or watchPosition().
     * @BB50+
     * @PB10
     * @type Number
     */
    PositionOptions.prototype.timeout = "";

    /**
     * @description The maximumAge attribute indicates that the application is willing to accept a cached position whose age is no greater than the specified time in milliseconds.
     * @BB50+
     * @PB10
     * @readonly
     * @type Number
     */
    PositionOptions.prototype.maximumAge = "";

    

/**
 * @namespace The geographic coordinate reference system used by the attributes in this interface is the World Geodetic System (2d) [WGS84]. No other reference system is supported.
 * @toc {GPS} HTML5 Coordinates
 * @learns {Sample - Using HTML5 Geolocation} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Using-HTML5-Geolocation-in-your-Web-or-BlackBerry-WebWorks/ta-p/630406 Sample that demonstrates how to use the HTML5 Geolocation API [BlackBerry Developer Resource Center].
 * @learns {How To - Enable GPS on PlayBook} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/How-To-Enable-GPS-capability-in-BlackBerry-WebWorks-for-Tablet/ta-p/1035855 How to enable GPS capability when using the BlackBerry WebWorks SDK for Tablet OS [BlackBerry Developer Resource Center].
 * @notice {Warning (BlackBerry 5.0 Notice):}
 * Geolocation support on BlackBerry OS 5.0 is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 */
Coordinates = {};

    /**
     * @description The latitude attributes is geographic coordinates specified in decimal degrees.
     * @BB50+
     * @PB10
     * @readOnly
	 * @type Number
     */
    Coordinates.prototype.latitude = undefined;

    /**
     * @description The longitude attributes is geographic coordinates specified in decimal degrees.
     * @BB50+
     * @PB10
     * @readOnly
	 * @type Number
     */
    Coordinates.prototype.longitude  = undefined;

    /**
     * @description The altitude attribute denotes the height of the position, specified in meters above the [WGS84] ellipsoid.
     * @BB50+
     * @PB10
     * @readOnly
	 * @type Number
     */
    Coordinates.prototype.altitude = undefined;

    /**
     * @description The accuracy attribute denotes the accuracy level of the latitude and longitude coordinates.
     * @BB50+
     * @PB10
     * @readOnly
	 * @type Number
     */
    Coordinates.prototype.accuracy = undefined;

    /**
     * @description The altitudeAccuracy attribute is in meters.
     * @BB50+
     * @PB10
     * @readOnly
	 * @type Number
     */
    Coordinates.prototype.altitudeAccuracy = undefined;

    /**
     * @description The heading attribute denotes the direction of travel of the hosting device in degrees, where 0&deg; &le; heading &le; 360&deg;, counting clockwise relative to the true north.
     * @BB50+
     * @PB10
     * @readOnly
	 * @type Number
     */
    Coordinates.prototype.heading = undefined;

    /**
     * @description The speed attribute denotes the current ground speed of the hosting device in meters per second.
     * @BB50+
     * @PB10
     * @readOnly
	 * @type Number
     */
    Coordinates.prototype.speed = undefined;
    
