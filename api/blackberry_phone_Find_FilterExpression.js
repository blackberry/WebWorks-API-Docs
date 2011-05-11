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
*       The FilterExpression object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {Phone} Find FilterExpression 
* @BB50+
* @class The FilterExpression object represents the expression that is used to find an item that matches its defined condition.
* @featureID blackberry.phone.Find
* @constructor Constructor for a new FilterExpression object. 
* @param {object} leftField  An object of String or FilterExpression class.
* @param {object} operator  The operator used for comparing or combining.
* @param {object} rightField A value to be compared, or an object of the FilterExpression class, to be combined.
* @param {Boolean} [negate] optional (default value is false), the flag that indicates whether the condition of the FilterExpression object should be evaluated negatively.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;  
*   &sol;&sol; Create simple filters and combine them with AND operator
*   var filter1 = new blackberry.phone.Find.FilterExpression(&quot;date.Hour&quot;, &quot;&gt;&quot;, 17);
*   var filter2 = new blackberry.phone.Find.FilterExpression(&quot;duration&quot;, &quot;&lt;=&quot;, 100);
*   var filterAND = new blackberry.phone.Find.FilterExpression(filter1, &quot;AND&quot;, filter2);
* &lt;&sol;script&gt;
*/
blackberry.phone.Find.FilterExpression = function(leftField ,operator ,rightField,negate) { };

/**
*  
* @type object
* @readOnly
* @BB50+
*/
blackberry.phone.Find.FilterExpression.prototype.leftField = { };

/**
* Contains an operator, used for comparing or combining. 
* @type object
* @readOnly
* @BB50+
*/
blackberry.phone.Find.FilterExpression.prototype.operator = { };

/**
*  
* @type object
* @readOnly
* @BB50+
*/
blackberry.phone.Find.FilterExpression.prototype.rightField = { };

/**
* The Boolean flag that indicates whether the condition of the FilterExpression object should be evaluated negatively.  This should only be used when you have nested expressions.  On regular field&sol;value comparisons, negate isn&apos;t necessary as the != is sufficient. 
* @type Boolean
* @readOnly
* @BB50+
*/
blackberry.phone.Find.FilterExpression.prototype.negate = { };
