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
*/
blackberry.audio = { };


/**
* <div><p>
*       The audio player is intended to play audio content only.
*       It is an instance object; if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {Audio} Player 
* @BB50+
* @class The object represents an audio player.
* @featureID blackberry.audio.Player
* @constructor Construct a new Player object. &lt;div&gt;&lt;p&gt;
&sol;&sol;&sol;              Media locators are specified in URI syntax which is defined in the form:
&sol;&sol;&sol;              &apos;&lt;scheme&gt;:&lt;scheme-specific-part&gt;&apos;.
&sol;&sol;&sol;              If scheme is &apos;local&apos;, media type should be specified.
&sol;&sol;&sol;            &lt;&sol;p&gt;&lt;&sol;div&gt; 
* @param {String} locator Media locator string in URI syntax that describes the media content.
* @param {String} [type] The ContentType of the media.
* @param {Boolean} [async] The parameter specifying whether the player should asynchronously advance to PREFETCHED state. If not provided set to false.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   function createPlayerFromMediaFileStoredInLocal() {
*     var playerInstance = new  blackberry.audio.Player(&quot;local:&sol;&sol;&sol;res&sol;filename.mid&quot;, &quot;audio&sol;mid&quot;, true);
*   }
* 
*   function createPlayerFromMediaFileStoresInSystem() {
*     var playerInstance = new  blackberry.audio.Player(&quot;file:&sol;&sol;&sol;store&sol;home&sol;user&sol;music&sol;filename.mid&quot;);
*   }
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Display some player static and non-static constants.
*   var playerInstance = new  blackberry.audio.Player(&quot;file:&sol;&sol;&sol;store&sol;home&sol;user&sol;music&sol;filename.mid&quot;);
*   var res = blackberry.audio.Player.UNREALIZED;
*   alert(&quot;The value of UNREALIZED static constant is: &quot; + res);
*   res = playerInstance.EVENT_DURATION_UPDATED;
*   alert(&quot;The value of EVENT_DURATION_UPDATED non-static constant is: &quot; + res);
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   var playerInstance = new  blackberry.audio.Player(&quot;file:&sol;&sol;&sol;store&sol;home&sol;user&sol;music&sol;filename.mp3&quot;);
* 
*   &sol;&sol; Setting new time for media
*   var newMediaTime = 10000;
*   playerInstance.mediaTime = newMediaTime;
*   alert(&quot;New media time: &quot; + playerInstance.mediaTime);
* 
*   &sol;&sol; Setting new volume for media
*   var newVolumeLevel = 85;
*   playerInstance.volumeLevel = newVolumeLevel;
*   alert(&quot;New volume level: &quot; + playerInstance.volumeLevel);    
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Playing the player
*   var playerInstance = new  blackberry.audio.Player(&quot;file:&sol;&sol;&sol;store&sol;home&sol;user&sol;music&sol;filename.mp3&quot;);    
*   playerInstance.play();
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Pausing the player and then closing it
*   var playerInstance = new  blackberry.audio.Player(&quot;file:&sol;&sol;&sol;store&sol;home&sol;user&sol;music&sol;filename.mp3&quot;);    
*   playerInstance.pause();
*   playerInstance.close();
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Subscribing and unsubscribing with player&apos;s events
*   var playerInstance = new  blackberry.audio.Player(&quot;file:&sol;&sol;&sol;store&sol;home&sol;user&sol;music&sol;filename.mp3&quot;);    
*   playerInstance.addPlayerListener(OnPlayerUpdate);
* 
*   &sol;&sol; Invoked when there is an update event for the player.
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
* &lt;&sol;script&gt;
*/
blackberry.audio.Player = function(locator,type,async) { };

/**
* The returned value indicating that the requested time is unknown. 
* @type Number
* @constant
* @BB50+
*/
blackberry.audio.Player.TIME_UNKNOWN = -1;

/**
* The state of the Player indicating that the Player is closed. 
* @type Number
* @constant
* @BB50+
*/
blackberry.audio.Player.CLOSED = 0;

/**
* The state of the Player indicating that it has not acquired the required information and resources to function. 
* @type Number
* @constant
* @BB50+
*/
blackberry.audio.Player.UNREALIZED = 100;

/**
* The state of the Player indicating that it has acquired the required information but not the resources to function. 
* @type Number
* @constant
* @BB50+
*/
blackberry.audio.Player.REALIZED = 200;

/**
* The state of the Player indicating that it has acquired all the resources to begin playing. 
* @type Number
* @constant
* @BB50+
*/
blackberry.audio.Player.PREFETCHED = 300;

/**
* The state of the Player indicating that the Player has already started. 
* @type Number
* @constant
* @BB50+
*/
blackberry.audio.Player.STARTED = 400;

/**
* Starts the Player. Returns true on success. 
* @returns {Boolean}
* @BB50+
*/
blackberry.audio.Player.prototype.play = function() { };

/**
* Pause the player&apos;s playback. Returns true on success. 
* @returns {Boolean}
* @BB50+
*/
blackberry.audio.Player.prototype.pause = function() { };

/**
* Closing the Player and releases most of its resources, it must not be used again. 
* @returns {Boolean}
* @BB50+
*/
blackberry.audio.Player.prototype.close = function() { };

/**
* Add a player listener for this player. 
* @param {OnPlayerUpdate} callback This method is called to deliver an event to a registered listener when a Player event is observed.
* @returns {Boolean}
* @BB50+
*/
blackberry.audio.Player.prototype.addPlayerListener = function(callback) { };

/**
* The duration of the media in milliseconds. 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.duration = { };

/**
* The current state of this Player (one of Enumerated Player&apos;s constants). 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.state = { };

/**
* Get&sol;Set Player&apos;s media time. 
* @type Number
* @BB50+
*/
blackberry.audio.Player.prototype.mediaTime = { };

/**
* Get&sol;Set the player&apos;s volume level. 
* @type Number
* @BB50+
*/
blackberry.audio.Player.prototype.volumeLevel = { };

/**
* Posted when the Player enters into a buffering mode. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_BUFFERING_STARTED = { };

/**
* Posted when the Player leaves the buffering mode. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_BUFFERING_STOPPED = { };

/**
* Posted when a Player is closed. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_CLOSED = { };

/**
*  Posted when the system or another higher priority application has released an exclusive device which is now available to the Player. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_DEVICE_AVAILABLE = { };

/**
* Posted when the system or another higher priority application has temporarily taken control of an exclusive device which was previously available to the Player. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_DEVICE_UNAVAILABLE = { };

/**
* Posted when the duration of a Player is updated. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_DURATION_UPDATED = { };

/**
* Posted when a Player has reached the end of the media. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_END_OF_MEDIA = { };

/**
* Posted when an error had occurred. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_ERROR = { };

/**
* Posted when an error occurs during the recording. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_RECORD_ERROR = { };

/**
* Posted when recording is started. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_RECORD_STARTED = { };

/**
* Posted when recording is stopped. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_RECORD_STOPPED = { };

/**
* Posted when the size of the video is changed either because the source video size or the display size is changed. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_SIZE_CHANGED = { };

/**
* Posted when a Player is started. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_STARTED = { };

/**
* Posted when a Player stops in response to the stop method call. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_STOPPED = { };

/**
* Posted when a Player is stopped as responding to the setStopTime call using the StopTimeControl. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_STOPPED_AT_TIME = { };

/**
* Posted when the volume of an audio device is changed. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.audio.Player.prototype.EVENT_VOLUME_CHANGED = { };


/**
* <div><p>
*           This is the interface that must be available on the callback function to receive a player's event data.
*         </p></div>
* @toc {Audio} Player OnPlayerUpdate 
* @BB50+
* @class Interface to provide information about update occured to the Player.
* @constructor 
* @param {Player} player The player which generated the event.
* @param {String} event The event generated as defined by the enumerated types.
* @param {Object} eventData The associated event data.
*/
blackberry.audio.Player.OnPlayerUpdate = function(player,event,eventData) { };


