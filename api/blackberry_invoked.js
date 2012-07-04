/*
* Copyright 2011-2012 Research In Motion Limited.
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
 * @beta
 * @namespace The Invoked object allows the application to be invoked by other applications.
 * @toc {Invoke} Invoked
 * @featureID blackberry.invoked
 */
blackberry.invoked = {

       /**#@+
        * @noSignature
        * @event
        * @BB10X
        * @description This event is fired by the system. If you want to listen to the event you can do so using the {@link blackberry.event.addEventListener} function and remove the listener using the {@link blackberry.event.removeEventListener} function. <br/>
        */

       /**
        * @description The <b>invoked</b> event is triggered by the system when the application is invoked by another application.
        * @callback {function} yourCallbackFunction The callback function that will be invoked on the invoked event
        * @callback {JSON} yourCallbackFunction.info An object  the pertinent information
        * @callback {String} yourCallbackFunction.info.source [optional] Identifier of invocation target (as stated in its BAR manifest) to which the receiver can send results. Omitting the source attribute implies that the sender does NOT support results.
        * @callback {String} yourCallbackFunction.info.target [optional] Identifier of target (as stated in its BAR manifest) to which invocation should be delivered. If the target is supplied then brokering is bypassed and attempt is made to invoke the specified target.
        * @callback {String} yourCallbackFunction.info.action [optional] Identifier of action to be performed by target. Omitting action implies brokering should apply to any action supported for the specified type or that the target should infer the action.
        * @callback {String} yourCallbackFunction.info.type [optional] MIME type of data to be acted on. If the mime type is not specified then Invocation Framework would attempt to infer the mime type from the given URI. If the mime type can not be inferred or URI field is empty then invocation will be rejected.
        * @callback {String} yourCallbackFunction.info.uri [optional] URI pointing to invocation data. If no URI is provided then this implies the data://local URI indicating that the invocation data is provided in-band in the data field of the invocation message.
        * @callback {String} yourCallbackFunction.info.data [optional] Data passed to target. Omitting the data implies that the action-type are sufficient to carry out the invocation. Note that target invocation allows passing arbitrary binary data that will be encoded into Base64 encoded string.        
        * @example
        * &lt;script type="text/javascript"&gt;
        *
        * function onInvoked(onInvokedInfo) {
        *    if(onInvokedInfo.source) {
        *        console.log("Source: " + onInvokedInfo.source);
        *    }
        *    if(onInvokedInfo.target) {
        *        console.log("Target(me): " + onInvokedInfo.target);
        *    }
        *    if(onInvokedInfo.action) {
        *        console.log("Action: " + onInvokedInfo.action);
        *    }
        *    if(onInvokedInfo.data) {
        *        console.log("Data: " + onInvokedInfo.data);
        *        //the data comes in as a base64 string you can convert it using atob(...)
        *        //note that atob will fail if you are being passed unicode strings
        *        console.log("Data: " + atob(onInvokedInfo.data));
        *    }
        * }
        *
        * blackberry.event.addEventListener("invoked", onInvoked);
        *
        * &lt;/script&gt;
        */
       invoked : function(){},

        /**#@-*/
}
