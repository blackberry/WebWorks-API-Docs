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
 * @class This sample object shows how to document the difference between static and instance level children. 
 * The Sample Class is an instance object. 
 * <br/>Use this syntax to document a constructor. If you wish to add
 * a description for a constructor, the use of @class is needed. 
 * <br/> Classes can have a mix of static and instance members (signified with the use of 'prototype'), whereas Namespaces are limited to static members.
 * <br/>See {@link blackberry.sampleNamespace} to view how namespaces are supported. 
 * @description I am a kickass constructor description
 * @toc {Samples} Sample Static Class
 * @featureID blackberry.sampleStaticClass
 * @learns {How are constructors/classes documented in JSDocs?} http://code.google.com/p/jsdoc-toolkit/wiki/TagClass Please visit this link to learn more about the @class tag, and its difference from the @constructor/@construcs tags. 
*/
blackberry.sampleStaticClass = function() {};

	/**
	* A static constant
	* @type Number
	* @constant
	* @default 900
	* @BB50+
	*/
	blackberry.sampleStaticClass.staticConst = 900;
	
	/**
	* A instance constant
	* @type Number
	* @constant
	* @default 1000
	* @BB60+
	*/
	blackberry.sampleStaticClass.prototype.instanceConst = 1000;
	
	
	/**
	* A static property
	* @type String
	* @default "We are the knights"
	* @readOnly
	* @BB50+
	*/
	blackberry.sampleStaticClass.staticProperty = "We are the knights";
	
	/**
	* A instance property
	* @type String
	* @default "Who Say Neee"
	* @BB60+
	*/
	blackberry.sampleStaticClass.prototype.instanceProperty = "Who Say Neee";
	
	
	/**
	* A static function
	* @returns Number
	* @param {String} magicString I magically create a number
	* @BB50+
	*/
	blackberry.sampleStaticClass.staticFunction = function(){};
	
	/**
	* A static function
	* @returns Number
	* @param {String} magicString I magically create a number
	* @BB50+
	*/
	blackberry.sampleStaticClass.prototype.instanceFunction = function(){};
	
	
	/**
	* @event
	* @description This is how you document a static event
	* @param {blackberry.exampleClass} exampleClass Some parameter
	* @BB60+
	* @PB10+
	*/
	blackberry.sampleStaticClass.staticEvent = function(event) { };
	
	/**
	* @event
	* @description This is how you document an  instance event
	* @param {blackberry.exampleClass} exampleClass Some parameter
	* @BB60+
	* @PB10+
	*/
	blackberry.sampleStaticClass.prototype.instanceEvent = function(event) { };
	
