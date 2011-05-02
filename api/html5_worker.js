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
 * @namespace DedicatedWorkerGlobalScope objects act as if they had an implicit MessagePort associated with them. This port is part of a channel that is set up when the worker is created and never be garbage collected before the DedicatedWorkerGlobalScope object.  
 * @toc {Worker} DedicatedWorkerGlobalScope 
 */
DedicatedWorkerGlobalScope = {        
        
		/**
		 * @desc  The postMessage() method on DedicatedWorkerGlobalScope objects invoked the method of the same name on the port, with the same arguments, and returned the same return value.
		 * @param {Object} message A message 
		 * @PB10
		 */
        postMessage : function(message) {};
        
		
		/**
		 * @desc  The onmessage is the event handler as IDL attributes to DedicatedWorkerGlobalScope ojbect.
		 * @param {String} [messageText] text message.
		 * @param {String} [senderId] sender ID.
		 * @param {Object} [messageObject] message object when send.		 
		 * @PB10
		 */
        onmessage : function(messageText, senderId, messageObject) {};
        
    }
    	