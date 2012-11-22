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
 * @toc {Sensors} Sensors
 * @featureID blackberry.sensors
 * @namespace The Sensors object allows you to get access to system level sensors and attributes of the BlackBerry device.<br>
 * <br>The sensors object has various event listeners for sensors on the device.
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * // Create a callback to handle each sensor
 * function compassCallback(sensor, data) {
 *     alert("Current azimuth: " + data.value);
 * }
 *
 * // Start listening to the compass sensor with a delay feedback of 1000 
 * blackberry.sensors.setOptions("devicecompass", { delay : 1000 });
 *    
 * // Start the event listener for the sensors callback
 * blackberry.event.addEventListener("devicecompass", compassCallback);
 *    
 * &lt;/script&gt;
 */
blackberry.sensors ={

    /**
     * Device accelerometer sensor.
     * <p>This sensor returns accelerometer data. Returned as m/s/s (meters/second/second).
     * @param {Object} data The object containing the sensor data.
     * @param {Float} [data.x] The x-axis value.
     * @param {Float} [data.y] The y-axis value.
     * @param {Float} [data.z] The z-axis value.
     * @event
     * @BB10X
     */
    deviceaccelerometer: function(data) {
    },

    /**
     * Device magnetometer sensor.
     * <p>This sensor returns values from the device's magnetometer. Returned as µT (micro Tesla).
     * @param {Object} data The object containing the sensor data.
     * @param {Float} [data.x] The x-axis value.
     * @param {Float} [data.y] The y-axis value.
     * @param {Float} [data.z] The z-axis value.
     * @event
     * @BB10X
     */
    devicemagnetometer: function(data) {
    },

    /**
     * Device gyroscope sensor.
     * <p>This sensor returns data from the gyroscope sensor. Returned as r/s (radians/second).
     * @param {Object} data The object containing the sensor data.
     * @param {Float} [data.x] The x-axis value.
     * @param {Float} [data.y] The y-axis value.
     * @param {Float} [data.z] The z-axis value.
     * @param {Float} [data.temperature] The temperature of the gyroscope sensor (in degrees Celsius).
     * @event
     * @BB10X
     */
    devicegyroscope: function (data) {
    },
    
    /**
     * Device compass sensor.
     * <p>This sensor returns directional information from the compass sensor.
     * @param {Object} data The object containing the sensor data.
     * @param {Float} [data.value] Azimuth from 0 -> 360 degrees from magnetic north.
     * @param {Number} [data.isFaceDown] 1 if face is down and compass heading is flipped, 0 otherwise.
     * @event
     * @BB10X
     */
    devicecompass: function (data) {
    },
    
    /**
     * Device proximity sensor.
     * <p>This sensor returns data from the proximity sensor.
     * @param {Object} data The object containing the sensor data.
     * @param {Number} [data.value] Discrete steps of distance or actual value in cm.
     * @param {Float} [data.normalized] 0.0 -> 1.0 (close -> far), normalized unit-less signal from raw sensor.
     * @event
     * @BB10X
     */
    deviceproximity: function (data) {
    },

    /**
     * Device light sensor.
     * <p>This sensor returns brightness information from the light sensor.
     * @param {Object} data The object containing the sensor data.
     * @param {Float} [data.value] Illuminance in lux.
     * @event
     * @BB10X
     */
    devicelight: function (data) {
    },

    /**
     * Device gravity sensor.
     * <p>This sensor returns gravity information from the gravity sensor. Returned as m/s/s (meters/second/second).
     * <br>Only the acceleration caused by gravity is reported. Movements of the device caused by the user have no effect other than changing the direction when the device is rotated.
     * @param {Object} data The object containing the sensor data.
     * @param {Float} [data.x] The x-axis value.
     * @param {Float} [data.y] The y-axis value.
     * @param {Float} [data.z] The z-axis value.
     * @event
     * @BB10X
     */
    devicegravity: function (data) {
    },

    /**
     * Device linear acceleration sensor.
     * <p>This sensor returns linear acceleration data from the device accelerometer. Returned as m/s/s (meters/second/second).
     * <br>Only the acceleration caused by the user moving the device is reported, the effect of gravity is canceled out. 
     * @param {Object} data The object containing the sensor data.
     * @param {Float} [data.x] The x-axis value.
     * @param {Float} [data.y] The y-axis value.
     * @param {Float} [data.z] The z-axis value.
     * @event
     * @BB10X
     */
    devicelinearacceleration: function (data) {
    },
        
    /**
     * Device rotation matrix sensor.
     * <p>This sensor returns a rotation matrix based on the orientation of the device.
     * @param {Object} data The object containing the sensor data.
     * @param {Array} [data.matrix] Float array of data values representing the matrix.
     * @event
     * @BB10X
     */
    devicerotationmatrix: function (data) {
    },
    
    /**
     * Device orientation sensor.
     * <p>This sensor returns device orientation information.
     * <br>This relates to the physical device orientation.
     * @param {Object} data The object containing the sensor data.
     * @param {Number} [data.screen] Screen rotation in degrees: 0, 90, 180 or 270.
     * @param {String} [data.face] String-based representation of device face.
     * @event
     * @BB10X
     */
    deviceorientation: function (data) {
    },

    /**
     * Device sensor azimuth pitch roll sensor.
     * <p>This sensor returns a rotation matrix based on the orientation of the device.
     * @param {Object} data The object containing the sensor data.
     * @param {Float} [data.azimuth] Azimuth from 0 -> 360 degrees from magnetic north.
     * @param {Float} [data.pitch] Pitch from -180 to 180 degrees.
     * @param {Float} [data.roll] Roll from -90 to 90 degrees.
     * @event
     * @BB10X
     */
    deviceazimuthpitchroll: function (data) {
    },
 
    /**
     * Device holster detection sensor.
     * <p>This sensor returns the status of the holster sensor.
     * @param {Object} data The object containing the sensor data.
     * @param {Number} [data.value] 1 if device is holstered, 0 otherwise.
     * @event
     * @BB10X
     */
    deviceholster: function (data) {
    },

    /**
     * @param {String} sensor The sensor to listen to.
     * @param {Object} options The options for the sensor being started.
     * @description This method will start a sensor with the specifed options and begin returning it to the added event listener.<br>
     * <br>The supported object fields for 'options' are:
     * @param {String} [options.delay] Time in µs (microseconds) to report back between sensor updates.
     * @param {Boolean} [options.background] Allow sensor to send updates while the screen is off.
     * @param {Boolean} [options.batching] When batching is enabled and supported by the hardware, sensors will report samples in hardware-specific batch sizes to conserve power.
     * @param {Boolean} [options.queue] Enabling the queue creates a client-specific service side queue of events, this is useful to not miss any events.
     * @param {Boolean} [options.reducedReporting] When reduced reporting is enabled, only a significant change between the last read event and the current unread event will cause an event to be delivered (useful for power saving).
     * @BB10X
     */
    setOptions: function(sensor, options){},
};
