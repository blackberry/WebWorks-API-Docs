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
* @toc {Phone} Phone 
* @BB50+
* @namespace Phone Object
* @featureID blackberry.phone.Phone
*/
blackberry.phone.Phone = { };

/**
* Invoked when a call has been initiated by the device (outbound). 
* @type Number
* @constant
* @default 0
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_INITIATED = 0;

/**
* Invoked when a call is waiting. 
* @type Number
* @constant
* @default 1
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_WAITING = 1;

/**
* Invoked when a new call is arriving. 
* @type Number
* @constant
* @default 2
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_INCOMING = 2;

/**
* Invoked when the user answers a call (user driven). 
* @type Number
* @constant
* @default 3
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_ANSWERED = 3;

/**
* Invoked when the network indicates a connected event (network driven). 
* @type Number
* @constant
* @default 4
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_CONNECTED = 4;

/**
* Invoked when a conference call has been established. 
* @type Number
* @constant
* @default 5
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_CONFERENCECALL_ESTABLISHED = 5;

/**
* Invoked when a conference call is terminated (all members disconnected). 
* @type Number
* @constant
* @default 6
* @BB50+
*/
blackberry.phone.Phone.CB_CONFERENCECALL_DISCONNECTED = 6;

/**
* Invoked when a call is disconnected. 
* @type Number
* @constant
* @default 7
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_DISCONNECTED = 7;

/**
* Invoked when a direct-connect call is connected. 
* @type Number
* @constant
* @default 8
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_DIRECTCONNECT_CONNECTED = 8;

/**
* Invoked when a direct-connect call is disconnected. 
* @type Number
* @constant
* @default 9
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_DIRECTCONNECT_DISCONNECTED = 9;

/**
* Invoked when the user ends the call. 
* @type Number
* @constant
* @default 10
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_ENDED_BYUSER = 10;

/**
* Invoked when a call fails. 
* @type Number
* @constant
* @default 11
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_FAILED = 11;

/**
* Invoked when a call goes from &apos;held&apos; to &apos;resumed&apos; state. 
* @type Number
* @constant
* @default 12
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_RESUMED = 12;

/**
* Invoked when a call goes into the &apos;held&apos; state. 
* @type Number
* @constant
* @default 13
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_HELD = 13;

/**
* Invoked when a call gets added to a conference call 
* @type Number
* @constant
* @default 14
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_ADDED = 14;

/**
* Invoked when a call gets removed from a conference call. 
* @type Number
* @constant
* @default 15
* @BB50+
*/
blackberry.phone.Phone.CB_CALL_REMOVED = 15;

/**
* Subscriber busy. 
* @type Number
* @constant
* @default 1
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_SUBSCRIBER_BUSY = 1;

/**
* Congestion. 
* @type Number
* @constant
* @default 2
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_CONGESTION = 2;

/**
* Radio path unavailable. 
* @type Number
* @constant
* @default 3
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_RADIO_PATH_UNAVAILABLE = 3;

/**
* Number unobtainable. 
* @type Number
* @constant
* @default 4
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_NUMBER_UNOBTAINABLE = 4;

/**
* Authorization failure. 
* @type Number
* @constant
* @default 5
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_AUTHORIZATION_FAILURE = 5;

/**
* Emergency calls only. 
* @type Number
* @constant
* @default 6
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_EMERGENCY_CALLS_ONLY = 6;

/**
* Hold error. 
* @type Number
* @constant
* @default 7
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_HOLD_ERROR = 7;

/**
* Outgoing call barred. 
* @type Number
* @constant
* @default 8
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_OUTGOING_CALLS_BARRED = 8;

/**
* General call error. 
* @type Number
* @constant
* @default 9
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_GENERAL = 9;

/**
* Maintenance required. 
* @type Number
* @constant
* @default 10
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_MAINTENANCE_REQUIRED = 10;

/**
* Service not available. 
* @type Number
* @constant
* @default 11
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_SERVICE_NOT_AVAILABLE = 11;

/**
* Call failed because of signal fading. 
* @type Number
* @constant
* @default 12
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_DUE_TO_FADING = 12;

/**
* Call lost because of signal fading. 
* @type Number
* @constant
* @default 13
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_LOST_DUE_TO_FADING = 13;

/**
* Call failed, please try again. 
* @type Number
* @constant
* @default 14
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_TRY_AGAIN = 14;

/**
* Fixed dialing number mismatch. 
* @type Number
* @constant
* @default 15
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_FDN_MISMATCH = 15;

/**
* Connection denied by network. 
* @type Number
* @constant
* @default 16
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_CONNECTION_DENIED_BY_NETWORK = 16;

/**
* Number not in service (IDEN specific). 
* @type Number
* @constant
* @default 17
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_NUMBER_NOT_IN_SERVICE = 17;

/**
* Please try call later (IDEN specific). 
* @type Number
* @constant
* @default 18
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_PLEASE_TRY_LATER = 18;

/**
* Service conflict TI (IDEN specific). 
* @type Number
* @constant
* @default 19
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_SERVICE_CONFLICT = 19;

/**
* System busy, try later (IDEN specific). 
* @type Number
* @constant
* @default 20
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_SYSTEM_BUSY_TRY_LATER = 20;

/**
* User busy in private (IDEN specific). 
* @type Number
* @constant
* @default 21
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_USER_BUSY_IN_PRIVATE = 21;

/**
* User busy in data (IDEN specific). 
* @type Number
* @constant
* @default 22
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_USER_BUSY_IN_DATA = 22;

/**
* User not authorized (IDEN specific). 
* @type Number
* @constant
* @default 23
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_USER_NOT_AUTHORIZED = 23;

/**
* User not available (IDEN specific). 
* @type Number
* @constant
* @default 24
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_USER_NOT_AVAILABLE = 24;

/**
*  User unknown (IDEN specific). 
* @type Number
* @constant
* @default 25
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_USER_UNKNOWN = 25;

/**
* User not reachable (IDEN specific). 
* @type Number
* @constant
* @default 26
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_USER_NOT_REACHABLE = 26;

/**
* Incoming call barred. 
* @type Number
* @constant
* @default 27
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_INCOMING_CALL_BARRED = 27;

/**
* Call replaced by STK (GSM SIM specific). 
* @type Number
* @constant
* @default 28
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_CALL_REPLACED_BY_STK = 28;

/**
* Call blocked by STK error (GSM SIM specific). 
* @type Number
* @constant
* @default 29
* @BB50+
*/
blackberry.phone.Phone.CALL_ERROR_STK_CALL_NOT_ALLOWED = 29;

/**
* Determines whether or not the phone is currently in an active call 
* @returns {Boolean} Returns true if the phone is currently in an active call
* @BB50+
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;
*   // Check if in active call
*   var res = blackberry.phone.Phone.inActiveCall();
*   alert(&quot;Currently in active call? &quot; + res);
* &lt;/script&gt;
*/
blackberry.phone.Phone.inActiveCall = function() { };

/**
* Request all of the current active calls <br/><br/>
* Active calls are tracked when the application is running. When launched, only the current active call might be retrieved.
* @returns {blackberry.phone.Phone.Call[]} Returns an array of current active calls
* @BB50+
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;
*   // Retrieve an array of active calls and display the details of the call at index specified
*   var res = blackberry.phone.Phone.activeCalls();
*   if (res == null || res.length == 0) {
*     alert(&quot;There are no active calls&quot;);
*   }
*   else {
*     alert(&quot;There are &quot; + res.length + &quot; active calls&quot;);
*     var index = 0;
*     displayCallDetails(res[index]);
*   }
* 
*   function displayCallDetails(call) {
*     alert((&quot;Is OnHold: &quot; + call.isOnHold() + &quot;&bsol;n&quot;) +
*     (&quot;Is Outgoing: &quot; + call.outgoing + &quot;&bsol;n&quot;) +
*     (&quot;Recipient name: &quot; + call.recipientName + &quot;&bsol;n&quot;) +
*     (&quot;Recipient number: &quot; + call.recipientNumber + &quot;&bsol;n&quot;));
*   }
* &lt;/script&gt;
*/
blackberry.phone.Phone.activeCalls = function() { };

/**
* Registers PhoneListener of different type events  <br/><br/>
* To subscribe to PhoneListener, a callback and an eventType (one of enumerated PhoneListener event types) should be specified. 
* <br/><br/>When subscribing a different callback with the same eventType, the new callback will overwrite the previous one. To unsubscribe from a phone call event, pass null as a 
* callback parameter, along with proper eventType. 
* <br/><br/>To unsubscribe from ALL events, pass null. All invoked callback functions will receive a &apos;callid&apos; of type &apos;int&apos; as a parameter, which is the ID of the Call. 
* A callback registered with eventType &apos;CB_CALL_FAILED&apos;, in addition to the &apos;callid&apos; parameter, will get code as a second parameter describing the reason for the failure. 
* It would be equal to one of CALL_ERROR_* constants.
* @callback {function} onPhoneEvent This callback function is triggered when a phone event is triggered.
* @callback {Number} onPhoneEvent.callId ID for the resumed call.
* @callback {Number} [onPhoneEvent.reason] CALL_ERROR_* code describing the reason for the failure when callback for CB_CALL_FAILED is triggered
* @param {Number} [eventType] One of constants defining phone call event type.
* @returns {Boolean} Returns true if the listener was successfully assigned
* @BB50+
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;
*   // Adding three listeners differ by their type.
*   addListenerByType(callEndedByUserCB, blackberry.phone.Phone.CB_CALL_ENDED_BYUSER);
*   addListenerByType(callDisconnectedCB, blackberry.phone.Phone.CB_CALL_DISCONNECTED);
*   addListenerByType(callConnectedCB, blackberry.phone.Phone.CB_CALL_CONNECTED);
* 
*   // Removing one of the previously added listeners
*   addListenerByType(null, blackberry.phone.Phone.CB_CALL_CONNECTED);
* 
*   function addListenerByType(callback, type) {
*     var res = blackberry.phone.Phone.addPhoneListener(callback, type);
*     if (callback != null) {
*       alert(&quot;Registered for phone listener type &quot; + type + &quot; : &quot; + res);
*     }
*     else {
*       alert(&quot;Unregistered from phone listener type &quot; + type + &quot; : &quot; + res);
*     }
*   }
* 
*   function callEndedByUserCB(id) {
*     alert(&quot;Call ended by user!&quot;);
*   }
* 
*   function callDisconnectedCB(id) {
*     alert(&quot;The id of diconnected call is: &quot; + id);
*   }
* 
*   function callConnectedCB(id) {
*     alert(&quot;Call is connected!&quot;);
*   }
* &lt;/script&gt;
*/
blackberry.phone.Phone.addPhoneListener = function(onPhoneEvent,eventType) { };






