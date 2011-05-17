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
 * @toc {System} HTML5 Web Workers
 * @class Web Workers objects act as if they had an implicit MessagePort associated with them. This port is part of a channel that is set up when the worker is created and never be garbage collected before the Web Workers object. Only DedicatedWorker is supported. 
 * @constructor
 * @param {String} fileName The name of the javascript file to be executed by the worker.
 * @description Creates a new Worker object. 
 * @learns {Sample - Using HTML5 Web Worker } http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Sample-Application-Using-HTML5-Web-Workers/ta-p/627078 Sample that demonstrates how to use the HTML5 Web Workers API [BlackBerry Developer Resource Center].
 * @notice {Warning (BlackBerry 5.0 Notice):}
 * Geolocation support on BlackBerry OS 5.0 is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
*/
Worker = function() {};

    /**
    * @description  The postMessage() method on Web Workers objects invoked the method of the same name on the port, with the same arguments, and returned the same return value.
    * @param {Object} message A message to post when worker is created.
    * @PB10
    * @BB50+
    * @example
    * Main script:
    *
    * &lt;script type="text/javascript"&gt;
    *   var worker = new Worker('doWork.js');
    *
    *   worker.addEventListener('message', function(e) {
    *        console.log('Worker said: ', e.data);
    *    }, false);
    *
    * &lt;/script&gt;
    *
    *doWork.js (the worker):
    *
    *   self.addEventListener('message', function(e) {
    *        self.postMessage(e.data);
    *    }, false);
    *
    */
    Worker.prototype.postMessage = function(message) {};


    /**
    * @description  The onmessage is the event handler as IDL attributes to Web Workers ojbect.
    * @param {String} [messageText] text message.
    * @param {String} [senderId] sender ID.
    * @param {Object} [messageObject] message object when send.
    * @PB10
    * @BB50+        
    */
    Worker.prototype.onmessage = function(messageText, senderId, messageObject) {};
    
    /**
     * @field
     * @description The ApplicationCache object associated with this worker
     * @type ApplicationCache
     * @PB10
     * @BB60+
     */
    Worker.prototype.applicationCache = undefined;

