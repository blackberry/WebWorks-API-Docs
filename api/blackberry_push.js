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
* @BB50+
* @namespace The Push object allows you to leverage the BlackBerry push architecture to receive push data in your application.
* @example
* &lt;script  type=&quot;text&sol;javascript&quot;&gt;
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
* &lt;&sol;script&gt;
*/
blackberry.push = { };

/**
* Registers a callback method that will be called when new data has been pushed to the device. 
* @param {OnData} callback JavaScript function to be called when new data arrives.
* @param {Number} port Integer port number to listen on for push data.
* @param {blackberry.identity.Transport} [transport] optional parameter where you can choose which communications transport you wish to listen on.
* @param {Number} [maxQueueCap] optional parameter that specifies how many messages the widget should queue if the port was not closed, but a function handler was lost (for example, during a page transition). See details.
* @returns {void}
* @BB50+
*/
blackberry.push.openPushListener = function(callback,port,transport,maxQueueCap) { };

/**
* Closes the listening connection for an already open push channel. 
* @param {Number} port Unique listener integer port used in the original openPushListener method.
* @returns {void}
* @BB50+
*/
blackberry.push.closePushListener = function(port) { };


/**
* <div><p>
*           This is the interface that must be available on the callback function to receive push data
*         </p></div>
* @toc {Push} OnData 
* @BB50+
* @class Interface to implement on the callback function when data is received.
* @constructor 
* @param {blackberry.push.Data} data Object that contains the data that was just received
*/
blackberry.push.OnData = function(data) { };


