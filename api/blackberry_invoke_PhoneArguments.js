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
*       The PhoneArguments object must be created as an instance using the new keyword.
*     </p></div>
* @toc {Invoke} PhoneArguments 
* @BB50+
* @class The PhoneArguments object is an instance object, and is used as a parameter to the invoke() method when invoking the Phone application.
* @featureID blackberry.invoke
* @featureID blackberry.invoke.PhoneArguments
* @constructor Create an instance of a PhoneArguments with optional parameters. 
* @param {String} [dialString] Optional parameter specifying the Number to dial; this may contain special dialing characters in addition to the components of a traditional phone number.
* @param {Boolean} [smartDialing] Optional parameter. If true, smart dialing will be enabled.  Smart dialing is ignored if a line id is specified.
* @param {Number} [lineId] Optional ID of the line to use for the call. If not specified the default line is used.  Line ID cannot be specified when VIEW_VOICEMAIL is used.  This will cause the invocation to throw an IllegalArgumentException.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;   
*   var args = new blackberry.invoke.PhoneArguments(&apos;555-555-5555&apos;, true);
*   args.view = blackberry.invoke.PhoneArguments.VIEW_CALL;     
* 
*   blackberry.invoke.invoke(blackberry.invoke.APP_PHONE, args);  
* &lt;&sol;script&gt;
*/
blackberry.invoke.PhoneArguments = function(dialString,smartDialing,lineId) { };

/**
* Make Phone Call 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.PhoneArguments.VIEW_CALL = 0;

/**
* Call Voicemail 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.PhoneArguments.VIEW_VOICEMAIL = 1;

/**
* Value that specifies what kind of view you want to open in the Phone application. 
* @type Number
* @BB50+
*/
blackberry.invoke.PhoneArguments.prototype.view = { };


