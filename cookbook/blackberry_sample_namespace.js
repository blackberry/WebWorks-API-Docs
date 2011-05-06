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
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * function startCameraApp() {
 *              var args = new blackberry.invoke.CameraArguments();
 *              args.view = blackberry.invoke.CameraArguments.VIEW_RECORDER;
 *
 *              blackberry.invoke.invoke(blackberry.invoke.APP_CAMERA, args);
 * }
 *  
 * startCameraApp();
 * &lt;/script&gt;
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
		 readonly_property: "",	

		/**
		 * @description This is how you document a static function
		 * @returns {Boolean = TRUE} Returns true by default, false if a string beginning with a vowel is passed.   
		 * @BB50+
		 * @param {String} word String parameter.
		 */
		 function_example : function(){}

}