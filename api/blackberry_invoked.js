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

    /**
     * @description As a Card, notify the navigator that it is finished handling resize request
     * @BB10X
     * @RIPPLE
     * @example
     * &lt;script type="text/javascript"&gt;
     *
     * function onCardResizeHandler(resizeRequest) {
     *     // Resizing
     *     ...
     *
     *     // Notify the navigator resize is done
     *     blackberry.invoked.cardResizeDone();
     * }
     *
     * blackberry.event.addEventListener("onCardResize", onCardResizeHandler);
     * &lt;/script&gt;
     */
    cardResizeDone : function() {
    },

    /**
     * @description As a Card, request the navigator to perform a peek on the deck
     * @param {String} peekType Describes the type of peek to perform as a peek to the content of the parent or a peek to the content of the root. The value should be either "content" or "root".
     * @BB10X
     * @RIPPLE
     * @example
     * &lt;script type="text/javascript"&gt;
     *
     * function peekParent() {
     *     // Request the navigator to perform a peek to the content of the parent
     *     blackberry.invoked.cardStartPeek("content");
     * }
     *
     * &lt;/script&gt;
     */
    cardStartPeek : function(peekType) {
    },

    /**
     * @description As a Card, request the Navigator to close itself.
     * @param {Object} request Object literal that specifies reason, type and response data of the closure request.
     * @param {String} [request.reason] The reason that identifies application level description of why the card was closed.
     * @param {String} [request.type] MIME type of data to be returned. It's mandatory if data is returned.
     * @param {String} [request.data] The data that will be returned to the parent.
     * @returns {void}
     * @BB10X
     * @RIPPLE
     * @example
     * &lt;script type="text/javascript"&gt;
     *
     * function requestClosure() {
     *     blackberry.invoked.cardRequestClosure({
     *         reason: "ItemSelected",
     *         type: "application/contact",
     *         data: "{"name":"......}"
     *     });
     * }
     *
     * &lt;/script&gt;
     */
    cardRequestClosure : function(request) {
    },

    /**#@+
     * @noSignature
     * @event
     * @BB10X
     * @description This event is fired by the system. If you want to listen to the event you can do so using the {@link blackberry.event.addEventListener} function and remove the listener using the {@link blackberry.event.removeEventListener} function. <br/>
     */

    /**
     * @description The <b>invoked</b> event is triggered by the system when the application is invoked by another application.
     * @callback {function} yourCallbackFunction The callback function that will be invoked on the invoked event
     * @callback {JSON} yourCallbackFunction.info An object the pertinent information
     * @callback {String} [yourCallbackFunction.info.source] Identifier of invocation target (as stated in its BAR manifest) to which the receiver can send results. Omitting the source attribute implies that the sender does NOT support results.
     * @callback {String} [yourCallbackFunction.info.target] Identifier of target (as stated in its BAR manifest) to which invocation should be delivered. If the target is supplied then brokering is bypassed and attempt is made to invoke the specified target.
     * @callback {String} [yourCallbackFunction.info.action] Identifier of action to be performed by target. Omitting action implies brokering should apply to any action supported for the specified type or that the target should infer the action.
     * @callback {String} [yourCallbackFunction.info.type] MIME type of data to be acted on. If the mime type is not specified then Invocation Framework would attempt to infer the mime type from the given URI. If the mime type can not be inferred or URI field is empty then invocation will be rejected.
     * @callback {String} [yourCallbackFunction.info.uri] URI pointing to invocation data. If no URI is provided then this implies the data://local URI indicating that the invocation data is provided in-band in the data field of the invocation message.
     * @callback {String} [yourCallbackFunction.info.data] Data passed to target. Omitting the data implies that the action-type are sufficient to carry out the invocation. Note that target invocation allows passing arbitrary binary data that will be encoded into Base64 encoded string.
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
    invoked : function() {
    },

    /**
     * @description As a Card, the <b>onCardClosed</b> event is fired by the navigator to it to indicate that it should clean-up its state and wait for invocation as it is pooled. When a card receives a cardClosed event it should assume that its child card is also closed (if one exists). When a card is dismissed by the Parent or navigator the reason value is "closed".
     * @callback {function} yourCallbackFunction The callback function that will be invoked on the onCardClosed event.
     * @callback {Object} yourCallbackFunction.request An object that includes any response data sent by the card (if the card requested closure).
     * @callback {String} yourCallbackFunction.request.reason Describes application level description of why the card was closed. In the case that the close was due to a navigation Navigator will insert the value "navigation".
     * @callback {String} yourCallbackFunction.request.type Describes the type and encoding of the value in the data attributes.
     * @callback {String} yourCallbackFunction.request.data Describes the data that will be returned to the parent.
     * @example
     * &lt;script type="text/javascript"&gt;
     *
     * function onCardClosedHandler(request) {
     *    // If it was closed by the navigator, do the clean-up
     *    if (request.reason == "navigation") {
     *        cleanup();
     *    }
     * }
     *
     * blackberry.event.addEventListener("onCardClosed", onCardClosedHandler);
     *
     * &lt;/script&gt;
     */
    onCardClosed : function() {
    },

    /**
     * @description As a Card, the <b>onCardResize</b> event is fired by the navigator to indicate that it should resize its buffers.
     * @callback {function} yourCallbackFunction The callback function that will be invoked on the onCardResize event
     * @callback {Object} yourCallbackFunction.resizeRequest An object that contains the resize information.
     * @callback {Number} yourCallbackFunction.resizeRequest.width Describes the new width for the card.
     * @callback {Number} yourCallbackFunction.resizeRequest.height Describes the new height for the card.
     * @callback {String} yourCallbackFunction.resizeRequest.orientation Describes the new orientation of device (portrait or landscape). The value is either "portrait" or "landscape".
     * @callback {String} yourCallbackFunction.resizeRequest.edge Describes the new edge of device that is pointing up. When the new orientation of device is portrait, the value is either "top_up" (the top of the device is pointing up) or "bottom_up" (the bottom of the device is pointing up); when the new orientation of device is landscape, the value is either "left_up" (the left side of the device is pointing up) or "right_up" (the right side of the device is pointing up).
     * @example
     * &lt;script type="text/javascript"&gt;
     *
     * function onCardResizeHandler(resizeRequest) {
     *    doResize(resizeRequest.width, resizeRequest.height, resizeRequest.orientation, resizeRequest.edge);
     *    ...
     *     // Notify the navigator resize is done
     *     blackberry.invoked.cardResizeDone();
     * }
     *
     * blackberry.event.addEventListener("onCardResize", onCardResizeHandler);
     *
     * &lt;/script&gt;
     */
    onCardResize : function() {
    }
    /**#@-*/
}
