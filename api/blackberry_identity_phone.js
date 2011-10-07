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
*       The Phone Identity object is static; all of its functions and properties are used directly from the object.
*     </p></div>
* @toc {Identity} Phone 
* @BB50+
* @RIPPLE
* @namespace The Phone Identity object contains information regarding the user&apos;s phone lines on a BlackBerry smartphone.
* @featureID blackberry.identity.phone
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   var lines = blackberry.identity.phone.getLineIds();
*   for (var i = 0; i &lt; lines.length-1; i++) {
*     alert(&quot;Line id : &quot; + lines[i] + &quot; has phone number : &quot; + blackberry.identity.phone.getLineNumber(lines[i]));
*   }
* &lt;&sol;script&gt;
*/
blackberry.identity.phone = { };

/**
* Returns the id of all the lines registered with the device. 
* @returns {Number[]}
* @BB50+
* @RIPPLE
*/
blackberry.identity.phone.getLineIds = function() { };

/**
* Returns a string description of the line specified. 
* @param {Number} lineId [optional] ID of the line to retrieve the label for.  If not specified the label for the default line is returned.
* @returns {String}
* @BB50+
* @RIPPLE
*/
blackberry.identity.phone.getLineLabel = function(lineId) { };

/**
* Returns the phone number of the line specified. 
* @param {Number} lineId [optional] ID of the line to retrieve the label for.  If not specified the label for the default line is returned.
* @returns {Number}
* @BB50+
* @RIPPLE
*/
blackberry.identity.phone.getLineNumber = function(lineId) { };

/**
* Returns the type of the line specified. 
* @param {Number} lineId [optional] ID of the line to retrieve the label for.  If not specified the label for the default line is returned.
* @returns {Number}
* @BB50+
* @RIPPLE
*/
blackberry.identity.phone.getLineType = function(lineId) { };


