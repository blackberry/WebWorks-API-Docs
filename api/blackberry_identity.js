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
* @toc {Identity} Identity 
* @BB50+
* @namespace The Identity object contains information regarding the user&apos;s identity and accounts on a BlackBerry smartphone.
* @featureID blackberry.identity
* @featureID blackberry.identity.phone
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   var transportList = blackberry.identity.getTransportList();
*   for (var i = 0; i &lt; transportList.length; i++) {
*     alert(&quot;Transport name is:&quot; + transportList[i].name + &quot;&bsol;ntransport type:&quot; + transportList[i].type);
*   }
*   
*   alert(&quot;PIN: &quot; + blackberry.identity.PIN);
*   alert(&quot;IMSI: &quot; + blackberry.identity.IMSI);
*   alert(&quot;IMEI: &quot; + blackberry.identity.IMEI);
* &lt;&sol;script&gt;
*/
blackberry.identity = { };

/**
* Returns the list of Service objects that describe each of the services that the user has for their device. 
* @returns {Service[]}
* @BB50+
*/
blackberry.identity.getServiceList = function() { };

/**
* Returns a list of possible communications transports that can be used. 
* @returns {Transport[]}
* @BB50+
*/
blackberry.identity.getTransportList = function() { };

/**
* Contains the Personal Identification number for the smartphone. 
* @type String
* @static
* @readOnly
* @BB50+
*/
blackberry.identity.PIN = { };

/**
* Contains the IMSI number for the smartphone. 
* @type String
* @static
* @readOnly
* @BB50+
*/
blackberry.identity.IMSI = { };

/**
* Contains the IMEI number for the smartphone. 
* @type String
* @static
* @readOnly
* @BB50+
*/
blackberry.identity.IMEI = { };


