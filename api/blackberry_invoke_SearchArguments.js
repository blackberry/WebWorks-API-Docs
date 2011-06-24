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
*       The SearchArguments object must be created as an instance using the new keyword.
*     </p></div>
* @toc {Invoke} SearchArguments 
* @BB50+
* @class The SearchArguments object is an instance object, and is used as a parameter to the invoke() method when invoking the Search application.
* @featureID blackberry.invoke
* @featureID blackberry.invoke.SearchArguments
* @constructor Constructor for a new SearchArguments object. 
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   var args = new blackberry.invoke.SearchArguments(&apos;build&apos;, &apos;Tim&apos;);
*   blackberry.invoke.invoke(blackberry.invoke.APP_SEARCH, args);  &sol;&sol; Search
* &lt;&sol;script&gt;
*/
blackberry.invoke.SearchArguments = function() { };

/**
* @constructedBy blackberry.invoke.SearchArguments
* @description Build a SearchArguments object from string arguments
* @BB50+
* @function
* @param {String} text The text string to pass to the Search application
* @param {String} name The name string to pass to the Search application
*/
blackberry.invoke.SearchArguments.const1 = function() { };