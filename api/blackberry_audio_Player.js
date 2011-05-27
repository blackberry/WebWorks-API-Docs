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
* <div>
* Audio Player object for BlackBerry 5.0 smartphones that do not support the HTML5 &lt;audio&gt; element<br/><br/>
* Media locators are specified in URI syntax which is defined in the form: &apos;&lt;scheme&gt;:&lt;scheme-specific-part&gt;&apos;. 
* If scheme is &apos;local&apos;, media type should be specified.
* </div>
* @toc {Media} Audio Player 
* @BB50+
* @class The audio player is an API introduced so that audio can be played on the BlackBerry 5.0 operating system since the 
*		HTML5 &lt;audio&gt; element is not yet supported on this OS. The audio player is intended to play audio files only 
*		which does <b>not</b> include streaming audio.
*		<br/><br/>
*		It is recommended that you use the HTML5 &lt;audio&gt; element on BlackBerry Operating Systems with versions higher than OS 5.0 as well as on the Tablet OS.
*		<br/><br/>
*       The audio Player object is an instance object; if a new instance is desired, it must be created using the new keyword.
* @featureID blackberry.audio.Player
* @constructor Construct a new Player object. 
* @param {String} locator Media locator string in URI syntax that describes the media content.
* @param {String} [type] The ContentType of the media.
* @param {Boolean} [async] The parameter specifying whether the player should asynchronously advance to PREFETCHED state. If not provided set to false.
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;
*
*   function createPlayerFromMediaFileStoredInLocal() {
*     var playerInstance = new  blackberry.audio.Player(&quot;local:///res/filename.mid&quot;, &quot;audio/mid&quot;, true);
*   }
* 
*   function createPlayerFromMediaFileStoresInSystem() {
*     var playerInstance = new  blackberry.audio.Player(&quot;file:///store/home/user/music/filename.mid&quot;);
*   }
* &lt;/script&gt;
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;
*   // Display some player static and non-static constants.
*   var playerInstance = new  blackberry.audio.Player(&quot;file:///store/home/user/music/filename.mid&quot;);
*   var res = blackberry.audio.Player.UNREALIZED;
*   alert(&quot;The value of UNREALIZED static constant is: &quot; + res);
*   res = playerInstance.EVENT_DURATION_UPDATED;
*   alert(&quot;The value of EVENT_DURATION_UPDATED non-static constant is: &quot; + res);
* &lt;/script&gt;
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;
*   var playerInstance = new  blackberry.audio.Player(&quot;file:///store/home/user/music/filename.mp3&quot;);
* 
*   // Setting new time for media
*   playerInstance.mediaTime = 10000;
*   alert(&quot;New media time: &quot; + playerInstance.mediaTime);
* 
*   // Setting new volume for media
*   playerInstance.volumeLevel = 85;
*   alert(&quot;New volume level: &quot; + playerInstance.volumeLevel);    
* &lt;/script&gt;

*/
blackberry.audio.Player = function(locator,type,async) { 

	/**
	* Starts playing the loaded content.  
	* @returns {Boolean} Returns true if the player successfully starts playing
	* @BB50+
	* @example
	* &lt;script type=&quot;text/javascript&quot;&gt;
	*   &sol;&sol; Playing the player
	*   var playerInstance = new  blackberry.audio.Player(&quot;file:&sol;&sol;&sol;store&sol;home&sol;user&sol;music&sol;filename.mp3&quot;);    
	*   playerInstance.play();
	* &lt;/script&gt;
	*/
	play : function() { },

	/**
	* Pause the player&apos;s playback.  
	* @returns {Boolean} Returns true if the player is successfully paused
	* @BB50+
	* @example
	* &lt;script type=&quot;text/javascript&quot;&gt;
	*   // Pausing the player and then closing it
	*   var playerInstance = new  blackberry.audio.Player(&quot;file:///store/home/user/music/filename.mp3&quot;);    
	*   playerInstance.pause();
	*   playerInstance.close();
	* &lt;/script&gt;
	*/
	pause : function() { },

	/**
	* Closing the Player and releases most of its resources, it must not be used again. 
	* @returns {Boolean} Returns true if the player is successfully closed
	* @BB50+
	*/
	close : function() { },

	/**
	* Add a player listener for this player.  All subsequent calls assigning a new onPlayerUpdate callback will override the previous callback assigned. To unsubscribe from the PlayerListener, pass null as an onPlayerUpdate parameter.
	* @callback {function} [onPlayerUpdate] This callback function is called to deliver an event to a registered listener when a Player event is observed.
	* @callback {blackberry.audio.Player} [onPlayerUpdate.player] The player which generated the event.
	* @callback {String} [onPlayerUpdate.event] The event generated as defined by the enumerated types.
	* @callback {Object} [onPlayerUpdate.eventData] The associated event data.
	* @returns {Boolean} Returns true if the callback is successfully assigned
	* @BB50+
	* @example
	* &lt;script type=&quot;text/javascript&quot;&gt;
	*   // Subscribing and unsubscribing with player&apos;s events
	*   var playerInstance = new  blackberry.audio.Player(&quot;file:///store&sol;home/user/music/filename.mp3&quot;);    
	*   playerInstance.addPlayerListener(OnPlayerUpdate);
	* 
	*   // Invoked when there is an update event for the player.
	*   function OnPlayerUpdate(player, event, eventData) {
	*     try {
	*       alert(&quot;Player&apos;s duration is: &quot; + player.duration)
	*     } catch (e) {}
	*     try {
	*       alert(&quot;Event: &quot; + event);
	*     } catch (e) {}
	*     try {
	*       alert(&quot;Event Data:  &quot; + eventData);
	*     } catch (e) {}
	* 
	*     playerInstance.addPlayerListener(null);
	*   }
	* &lt;/script&gt;
	*/
	addPlayerListener : function(onPlayerUpdate) { },
	
	
	/**
	* The duration of the media in milliseconds. 
	* @type Number
	* @readOnly
	* @BB50+
	*/
	duration : 0,

	/**
	* The current state of this Player (one of Enumerated Player&apos;s constants). 
	* @type Number
	* @readOnly
	* @BB50+
	*/
	state : 0,

	/**
	* Get&sol;Set Player&apos;s media time. 
	* @type Number
	* @BB50+
	*/
	mediaTime : 0,

	/**
	* Get/Set the player&apos;s volume level.  Valid values are between 0 and 100.
	* @type Number
	* @BB50+
	*/
	volumeLevel : 0,

	/**
	* Posted when the Player enters into a buffering mode. <br/><br/>
	* When this event is received, the eventdata parameter will be a number designating the media time when the buffering is started.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_BUFFERING_STARTED : ,

	/**
	* Posted when the Player leaves the buffering mode. <br/><br/>
	* When this even is received, the eventData parameter will be a number designating the media time when the buffering stopped.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_BUFFERING_STOPPED : ,

	/**
	* Posted when a Player is closed. <br/><br/>
	* When this event is received, the eventData parameter is null.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_CLOSED : ,

	/**
	* Posted when the system or another higher priority application has released an exclusive device which is now available to the Player. <br/><br/>
	* The eventData parameter is a string specifying the name of the device.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_DEVICE_AVAILABLE : ,

	/**
	* Posted when the system or another higher priority application has temporarily taken control of an exclusive device which was previously available to the Player. <br/><br/>
	* The eventData parameter is a string specifying the name of the device.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_DEVICE_UNAVAILABLE : ,

	/**
	* Posted when the duration of a Player is updated. <br/><br/>
	* When this event is received, the eventData parameter will be a number designating the duration of the media.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_DURATION_UPDATED : ,

	/**
	* Posted when a Player has reached the end of the media. <br/><br/>
	* When this event is received, the eventData parameter will be a number designating the media time when the player reached end of media and stopped.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_END_OF_MEDIA : ,

	/**
	* Posted when an error had occurred. <br/><br/>
	* When this event is received, the eventData parameter will be a string object specifying the error message. Error code: 
	* <ol>
	* <li>Media player busy: the media player is currently performing an operation that precludes the requested operation.</li>
	* <li>Invalid parameter: a parameter was specified with an invalid value. </li>
	* <li>Insufficient memory: there is insufficient memory to perform the requested operation.</li>
	* <li>Need more data: playback cannot proceed until the streaming source provides more data. </li>
	* <li>Unspecified: some error occured which does not fit into any other category. </li>
	* <li>Format: an error in the media file was detected. </li>
	* <li>No server response: a server has stopped responding. </li>
	* <li>Connetion lost: the current connection has been dropped. </li>
	* <li>DNS resolve error: an invalid URL has been detected. </li>
	* <li>Unseekable: the media player needs to seek in the file in order to access headers, but can&apos;t since the file being played is unseekable.</li>
	* <li>Connection timeout: the (streaming) server is unreachable. </li>
	* <li>No rights: The DRM agent wasn&apos;t able to find a valid digital right in the media. RTSP error 401 has occurred.</li>
	* <li>General client error: The streaming server rejected the streaming request. RTSP error 4xx not covered by another error code has occurred. </li>
	* <li>Server error: An error occured on the streaming server while streaming. RTSP error 5xx has occurred. </li>
	* <li>Payment required: Payment is required to stream this item from the server. RTSP error 402 has occurred. </li>
	* <li>Forbidden: The streaming server has rejected the streaming request for security reasons. RTSP error 403 has occurred. </li>
	* <li>Client file not found: The item required to stream doesn&apos;t exist or has been removed from the server. RTSP error 404 has occurred. </li>
	* <li>Client proxy authentication required: Device needs to authenticate with a proxy server before streaming. RTSP error 407 has occurred. </li>
	* <li>Client request URI too large: The request URI sent to the server is too large. RTSP error 414 has occurred. </li>
	* <li>Not enough bandwidth: There is not enough bandwidth to support streaming. RTSP error 453 has occurred. </li>
	* <li>Client session not found: Streaming session has been removed by the server (e.g.: when paused for too long). RTSP error 454 has occurred. </li>
	* <li>Unsupported transport: The streaming server/network doesn&apos;t support UDP/TCP streaming. RTSP error 461 has occurred. </li>
	* </ol>
	* <ol start="29">
	* <li>Switch cannot be completed: Try to do a fast content switch but failed. The server returned 4xx/5xx error.</li>
	* </ol>
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_ERROR : ,

	/**
	* Posted when an error occurs during the recording. <br/><br/>
	* When this event is received, the eventData parameter will be a string object specifying the error message.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_RECORD_ERROR : ,

	/**
	* Posted when recording is started. <br/><br/>
	* When this event is received, the eventData parameter will be a number designating the media time when the recording is started.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_RECORD_STARTED : ,

	/**
	* Posted when recording is stopped. <br/><br/>
	* When this event is received, the eventData parameter will be a number designating the media time when the recording stopped.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_RECORD_STOPPED : ,

	/**
	* Posted when the size of the video is changed either because the source video size or the display size is changed. <br/><br/>
	* When this event is received, the eventdata parameter will be null.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_SIZE_CHANGED : ,

	/**
	* Posted when a Player is started. <br/><br/>
	* When this event is received, the eventData parameter will be a number designating the media time when the player is started.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_STARTED : ,

	/**
	* Posted when a Player stops in response to the stop method call. <br/><br/>
	* When this event is received, the eventData parameter will be a number designating the media time when the player stopped.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_STOPPED : ,

	/**
	* Posted when a Player is stopped as responding to the setStopTime call using the StopTimeControl.<br/><br/>
	* When this event is received, the eventData parameter will be a number designating the media time when the player is stopped.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_STOPPED_AT_TIME : ,

	/**
	* Posted when the volume of an audio device is changed. <br/><br/>
	* When this event is received, the eventData parameter will be null.
	* @type String
	* @readOnly
	* @BB50+
	*/
	EVENT_VOLUME_CHANGED : ,

	/**
	* The returned value indicating that the requested time is unknown. 
	* @type Number
	* @constant
	* @default -1
	* @BB50+
	*/
	TIME_UNKNOWN : -1,
	
	/**
	* The state of the Player indicating that the Player is closed. 
	* @type Number
	* @constant
	* @default 0
	* @BB50+
	*/
	CLOSED : 0;

	/**
	* The state of the Player indicating that it has not acquired the required information and resources to function. 
	* @type Number
	* @constant
	* @default 100
	* @BB50+
	*/
	UNREALIZED : 100,

	/**
	* The state of the Player indicating that it has acquired the required information but not the resources to function. 
	* @type Number
	* @constant
	* @default 200
	* @BB50+
	*/
	REALIZED : 200,

	/**
	* The state of the Player indicating that it has acquired all the resources to begin playing. 
	* @type Number
	* @constant
	* @default 300
	* @BB50+
	*/
	PREFETCHED : 300,

	/**
	* The state of the Player indicating that the Player has already started. 
	* @type Number
	* @constant
	* @default 400
	* @BB50+
	*/
	STARTED = 400


};










