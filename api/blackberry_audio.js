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
* @toc {Media} Audio 
* @BB50+
* @RIPPLE
* @namespace The audio object provides information about supported audio functionality on the device.
* @featureID blackberry.audio
* @featureID blackberry.audio.Player
*/
blackberry.audio = { 

	/**
	* Request the list of supported content types for a specified protocol. 
	* @param {String} protocol The input protocol for the supported content types.
	* @returns {String[]} The list of supported content types for the protocol provided
	* @BB50+
    * @RIPPLE
	* @example
	* &lt;script type=&quot;text/javascript&quot;&gt;
	*   // Display supported content types for specified protocol 
	*   var protocol = &quot;file&quot;;
	*   var contentTypes = blackberry.audio.supportedContentTypes(protocol);
	* 
	*   if (contentTypes) {
	*     var printingContentTypesList = &quot;&quot;;
	*     for (i = 0; i &lt; contentTypes.length; i++) {
	*       printingContentTypesList += contentTypes[i] + &quot;\n&quot;;
	*     }
	*     
	*     alert(&quot;List of &quot; + contentTypes.length + &quot; supported content-types for &apos;&quot; + protocol + &quot;&apos; :\n&quot; + printingContentTypesList);
	*   }    
	* &lt;/script&gt;
	*/
	supportedContentTypes : function(protocol) { },
	
	/**
	* Request the list of supported protocols for a specified content type. 
	* @param {String} content_type The content type for the supported protocols.
	* @returns {String[]} The list of supported protocols for the content type provided
	* @BB50+
    * @RIPPLE
	* @example
	* &lt;script type=&quot;text/javascript&quot;&gt;
	*   // Display all supported protocols
	*   var protocols = blackberry.audio.supportedProtocols(null);
	* 
	*   if (protocols) {
	*     var printingProtocolsList = &quot;&quot;;
	*     for (i = 0; i &lt; protocols.length; i++) {
	*       printingProtocolsList += protocols[i] + &quot;\n&quot;;
	*     }
	*     
	*     alert(&quot;List of &quot; + protocols.length + &quot; supported protocols:\n&quot; + printingProtocolsList);  
	*   }    
	* &lt;/script&gt;
	*/
	supportedProtocols : function(content_type) { }

};






