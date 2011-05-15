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
* The track element allows authors to specify explicit external timed 
* text tracks for media elements. It does not represent anything 
* on its own. <br/><br/>
* There must not be two track element children of the same media 
* element whose kind attributes are in the same state, whose 
* srclang attributes are both missing or have values that represent 
* the same language, and whose label attributes are again both 
* missing or both have the same value.
* @extends HTMLElement
* @BB60+
* @PB10
* @example
* &lt;video src=\&quot;brave.webm\&quot;&gt;
*  &lt;track kind=subtitles src=brave.en.vtt srclang=en label=\&quot;English\&quot;&gt;
*  &lt;track kind=captions src=brave.en.vtt srclang=en label=\&quot;English for the Hard of Hearing\&quot;&gt;
*  &lt;track kind=subtitles src=brave.fr.vtt srclang=fr label=\&quot;Fran&ccedil;ais\&quot;&gt;
*  &lt;track kind=subtitles src=brave.de.vtt srclang=de label=\&quot;Deutsch\&quot;&gt;
* &lt;/video&gt;
*/
HTMLTrackElement = function() { };


/**
 * @field
 * @constructedBy document.createElement("track")
 * @description Creates an HTMLTrackElement
 * @example 
 * var track = document.createElement("track");
 * @PB10
 * @BB60+
 */
HTMLTrackElement.documentConstructor = undefined;

/**
* kind is one of the following strings "subtitles", "captions", 
* "descriptions", "chapters", "metadata"
* @type String
* @BB60+
* @PB10
*/
HTMLTrackElement.prototype.kind = { };


/**
* The src attribute gives the address of the text track data. The 
* value must be a valid non-empty URL potentially surrounded by 
* spaces. This attribute must be presen
* @type String
* @BB60+
* @PB10
*/
HTMLTrackElement.prototype.src = { };


/**
* The srclang attribute gives the language of the text track data. 
* The value must be a valid BCP 47 language tag. This attribute must 
* be present if the element's kind attribute is in the subtitles state.
* @type String
* @BB60+
* @PB10
*/
HTMLTrackElement.prototype.srclang = { };


/**
* The label attribute gives a user-readable title for the track. This 
* title is used by user agents when listing subtitle, caption, 
* and audio description tracks in their user interface<br/><br/>
*
* The value of the label attribute, if the attribute is present, 
* must not be the empty string.
* @type String
* @BB60+
* @PB10
*/
HTMLTrackElement.prototype.label = { };


/**
* The default attribute, if specified, indicates that the track is 
* to be enabled if the user's preferences do not indicate that 
* another track would be more appropriate. There must not be more 
* than one track element with the same parent node with the default 
* attribute specified.
* @type Boolean
* @BB60+
* @PB10
*/
HTMLTrackElement.prototype.default = { };

/**
* Returns the TextTrack object corresponding to the text track of 
* the track element.
* @type TextTrack
* @readOnly
* @BB60+
* @PB10
*/
HTMLSourceElement.prototype.track = { };


