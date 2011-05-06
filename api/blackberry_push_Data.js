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
*       This object cannot be created by the new keyword.  It is generated only by the system on receipt of push data.
*     </p></div>
* @toc {Push} Data 
* @BB50+
* @namespace The Push Data object provides access to the data that has arrived as the result of a push.
* @featureID blackberry.push

*/
blackberry.push.Data = { 

	/**
	* Requests the value of a specified header field. This method expires and will throw an exception if called 
	* outside of the push callback function.
	* @function
	* @param {Object} field This parameter is either the Integer index or a String name of the header to retrieve.
	* @returns {String} Returns the value of a header field.
	* @BB50+
	* @example
	* &lt;script type=&quot;text/javascript&quot;&gt;
	*   var port = 1234; 
	* 
	*   function doMySubscription() {
	*     &sol;&sol;See if they have a BIS transport.. if so use it
	*     var transports = blackberry.system.getTransportList();
	*     found = false;
	*     for (var i = 0; i &lt; transports.length; i++) {
	*       if (transports[i].name == &quot;BIS&quot;) {
	*         found = true;
	*         blackberry.push.openPushListener(handleMyReturnData, port, transport[i]);
	*         break;
	*       }        
	*     }
	*     if (!found)
	*       blackberry.push.openPushListener(handleMyReturnData, port);
	*   }
	* 
	*   function handleMyReturnData(data) {
	*     if (data != null) {
	*       var myRecievedData= blackberry.utils.blobToString(data.payload);   
	*       alert(data1.getHeaderField(0));
	*       alert(&quot;RequestURI=&quot; + data.getRequestURI());
	*       alert(&quot;Source=&quot; + data.getSource());
	*     }       
	*     else
	*       alert(&quot;No data available&quot;);
	*   }
	* 
	*   function cancelSubscription() {
	*     blackberry.push.closePushListener(port);
	*   }
	* &lt;/script&gt;
	*/
	getHeaderField : function(field) { },


	/**
	* Retrieves the source for this push stream.  String form of the source of this push; it could be a UID for a connection, IPv4 address, or SMSC. 
	* This method expires and will throw an exception if called outside of the push callback function.
	* @returns {String} Returns the source of the push request
	* @BB50+
	*/
	getSource : function() { },

	/**
	* Request the URI of the push request. This method expires and will throw an exception if called outside of the push callback function.
	* @returns {String} Returns the URI of the push request
	* @BB50+
	*/
	getRequestURI : function() { },

	/**
	* True if this channel is encrypted; otherwise, false. 
	* @type Boolean
	* @readOnly
	* @BB50+
	*/
	isChannelEncrypted : ,

	/**
	* The binary data pushed to the device. 
	* @type Blob
	* @readOnly
	* @BB50+
	*/
	payload : ,

	/**
	* Push message accepted 
	* @type Number
	* @constant
	* @default 0
	* @BB50+
	*/
	ACCEPT : 0,

	/**
	* Push message discarded due to resource shortage 
	* @type Number
	* @constant
	* @default 1
	* @BB50+
	*/
	DECLINE_USERDCR : 1,

	/**
	* Content type of Push message cannot be processed 
	* @type Number
	* @constant
	* @default 2
	* @BB50+
	*/
	DECLINE_USERDCU : 2,

	/**
	* Push message cannot be delivered to intended destination 
	* @type Number
	* @constant
	* @default 3
	* @BB50+
	*/
	DECLINE_USERPND : 3,

	/**
	* User refused Push message 
	* @type Number
	* @constant
	* @default 4
	* @BB50+
	*/
	DECLINE_USERREQ : 4,

	/**
	* User refused Push message 
	* @type Number
	* @constant
	* @default 5
	* @BB50+
	*/
	DECLINE_USERRFS : 5,

};








