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
* @PB10
* @BB60+
* @toc {Media} HTML5 Audio
* @extends HTMLMediaElement
*/
HTMLAudioElement = {         
        
        /**
         * @field
         * @constructedBy document.createElement("audio")
         * @description Creates an HTMLAudioElement
         * @example
         * var audio = document.createElement('audio');
         * audio.src = 'audio.wav';
         * audio.controls = true;
         * document.body.appendChild(audio);
         * @PB10
         * @BB60+
         */
        documentConstructor : undefined
        
        /**
         * @field
         * @constructedBy new Audio([String: url])
         * @description An HTMLAudioElement can also be created using the named constructor Audio(). 
         * @param {String} [url] URL of the source
         * @example
         * var audio = new Audio();
         * audio.src = 'audio.wav';
         * @example
         * var audio = new Audio('audio.wav');
         * @PB10
         * @BB60+
         */
        audioConstructor : undefined
};
