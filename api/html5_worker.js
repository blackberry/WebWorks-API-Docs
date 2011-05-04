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
 * @toc {System} Web Workers
 * @namespace Web Workers objects act as if they had an implicit MessagePort associated with them. This port is part of a channel that is set up when the worker is created and never be garbage collected before the Web Workers object. Only DedicatedWorker is supported. 
*/
 
WebWorkers = {

        /**
        * @desc  The postMessage() method on Web Workers objects invoked the method of the same name on the port, with the same arguments, and returned the same return value.
        * @param {Object} message A message to post when worker is created.
        * @PB10
        * @BB50+
        * @example
        * Main script:
        *
        * &lt;script type=&quot;text&sol;javascript&quot;&gt;
        *   var worker = new Worker('doWork.js');
        *
        *   worker.addEventListener('message', function(e) {
        *        console.log('Worker said: ', e.data);
        *    }, false);
        *
        * &lt;&sol;script&gt;
        *
        *doWork.js (the worker):
        *
        *   self.addEventListener('message', function(e) {
        *        self.postMessage(e.data);
        *    }, false);
        *
        */
        postMessage : function(message) {};


        /**
        * @desc  The onmessage is the event handler as IDL attributes to Web Workers ojbect.
        * @param {String} [messageText] text message.
        * @param {String} [senderId] sender ID.
        * @param {Object} [messageObject] message object when send.
        * @PB10
        * @BB50+        
        */
        onmessage : function(messageText, senderId, messageObject) {};

    }
