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
 * @toc {Media} Microphone
 * @featureID blackberry.media.microphone
 * @namespace The Microphone object contains functions for recording audio from microphone.
 */
blackberry.media.microphone = {
		
		/**
		 * @description Get a Mic object that corresponds to the default microphone on the BlackBerry PlayBook
		 * @returns {blackberry.media.microphone.Mic} A Mic object that corresponds to the default microphone on the BlackBerry PlayBook
		 * @PB10
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 * 
		 * function getMic() {
		 *   if (blackberry.media.microphone.hasMicrophones) {
		 *      var mic = blackberry.media.microphone.getMic();
		 *      // accessing folders under "shared" requires permission to be added to config.xml
		 *      mic.recordToFile(blackberry.io.dir.appDirs.shared.music.path + '/test.wav', 10, testSuccess, testError);
		 *   }
		 * }
		 * 
		 * function testSuccess(filePath) {
		 *     alert('Audio recorded to .wav file successfully! Path:' + filePath);
		 * }
		 * 
		 * function testError(errorCode, errorMsg) {
		 *     alert('Could not record audio, error code:' + errorCode + ' errorMsg:' + errorMsg);
		 * }
		 * 		 
		 * &lt;/script&gt;
		 */
		getMic : function() {},
		
		/**
		 * @type Boolean
		 * @description True if at least one microphone exists on the system, and that the microphone is not in use by another application
		 * @readOnly
		 * @PB10
		 */		 
		hasMicrophones : true		
};