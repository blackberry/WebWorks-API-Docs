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
* @RIPPLE
* @namespace The Identity object contains information regarding the user&apos;s identity and accounts on a BlackBerry smartphone.
* @featureID blackberry.identity
* @featureID blackberry.identity.phone
* @permission read_device_identifying_information Permits your app to access device identifiers.
*/
blackberry.identity = {

/**
 * Returns a JSON object containing the PIN of the device.
 * @uri 
 * @PB10+
 * @returns {JSON of all the properties}
 * {
 * 	"data":{
 *		"PIN":"0x12345678",
 * 	}
 * }
 * @example 
 * &lt;html&gt;
 * &lt;head&gt;
 *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt;
 *     &lt;script type="text/javascript" src="js/jquery.form.js" &gt;&lt;/script&gt;
 *     &lt;script type="text/javascript" src="js/jquery.populate.js" &gt;&lt;/script&gt;
 *     
 *     &lt;script type="text/javascript"&gt;  
 *	function getIdentityData(){
 *		$.ajax({
 *		    type: "get",
 *		    url: "http://localhost:8472/blackberry/identity/get",
 *		    success: function(msg){
 *		      $('#myIdentityDiv').populate(JSON.parse(msg).data);
 *		    }
 *		});
 *	}
 *      &lt;/script&gt;
 *      
 *&lt;/head&gt;
 *&lt;body&gt;
 *
 *    &lt;input type="button" onclick="getIdentityData();" value="Populate - IDENTITY"/&gt;
 *    &lt;div id="myIdentityDiv"&gt;
 *        PIN: &lt;span id="PIN"&gt;&lt;/span&gt;&lt;br/&gt;
 *    &lt;/div&gt;
 *    
 *&lt;/body&gt;
 *&lt;/html&gt;
 */
get: function(){}

};

/**
* Returns the list of Service objects that describe each of the services that the user has for their device. 
* @returns {Service[]}
* @BB50+
* @RIPPLE
*/
blackberry.identity.getServiceList = function() { };

/**
* Returns a list of possible communications transports that can be used. 
* @returns {Transport[]}
* @BB50+
* @RIPPLE
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   var transportList = blackberry.identity.getTransportList();
*   for (var i = 0; i &lt; transportList.length; i++) {
*     alert(&quot;Transport name is:&quot; + transportList[i].name + &quot;&bsol;ntransport type:&quot; + transportList[i].type);
*   }
* &lt;&sol;script&gt;
*/
blackberry.identity.getTransportList = function() { };

/**
* Contains the Personal Identification number for the smartphone. 
* @type String
* @static
* @readOnly
* @BB50+
* @RIPPLE
* @PB10+
*/
blackberry.identity.PIN = { };

/**
* Contains the IMSI number for the smartphone. 
* @type String
* @static
* @readOnly
* @BB50+
* @RIPPLE
*/
blackberry.identity.IMSI = { };

/**
* Contains the IMEI number for the smartphone. 
* @type String
* @static
* @readOnly
* @BB50+
* @RIPPLE
*/
blackberry.identity.IMEI = { };


