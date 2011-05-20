/* Copyright 2010-2011 Research In Motion Limited.
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
 * @class This exampleobject shows how to document a class object.
 * @description The Sample Class is an instance object. This class also shows how to use the @image tag </br> {@image img/happyface.png}
 * @toc {OtherSamples} Example Class
 * @featureID blackberry.exampleClass
 * @beta This is how to use the beta tag
 * @permission some_id_permission Descriptive text for this permission, which is required for this example class
 * @permission [some_optional_id_permission] Descriptive text for this permission, which is optional for this example class
 * @permission [some_optional_id_permission2] Descriptive text for some_optional_id_permission2
 * @permission some_id_permission2 Descriptive text for some_id_permission2
 * @permission some_id_permission3 Descriptive text for some_id_permission3
*/
blackberry.exampleClass = function() {};

/**
 * @type Number
 * @description InnerClass constant B
 * @constant
 * @PB10
 */ 
blackberry.exampleClass.CONSTANT_A = 1;

/**
 * @type Number
 * @description InnerClass constant B
 * @constant
 * @PB10
 */ 	
blackberry.exampleClass.CONSTANT_B = 2;

/**
 * @type Number
 * @description InnerClass constant B
 * @constant
 * @PB10
 */ 
blackberry.exampleClass.CONSTANT_C = 3;

/**
 * @constructedBy Window.makeExampleClass
 * @function
 * @param {String} s A string paramter
 * @description A constructor with a customName
 * @PB10
 */ 
blackberry.exampleClass.constructor = undefined;

/**
* <div><p>
* Shows an innerclass instance object of the example class
* </p></div>
* @toc {OtherSamples} Inner Class
* @BB50+
* @class 
* @featureID blackberry.exampleClass
* @featureID blackberry.exampleClass.InnerClass
* @constructor Constructor for a new InnerClass object.
* @param {Number} [neededNumber] Depending on which one of the constants chose, will create a new InnerClass with either the NEW, OLD or CALLBACK property. 
* @throws IllegalInnerClassTypeException thrown when given not one of the expected three constants that define the three types of inner class (will have different properties)
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
* var type = blackberry.exampleClass.CONSTANT_B;
*
* var args = new blackberry.exampleClass.InnerClass(type);
*
* alert(blackberry.exampleClass.InnerClass.OLD);
* &lt;&sol;script&gt;
*/
blackberry.exampleClass.InnerClass = function(neededNumber) {};

/**
 * @type String
 * @description NEW
 * @readOnly
 * @PB10
 */ 
blackberry.exampleClass.InnerClass.prototype.NEW = "new";

/**
 * @type String
 * @description OLD
 * @readOnly
 * @PB10
 */ 
blackberry.exampleClass.InnerClass.prototype.OLD  = "old";

/**
* @propertyCB {Function} CALLBACK Invoked when the InnerClass is declared with constant CONSTANT_C. Can use it to listen for new {@link blackberry.array} objects.
* @PB10
*/
blackberry.exampleClass.InnerClass.prototype.CALLBACK = function() {};