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
 * @toc {System} Acceleration
 * @PB10
 *Acceleration data is given in meters per second squared and uses the body axes defined in the device orientation event. Acceleration data (without the effect of gravity) cannot be provided when there is a lack of a gyroscope. 
 *Implementations that are unable to provide acceleration data without the effect of gravity may instead supply the acceleration including the effect of gravity. 
 *<p>The values reported are equal to the acceleration of the device, plus an acceleration equal and opposite to the acceleration due to gravity.
 *This is less useful in many applications but is provided as a means of providing best-effort support. 
 *These values can be stored and manipulated in variables outside the event scope. These values can be used to control the motion of objects defined on the DOM by the device's gyroscope and accelerometer. 
 *<p>Data Examples: 
 *A device lying flat on a horizontal surface with the screen upmost has an acceleration of zero and the following value for accelerationIncludingGravity:
 *     <p> {x: 0,
 *      y: 0,
 *      z: 9.81};</p></p>
 *A device is mounted in a vehicle, with the screen in a vertical plane, the top uppermost and facing the rear of the vehicle. The vehicle is travelling at speed v around a right-hand bend of radius r. 
 *The the device records a positive x component for both acceleration and accelerationIncludingGravity. The device also records a negative value for rotationRate.gamma:
 *<ul>
 *<li>acceleration: {x: v^2/r, y: 0, z: 0};</li>
 *<li>accelerationIncludingGravity: {x: v^2/r, y: 0, z: 9.81};</li>
 *<li>rotationRate: {alpha: 0, beta: 0, gamma: -v/r*180/pi} };</li>
 *</ul>
 *@class
 *@property {Number} x component of acceleration.
 *@property {Number} y component of acceleration.
 *@property {Number} z component of acceleration.
 */ 
Acceleration={
	x:, 
	y:,
	z:,
};

/**
 **@toc {User Interface} HTML5 RotationRate
 *Represents the Angular velocity of the motion.
 *The orientation of the device is given in terms of the transfromation from a coordinate frame fixed on the Earth to a coordinate frame fixed in the device.
 *The Earth coordinate frame is a 'East, North, Up' frame at the user's location. It has the following 3 axes, where the ground plane is tangent to the WGS 84 spheroid at the user's location.
 *<ul>
 *<li>East (X) is in the ground plane, perpendicular to the North axis and positive towards the East.</li>
 *<li>North (Y) is in the ground plane and positive towards True North (towards the North Pole).</li>
 *<li>Up (Z) is perpendicular to the ground plane and positive upwards.</li>
 *</ul>
 *For a mobile device, the device coordinate frame has the following 3 axes. The axes are defined relative to the standard orientation of the screen, 
 *typically portrait, when slide-out keyboards are not deployed. If the orientation of the screen changes when the device is rotated or a slide-out keyboard is deployed, 
 *this does not affect the orientation of the coordinate frame relative to the device. Users wishing to detect these changes in screen orientation may be able to do so with the existing orientationchange event.
 *<ul>
 *<li>x is in the plane of the screen and is positive towards the right hand side of the screen.</li>
 *<li>y is in the plane of the screen and is positive towards the top of the screen.</li>
 *<li>z is perpendicular to the screen, positive out of the screen.</li>
 *</ul>
 *The transformation from the Earth frame to the device frame is expressed in terms of 3 rotations, 
 *specified in the device frame. Rotations use the right-hand convention: positive rotation around an axis is clockwise when viewed along the positive direction of the axis.
 *@class
 *@property {Number} alpha Angular velocity of the device frame around its z axis by alpha degrees/s.
 *@property {Number} beta Angular velocity of the device frame around its x axis by beta degrees/s.
 *@property {Number} gamma Angular velocity of the device frame around its y axis by gamma degrees/s.
 */ 
RotationRate={
	alpha:,
	beta:,
	gamma:,
};

/**
 *@toc {User Interface} HTML5 DeviceMotionEvent
 *This event provides direct access to motion data from an accelerometer and gyroscope. The three pieces of data provided are the acceleration, acceleration including gravity and rotation rate. <br>Because our hardware currently does not have a gyroscope, not all interfaces of this event are available to us (acceleration without gravity and rotation rate.)<br>
 *@class 
 *@property {Acceleration} acceleration The acceleration provided by the acceleration property is that of the body and hence excludes the effect of gravity.
 *@property {Acceleration} accelerationIncludingGravity Implementations that are unable to provide acceleration data without the effect of gravity (due, for example, to the lack of a gyroscope) may instead supply the acceleration including the effect of gravity. This is less useful in many applications but is provided as a means of providing best-effort support. 
 *In this case, the values reported are equal to the acceleration of the device, plus an acceleration equal and opposite to the acceleration due to gravity.
 *@property {RotationRate} rotationRate The Angular velocity of the motion.
 *@property {Number} interval event must fire at regular intervals and the interval must be reported, in milliseconds, using the interval attribute of the DeviceMotionEvent object. Note that the interval is a constant for a given implementation.
 *@example 
 *window.addEventListener("devicemotion", function(event) {
 *	var ax = "Acceleration X value- " + event.accelerationIncludingGravity.x;
 *	var ay = "Acceleration Y value- " + event.accelerationIncludingGravity.y;
 *	var az = "Acceleration Z value- " + event.accelerationIncludingGravity.z;
 *	var rotation = "Rotation rate - " + event.rotationRate;
 *	alert(ax+"\n"+ay+"\n"+az);
 *}, true);
 */ 
DeviceMotionEvent={
	acceleration:,
	accelerationIncludingGravity:,
	rotationRate:,
	interval:,
};

/**
 *The orientation of the device is given in terms of the transfromation from a coordinate frame fixed on the Earth to a coordinate frame fixed in the device.
 *The Earth coordinate frame is a 'East, North, Up' frame at the user's location. It has the following 3 axes, where the ground plane is tangent to the WGS 84 spheroid at the user's location.
 *<ul>
 *<li>East (X) is in the ground plane, perpendicular to the North axis and positive towards the East.</li>
 *<li>North (Y) is in the ground plane and positive towards True North (towards the North Pole).</li>
 *<li>Up (Z) is perpendicular to the ground plane and positive upwards.</li>
 *</ul>
 *For a mobile device, the device coordinate frame has the following 3 axes. The axes are defined relative to the standard orientation of the screen, 
 *typically portrait, when slide-out keyboards are not deployed. If the orientation of the screen changes when the device is rotated or a slide-out keyboard is deployed, 
 *this does not affect the orientation of the coordinate frame relative to the device. Users wishing to detect these changes in screen orientation may be able to do so with the existing orientationchange event.
 *<ul>
 *<li>x is in the plane of the screen and is positive towards the right hand side of the screen.</li>
 *<li>y is in the plane of the screen and is positive towards the top of the screen.</li>
 *<li>z is perpendicular to the screen, positive out of the screen.</li>
 *</ul>
 *The transformation from the Earth frame to the device frame is expressed in terms of 3 rotations, 
 *specified in the device frame. Rotations use the right-hand convention: positive rotation around an axis is clockwise when viewed along the positive direction of the axis.
 Starting with the two frames aligned, the rotations are applied in the following order:
<ol>
	<li>
		<p>Rotate the device frame around its z axis by alpha degrees, with alpha in [0, 360).</p>
		<div style="display: inline-block;width: 350px;margin-right: 20px;font-size: small;">
			<img src="images/playbook_flat.png"/>
			<div style="display: inline-block;width: 350px;margin-right: 20px;font-size: small;">Device in the initial position, with Earth (XYZ) and body (xyz) frames aligned.</div>
		</div>
		<div style="display: inline-block;width: 350px;margin-right: 20px;font-size: small;">
			<img src="images/playbook_rotate_alpha.png"/>
			<div style="display: inline-block;width: 350px;margin-right: 20px;font-size: small;">Device rotated through angle alpha about z axis, with previous locations of x and y axes shown as x0 and y0.</div>
		</div>
	</li>
	<li>
		<p>Rotate the device frame around its x axis by beta degrees, with beta in [-180, 180).</p>
		<div style="display: inline-block;width: 350px;margin-right: 20px;font-size: small;">
			<img src="images/playbook_rotate_beta.png"/>
			<div style="display: inline-block;width: 350px;margin-right: 20px;font-size: small;">Device rotated through angle beta about new x axis, with previous locations of y and z axes shown as y0</div>
		</div>
	</li>
	<li>
		<p>Rotate the device frame around its y axis by gamma degrees, with gamma in [-90, 90).</p>
		<div style="display: inline-block;width: 350px;margin-right: 20px;font-size: small;">
			<img src="images/playbook_rotate_gamma.png"/>
			<div style="display: inline-block;width: 350px;margin-right: 20px;font-size: small;">Device rotated through angle gamma about new y axis, with previous locations of x and z axes shown as x0</div>
		</div>
	</li>
</ol>
Thus the angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''. <a href="http://en.wikipedia.org/wiki/Euler_angles">[EULERANGLES]</a>

Note that this choice of angles follows mathematical convention, but means that alpha is in the opposite sense to a compass heading.
 *@class 
 *@property {Number} alpha Angular displacement of the device frame around its z axis by alpha degrees.
 *@property {Number} beta Angular displacement of the device frame around its x axis by beta degrees.
 *@property {Number} gamma Angular displacement of the device frame around its y axis by gamma degrees.
 *@property {Boolean} absolute Implementations that are unable to provide absolute values for the three angles may instead provide values relative to some arbitrary orientation, as this may still be of utility. In this case, the absolute property should be set to false. Otherwise, the absolute property should be set to true.
 *@property {Boolean} compassCalibrated Implementations should set the compassCalibrated property to true if the compass is correctly calibrated. Otherwise, the compassCalibrated property should be set to false. This may imply that user action, such as performing a manual calibration procedure, is required.
 *@example 
 *window.addEventListener("deviceorientation", function(event) {
 *	var Alpha = "The rotation around the Z axis is :" +event.alpha;
 *	var Beta = "The rotation around the X axis is :" +event.beta;
 *	var Gamma = "The rotation around the Y axis is :" +event.gamma;
 *	alert(Alpha+"\n"+Beta+"\n"+Gamma);
 *	&#47;&#47 A device lying flat on a horizontal surface with the top of the screen pointing West has the following orientation:	
 *	&#47;&#47 {alpha: 90, beta: 0, gamma: 0}
 *}, true);
 */ 
DeviceOrientationEvent={
	alpha:,
	beta:,
	gamma:,
	absolute:,
	compassCalibrated:
}
