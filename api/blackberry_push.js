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
* @toc {Push} Push 
* @featureID blackberry.push
* @BB50+
* @namespace The Push object allows you to leverage the BlackBerry push architecture to receive push data in your application.
*/
blackberry.push = { 

	/**
	* Registers a callback function that will be called when new data has been pushed to the device. <br/><br/>
	* The function that is assigned as the onData callback function will be called with one parameter passed to it. 
	* The object passed to the callback function is of type {@link blackberry.push.Data} which has a payload property which is a Blob. The developer can then 
	* retrieve the data either as the Blob or use .toString() if the data contained in the Blob is a string. 
	* <br/><br/>
	* Furthermore, the callback function must return an integer (one of constants described in blackberry.push.Data) 
	* indicating if the push message is accepted or declined. 
	* <br/><br/>
	* Since the state for JavaScript for a web page is only as long as the web page is being viewed, there is a need for 
	* the app to maintain the open port for push information. This allows this listening for push data to remain open 
	* between page transitions. If no current active callback is assigned to the push listener, the app will queue the 
	* push data (limiting the number of messages using maxQueueCap if available) for the application until a subsequent 
	* openPushListener call is made for that port. 
	* <br/><br/>
	* At that point it will then pass the data to the subscribed callback function. To subscribe to the same previously 
	* opened push port on a new web page, a secondary call to openPushListener is called. In this scenario it will 
	* reassign the callback provided to the already open port. 
	* <br/><br/>
	* If calling openPushListener on a page where the port is already open, the callback will be updated to use the 
	* latest one passed in. <b>NOTE:</b> In such cases where consecutive calls to openPushListener occurs on the page,
	* the transport argument will only be used on the first call, and ignored for all others. Any calls to 
	* openPushListener should have matching calls to closePushListener to ensure ports are not left open accidentally.
	* @callback {function} onData This callback function is triggered when data is received.
	* @callback {blackberry.push.Data} onData.data Object that contains the data that was just received
	* @param {Number} port Integer port number to listen on for push data.
	* @param {blackberry.identity.Transport} [transport] Optional parameter where you can choose which communications transport you wish to listen on.
	* @param {Number} [maxQueueCap] Optional parameter that specifies how many messages the app should queue if the port was not closed, but a function handler was lost (for example, during a page transition). See details.
	* @BB50+
	* @example
	* &lt;script  type=&quot;text/javascript&quot;&gt;
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
	*       var myRecievedData= blackberry.utils.blobToString(data.payload)
	*       alert(myRecievedData);
	*     }
	*     else
	*       alert(&quot;No data from the push&quot;);
	*   }
	* 
	*   function cancelSubscription() {
	*     blackberry.push.closePushListener(port);
	*   }
	* &lt;/script&gt;
	*/
	openPushListener : function(onData,port,transport,maxQueueCap) { },

	/**
	* Closes the listening connection for an already open push channel. <br/><br/>
	* When this close is called, it will stop listening for incoming data on the push port.
	* @param {Number} port Unique listener integer port used in the original openPushListener method.
	* @BB50+
	*/
	closePushListener : function(port) { }


};




