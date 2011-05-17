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
* All media elements have an associated error status, which records 
* the last error the element encountered since its resource selection 
* algorithm was last invoked. The error attribute, on getting, must 
* return the MediaError object created for this last error, or null if 
* there has not been an error.
* @BB60+
* @PB10
*/
MediaError = function() { }

/**
* The fetching process for the media resource was aborted by the user 
* agent at the user's request.
* @constant
* @type Number
* @BB60+
* @PB10
*/
MediaError.MEDIA_ERR_ABORTED = 1;

/**
* A network error of some description caused the user agent to stop 
* fetching the media resource, after the resource was established to 
* be usable.
* @constant
* @type Number
* @BB60+
* @PB10
*/
MediaError.MEDIA_ERR_NETWORK = 2;

/**
* An error of some description occurred while decoding the media 
* resource, after the resource was established to be usable.
* @constant
* @type Number
* @BB60+
* @PB10
*/
MediaError.MEDIA_ERR_DECODE = 3;

/**
* The media resource indicated by the src attribute was not suitable.
* @constant
* @type Number
* @BB60+
* @PB10
*/
MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;


/**
* The code attribute of a MediaError object must return the code for 
* the error
* @type Number|MediaError.MEDIA_ERR_ABORTED|MEDIA_ERR_NETWORK|MediaError.MEDIA_ERR_DECODE|MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED
* @readOnly
* @BB60+
* @PB10
*/
MediaError.prototype.code = { }

/**
* @namespace
* Objects implementing the TimeRanges interface represent a list of 
* ranges (periods) of time. <br/><br/>
*
* When a TimeRanges object is said to be a normalized TimeRanges 
* object, the ranges it represents must obey the following criteria:
* The start of a range must be greater than the end of all earlier ranges.
* The start of a range must be less than the end of that same range.
* In other words, the ranges in such an object are ordered, don't 
* overlap, aren't empty, and don't touch (adjacent ranges are folded 
* into one bigger range).
* @BB60+
* @PB10
*/
TimeRanges = function() { }


/**
* Returns a MediaError object representing the current error state of the element.
* Returns null if there is no error.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
TimeRanges.prototype.length = { };

/**
* Returns the time for the start of the range with the given index.
* @param {Number} index
* @BB60+
* @PB10
*/
TimeRanges.prototype.start = function(index) { };

/**
* Returns the time for the end of the range with the given ind
* @param {Number} index
* @BB60+
* @PB10
*/
TimeRanges.prototype.end = function(index) { };


/**
* @class
* Media elements are used to present audio data, or video and 
* audio data, to the user. This is referred to as media data in 
* this section, since this section applies equally to media 

* elements for audio or for video.
* @extends HTMLElement
*/
HTMLMediaElement = function() { }

/**
* Returns a MediaError object representing the current error state of the element.
* Returns null if there is no error.
* @type MediaError|null
* @readOnly
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.error = { };

/**
* The src content attribute on media elements gives the address of the 
* media resource (video, audio) to show. The attribute, if present, 
* must contain a valid non-empty URL potentially surrounded by spaces.
*
* If a src attribute of a media element is set or changed, the user 
* agent must invoke the media element's media element load algorithm. 
* (Removing the src attribute does not do this, even if there are 
* source elements present).
* @type String
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.src = { };

/**
* The currentSrc IDL attribute is initially the empty string. If 
* absolute URL in 'src' was obtained successfully, set the currentSrc 
* attribute to absolute URL.
* @readOnly
* @type String
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.currentSRC = { };

/**
* The element has not yet been initialized. All attributes are in their 
* initial states.
* @constant
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.NETWORK_EMPTY = 0;

/**
* The element's resource selection algorithm is active and has 
* selected a resource, but it is not actually using the network at this time.
* @constant
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.NETWORK_IDLE = 1;

/**
* The element's resource selection algorithm is active, but it has not 
* yet found a resource to use.
* @constant
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.NETWORK_LOADING = 2;

/**
* The user agent is actively trying to download data.
* @constant
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.NETWORK_NO_SOURCE = 3;


/**
* As media elements interact with the network, their current network 
* activity is represented by the networkState attribute. On getting, 
* it must return the current network state of the element
* @type Number|HTMLMediaElement.NETWORK_EMPTY|HTMLMediaElement.NETWORK_IDLE|HTMLMediaElement.NETWORK_LOADING|HTMLMediaElement.NETWORK_NO_SOURCE
* @readOnly
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.networkState = { };

/**
* The preload attribute is intended to provide a hint to the user agent 
* about what the author thinks will lead to the best user experience. The 
* attribute may be ignored altogether, for example based on explicit user 
* preferences or based on the available connectivity. <br/><br/>
*
* The preload attribute is an enumerated attribute. The following table 
* lists the keywords and states for the attribute � the keywords in the 
* left column map to the states in the cell in the second column on the 
* same row as the keyword. <br/><br/>
*
* &lt;table&gt;l
*     &lt;thead&gt;&lt;tr&gt;
*         &lt;th&gt;Keyword&lt;/th&gt;
*         &lt;th&gt;State&lt;/th&gt;
*         &lt;th&gt;Brief description&lt;/th&gt;
*     &lt;/tr&gt;&lt;/thead&gt;
*     &lt;tbody&gt;
*         &lt;tr&gt;
*             &lt;td&gt;&lt;code&gt;none&lt;/code&gt;&lt;/td&gt;
*             &lt;td&gt;None&lt;/td&gt;
*             &lt;td&gt;Hints to the user agent that either the author does not expect the user to need the media resource, or that the server wants to minimise unnecessary traffic.&lt;/td&gt;
*         &lt;/tr&gt;
*         &lt;tr&gt;
*             &lt;td&gt;&lt;code&gt;metadata&lt;/code&gt;&lt;/td&gt;
*             &lt;td&gt;Metadata&lt;/td&gt;
*             &lt;td&gt;Hints to the user agent that the author does not expect the user to need the media resource, but that fetching the resource metadata (dimensions, first frame, track list, duration, etc) is reasonable.&lt;/td&gt;
*         &lt;/tr&gt;
*         &lt;tr&gt;
*             &lt;td&gt;&lt;code&gt;auto&lt;/code&gt;&lt;/td&gt;
*             &lt;td&gt;Automatic&lt;/td&gt;
*             &lt;td&gt;Hints to the user agent that the user agent can put the user\&#039;s needs first without risk to the server, up to and including optimistically downloading the entire resource.&lt;/td&gt;
*         &lt;/tr&gt;
*     &lt;/tbody&gt;
* &lt;/table&gt;
* @type String
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.preload = { };

/**
* The buffered attribute must return a new static normalized TimeRanges 
* object that represents the ranges of the media resource, if any, that 
* the user agent has buffered, at the time the attribute is evaluated.
* @type TimeRanges
* @readOnly
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.buffered;

/**
* Causes the element to reset and start selecting and loading a 
* new media resource from scratch.
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.load = function () { };


/**
* Returns the empty string (a negative response), "maybe", or 
* "probably" based on how confident the user agent is that it can 
* play media resources of the given type.
* @param {String} type The media type you are trying to play, for example: "application/octet-stream;codecs=theora" would return an empty string.
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.canPlayType = function(type) { };

/**
* No information regarding the media resource is available. No data 
* for the current playback position is available. Media elements whose 
* networkState attribute are set to NETWORK_EMPTY are always in the 
* HAVE_NOTHING state.
* @constant
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.HAVE_NOTHING = 0;

/**
* Enough of the resource has been obtained that the duration of the 
* resource is available. In the case of a video element, the 
* dimensions of the video are also available. The API will no longer 
* raise an exception when seeking. No media data is available for the 
* immediate current playback position. The text tracks are ready.
* @constant
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.HAVE_METADATA = 1;

/**
* Data for the immediate current playback position is available, but 
* either not enough data is available that the user agent could 
* successfully advance the current playback position in the direction 
* of playback at all without immediately reverting to the HAVE_METADATA 
* state, or there is no more data to obtain in the direction of 
* playback. For example, in video this corresponds to the user agent 
* having data from the current frame, but not the next frame; and to 
* when playback has ended.
* @constant
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.HAVE_CURRENT_DATA = 2;

/**
* Data for the immediate current playback position is available, 
* as well as enough data for the user agent to advance the current 
* playback position in the direction of playback at least a little 
* without immediately reverting to the HAVE_METADATA state. For 
* example, in video this corresponds to the user agent having data 
* for at least the current frame and the next frame. The user agent 
* cannot be in this state if playback has ended, as the current playback position can never advance in this case.
* @constant
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.HAVE_FUTURE_DATA = 3;

/**
* All the conditions described for the HAVE_FUTURE_DATA state are met, 
* and, in addition, the user agent estimates that data is being 
* fetched at a rate where the current playback position, if it were 
* to advance at the rate given by the defaultPlaybackRate attribute, 
* would not overtake the available data before playback reaches the 
* end of the media resource.
* @constant
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.HAVE_ENOUGH_DATA = 4;


/**
* on getting, return the value described above that describes the 
* current ready state of the media element.
* @type Number|HTMLMediaElement.HAVE_NOTHING|HTMLMediaElement.HAVE_METADATA|HTMLMediaElement.HAVE_CURRENT_DATA|HTMLMediaElement.HAVE_FUTURE_DATA|HTMLMediaElement.HAVE_ENOUGH_DATA
* @readOnly
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.readyState = { };

/**
* Returns true if the user agent is currently seeking. The seeking 
* attribute must initially have the value false.
* @type Boolean
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.seeking = { };

/**
* The currentTime attribute must, on getting, return the current 
* playback position, expressed in seconds. On setting, the user agent 
* must seek to the new value (which might raise an exception).
* @type Number
* @BB60+
* @PB10
*/

HTMLMediaElement.prototype.currentTime = { };


/**
* return the initial playback position, expressed in seconds.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.initialTime = { };

/**
* The duration attribute must return the time of the end of the media resource, in seconds.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.duration = {};

/**
* The startOffsetTime attribute must return a new Date object representing the current timeline offset.
* @type Date
* @readOnly
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.startOffsetTime = { };

/**
* The paused attribute represents whether the media element is paused or not. The attribute must initially be true.
* @type Boolean
* @readOnly
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.paused = { };

/**
* The defaultPlaybackRate attribute gives the desired speed at which 
* the media resource is to play, as a multiple of its intrinsic speed. 
* The attribute is mutable: on getting it must return the last value 
* it was set to, or 1.0 if it hasn't yet been set; on setting the 
* attribute must be set to the new value.
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.defaultPlaybackRate = { };

/**
* The playbackRate attribute gives the speed at which the media resource 
* plays, as a multiple of its intrinsic speed. If it is not equal to 
* the defaultPlaybackRate, then the implication is that the user is 
* using a feature such as fast forward or slow motion playback. The 
* attribute is mutable: on getting it must return the last value it 
* was set to, or 1.0 if it hasn't yet been set; on setting the 
* attribute must be set to the new value, and the playback must 
* change speed (if the element is potentially playing).
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.playbackRate = { };

/**
* The played attribute must return a new static normalized TimeRanges 
* object that represents the ranges of the media resource, if any, 
* that the user agent has so far rendered, at the time the attribute 
* is evaluated.
* @type TimeRanges
* @readOnly
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.played = { };

/**
* The seekable attribute must return a new static normalized TimeRanges 
* object that represents the ranges of the media resource, if any, 
* that the user agent is able to seek to, at the time the attribute 
* is evaluated.
* @type TimeRanges
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.seekable = { };

/**
* The ended attribute must return true if the media element has ended 
* playback and the direction of playback is forwards, and false 
* otherwise.
* @type Boolean
* @readOnly
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.ended = { };

/**
* If true, the user agent will automatically begin playback of the media 
* resource as soon as it can do so without stopping.
* @type Boolean
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.autoplay = { };

/**
* If set to "true", the loop attribute indicates that the media 
* element is to seek back to the start of the media resource upon 
* reaching the end.
* @type Boolean
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.loop = { };

/**
* Play the video. If the video has ended, the player will seek to the 
* beginning and start again. 
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.play = function() { };

/**
* Pause playback of the video.
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.pause =  function() { };

/**
* Indicates that the author has not provided a scripted controller and 
* would like the user agent to provide its own set of controls.
* @type Boolean
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.controls = { };

/**
* Return the playback volume of any audio portions of the media 
* element, in the range 0.0 (silent) to 1.0 (loudest). Initially, 
* the volume must be 1.0, but user agents may remember the last set 
* value across sessions, on a per-site basis or otherwise, so the 
* volume may start at other values. On setting, if the new value is 
* in the range 0.0 to 1.0 inclusive, the attribute must be set to 
* the new value.
* @type Number
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.volume = { };

/**
* Must return true if the audio channels are muted and false otherwise. 
* @type Boolean
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.muted = { };

/**
* TextTrackCue 
* @class
* @extends EventTarget
*/
TextTrackCue = function() { }

/**
* Returns the TextTrack object to which this text track cue belongs, 
* if any, or null otherwise.
* @type TextTrack
* @readOnly
* @BB60+
* @PB10
*/
TextTrackCue.prototype.track = { };

/**
* Returns the text track cue identifier.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
TextTrackCue.prototype.id = { };

/**
* Returns the text track cue start time, in seconds.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
TextTrackCue.prototype.startTime = { };

/**
* Returns the text track cue end time, in seconds.
* @type 
* @readOnly
* @BB60+
* @PB10
*/
TextTrackCue.prototype.endTime = { };

/**
* Returns true if the text track cue pause-on-exit flag is set, false otherwise.
* @type Boolean
* @readOnly
* @BB60+
* @PB10
*/
TextTrackCue.prototype.pauseOnExit = { };

/**
* Fire the onenter event if the current position now includes this
* text cue. 
* @BB60+
* @PB10
* @event
* @param {Event} event
*/
TextTrack.prototype.onenter = function(event) { };

/**
* Fire the onexit event if the current position no longer includes this
* text cue. 
* @BB60+
* @PB10
* @event
* @param {Event} event
*/
TextTrack.prototype.onexit = function(event) { };

/**
* Returns the text track cue text in raw unparsed form.
* @returns String
* @BB60+
* @PB10
*/
TextTrackCue.prototype.getCueAsSource = function() { };

/**
* Returns the text track cue text as a {DocumentFragment} of 
* HTML elements and other DOM nodes.
* @returns String
* @BB60+
* @PB10
*/
TextTrackCue.prototype.getCueAsHTML = function() { };


/**
* @namespace
* A {@link TextTrackCueList} object represents a dynamically updating list 
* of {@link TextTrackCue}s in a given order.
* @BB60+
* @PB10
*/
TextTrackCueList = function() { }


/**
* Returns the {@link TextTrackCue} with index index from the list.
* @squareAccessor
* @function
* @param {Number} Index the identifier of the text track cue to fetch.
* @returns {TextTrackCue}The {@link TextTrackCue} with index index from the list.
* @readOnly
* @throws {IndexOutOfBoundsException} When the index is invalid.
* @BB60+
* @PB10
*/
TextTrackCueList.prototype.item = function(index) { };


/**
* Returns the number of cues in the list.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
TextTrackCueList.prototype.length = { };

/**
* Returns the number of cues in the list.
* @param {String} id Returns the first text track cue (in text track cue order) with text track cue identifier id. Returns null if none of the cues have the given identifier or if the argument is the empty string.
* @returns TextTrackCue
* @BB60+
* @PB10
*/
TextTrackCueList.prototype.getCueById = function(id) { };



/**
* TextTrack is a used to store a collection of text that accompany the 
* the loaded media.
* @class
* @extends EventTarget
* @BB60+
* @PB10
*/
TextTrack = function() { }

/**
* Kind is one of the following strings "subtitles", "captions", 
* "descriptions", "chapters", "metadata".
* @type String
* @readOnly
* @BB60+
* @PB10
*/
TextTrack.prototype.kind = { };

/**
* text track label
* @type String
* @readOnly
* @BB60+
* @PB10
*/
TextTrack.prototype.label = { };

/**
* Language of the text track.
* @type String
* @readOnly
* @BB60+
* @PB10
*/
TextTrack.prototype.language = { };

/**
* The text track not loaded state.
* @type Number
* @constant
* @BB60+
* @PB10
*/
TextTrack.NONE = 0;

/**
* The text track loading state.
* @type Number
* @constant
* @BB60+
* @PB10
*/
TextTrack.LOADING = 1;

/**
* The text track loaded state.
* @type Number
* @constant
* @BB60+
* @PB10
*/
TextTrack.LOADED = 2;

/**
* The text track failed to load state.
* @type Number
* @constant
* @BB60+
* @PB10
*/
TextTrack.ERROR = 3;

/**
* The readyState attribute must return the numeric value corresponding to the text track readiness state of the text track
* @type Number|TextTrack.NONE|TextTrack.LOADING|TextTrack.LOADED|TextTrack.ERROR
* @readOnly
* @BB60+
* @PB10
*/
TextTrack.prototype.readyState = { };

/**
* Fire the onload if the {@link TextTrack} has loaded.
* @BB60+
* @PB10
* @event
* @param {Event} event
*/
TextTrack.prototype.onload = function(event) { };

/**
* Fire the onerror event if an error has occured with this {@link TextTrack}.
* For example loading has failed.
* @BB60+
* @PB10
* @event
* @param {Event} event
*/
TextTrack.prototype.onerror = function(event) { };

/**
* The text track disabled mode.
* @type Number
* @constant
* @BB60+
* @PB10
*/
TextTrack.OFF = 0;

/**
* The text track hidden mode.
* @type Number
* @constant
* @BB60+
* @PB10
*/
TextTrack.HIDDEN = 1;

/**
* The text track showing and showing by default modes.
* @type Number
* @constant
* @BB60+
* @PB10
*/
TextTrack.SHOWING = 2;

/**
* The mode attribute, on getting, must return the numeric value 
* corresponding to the text track mode of the text track that the 
* TextTrack object represents.
* @type Number|TextTrack.OFF|TextTrack.HIDDEN|TextTrack.SHOWING
* @BB60+
* @PB10
*/
TextTrack.prototype.mode = { };


/**
* If the text track mode of the text track that the TextTrack object 
* represents is not the text track disabled mode, then the cues 
* attribute must return a live {@link TextTrackCueList} object that represents 
* the subset of the text track list of cues of the text track that 
* the TextTrack object represents whose start times occur before the 
* earliest possible position when the script started, in text track 
* cue order. Otherwise, it must return {@link null}. When an object is 
* returned, the same object must be returned each time.
* @type TextTrackCueList
* @readOnly
* @BB60+
* @PB10
*/
TextTrack.prototype.cues = { };

/**
* If the text track mode of the text track that the TextTrack object 
* represents is not the text track disabled mode, then the activeCues 
* attribute must return a live TextTrackCueList object that represents 
* the subset of the text track list of cues of the text track that the 
* TextTrack object represents whose active flag was set when the 
* script started, in text track cue order. Otherwise, it must 
* return null. When an object is returned, the same object must be 
* returned each time.
* @type TextTrackCueList
* @readOnly
* @BB60+
* @PB10
*/
TextTrack.prototype.activeCues = { };


/**
* When the current playback position of a media element changes fire 
* an oncuechange event for affected track if the text cue becomes 
* active.
* @BB60+
* @PB10
* @event
* @param {Event} event
*/
TextTrack.prototype.oncuechange = function(event) { };


/**
* Text track that can be modified
* @class
* @extends TextTrack
*/
MutableTextTrack = function() { }


/**
* Adds the given cue to mutableTextTrack's text track list of cues.
*
* Raises an exception if the argument is null, associated with 
* another text track, or already in the list of cues.
* @BB60+
* @PB10
* @event
* @param {TextTrackCue} cue the cue to add
*/
MutableTextTrack.prototype.addCue(cue) { }

/**
* Removes the given cue from mutableTextTrack's text track 
* list of cues.
*
* Raises an exception if the argument is null, associated with 
* another text track, or not in the list of cues.
* @BB60+
* @PB10
* @event
* @param {TextTrackCue} cue the cue to remove
*/
MutableTextTrack.prototype.removeCue(cue) { }

/**
* Returns the TextTrack objects of the text tracks in the media 
* element's list of text tracks, in the same order as in the list 
* of text tracks.
* @type TextTrack[]
* @readOnly
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.textTracks = { };

/**
* Creates and returns a new {@link MutableTextTrack} object, which is also 
* added to the media element's list of text tracks.
* @param {String} kind Kind is one of the following strings "subtitles", "captions", "descriptions", "chapters", "metadata"
* @param {String} label Text track label
* @param {String} language Language of the text track
* @returns {MutableTextTrack}
* @BB60+
* @PB10
*/
HTMLMediaElement.prototype.addTrack = function(kind, label, language) { };


