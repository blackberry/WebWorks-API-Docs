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

 
/*
* Taken from:
* http://www.w3.org/TR/html5/video.html
*/

/**
* @namespace
* An audio element represents a sound or audio stream.
* @toc {Media} HTML5 Video
* @extends HTMLMediaElement
* @example
* Test if user can play H.264:
* function canPlayH264() {
*     var v = document.createElement(\&#039;video\&#039;);
*     return !!(v.canPlayType &amp;&amp; v.canPlayType(\&#039;video/mp4; codecs=\&quot;avc1.42E01E, mp4a.40.2\&quot;\&#039;).replace(/no/, \&#039;\&#039;));
* }
*/
HTMLVideoElement = function() { };

/**
 * @field
 * @constructedBy document.createElement("video")
 * @description Creates an HTMLVideoElement
 * @example
 * var video = document.createElement('video');
 * video.src = 'video.avi';
 * video.controls = true;
 * document.body.appendChild(video);
 * @PB10
 * @BB60+
 */
HTMLVideoElement.documentConstructor = undefined;


/**
* Width of the video area.
* @type Number
* @BB60+
* @PB10
*/

HTMLVideoElement.prototype.width = { };

/**
* Height of the video area.
* @type Number
* @BB60+
* @PB10
*/

HTMLVideoElement.prototype.height = { };

/**
* videoWidth must return the intrinsic width of the video in CSS 
* pixels.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/

HTMLVideoElement.prototype.videoWidth = { };

/**
* videoHeight must return the intrinsic height of the video in CSS 
* pixels.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/

HTMLVideoElement.prototype.videoHeight = { };

/**
* The address of an image file that the user agent can show while no 
* video data is available.  If present, must contain a valid 
* non-empty URL potentially surrounded by spaces.
* @type String
* @BB60+
* @PB10
*/

HTMLVideoElement.prototype.poster = { };
 
 
 