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
* The source element allows authors to specify multiple alternative 
* media resources for media elements. It does not represent anything 
* on its own.
* @extends HTMLElement
* @example
* &lt;video controls autoplay&gt;
*  &lt;source src=\&#039;video.mp4\&#039; type=\&#039;video/mp4; codecs=\&quot;avc1.42E01E, mp4a.40.2\&quot;\&#039;&gt;
*  &lt;source src=\&#039;video.ogv\&#039; type=\&#039;video/ogg; codecs=\&quot;theora, vorbis\&quot;\&#039;
*          onerror=\&quot;fallback(parentNode)\&quot;&gt;
*  ...
* &lt;/video&gt;
*/
HTMLSourceElement = function() { };

/**
 * @field
 * @constructedBy document.createElement("source")
 * @description Creates an HTMLSourceElement
 * @example
 * var source = document.createElement("source");
 * @PB10
 * @BB60+
 */
HTMLSourceElement.documentConstructor = undefined;

/**
* The src attribute gives the address of the media resource. The value 
* must be a valid non-empty URL potentially surrounded by spaces. This 
* attribute must be present.
* @type String
* @BB60+
* @PB10
*/
HTMLSourceElement.prototype.src = { };

/**
* 
* @type String
* @BB60+
* @PB10
*/
HTMLSourceElement.prototype.type = { };

/**
* 
* @type String
* @BB60+
* @PB10
*/
HTMLSourceElement.prototype.media = { };

