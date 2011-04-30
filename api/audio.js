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
 * @toc {User Interface} HTML5 Audio
 * @class audio
 * The audio tag defines sound, such as music or other audio streams.
 * <p/>
 * Tips and Notes:
 * Any text inside the between audio tag will be displayed in browsers that does not support the audio element.
 */

audio ={

		/**
		 * @description The autoplay attribute specifies that the audio will start playing as soon as it is ready.
		 * <p/>
		 * If this attribute is present the audio will autoplay.
		 * <p>
		 * syntax :
		 * &#60audio autoplay="autoplay" /&#62	
		 * @type {String} [autoplay=autoplay]
		 * @example
		 * &#60audio controls="controls" autoplay="autoplay"&#62
		 * &#60source src="http://www.w3schools.com/html5/song.ogg" type="audio/ogg" /&#62
		 * &#60source src="http://www.w3schools.com/html5/song.mp3" type="audio/mpeg" /&#62
		 * Your browser does not support the audio element.
		 * &#60/audio&#62
		 * <p>
		 * <audio controls="controls" autoplay="autoplay">
		 * <source src="http://www.w3schools.com/html5/song.ogg" type="audio/ogg" />
		 * <source src="http://www.w3schools.com/html5/song.mp3" type="audio/mpeg" />
		 * Your browser does not support the audio element.
		 * </audio>
		 */
		autoplay :,
		
		
		/**
		 * @description The controls attribute specifies that the browser should provide playback controls for the audio.
		 * <p>
		 * When this attribute is set, it specifies that no scripted controls are set, and the browser should use its default controls.
		 * <p>
		 * The browser controls should include: Play, Pause, Seeking, Volume, Fullscreen toggle, Captions/Subtitles (when available) Audio track (when available). 
		 * <p>
		 * syntax :
		 * &#60audio controls="controls" /&#62
		 * @type {String} [control=control]
		 * @example
		 * &#60audio controls="controls"&#62
		 * &#60source src="http://www.w3schools.com/html5/song.ogg" type="audio/ogg" /&#62
		 * &#60source src="http://www.w3schools.com/html5/song.mp3" type="audio/mpeg" /&#62
		 * Your browser does not support the audio element.
		 * &#60/audio&#62
		 * <p>
		 * <audio controls="controls">
		 * <source src="http://www.w3schools.com/html5/song.ogg" type="audio/ogg" />
		 * <source src="http://www.w3schools.com/html5/song.mp3" type="audio/mpeg" />
		 * Your browser does not support the audio element.
		 * </audio>
		 */
		controls :,
		
		
		/**
		 * @description The loop attribute specifies that the audio will start over again, every time it is finished.
		 * <p>
		 * If this attribute is present the audio will loop.
		 * <p/> 
		 * syntax :
		 * &#60audio loop="loop" /&#62
		 * @type {String} [loop=loop] 
		 * @example
		 * &#60audio controls="controls" loop="loop"&#62
		 * &#60source src="http://www.w3schools.com/html5/song.ogg" type="audio/ogg" /&#62
		 * &#60source src="http://www.w3schools.com/html5/song.mp3" type="audio/mpeg" /&#62
		 * Your browser does not support the audio element.
		 * &#60/audio&#62
		 * <p>
		 * <audio controls="controls" loop="loop">
		 * <source src="http://www.w3schools.com/html5/song.ogg" type="audio/ogg" />
		 * <source src="http://www.w3schools.com/html5/song.mp3" type="audio/mpeg" />
		 * Your browser does not support the audio element.
		 * </audio>
		 */
		loop ,
		
		/**
		 * @description The preload attribute specifies if the audio should be loaded when the page loads.
		 * <p/> This attribute is ignored if autoplay is present.
		 * syntax :
		 * &#60audio preload="value" /&#62
		 * <p>
		 * auto :	Specifies that the browser should load entire audio when page loads<br>
		 * metadata: Specifies that the browser should load only metadata when page loads<br>
		 * none: Specified that the browser should not pre-load audio when page loads<br>
		 * @type {String} [preload=auto]<p> [preload=metadata]<p> [preload=none]
		 * @example
		 * &#60audio controls="controls" preload="auto"&#62
		 * &#60source src="http://www.w3schools.com/html5/song.ogg" type="audio/ogg" /&#62
		 * &#60source src="http://www.w3schools.com/html5/song.mp3" type="audio/mpeg" /&#62
		 * Your browser does not support the audio element.
		 * &#60/audio&#62
		 * <p>
		 * <audio controls="controls" preload="auto">
		 * <source src="http://www.w3schools.com/html5/song.ogg" type="audio/ogg" />
		 * <source src="http://www.w3schools.com/html5/song.mp3" type="audio/mpeg" />
		 * Your browser does not support the audio element.
		 * </audio>
		 */
		preload : ,
		
		/**
		 * @description The src attribute specifies the URL of the audio to play.
		 * <p/>The audio can also be set using the <source> tag.
		 * <p>
		 * syntax :
		 * &#60audio src="value"&#62
		 * <p>
		 * The URL of the audio file.<br>
		 * Possible values:<br>
		 * An absolute URL - points to another web site (like href="http://www.example.com/song.ogg")<br>
		 * A relative URL - points to a file within a web site (like href="song.ogg")<br>
		 * 
		 * @type  {String} [src=URL]
		 * @example
		 * &#60audio src="http://www.w3schools.com/html5/song.ogg" controls="controls"&#62
		 * Your browser does not support the audio element.
		 * &#60/audio&#62
		 * <p>
		 * <audio src="http://www.w3schools.com/html5/
		 song.ogg" controls="controls">
		 * Your browser does not support the audio element.
		 * </audio>
		 */
		src : ,
};

  /**
   * This class provides access to the device media, interfaces to both sound and video
   * @constructor
   */
   function Media(src) {
  	this.src = src;
  }
  
  /**
   * [readonly] Returns true if playback is paused; false otherwise.
   * @property {Boolean}
   */
   Media.paused : ,
  
  /**
  * Causes the media player to start playing.
  */
  Media.prototype.play = function() {
  }
 /**
  * Pauses the playing of the media player. Note: Pausing of a live stream is not supported.
  */
 Media.prototype.pause = function() {
  }
  /**
   * Stops the playing of the media player.
   */
  Media.prototype.stop = function() {
  }
  