/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http=//www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @toc {Device Motion} HTML5 Acceleration
 * @namespace
 * Acceleration data is given in meters per second squared and uses the body axes defined in the device orientation event. Acceleration data (without the effect of gravity) cannot be provided when there is a lack of a gyroscope. 
 * Implementations that are unable to provide acceleration data without the effect of gravity may instead supply the acceleration including the effect of gravity. 
 * <p>The values reported are equal to the acceleration of the device, plus an acceleration equal and opposite to the acceleration due to gravity.
 * This is less useful in many applications but is provided as a means of providing best-effort support. 
 * These values can be stored and manipulated in variables outside the event scope. These values can be used to control the motion of objects defined on the DOM by the device's gyroscope and accelerometer. 
 * <br><br> {@image /images/xyz.jpg} <br><br>
 * <p>Data Examples= 
 * A device lying flat on a horizontal surface with the screen upmost has an acceleration of zero and the following value for accelerationIncludingGravity=
 *     <p><i> {x= 0,
 *      y= 0,
 *      z= 9.81};</i></p></p>
*/
Acceleration = {

	/**
	 * @type Number
	 * @description x-coordinate of the acceleration
	 * @readOnly
	 * @PB10+
	 * @RIPPLE
	 */ 
	Acceleration.prototype.x=Number,

	/**
	 * @type Number
	 * @description y-coordinate of the acceleration
	 * @readOnly
	 * @PB10+
	 * @RIPPLE
	 */ 	
	Acceleration.prototype.y=Number,
	
	/**
	 * @type Number
	 * @description z-coordinate of the acceleration
	 * @readOnly
	 * @PB10+
	 * @RIPPLE
	 */ 
	Acceleration.prototype.z=Number,
};

/**
 * @toc {Device Motion} HTML5 Device Motion Event
 * @PB10+
 * @RIPPLE
 * @namespace
 * This event provides direct access to motion data from an accelerometer and gyroscope. The three pieces of data provided are the acceleration, acceleration including gravity and rotation rate. <br>At this moment the data supported is from Accelerometer only.<br>
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * window.addEventListener("devicemotion", function(event) {
 *
 *		var ax = "Acceleration X value- " + event.accelerationIncludingGravity.x;
 *		var ay = "Acceleration Y value- " + event.accelerationIncludingGravity.y;
 *		var az = "Acceleration Z value- " + event.accelerationIncludingGravity.z;
 *
 *		alert(ax+"\n"+ay+"\n"+az);
 *
 * }, true);
 *
 * &lt;/script&gt;
 */ 
DeviceMotionEvent = {

	/**
	 * @type Number
	 * @description The regular interval at which the event must fire at, given in milliseconds
	 * @readOnly
	 * @PB10+
	 */ 
	DeviceMotionEvent.prototype.interval= Number,
	
	/**
	 * @type Acceleration
	 * @description Implementations that are unable to provide acceleration data without the effect of gravity (due, for example, to the lack of a gyroscope) may instead supply the acceleration including the effect of gravity. This is less useful in many applications but is provided as a means of providing best-effort support. 
	 * In this case, the values reported are equal to the acceleration of the device, plus an acceleration equal and opposite to the acceleration due to gravity.
	 * @readOnly
	 * @PB10+
	 * @RIPPLE
	 */
	DeviceMotionEvent.prototype.accelerationIncludingGravity=null,
	
	/**
	 * @function
	 * @description Initializes the event listener and it's parameters
	 * @PB10+
	 */
	DeviceMotionEvent.prototype.initDeviceMotionEvent = function(){}
};


