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
* @toc {Media} Mic
* @PB10
* @namespace The Mic object allows applications to record audio with the default microphone on the BlackBerry PlayBook
* @featureID blackberry.media.microphone
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
blackberry.media.microphone.Mic = { 

	/**
	* Records a specified number of seconds of audio to the given file path.<br><br>
	* The recorded audio file is:
	* <ul><li>encoded in WAV format</li>
	* <li>has sampling rate of 44,100 Hz</li>
	* <li>has 2 channels</li></ul>
	* @param {String} filePath full path to the file, specified in the form of file:// URL
	* @param {Number} duration number of seconds to record
	* @callback {function} onRecordSuccess This callback function is called when the application has successfully recorded the audio and saved it to the requested file.
	* @callback {String} onRecordSuccess.filePath The file path that points to the created WAV file.	
	* @callback {function} onRecordError This callback function is called if the recording has failed.
	* @callback {Number} onRecordError.errorCode The error code for the error.
	* @callback {String} onRecordError.errorMsg The error message for the error.	
	* @returns {void}
	* @PB10
	*/
	blackberry.media.microphone.Mic.prototype.recordToFile = function(filePath, duration, onRecordSuccess, onRecordError) { }

};










