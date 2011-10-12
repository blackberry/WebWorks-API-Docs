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
 * @RIPPLE
 * @class The FilterExpression object represents the expression that is used to find an item that matches its defined condition.
 * @featureID blackberry.phone.Find
 * @constructor Constructor for a new FilterExpression object.
 * @param {Object} leftField  An object of String or FilterExpression class.
 * @param {Object} operator  The operator used for comparing or combining.
 * @param {Object} rightField A value to be compared, or an object of the FilterExpression class, to be combined.
 * @param {Boolean} [negate] optional (default value is false), the flag that indicates whether the condition of the FilterExpression object should be evaluated negatively.
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
 *   &sol;&sol; Create simple filters and combine them with AND operator
 *   var filter1 = new blackberry.phone.Find.FilterExpression(&quot;date.Hour&quot;, &quot;&gt;&quot;, 17);
 *   var filter2 = new blackberry.phone.Find.FilterExpression(&quot;duration&quot;, &quot;&lt;=&quot;, 100);
 *   var filterAND = new blackberry.phone.Find.FilterExpression(filter1, &quot;AND&quot;, filter2);
 * &lt;&sol;script&gt;
 */
blackberry.phone.Find.FilterExpression = function(leftField ,operator ,rightField,negate) {
};
/**
 * @type Object
 * @description
 * 1. (Either) contains the interested field for "Find."
 * It also supports the JAM predefined fields for the attribute of Date type (using "."),
 * so the user can "find" towards a date attribute to match the searching criteria.
 * <p>
 * For example, for a find towards call log date attribute with the Date of "Dec. 4, 2008 16:30:00"
 * <br/>
 * date.Year - returns a string of 4 digits of the Year value of the date attribute: "2008"
 * <br/>
 * date.Month - returns a string of the Month value: "12"
 * <br/>
 * date.Day - returns a string of the Date value: "4"
 * <br/>
 * date.Hour - returns a string of the Hour value: "16"
 * <br/>
 * date.Minute - returns a string of the Minute value: "30"
 * <br/>
 * date.Second - returns a string of the Second value: "00"
 * <p>
 * 2. (Or) contains another FilterExpression object to be combined with "rightField."

 * @readOnly
 * @BB50+
 * @RIPPLE
 */
blackberry.phone.Find.FilterExpression.prototype.leftField = { };
 
 /**
     * @type Object
     * @description
     * Contains the operator, which is either an integer or a string, used for comparing or combining:
     * <br/>
     * 0, "!="        - Not equal
     * <br/>
     * 1, "=="        - Equal
     * <br/>
     * 2, "<"         - Less than
     * <br/>
     * 4, ">"         - Greater than
     * <br/>
     * 3, "<="        - Equal | Less than (Less or Equal)
     * <br/>
     * 5, ">="        - Equal | Greater than (Greater or Equal)
     * <br/>
     * 8, "AND"       - AND
     * <br/>
     * 16, "OR"       - OR
     * <br/>
     * 32, "CONTAINS" - CONTAINS
     * @readOnly
     * @BB50+
     * @RIPPLE
     */
blackberry.phone.Find.FilterExpression.prototype.operator = { };

/**
 * @type Object
 * @description
 * 1. (Either) contains the value that used for comparing with the field that is specified by "leftField (see details for the leftField)."
 * <br/>
 * 2. (Or) contains another FilterExpression object to be combined with "leftField."
 * @readOnly
 * @BB50+
 * @RIPPLE
 */
blackberry.phone.Find.FilterExpression.prototype.rightField = { };

/**
 * @type Boolean
 * @description
 * The Boolean flag that indicates whether the condition of the FilterExpression object should be evaluated negatively.  This should only be used when you have nested expressions.  On regular field&sol;value comparisons, negate isn&apos;t necessary as the != is sufficient.
 * @readOnly
 * @BB50+
 * @RIPPLE
 */
blackberry.phone.Find.FilterExpression.prototype.negate = { };
