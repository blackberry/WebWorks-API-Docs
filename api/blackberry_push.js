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
 * <br/><br/>
 * Since the state for JavaScript for a web page is only as long as the web page is being viewed, there is a need for 
 * the app to maintain the open port for push information. This allows this listening for push data to remain open 
 * between page transitions. If no current active callback is assigned to the push listener, the app will queue the 
 * push data (limiting the number of messages using maxQueueCap if available) for the application until a subsequent 
 * openPushListener call is made for that port. 
 * At that point it will then pass the data to the subscribed callback function. To subscribe to the same previously 
 * opened push port on a new web page, a secondary call to openPushListener is called. In this scenario it will 
 * reassign the callback provided to the already open port. 
 * <br/><br/>
 * <p/>
 * It is possible for the BlackBerry Push Service to automatically unregister a subscriber behind the scenes. 
 * When writing a push application, to combat this possible automatic unregister, you should offer one of the following options: 
 * <ol>
 * <li>Explicit register, unregister menu options.</li>
 * <li>Use automatic, periodic registration calls to the BlackBerry Push Service to ensure that subscribers receive their desired pushes.  
 * The period you pick would depend on the application you write.  If you plan to send out a high frequency of pushes to a subscriber in a given day, you will want to make the registration calls more frequent (e.g. once a day).  If your application will only send out a low number of pushes in a given day to a subscriber, then you can make the registration calls less frequent (e.g. once a week).</li>
 * </ol>
 * @featureID blackberry.push
*/
blackberry.push = { 

	/**
	* Registers a callback function that will be called when new data has been pushed to the device. <br/><br/>
	* If calling openPushListener on a page where the port is already open, the callback will be updated to use the 
	* latest one passed in. <b>NOTE:</b> In such cases where consecutive calls to openPushListener occurs on the page,
	* the transport argument will only be used on the first call, and ignored for all others. Any calls to 
	* openPushListener should have matching calls to closePushListener to ensure ports are not left open accidentally.
	* <br/><br/>Known issue: Running multiple push applications or opening multiple port in the same application could cause large CPU usage. It is recommended to use new push API when writing new push application. Opening multiple ports in the same application is not allowed in the new push API.
	* @deprecated This API is deprecated, please use {@link blackberry.push.openBESPushListener} or {@link blackberry.push.openBISPushListener} instead.
	* <br/><br/><b>Known Issues:</b><br/>Using this API in multiple applications could cause large CPU usage on some of the applications. It is recommened to use ({@link blackberry.push.openBESPushListener} or {@link blackberry.push.openBISPushListener}) instead.
	* @callback {function} onData This callback function is triggered when data is received.To enable reliable push and acknowledge receipt of the payload, the callback must explicitly return 0 indicating that the push message has been accepted.Returning any other value (including not returning anything at all) in the callback would indicate that the message has been declined.
	* @callback {blackberry.push.Data} onData.data Object that contains the data that was just received. It has a payload property which is a Blob. The developer can then retrieve the data either as a Blob or use blackberry.utils.blobToString() function to convert it into a string if the data is a string.
	* @param {Number} port Integer port number to listen on for push data.
	* @param {blackberry.identity.Transport} [transport] Optional parameter where you can choose which communications transport you wish to listen on.
	* @param {Number} [maxQueueCap] Optional parameter that specifies how many messages the app should queue if the port was not closed, but a function handler was lost (for example, during a page transition).
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
	* When this method is called, it will stop listening for incoming data on the push port.
	* @param {Number} [port] The port used in the open push method. If port is not specified, all open ports will be closed.
	* @BB50+
	* @example
	* &lt;script type=&quot;text/javascript&quot;&gt;
	*   function cancelSubscription() {
	*     blackberry.push.closePushListener();
	*   }
	* &lt;/script&gt;
	*/
	closePushListener : function(port) { },

	/**
	* Opens the push listener to allow an application to listen for BES pushes. Only one port can be opened at a time if openBESPushListener
	* or openBISPushListener functions are used.
	* <br/>If calling openBESPushListener on a page where the port is already open, the callbacks will be updated to use the latest one passed in. The queue size and wake up page will not be updated.
	* <br/>If an application registered to BES push is closed and a push message arrives, the application will be launched in background and the wake up page is displayed. <b>rim:allowInvokeParams="true"</b> attribute must be specified in the content element of config.xml.
	* @param {Object} options Object literal that allows the user to specify the port, wake up page and maximum queue size.
	* @param {Number} options.port The port on the device to listen for pushes on.
	* @param {String} options.wakeUpPage The page that wlll be displayed when application is closed and a new push message arrives.
	* @param {Number} [options.maxQueueCap] Optional parameter that specifies how many messages the app should queue if the port was not closed, but a function handler was lost (for example, during a page transition). If the parameter is not specified, no limit will be imposed.
	* @callback {function} onData The callback that is invoked when a new push has been received. To enable reliable push and acknowledge receipt of the payload, the callback must explicitly return 0 indicating that the push message has been accepted.  Returning any other value (including not returning anything at all) in the callback would indicate that the message has been declined.
	* @callback {blackberry.push.Data} onData.data Object that contains the data that was just received.
	* @callback {function} onSimChange The callback that is invoked when SIM card is changed. When this happens, the push is stopped, and user is recommended to close the push listener, unregister the old user from the content provider, and advise the user to re-register.
	* @BB50+
	* @example
	* &lt;script type=&quot;text/javascript&quot;&gt;
	*   function openBESPushListener() {
	*     try {
	*       var ops = {port : 153, wakeUpPage : 'push.htm', maxQueueCap : 100};
    *       blackberry.push.openBESPushListener(ops, onData, onSimChange);
    *     }
    *     catch (err) {
    *       alert(err);
    *     }     
	*   }
	*
    *   function onData(data) {
    *     var resultDiv = document.getElementById("resultDiv");
	*     try {
	*       resultDiv.innerHTML += "&lt;br&gt;" + blackberry.utils.blobToString(data.payload);
    *       return 0; //indicate acceptance of payload for reliable push
    *     } 
	*     catch (err) {
    *       alert(err);
    *     }
    *   }
	*
    *   function onSimChange() {
    *     var resultDiv = document.getElementById("resultDiv");
    *     resultDiv.innerHTML += "&lt;br&gt;" + "SIM card is changed!";
    *   }
	* &lt;/script&gt;
	*/
	openBESPushListener : function(options, onData, onSimChange) { },
	
	/**
	* Opens the push listener to allow an application to listen for BIS pushes. Only one port can be opened at a time if openBESPushListener
    * or openBISPushListener functions are used.
	* <br/>If calling openBISPushListener on a page where the port is already open, the callbacks will be updated to use the latest one passed in. The queue size and wake up page will not be updated.
	* <br/>If an application registered to BIS push is closed and a push message arrives, the application will be launched in background and the wake up page is displayed. <b>rim:allowInvokeParams="true"</b> attribute must be specified in the content element of config.xml.
	* @param {Object} options Object literal that allows the user to specify the port, appId, server URL, wakeup page and maximum queue size.
	* @param {Number} options.port The port on the device to listen for pushes on.
	* @param {String} options.appId The id provided to you for your push application after signing up to use the BlackBerry Push Service.
	* @param {String} options.serverUrl The URL of the push server.  Examples of this URL include: 
	* http://pushapi.eval.blackberry.com if using the eval environment of the BlackBerry  
	* Push Service or http://pushapi.na.blackberry.com if using the production environment 
	* of the BlackBerry Push Service.
	* @param {String} options.wakeUpPage The page that wlll be displayed when application is closed and a new push message arrives.
	* @param {Number} [options.maxQueueCap] Optional parameter that specifies how many messages the app should queue if the port was not closed, but a function handler was lost (for example, during a page transition). If the parameter is not specified, no limit will be imposed.
	* @callback {function} onData The callback that is invoked when a new push has been received. To enable reliable push and acknowledge receipt of the payload, the callback must explicitly return 0 indicating that the push message has been accepted.  Returning any other value (including not returning anything at all) in the callback would indicate that the message has been declined.
	* @callback {blackberry.push.Data} onData.data Object that contains the data that was just received.
	* @callback {function} onRegister The callback that is invoked when the result of the registration is received.
	* @callback {Number} onRegister.result The registration result. These include: 0: success, 1: network error, 2: rejected by server, 3: invalid parameters, -1: general error.
	* @callback {function} onSimChange The callback that is invoked when SIM card is changed. When this happens, the push is stopped, and user is recommended to close the push listener, unregister the old user from the content provider, and advise the user to re-register.
	* @BB50+
	* @example
	* &lt;script type=&quot;text/javascript&quot;&gt;
	*   var port = 153;
	*   var serverUrl = "http://pushapi.eval.blackberry.com";
	*   var appId = "my application id";
	*   var max = 100;
	*   var wakeUpPage = "push.htm";
	*   function openBISPushListener() {
	*     try {
	*       var ops = {port : port, appId : appId, serverUrl : serverUrl, wakeUpPage : 'push.htm', maxQueueCap : max};
    *       blackberry.push.openBISPushListener(ops, onData, onRegister, onSimChange);
    *     }
    *     catch (err) {
    *       alert(err);
    *     }     
	*   } 
	*
	*   function onRegister(status) {
	*     if (status == 0) {
	*       alert("success");
    *     }
	*     else if (status == 1) {
	*       alert("network error");
    *     }
	*     else if (status == 2) {
	*       alert("rejected by server");
	*     }
	*     else if (status == 3) {
	*       alert("invalid parameters");
	*     }
	*     else if (status == -1) {
	*       alert("general error");
    *     }
	*     else {
	*       alert("unknown status");
	*     }
    *   }
    *	
    *   function onData(data) {
    *     var resultDiv = document.getElementById("resultDiv");
	*     try {
	*       resultDiv.innerHTML += "&lt;br&gt;" + blackberry.utils.blobToString(data.payload);
    *       return 0; //indicate acceptance of payload for reliable push
    *     } 
	*     catch (err) {
    *       alert(err);
    *     }
    *   }
	*
    *   function onSimChange() {
    *     var resultDiv = document.getElementById("resultDiv");
    *     resultDiv.innerHTML += "&lt;br&gt;" + "SIM card is changed!";
    *   }
	* &lt;/script&gt;
	*/
	openBISPushListener : function(options, onData, onRegister, onSimChange) { }
	
};




