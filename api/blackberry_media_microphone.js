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
 * @permission record_audio Permits the app to record sound through the microphone without prompting the user.
 * @permission [access_shared] Any references to files/directories under "shared" folder (e.g. music) requires this permission to be set.
 * @example
 * &lt;!DOCTYPE html&gt;
 * &lt;html&gt;
 * &lt;head&gt;
 * &lt;link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/ui-lightness/jquery-ui.css" rel="stylesheet" type="text/css"/&gt;
 * &lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"&gt;&lt;/script&gt;
 * &lt;script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"&gt;&lt;/script&gt;
 * &lt;script type="text/javascript"&gt;
 * var mic = blackberry.media.microphone;
 * var isPaused = false;
 *
 * function record() {
 *   try {
 *     // NOTE: access to shared folder requires "access_shared" permission on config.xml
 *     mic.record(blackberry.io.dir.appDirs.shared.music.path + '/' + document.getElementById('filename').value, testSuccess, testError);
 *     $("#record").button("option", "disabled", true);
 *     $("#pause").button("option", "disabled", false);
 *     $("#stop").button("option", "disabled", false);
 *   } catch (e) {
 *     alert('Record, e:' + e.message);
 *   }
 * }
 *
 * function pause() {
 *   isPaused = !isPaused;
 *
 *   if (isPaused) {
 *     $("#pause").button("option", "label", "Resume");
 *   } else {
 *     $("#pause").button("option", "label", "Pause");
 *   }
 *
 *   try {
 *     mic.pause();
 *   } catch (e) {
 *     alert('Pause, e:' + e.message);
 *   }
 * }
 *
 * function stop() {
 *   try {
 *     mic.stop();
 *     $("#record").button("option", "disabled", false);
 *     $("#pause").button("option", "disabled", true);
 *     $("#stop").button("option", "disabled", true);
 *   } catch (e) {
 *     alert('Stop, e:' + e.message);
 *   }
 * }
 *
 * function testSuccess(filePath) {
 *   alert("Recorded successfully! File: " + filePath);
 * }
 *
 * function testError(errorCode, errorMessage) {
 *     if(errorMessage == "Unsupported record encoding type") {
 *         alert("try recording an .amr audio file");
 *         return;
 *     }
 *   alert('error code:' + errorCode + ' error message:' + errorMessage);
 * }
 *
 * &lt;/script&gt;
 * &lt;script type="text/javascript"&gt;
 * $(document).ready(function() {
 *   $("#record").button();
 *   $("#pause").button({ disabled: true });
 *   $("#stop").button({ disabled: true });
 *
 *   $("#record").bind("click", record);
 *   $("#pause").bind("click", pause);
 *   $("#stop").bind("click", stop);
 * });
 * &lt;/script&gt;
 * &lt;/head&gt;
 * &lt;body&gt;
 * &lt;p&gt;File Name:&nbsp;&lt;input type="text" id="filename"&gt;&lt;/p&gt;
 * &lt;button id="record"&gt;Record&lt;/button&gt;&nbsp;&nbsp;
 * &lt;button id="pause"&gt;Pause&lt;/button&gt;&nbsp;&nbsp;
 * &lt;button id="stop"&gt;Stop&lt;/button&gt;
 * &lt;/body&gt;
 * &lt;/html&gt;
 */
blackberry.media.microphone = {
        /**
        * Records audio from the microphone.<br><br>
        * If the specified format is not supported on the device, an error is passed to the onError callback with the message &quot;Unsupported record encoding type&quot;.
        * The supported recording formats are:
        * <table class="confluenceTable">
        * <tr>
        * <th class="confluenceTh">&nbsp;</th>
        * <th class="confluenceTh"><strong>PlayBook</th>
        * <th class="confluenceTh">BB OS 5.0, 6.0 (GSM)</th>
        * <th class="confluenceTh">BB OS 5.0, 6.0 (CDMA)</th>
        * <th class="confluenceTh">BB OS 7.0</th>
        * <tr>
        * <th class="confluenceTh">Supported Formats:</th>
        * <td class="confluenceTd">WAV</td>
        * <td class="confluenceTd">WAV, AMR</td>
        * <td class="confluenceTd">AMR</td>
        * <td class="confluenceTd">WAV, AMR</td>
        * </tr>
        * <tr>
        * <th class="confluenceTh">Bit Depth:</th>
        * <td class="confluenceTd">16</td>
        * <td class="confluenceTd">16</td>
        * <td class="confluenceTd">16</td>
        * <td class="confluenceTd">16</td>
        * </tr>
        * <tr>
        * <th class="confluenceTh">Sampling Rate:</th>
        * <td class="confluenceTd">44,100Hz</td>
        * <td class="confluenceTd">8,000Hz</td>
        * <td class="confluenceTd">8,000Hz</td>
        * <td class="confluenceTd">8,000Hz</td>
        * </tr>
        * <tr>
        * <th class="confluenceTh">Channels:</th>
        * <td class="confluenceTd">1</td>
        * <td class="confluenceTd">1</td>
        * <td class="confluenceTd">1</td>
        * <td class="confluenceTd">1</td>
        * </tr>
        * </table>
        * @param {String} filePath full path to the file, specified in the form of file:// URL
        * @callback {function} onCaptured This callback function is called when the application has successfully recorded the audio and saved it to the requested file.
        * @callback {String} onCaptured.filePath The file path that points to the created audio file.
        * @callback {function} onError This callback function is called if the recording has failed.
        * @callback {Number} onError.errorCode The error code for the error.
        * @callback {String} onError.errorMsg The error message for the error.
        * @returns {void}
        * @PB10+
        * @BB50+
        */
        record : function(filePath, onCaptured, onError) {},

        /**
        * Pauses/resumes recording.<br><br>If the microphone is in recording mode, calling pause() would cause recording to
        * pause. If the microphone is paused, calling pause() would cause recording to resume.<br><br>
        * @returns {void}
        * @PB10+
        * @BB50+
        */
        pause : function() {},

        /**
        * Stops recording, this causes the recorded audio data to be saved to the file. The onCaptured callback function passed in record will be
        * invoked when the audio file has been saved to disk.
        * @returns {void}
        * @PB10+
        * @BB50+
        */
        stop : function() {}
        
        /**
        * Return the mime types that the record method supports<br/><br/>
        * Sample values: &quot;audio/amr&quot;, &quot;audio/wav&quot;
        * @returns {String[]}
        * @BB50+
        * @example
        * function printSupportedTypes() {
        *         var types = blackberry.media.microphone.getSupportedMediaTypes();
        *         var alertMsg = "";
        *         for(var i = 0; i < types.length; i++) {
        *             alertMsg += types[i] + " ";
        *         }
        *         alert(alertMsg);
        * }
        */
        getSupportedMediaTypes : function() {}
};