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
* <div><p>
*       Transport objects behave like a registry, in that they allow you to keep track of the various configuration settings of your BlackBerry device.  The Transport object is an instance object that cannot be created using the new keyword.
*     </p></div>
* @toc {Identity} Transport 
* @BB50+
* @RIPPLE
* @namespace Transport objects are used to store information about BlackBerry connections such as BES, BIS-B, Unite and Hotspots.
* @featureID blackberry.identity
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;    
*   var transports = blackberry.identity.getTransportList();
*   for (var i = 0; i &lt; transports.length;i++) {
*     if (transports[i].type == &quot;BES&quot;) {
*       alert(&quot;You are registered with a BES&quot;);
*       break;
*     }
*   }  
* &lt;&sol;script&gt;
*/
blackberry.identity.Transport = { };

/**
* Specifies the name of the Transport, for example, &apos;Desktop&apos;, &apos;Unite&apos;, or &apos;BIS&apos;. 
* @type String
* @readOnly
* @BB50+
* @RIPPLE
*/
blackberry.identity.Transport.prototype.name = { };

/**
* Specifies the type of the Transport.  Can be one of the following: TCP Cellular, Wap, Wap 2.0, MDS, Bis B, Unite!, or TCP Wifi. 
* @type String
* @readOnly
* @BB50+
* @RIPPLE
*/
blackberry.identity.Transport.prototype.type = { };


