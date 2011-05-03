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
* @toc {Audio} Audio 
* @BB50+
* @namespace The audio object provides information about supported audio functionality on the device.
* @featureID blackberry.audio
* @featureID blackberry.audio.Player
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Display supported content types for specified protocol 
*   var protocol = &quot;file&quot;;
*   var contentTypes = blackberry.audio.supportedContentTypes(protocol);
* 
*   if (contentTypes) {
*     var printingContentTypesList = &quot;&quot;;
*     for (i = 0; i &lt; contentTypes.length; i++) {
*       printingContentTypesList += contentTypes[i] + &quot;&bsol;n&quot;;
*     }
*     
*     alert(&quot;List of &quot; + contentTypes.length + &quot; supported content-types for &apos;&quot; + protocol + &quot;&apos; :&bsol;n&quot; + printingContentTypesList);
*   }    
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Display all supported protocols
*   var protocols = blackberry.audio.supportedProtocols(null);
* 
*   if (protocols) {
*     var printingProtocolsList = &quot;&quot;;
*     for (i = 0; i &lt; protocols.length; i++) {
*       printingProtocolsList += protocols[i] + &quot;&bsol;n&quot;;
*     }
*     
*     alert(&quot;List of &quot; + protocols.length + &quot; supported protocols:&bsol;n&quot; + printingProtocolsList);  
*   }    
* &lt;&sol;script&gt;
*/
blackberry.audio = { };

/**
* Return the list of supported content types for the given protocol. 
* @param {String} protocol The input protocol for the supported content types.
* @returns {String[]}
* @BB50+
*/
blackberry.audio.supportedContentTypes = function(protocol) { };

/**
* Return the list of supported protocols given the content type. 
* @param {String} content_type The content type for the supported protocols.
* @returns {String[]}
* @BB50+
*/
blackberry.audio.supportedProtocols = function(content_type) { };


