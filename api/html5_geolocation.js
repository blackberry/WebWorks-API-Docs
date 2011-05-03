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
 * @namespace The Geolocation object is used by scripts to programmatically determine the location information associated with the hosting device. The location information is acquired by applying a user-agent specific algorithm, creating a Position object, and populating that object with appropriate data accordingly.  
 * @toc {GPS} Geolocation 
 * @learns {Specs - W3C Geolocation} http://dev.w3.org/geo/api/spec-source.html W3C Editor's Draft for the Geolocation API specification [http://dev.w3.org].
 * @learns {Reference - Geolocation API} http://docs.blackberry.com/en/developers/deliverables/18446/Geolocation_Objects_1228502_11.jsp BlackBerry browser JavaScript reference guide [BlackBerry Documentation].
 * @learns {Sample - Using HTML5 Geolocation} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Using-HTML5-Geolocation-in-your-Web-or-BlackBerry-WebWorks/ta-p/630406 Sample that demonstrates how to use the HTML5 Geolocation API [BlackBerry Developer Resource Center].
 * @learns {How To - Enable GPS on PlayBook} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/How-To-Enable-GPS-capability-in-BlackBerry-WebWorks-for-Tablet/ta-p/1035855 How to enable GPS capability when using the BlackBerry WebWorks SDK for Tablet OS [BlackBerry Developer Resource Center].
 */
Geolocation = {        
        
		/**
		 * @desc  Attempt to obtain the current location of the device.
		 * @callback {function} PositionCallback Function will call if the attempt is successful i.e. the handleEvent operation must be called on the *callback object
		 * @callback {function} [PositionErrorCallback] Optional function callback if the attempt fails, the errorCallback must be invoked with a new PositionError object, reflecting the reason for the failure.
		 * @param {Object} [PositionOptions] return {@link PositionOptions} of a current position.
		 * @PB10
		 */
        getCurrentPosition : function(positionCB, positionErrorCB, positionOptions) {};
        
		
		/**
		 * @desc  Like {@link getCurrentPosition} continue to monitor the position of the device and invoke the appropriate callback every time this position changes. It continues until the clearWatch method is called with the corresponding identifier.
		 * @callback {function} PositionCallback Function will call if the attempt is successful i.e. the handleEvent operation must be called on the *callback object
		 * @callback {function} [PositionErrorCallback] Optional function callback if the attempt fails, the errorCallback must be invoked with a new PositionError object, reflecting the reason for the failure.
		 * @param {Object} [PositionOptions] return {@link PositionOptions} of a watch position.
		 * @returns {Long} Return a watchId so that it can be use in function {@link Geolocation.clearWatch}.
		 * @PB10
		 */
        watchPosition : function(positionCB, positionErrorCB, positionOptions) {};
        
		
		/**
		 * @desc  Like {@link getCurrentPosition} continue to monitor the position of the device and invoke the appropriate callback every time this position changes. It continues until the clearWatch method is called with the corresponding identifier.
		 * @param {long} watchId A unique identifier return from {@link Geolocation.watchPosition}.
		 * @PB10
		 */
        clearWatch : function(watchId) {};
                                
         
    }

	/**
 * @namespace The Position is the container for the geolocation information.
 * @toc {GPS} Position
 */
Position = {        
    
	/**
	 * @description The coords attribute contains a set of geographic coordinates together with their associated accuracy, as well as a set of other optional attributes such as altitude and speed. 
	 * @BB50+
	 * @PB10	 
	 * @type Coordinates 
	 */
	coords : "",
	
	/**
	 * @description The timestamp attribute represents the time when the Position object was acquired and is represented as a DOMTimeStamp. 
	 * @BB50+
	 * @PB10	 
	 * @type DOMTIMESTAMP
	 */
    timestamp : "",
	
    }

/**
 * @namespace The PositionError is reflecting the reason for the failure.
 * @toc {GPS} PositionError  
 */
PositionError  = {        
    		
	/**
	 * @description Error code. One of the PERMISSION_DENIED, POSITION_UNAVAILABLE or TIMEOUT 
	 * @BB50+
	 * @PB10	
	 * @readonly	 
	 * @type Short
	 */
    code  : "",
	
	/**
	 * @description Error message describing the details of the error encountered. 
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
    message : "",
	
	/**
	 * @description The location acquisition process failed because the document does not have permission to use the Geolocation API. 
	 * @BB50+
	 * @PB10	 
	 * @type Short
	 */
	PERMISSION_DENIED : "",
	
	/**
	 * @description 
	 * @BB50+
	 * @PB10	 
	 * @type Short
	 */
	POSITION_UNAVAILABLE : "",
			
	/**
	 * @description 
	 * @BB50+
	 * @PB10	 
	 * @type Short
	 */
	TIMEOUT : "",
         
    }
    
/**
 * @namespace The PositionOptions represented a native objects with optional properties named enableHighAccuracy, timeout and maximumAge to use in {@link Geolocation.getCurrentPosition} or {@link Geolocation.watchPosition}.
 * @toc {GPS} PositionOptions 
 */
PositionOptions = {        
    
	/**
	 * @description The enableHighAccuracy attribute provides a hint that the application would like to receive the best possible results. This may result in slower response times or increased power consumption. The user might also deny this capability, or the device might not be able to provide more accurate results than if the flag wasn't specified. The intended purpose of this attribute is to allow applications to inform the implementation that they do not require high accuracy geolocation fixes and, therefore, the implementation can avoid using geolocation providers that consume a significant amount of power (e.g. GPS). This is especially useful for applications running on battery-powered devices, such as mobile phones. 
	 * @BB50+
	 * @PB10	 
	 * @type Boolean
	 */
	enableHighAccuracy : "",
	
	/**
	 * @description The timeout attribute denotes the maximum length of time (expressed in milliseconds) that is allowed to pass from the call to getCurrentPosition() or watchPosition(). 
	 * @BB50+
	 * @PB10	 
	 * @type Long
	 */
    timeout : "",
	
	/**
	 * @description The maximumAge attribute indicates that the application is willing to accept a cached position whose age is no greater than the specified time in milliseconds.
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type Long
	 */
    maximumAge : ""               
         
    }

/**
 * @namespace The geographic coordinate reference system used by the attributes in this interface is the World Geodetic System (2d) [WGS84]. No other reference system is supported. 
 * @toc {GPS} Coordinates
 */
Coordinates = {        
    
	/**
	 * @description The latitude attributes is geographic coordinates specified in decimal degrees. 
	 * @BB50+
	 * @PB10	 
	 * @readOnly
	 * @type double 
	 */
	latitude : "",
	
	/**
	 * @description The longitude attributes is geographic coordinates specified in decimal degrees. 
	 * @BB50+
	 * @PB10	 
	 * @readOnly
	 * @type double 
	 */
    longitude  : "",
	
	/**
	 * @description The altitude attribute denotes the height of the position, specified in meters above the [WGS84] ellipsoid. 
	 * @BB50+
	 * @PB10	 
	 * @readOnly
	 * @type double 
	 */
	altitude : "",
    
	/**
	 * @description The accuracy attribute denotes the accuracy level of the latitude and longitude coordinates. 
	 * @BB50+
	 * @PB10	
	 * @readOnly	 
	 * @type double 
	 */
	accuracy : "",
    
	/**
	 * @description The altitudeAccuracy attribute is in meters.
	 * @BB50+
	 * @PB10	 
	 * @readOnly	 
	 * @type double 
	 */
	altitudeAccuracy : "",
    
	/**
	 * @description The heading attribute denotes the direction of travel of the hosting device in degrees, where 0&deg; &le; heading &le; 360&deg;, counting clockwise relative to the true north.
	 * @BB50+
	 * @PB10	 
	 * @readOnly	 
	 * @type double 
	 */
	heading : "",
    
	/**
	 * @description The speed attribute denotes the current ground speed of the hosting device in meters per second.
	 * @BB50+
	 * @PB10	 
     * @readOnly	 
	 * @type double 
	 */
	speed : "",
    }
    	