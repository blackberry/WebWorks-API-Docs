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
* @namespace
*/
blackberry.message = { };


/**
* @toc {Message} SMS
* @BB50+
* @namespace Provides static functions to send SMS messages
* @featureID blackberry.message.sms
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   blackberry.message.sms.send(&quot;hello world&quot;, &quot;987654321&quot;);
* 
*   var listener = function (msg, from, date) {
*     alert(from+&quot; &quot;+msg+&quot; &quot;+date);
*   }
* 
*   blackberry.message.sms.isListeningForMessage = true;
*   blackberry.message.sms.addReceiveListener(listener);
* 
*   if (blackberry.message.sms.removeReceiveListener()){
*     alert(&quot;Listener removed successfully.&quot;);
*     blackberry.message.sms.isListeningForMessage = false;
*   }
* &lt;&sol;script&gt;
*/
blackberry.message.sms = { };

/**
* determine whether the message listeners are activated 
* @type Boolean
* @static
* @BB50+
*/
blackberry.message.sms.isListeningForMessage = { };

/**
* Static function to send out an SMS message 
* @param {String} message The text that should be sent
* @param {String} address Address where the message should be delivered to.
* @returns {Undefined}
* @BB50+
*/
blackberry.message.sms.send = function(message,address) { };

/**
* SMS listener to receive a message when it arrives 
* @param {function(String, String, Date)} callback Callback function that is invoked when a new SMS message is received. Overwrites the previous callback. The parameters are: message, sender, and date.
* @returns {Undefined}
* @BB50+
*/
blackberry.message.sms.addReceiveListener = function(callback) { };

/**
* Remove the registered listener. Return false if there is no listener 
* @returns {Boolean}
* @BB50+
*/
blackberry.message.sms.removeReceiveListener = function() { };


