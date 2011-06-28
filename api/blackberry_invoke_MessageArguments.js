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
*       The MessageArguements object must be created as an instance using the new keyword.
*     </p></div>
* @toc {Invoke} MessageArguments 
* @BB50+
* @class The MessageArguments object is an instance object, and is used as a parameter to the invoke() method when invoking the Messaging application.
* @featureID blackberry.invoke
* @featureID blackberry.invoke.MessageArguments
* @featureID blackberry.message
* @constructor Constructor for a new MessageArguments object. 
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;   
*   var args = new blackberry.invoke.MessageArguments(&apos;foo@domain.com&apos;, &apos;hello&apos;, &apos;world&apos;);
*   args.view = blackberry.invoke.MessageArguments.VIEW_NEW; &sol;&sol; New
*    
*   blackberry.invoke.invoke(blackberry.invoke.APP_MESSAGES, args);  &sol;&sol; New Message
* &lt;&sol;script&gt;
*/
blackberry.invoke.MessageArguments = function() { };

/**
* @constructedBy blackberry.invoke.MessageArguments
* @description Build a MessageArguments object from a {blackberry.message.Message} object
* @BB50+
* @function
* @param {blackberry.message.Message} message The Message object used to construct the MessageArguments
*/
blackberry.invoke.MessageArguments.const1 = function() { };

/**
* @constructedBy blackberry.invoke.MessageArguments
* @description Build a MessageArguments object from string arguments
* @BB50+
* @function
* @param {String} to The recipient's email address
* @param {String} subject The message's subject line
* @param {String} body The contents of the message
*/
blackberry.invoke.MessageArguments.const2 = function() { };

/**
* New&sol;Compose View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.MessageArguments.VIEW_NEW = 0;

/**
* Opens up the Inbox 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.MessageArguments.VIEW_DEFAULT = 1;

/**
* Saved Messages View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.MessageArguments.VIEW_SAVED = 2;

/**
* Search View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.MessageArguments.VIEW_SEARCH = 3;

/**
* Value that specifies what kind of view you want to view in Messages application. If MessageArguments object is created with a Message object or &apos;to&apos;,&apos;subject&apos;,&apos;body&apos; values, the view is &apos;VIEW_NEW&apos; regardless if any other value is assigned. 
* @type Number
* @BB50+
*/
blackberry.invoke.MessageArguments.prototype.view = { };


