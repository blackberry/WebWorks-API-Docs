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
 * @namespace This sample object shows how to document a namespace object.   
 * <br/>Use this Object Literal Syntax to document a namespace. In this case, only 
 * static methods and properties are established. See {@link blackberry.sampleClass}
 * on how to document a class with a constructor. 
 * @toc {Samples} Sample Namespace
 * @featureID blackberry.sampleNamespace
 */
blackberry.sampleNamespace = {

		/**
		 * @constant
		 * @default "blah"
		 * @type String
		 * @BB50+
		 * @description This is how you document a constant with a default value.
		 */
		CONSTANT_EXAMPLE : "blah",

		/**
		 * @readOnly
		 * @type Number
		 * @BB50+
		 * @PB10
		 * @description This is how you document a readonly property
		 */
		 readonly_property: undefined,	

		/**
		 * @description This is how you document a static function
		 * @returns {Boolean} Returns true by default, false if a string beginning with a vowel is passed.   
		 * @BB50+
		 * @param {String} word String parameter.
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 *
		 * function sampleCode() {
		 *        
		 *		  if (!blackberry.function_example(CONSTANT_EXAMPLE) {      
		 *		  alert(readonly_property); //will always print 
		 *		  }
		 * }
		 *  
		 * sampleCode();
		 * &lt;/script&gt;
		 */
		 function_example : function(word){}
}


/**
 * @name blackberry.sampleNamespace.prototype.overloadedFunction
 * @function
 * @description This is one version of an overloaded function
 * @param {String} phrase Parses the phrase and searches for the first number and manipulates it.
 * @returns {Number} The number divided by 42
 * @BB50+
 */
/**
 * @name blackberry.sampleNamespace.prototype.overloadedFunction^2
 * @function
 * @description This is another version of an overloaded function
 * @param {Number} num The number to be manipulated.
 * @returns {Number} The number divided by 42
 * @BB50+
 * @PB10
 */
blackberry.sampleNamespace.prototype.overloadedFunction = function(){};