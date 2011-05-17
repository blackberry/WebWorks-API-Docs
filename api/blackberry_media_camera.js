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
 * @namespace holds functionality related to media.
 */
blackberry.media = {
}

/**
* <div><p>
*   Using Camera API allows to invoke the native camera application to record video or take a picture and receive a path to the file stored.
*   The method are static and don't required to create an instance of a camera.
* </p>
* </div>
* @toc {Media} Camera
* @BB50+
* @PB10
* @namespace The Camera API provides the way to received path to files saved by native invoked camera application.
* @featureID blackberry.media.camera
* @example
* function takeVideo() {
*   try {
*     blackberry.media.camera.takeVideo(successCB, cancelCB, errorCB);
*   } catch(e) {
*     alert("Error in supported: " + e);
*   }
* }
*
* function successCB(filePath) {
*   alert("Succeed: " + filePath);
* }
*
* function cancelCB() {
*   alert("Cancel event ");
* }
*
* function errorCB() {
*   alert("Error occured");
* } 
*/
blackberry.media.camera = {
}

/**
* Opens the camera and return a path to the onComplete callback when a photo is taken.
* @methodOf blackberry.media.camera
* @param {onCompleteCallback} callback callback invoked when a picture is taken.
* @param {onCancelCallback} [callback] callback is invoked when the user cancels the photo capturing.
* @param {onErrorCallback} [callback] callback is invoked when an error occurs.
* @param {Boolean} [forceToClose] Define if camera should be closed after finished picture capturing.
* @BB50+
* @PB10
*/
blackberry.media.camera.takePicture = function(onPictureTaken, onCancel, onError) {
}
/**
* Opens the camera and return a path to the onComplete callback when a video is taken.
* @methodOf blackberry.media.camera
* @param {onCompleteCallback} callback callback invoked when a picture is taken.
* @param {onCancelCallback} [callback] callback is invoked when the user cancels the photo capturing.
* @param {onErrorCallback} [callback] callback is invoked when an error occurs.
* @param {Boolean} [forceToClose] Define if camera should be closed after finished video recording.
* @BB50+
* @PB10
*/
blackberry.media.camera.takeVideo = function(onVideoTaken, onCancel, onError) {
}

/**
* @function
* @description Function callback for blackberry.media.camera.takePicture or blackberry.media.camera.takeVideo.
* <p>This function invoked when the user either successfully  captured a still picture or video.</p>
* @callback {String} [filePath] Filesystem path of the photo or video taken by the camera.
* @BB50+
* @PB10
*/
blackberry.media.camera.onCompleteCallback = function (filePath) { };

/**
* @function
* @description Function callback for blackberry.media.camera.takePicture or blackberry.media.camera.takeVideo.
* <p>This function invoked when capturing was canceled.</p>
* @PB10
*/
blackberry.media.camera.onCancelCallback = function() {}

/**
* @function
* @description Function callback for blackberry.media.camera.takePicture or blackberry.media.camera.takeVideo.
* This function invoked when default camera cannot be opened.
* @PB10
*/
blackberry.media.camera.onErrorCallback = function() { };
