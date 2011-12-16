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
*       The BrowserArguments object must be created as an instance using the new keyword.
*     </p></div>
* @toc {Invoke} BrowserArguments 
* @BB50+
* @PB10+
* @RIPPLE
* @class The BrowserArguments object is an instance object, and is used as a parameter to the invoke() method when invoking the BlackBerry Browser application.
* @featureID blackberry.invoke
* @featureID {BB50+} blackberry.invoke.BrowserArguments
* @featureID {BB50+} blackberry.identity
* @constructor Open Browser application on the BlackBerry smartphone. &lt;div&gt;&lt;p&gt;
&sol;&sol;&sol;          Throws an Exception if values supplied are not correct.
&sol;&sol;&sol;        &lt;&sol;p&gt;&lt;&sol;div&gt; 
* @param {String} url The desired url to bring up in the browser.
* @param {blackberry.identity.Transport} [transport] an optional parameter for BB5.0+ only representing the transport type that the browser should use.  If no parameter is specified 
* the default browser configured for the device will be used.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   var args = new blackberry.invoke.BrowserArguments(&apos;http:&sol;&sol;www.blackberry.com&apos;);
*   blackberry.invoke.invoke(blackberry.invoke.APP_BROWSER, args);
* &lt;&sol;script&gt;
*/
blackberry.invoke.BrowserArguments = function(url,transport) { };


