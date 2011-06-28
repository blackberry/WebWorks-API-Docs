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
 * @toc {PIM} FilterExpression
 * @BB50+
 * @class The FilterExpression object represents the expression that is used to &apos;find&apos; an item that matches its defined condition. A FilterExpression object contains two fields, an operator and optional a Boolean flag that indicates whether the condition should be evaluated negatively.
 * @featureID blackberry.find
 * @constructor Constructor for a new FilterExpression object.
 * @param {Object} leftField an object of String or FilterExpression class.
 * @param {Object} operator the operator used for comparing or combining.
 * @param {Object} rightField a value of to be comared or an object of FilterExpression class to be combined.
 * @param {Boolean} [negate] optional (default value is false), the flag that indicates whether the condition of the FilterExpression object should be evaluated negatively.
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
 *
 *   &sol;&sol; Find all appointments with &quot;start&quot; date later than current time
 *   var d = new Date();
 *   var fe1 = new blackberry.find.FilterExpression(&quot;start&quot;, &quot;&gt;&quot;, d);
 *   var appt = blackberry.pim.Appointment.find(fe1, 10);
 *
 *   &sol;&sol; Find all contacts with &quot;firstName&quot; lead by &quot;John&quot;
 *   var fe2 = new blackberry.find.FilterExpression(&quot;firstName&quot;, &quot;REGEX&quot;, &quot;John[a-zA-Z_0-9 ]*&quot;);
 *   var result = blackberry.pim.Contact.find(fe2);
 *   for (i = 0; i &lt; result.length; i++) {
 *     alert(result[i].firstName);
 *   }
 * &lt;&sol;script&gt;
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
 *
 *   &sol;&sol; Find all contacts except &quot;John Smith&quot;
 *   var feFirst = new blackberry.find.FilterExpression(&quot;firstName&quot;, &quot;==&quot;, &quot;John&quot;);
 *   var feLast = new blackberry.find.FilterExpression(&quot;lastName&quot;, &quot;==&quot;, &quot;Smith&quot;);
 *
 *   &sol;&sol; Create a FilterExpression with &quot;feFirst &amp;&amp; feLast&quot;, with negateExpression set to &quot;true&quot;
 *   var feNotJohnSmith = new blackberry.find.FilterExpression(feFirst, &quot;AND&quot;, feLast, true);
 *
 *   &sol;&sol; result contains all contacts except &quot;John Smith&quot;
 *   var result = blackberry.pim.Contact.find(feNotJohnSmith );
 *   for (i = 0; i &lt; result.length; i++) {
 *     alert(result[i].firstName);
 *   }
 * &lt;&sol;script&gt;
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
 *
 *   &sol;&sol; Create a FilterExpression with &quot;firstName&quot; equals to &quot;John&quot; and &quot;lastName&quot; equals to &quot;Smith&quot;
 *   var feFirst = new blackberry.find.FilterExpression(&quot;firstName&quot;, &quot;==&quot;, &quot;John&quot;);
 *   var feLast = new blackberry.find.FilterExpression(&quot;lastName&quot;, &quot;==&quot;, &quot;Smith&quot;);
 *   var feJohnSmith =  new blackberry.find.FilterExpression(feFirst, &quot;AND&quot;, feLast);
 *
 *   &sol;&sol; Create a FilterExpression with &quot;firstName&quot; equals to &quot;Jack&quot; and &quot;lastName&quot; equals to &quot;Brown&quot;
 *   var feJackBrown = new blackberry.find.FilterExpression
 *                           (new blackberry.find.FilterExpression(&quot;firstName&quot;, &quot;==&quot;, &quot;Jack&quot;),
 *                            &quot;AND&quot;,
 *                            new blackberry.find.FilterExpression(&quot;lastName&quot;, &quot;==&quot;, &quot;Brown&quot;));
 *
 *   &sol;&sol; FilterExpression can be nested or combined
 *   var feCombined = new blackberry.find.FilterExpression(feJohnSmith, &quot;OR&quot;, feJackBrown);
 *
 *   &sol;&sol; Find all contacts either &quot;John Smith&quot; or &quot;Jack Brown&quot;
 *   var result = blackberry.pim.Contact.find(feCombined);
 *   for (i = 0; i &lt; result.length; i++) {
 *     alert(result[i].firstName);
 *   }
 * &lt;&sol;script&gt;
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
 *
 *   &sol;&sol; Create a FilterExpression with &quot;firstName&quot; equals to &quot;John&quot; and &quot;lastName&quot; equals to &quot;Smith&quot;
 *   var feFirst = new blackberry.find.FilterExpression(&quot;firstName&quot;, &quot;==&quot;, &quot;John&quot;);
 *   var feLast = new blackberry.find.FilterExpression(&quot;lastName&quot;, &quot;==&quot;, &quot;Smith&quot;);
 *   var feJohnSmith = new blackberry.find.FilterExpression(feFirst, &quot;AND&quot;, feLast);
 *
 *   &sol;&sol; Find all contacts either &quot;John Smith&quot; or with the firstName of &quot;Jack&quot;
 *   var feCombined2 = new blackberry.find.FilterExpression(feJohnSmith, &quot;OR&quot;, new blackberry.find.FilterExpression(&quot;firstName&quot;, &quot;==&quot;, &quot;Jack&quot;));
 *   var result2 = blackberry.pim.Contact.find(feCombined2);
 *   for (i = 0; i &lt; result2.length; i++) {
 *     alert(result2[i].firstName);
 *   }
 * &lt;&sol;script&gt;
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
 *
 *   &sol;&sol; Create a FilterExpression with &quot;Business&quot; being one of the categories
 *   var fe = new blackberry.find.FilterExpression(&quot;categories&quot;, &quot;CONTAINS&quot;, &quot;Business&quot;);
 *
 *   &sol;&sol; Find all contacts that belong to the &quot;Business&quot; category
 *   var result = blackberry.pim.Contact.find(fe);
 *   for (i = 0; i &lt; result.length; i++) {
 *     alert(result[i].firstName);
 *   }
 * &lt;&sol;script&gt;
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
 *
 *   &sol;&sol; Create a FilterExpression for uncategorized items
 *   var fe = new blackberry.find.FilterExpression(&quot;categories&quot;, &quot;==&quot;, null);
 *
 *   &sol;&sol; Find all uncategorized tasks
 *   var result = blackberry.pim.Task.find(fe);
 *   for (i = 0; i &lt; result.length; i++) {
 *     alert(result[i].summary);
 *   }
 * &lt;&sol;script&gt;
 */
blackberry.find.FilterExpression = function(leftField,operator,rightField,negate) {

    /**
     * @type Object
     * @description
     * 1. (Either) contains the interested field for "Find."
     * It supports "." to define the subfield to be matched, for example "homeAddress.zipPostal" for a find towards pim.Contact;
     * It also supports the JAM predefined fields for the attribute of Date type (using "."),
     * so the user can "find" towards a Date attribute to match "any appointments that start at 12 o'clock" or
     * "all reminders that will alarm in Oct" without creating complex expression objects.
     * <p>
     * For example, for a find towards pim.Appointment, if its "start" attribute is a Date of "Dec. 4, 2008 16:30:00"
     * <br/>
     * start.Year - returns a string of 4 digits of the Year value of the date attribute: "2008"
     * <br/>
     * start.Month - returns a string of the Month value: "12"
     * <br/>
     * start.Day - returns a string of the Date value: "4"
     * <br/>
     * start.Hour - returns a string of the Hour value: "16"
     * <br/>
     * start.Minute - returns a string of the Minute value: "30"
     * <br/>
     * start.Second - returns a string of the Second value: "00"
     * <p>
     * 2. (Or) contains another FilterExpression object to be combined with "rightField."
     * @readOnly
     * @BB50+
     */
    blackberry.find.FilterExpression.prototype.leftField = { };

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
     * 8, "REGEX"     - Regular expression. Please refer to java.lang.String.matches() API for details of how to create the correct regular expression and expected behavior.
     * <br/>
     * 16, "AND"      - AND
     * <br/>
     * 32, "OR"       - OR
     * <br/>
     * 64, "CONTAINS" - CONTAINS
     * @readOnly
     * @BB50+
     */
    blackberry.find.FilterExpression.prototype.operator = { };

    /**
     * @type Object
     * @description
     * 1. (Either) contains the value that used for comparing with the field that is specified by "leftField."
     * <br/>
     * 2. (Or) contains another FilterExpression object to be combined with "leftField."
     * @readOnly
     * @BB50+
     */
    blackberry.find.FilterExpression.prototype.rightField = { };

    /**
     * @type Boolean
     * @description
     * The Boolean flag that indicates whether the condition of the FilterExpression object should be evaluated negatively.  This should only be used when you have nested expressions.  On regular field&sol;value comparisons, negate isn&apos;t necessary as the != is sufficient.
     * @readOnly
     * @BB50+
     */
    blackberry.find.FilterExpression.prototype.negate = { };

};