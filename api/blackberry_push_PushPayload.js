/*
* Copyright 2010-2012 Research In Motion Limited.
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
* @toc {Push} PushPayload 
* @class The <code>PushPayload</code> object provides access to the payload that has arrived as the result of a push.  
* This object <b>cannot</b> be created by the new keyword.  It is generated only by the system on receipt of a push notification.
* <br/><br/>
* For a great sample app that demonstrates how to use the push APIs, see <a href="https://github.com/blackberry/BB10-WebWorks-Samples/tree/master/pushCapture">Push Capture</a>.
* <br/><br/>
* There is also a very valuable developer guide for the Push Capture sample app that you can find <a href='https://developer.blackberry.com/html5/documentation/push_service.html'>here</a>. 
* @BB10X
* @featureID blackberry.push
* @permission {system} _sys_use_consumer_push Permits your consumer (public) application to use push. This permission is not needed to use enterprise push.
*/
blackberry.push.PushPayload = {};

/**
* <p>
* Sends an acknowledgement to the PPG indicating whether a push should be accepted or rejected. It is up to the application to determine
* whether to accept or reject a push message based on it own business rules. It is strongly recommended to accept or reject the push 
* message as soon as possible otherwise the push message will automatically be considered rejected.
* </p>
* <p>
* Use the <code>isAckRequired</code> property to determine whether or not calling <code>acknowledge</code> is required.
* </p>
* @param {Boolean} shouldAcceptPush True if the push should be accepted; false if the push should be rejected
* @BB10X
* @example
* if (pushPayload.isAcknowledgeRequired) {
*    // Accept push
*    pushPayload.acknowledge(true);
* 
*    // To reject the push, you would call: 
*    // pushPayload.acknowledge(false);
* }
*/
blackberry.push.PushPayload.prototype.acknowledge = function(shouldAcceptPush) { };
	
/**
* The ID of a push.
* @type String
* @readOnly 
* @BB10X 
*/
blackberry.push.PushPayload.prototype.id = undefined;

/**
* The headers of a push in string header name-header value pairs.
* @type Object
* @readOnly 
* @BB10X 
* @example
* // To access a header value with the name "header-name":
* var headerValue = pushPayload.headers["header-name"];
*/
blackberry.push.PushPayload.prototype.headers = undefined;

/**
* The data (payload) of a push.
* @type Blob
* @readOnly 
* @BB10X
* @example
* // See the extractPushPayload function in the PushService 
* // class for an example of how to convert the data   
* // property from a Blob to a string (for plain text) 
* // and to an ArrayBuffer (for binary)
*/
blackberry.push.PushPayload.prototype.data = undefined;

/**
* Indicates whether or not a developer must acknowledge the receipt of a push.
* True if an acknowledgement is required for the push; false otherwise.
* @type Boolean
* @readOnly 
* @BB10X 
*/
blackberry.push.PushPayload.prototype.isAcknowledgeRequired = undefined;