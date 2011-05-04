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
* @toc {Phone} FilterExpression 
* @BB50+
* @class The FilterExpression object represents the expression that is used to find an item that matches its defined condition.
* @featureID blackberry.phone.Find
* @constructor Constructor for a new FilterExpression object. 
* @param {object} leftField  an object of String or FilterExpression class.
* @param {object} operator  the operator used for comparing or combining.
* @param {object} rightField a value to be comared or an object of the FilterExpression class to be combined.
* @param {Boolean} [negate] optional (default value is false), the flag that indicates whether the condition of the FilterExpression object should be evaluated negatively.
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;  
*   &sol;&sol; Create simple filters and combine them with AND operator
*   var filter1 = new blackberry.phone.Find.FilterExpression(&quot;date.Hour&quot;, &quot;&gt;&quot;, 17);
*   var filter2 = new blackberry.phone.Find.FilterExpression(&quot;duration&quot;, &quot;&lt;=&quot;, 100);
*   var filterAND = new blackberry.phone.Find.FilterExpression(filter1, &quot;AND&quot;, filter2);
* &lt;/script&gt;
*/
blackberry.phone.Find.FilterExpression = function(leftField ,operator ,rightField,negate) {

	/**
	* <ol>
	* <li>(Either) contains the interested field for "Find." 
	* <br/><br/>It also supports the JAM predefined fields for the attribute of Date type (using "."), so the user can "find" towards a date attribute to match the searching criteria. 
	* <br/><br/>For example, for a find towards call log date attribute with the Date of "Dec. 4, 2008 16:30:00" date.Year - returns a string of 4 digits of the Year value of the date 
	* attribute: "2008" date.Month - returns a string of the Month value: "12" date.Day - returns a string of the Date 
	* value: "4" date.Hour - returns a string of the Hour value: "16" date.Minute - returns a string of the Minute 
	* value: "30" date.Second - returns a string of the Second value: "00" </li>
	* <li>(Or) contains another FilterExpression object to be combined with "rightField."</li>
	* </ol>
	* @type object
	* @readOnly
	* @BB50+
	*/
	leftField : undefined,

	/**
	* Contains an operator, used for comparing or combining. <br/><br/>
	* Support one of the following operators: &quot;!=&quot; &quot;==&quot; &quot;<&quot; &quot;>&quot; &quot;<=&quot; &quot;>=&quot; &quot;AND&quot; &quot;OR&quot; &quot;CONTAINS&quot;
	* @type object
	* @readOnly
	* @BB50+
	*/
	operator : undefined,

	/**
	* <ol>
	* <li>(Either) contains the value that used for comparing with the field that is specified by &quot;leftField (see details for the leftField).&quot; </li>
	* <li>(Or) contains another FilterExpression object to be combined with &quot;leftField.&quot;</li>
	*</ol>
	*
	* @type Object
	* @readOnly
	* @BB50+
	*/
	rightField : undefined,

	/**
	* The boolean flag that indicates whether the condition of the FilterExpression object should be evaluated negatively.  This should only be used when you have nested expressions.  On regular field&sol;value comparisons, negate isn&apos;t necessary as the != is sufficient. 
	* @type Boolean
	* @readOnly
	* @BB50+
	*/
	negate : undefined,



 };




