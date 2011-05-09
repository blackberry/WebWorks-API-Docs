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
 * @class This sample object shows how to document a class object. The Sample Class is an instance object. 
 * <br/>Use this syntax to document a constructor. If you wish to add
 * a description for a constructor, the use of @class is needed. 
 * <br/> Classes can have a mix of static and instance members (signified with the use of 'prototype'), whereas Namespaces are limited to static members.
 * <br/>See {@link blackberry.sampleNamespace} to view how namespaces are supported. 
 * @toc {Samples} Sample Class
 * @featureID blackberry.sampleClass
 * @learns {How are constructors/classes documented in JSDocs?} http://code.google.com/p/jsdoc-toolkit/wiki/TagClass Please visit this link to learn more about the @class tag, and its difference from the @constructor/@construcs tags. 
*/
blackberry.sampleClass = function() {};

	/**
	* A static constant
	* @type Number
	* @constant
	* @default 900
	* @BB50+
	*/
	blackberry.sampleClass.staticVar = 900;

	/**
	* This is how you document a callback listener.  All subsequent calls assigning a new onPlayerUpdate callback will override the previous callback assigned. To unsubscribe from the PlayerListener, pass null as an onPlayerUpdate parameter.
	* @callback {function} [onBigUpdate] This callback function is called to deliver an event to a registered listener when a big event is observed.
	* @callback {blackberry.sampleClass} [onBigUpdate.instanceProperty] The property which generated the event.
	* @returns {Boolean} Returns true if the callback is successfully assigned
	* @BB50+
	* @example
	* &lt;script type=&quot;text/javascript&quot;&gt;
	*   // Subscribing and unsubscribing with sample class&apos;s events
	*   var eventInstance = new  blackberry.sampleClass();    
	*   evenInstance.addSampleListener(OnSomeEventUpdate);
	* 
	*   // Invoked when there is an update event for the player.
	*   function OnUpdate(start, event) {
	*     try {
	*       alert("We're here!");
	*     } catch (e) {}
	* 
	*     evenInstance.addSampleListenernull);
	*   }
	* &lt;/script&gt;
	*/
    blackberry.sampleClass.prototype.addSampleListener = function(onSomeEventUpdate) { };
 
	/**
	* @event
	* @description This is how you document an event
	* @param {blackberry.exampleClass} exampleClass Some parameter
	* @BB60+
	* @PB10+
	*/
	blackberry.sampleClass.prototype.onEvent = function(event) { };
