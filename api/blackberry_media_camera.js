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
 * @namespace
 * <p>Using Camera API allows to invoke the native camera application to record video or take a picture and receive a path to the file stored.</p>
 * <p>The methods are static and don't required to create an instance of a camera.</p>
 * <p>Note that the application will require the user to grant it input simulation and file api permissions for this extension to work on the BlackBerry.</p>
 * @toc {Media} Camera
 * @featureID blackberry.media.camera
 * @permission use_camera Permits your app to use the camera.
 */
blackberry.media.camera = {

    /**
     * @function
     * @description Close the camera or video recorder if it's in the foreground.
     * @BB50+
     * @example
     * function takeVideo() {
     *   try {
     *     blackberry.media.camera.takeVideo(successCB);
     *   } catch(e) {
     *     alert("Error in supported: " + e);
     *   }
     * }
     *
     * function successCB(filePath) {
     *   blackberry.media.camera.close();
     *   // do something with filePath
     * }
     */
    close: function() {
    },
    /**
     * @function
     * @description Opens the camera and return a path to the onCaptured callback when a photo is taken.
     * @callback {function} onCaptured Method will be invoked when a picture is captured. <br/>Expected signature: <code>function onCaptured(filePath)</code>
     * @callback {String} [onCaptured.filePath] Path to a picture captured by the camera.
     * @callback {function} [onCameraClosed] Method will be invoked on camera closed event. <br/>Expected signature: <code>function onCameraClosed()</code>
     * @callback {function} [onError] Method will be invoked when an error occurs. <br/>Expected signature: <code>function onError(e)</code>
	 * @callback {String} [onError.e] Error message
     * @BB50+
     * @PB10+
     */
    takePicture: function(onCaptured, onCameraClosed, onError) {
    },
    /**
     * @function
     * @description Opens the camera and return a path to the onCaptured callback when a video is taken.
     * @callback {function} onCaptured Method will be invoked when a video is recorded. <br/>Expected signature: <code>function onCaptured(filePath)</code>
     * @callback {String} [onCaptured.filePath] Path to a video captured by the camera.
     * @callback {function} [onCameraClosed] Method will be invoked on camera closed event. <br/>Expected signature: <code>function onCameraClosed()</code>
     * @callback {function} [onError] Method will be invoked when an error occurs. <br/>Expected signature: <code>function onError(e)</code>
	 * @callback {String} [onError.e] Error message
     * @BB50+
     * @PB10+
     * @example
     * function takeVideo() {
     *   try {
     *     blackberry.media.camera.takeVideo(successCB, closedCB, errorCB);
     *   } catch(e) {
     *     alert("Error in supported: " + e);
     *   }
     * }
     *
     * function successCB(filePath) {
     *   alert("Succeed: " + filePath);
     * }
     *
     * function closedCB() {
     *   alert("Camera closed event");
     * }
     *
     * function errorCB(e) {
     *   alert("Error occured: " + e);
     * }
     */
    takeVideo: function(onCaptured, onCameraClosed, onError) {
    }
}