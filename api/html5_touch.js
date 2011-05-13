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


/*
* Based on:
* https://dvcs.w3.org/hg/webevents/raw-file/tip/touchevents.html
*/


/**
* @namespace
* This interface defines an individual point of contact for a touch event.
* @BB60+
* @PB10
*/
Touch = function() {
}

/**
*
* An identification number for each touch point, unique to that touch point per session.
* The algorithm for determining the identifier value is as follows: <br /><br />
* <ol>
* <li>if there are no other active touch event sessions, the value of identifier must be 0</li>
* <li>if there is at least one active touch event session, the value of identifier 
* must be the lowest integer not currently used by any active Touch object in 
* any active touch event session</li>
* </ol>
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
Touch.prototype.identifier = { };

/**
* x-coordinate of point relative to the screen
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
Touch.prototype.screenX = { };

/**
* y-coordinate of point relative to the screen
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
Touch.prototype.screenY = { };

/**
* x-coordinate of point relative to the viewport, excluding any scroll offset
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
Touch.prototype.clientX = { };

/**
* y-coordinate of point relative to the viewport, excluding any scroll offset
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
Touch.prototype.clientY = { };

/**
* x-coordinate of point relative to the viewport, including any scroll offset
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
Touch.prototype.pageX = { };

/**
* y-coordinate of point relative to the viewport, including any scroll offset
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
Touch.prototype.pageY = { };

/**
* the radius of the ellipse which most closely circumscribes the touching area (e.g. finger, stylus) along the x-axis, in pixels of the same scale as screenX; 1 if no value is known. The value must be positive.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
Touch.prototype.radiusX = { };

/**
* the radius of the ellipse which most closely circumscribes the touching area (e.g. finger, stylus) along the y-axis, in pixels of the same scale as screenY; 1 if no value is known. The value must be positive.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
Touch.prototype.radiusY = { };

/**
*
* the angle (in degrees) that the ellipse described by radiusX and radiusY is rotated 
* clockwise about its center; 0 if no value is known. The value must be greater than 
* or equal to 0 and less than 90. <br /><br />
* 
* If the ellipse described by radiusX and radiusY is circular, then rotationAngle has 
* no effect. The user agent may use 0 as the value in this case, or it may use any other 
* value in the allowed range. (For example, the user agent may use the rotationAngle 
* value from the previous touch event, to avoid sudden changes.)
*
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
Touch.prototype.rotationAngle = { };

/**
* a relative value of pressure applied, in the range 0 to 1, where 0 is no pressure, 
* and 1 is the highest level of pressure the touch device is capable of sensing; 0 if 
* no value is known. In environments where force is known, the absolute pressure 
* represented by the force attribute, and the sensitivity in levels of pressure, 
* may vary.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
Touch.prototype.force = { };


/**
* @namespace {@link Touch} point list. 
* This interface defines a list of individual points of contact for a touch event.
* @BB60+
* @PB10
*/
TouchList = function() {};

/**
* returns the number of {@link Touch} objects in the list
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
TouchList.prototype.length = {};

/**
* returns the {@link Touch} with index index from the list, sorted in order from latest to earliest
* @squareAccessor
* @function
* @param {Number} index the identifier of the touch event to fetch
* @returns {Touch} the {@link Touch} with index index from the list, sorted in order from latest to earliest
* @readOnly
* @throws {IndexOutOfBoundsException} When the index is invalid
* @BB60+
* @PB10
*/
TouchList.prototype.item = function(index) { };

/**
* returns the first {@link Touch} with long identifier from the list

* @BB60+
* @PB10
* @param {Number} identifier the identifier of the touch event to fetch
* @returns {Touch} the first {@link Touch} with long identifier from the list
*/
TouchList.prototype.identifiedTouch = function(identifier) { };

/**
* @namespace
* This interface defines the touchstart, touchend, touchmove, touchenter, touchleave, and touchcancel event types.
* @toc {Touch} HTML5 Touch Event
* @extends UIEvent
*/
TouchEvent = function() { };

/**
* a list of {@link Touch}es for every point of contact currently touching the surface
* @type TouchList
* @readOnly
* @BB60+
* @PB10
*/
TouchEvent.prototype.touches = {};

/**
* a list of {@link Touch}es for every point of contact currently touching the surface, which started on the same target
* @type TouchList
* @readOnly
* @BB60+
* @PB10
*/
TouchEvent.prototype.targetTouches = {};


/**
* a list of {@link Touch}es for every point of contact which contributed to the event
* @type TouchList
* @readOnly
* @BB60+
* @PB10
*/
TouchEvent.prototype.changedTouches = {};

/**
* true if the alt (Alternate) key modifier is activated; otherwise false
* @type Boolean
* @readOnly
* @BB60+
* @PB10
*/
TouchEvent.prototype.altKey = {};


/**
* if the meta (Meta) key modifier is activated; otherwise false. On some platforms 
* this attribute may map to a differently-named key 
* @type Boolean
* @readOnly
* @BB60+
* @PB10
*/
TouchEvent.prototype.metaKey = {};

/**
* true if the ctrl (Control) key modifier is activated; otherwise false
* @type Boolean
* @readOnly
* @BB60+
* @PB10
*/
TouchEvent.prototype.ctrlKey = {};

/**
* true if the shift (Shift) key modifier is activated; otherwise false
* @type Boolean
* @readOnly
* @BB60+
* @PB10
*/
TouchEvent.prototype.shiftKey = {};


/**
* identifies a secondary {EventTarget} related to a touch event. This attribute is 
* used with the touchenter event to indicate the {EventTarget} the touch point 
* exited, and with the touchleave event to indicate the {EventTarget} the touch point 
* entered. For other event types, this attribute must be null.
* @type EventTarget
* @readOnly
* @BB60+
* @PB10
*/
TouchEvent.prototype.relatedTarget = {};

/**
* initializes a TouchEvent created through the DocumentEvent interface.
* @type Boolean
* @readOnly
* @BB60+
* @PB10
* @param {String} type
* @param {Boolean} canBubble
* @param {Boolean} cancelable
* @param {Window} view
* @param {Number} detail
* @param {Boolean} ctrlKey
* @param {Boolean} altKey
* @param {Boolean} shiftKey
* @param {Boolean} metaKey
* @param {TouchList} touches
* @param {TouchList} targetTouches
* @param {TouchList} changedTouches
*/
TouchEvent.prototype.initTouchEvent = function (type,canBubble,cancelable,view,detail, 
ctrlKey,altKey,shiftKey,metaKey,touches,targetTouches,changedTouches) {
}


/**
* @namespace
* HTML Element<br/><br/>
* The touchstart, touchend, touchmove, touchenter, touchleave, touchcancel events must be defined on an element.
* @toc {Touch} HTML5 Element Touch Events
* @BB60+
* @PB10
* @example
* &lt;html&gt;&lt;head&gt;&lt;title&gt;sample&lt;/title&gt;&lt;/head&gt;
*   &lt;body&gt;
*     &lt;img src=&quot;button.png&quot; ontouchstart=&quot;alert(event.target)&quot; /&gt;
*   &lt;/body&gt;
* &lt;/html&gt;
* @example
* var img = document.createElement('img');
* img.ontouchstart=function(e) { 
* 
* for(var i = 0; I < e. touches.length; i++)
* {
*    var touch = touches[i];
*
*    var x = touch.clientX;
*    var y = touch.clientY;
* 
*    // do something
* }
* @example
* preventMove = function(e) {
*    evt.preventDefault();
*    window.scroll(0, 0);
*    return false;
* };
* window.document.addEventListener('touchmove', preventMove, false);
 * @learns {Reference - Touch API} http://docs.blackberry.com/en/developers/deliverables/27297/Touch_Objects_1593432_11.jsp BlackBerry browser JavaScript reference guide [BlackBerry Documentation].
 * @learns {Sample - SketchPad Application} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Sample-Code-SketchPad-Application/ta-p/614077 Example that draws finger sketches on an HTML5 canvas corresponding to touch screen or trackpad movement [BlackBerry Developer Resource Center].
*/
Element = function() {
}

/**
* A user agent must dispatch this event type to indicate when the user places a touch point 
* on the touch surface. <br/><br/>
* The target of this event must be an Element.
* @BB60+
* @PB10
* @event
* @param {TouchEvent} event
*/
Element.prototype.ontouchstart = function(event) { };

/**
* A user agent must dispatch this event type to indicate when the user removes a touch point 
* from the touch surface, also including cases where the touch point physically leaves the 
* touch surface, such as being dragged off of the screen. <br/><br/>
* 
* The target of this event must be the same Element that received the touchstart event when 
* this touch point was placed on the surface, even if the touch point has since moved outside 
* the interactive area of the target element.<br/><br/>
* 
* The touch point or points that were removed must be included in the changedTouches attribute 
* of the TouchEvent, and must not be included in the touches and targetTouches attributes.
* @BB60+
* @PB10
* @event
* @param {TouchEvent} event
*/
Element.prototype.ontouchend = function(event) { };
}

/**
*
* A user agent must dispatch this event type to indicate when the user moves a touch point along 
* the touch surface.<br/><br/>
* 
* The target of this event must be the same Element that received the touchstart event when this 
* touch point was placed on the surface, even if the touch point has since moved outside the 
* interactive area of the target element.<br/><br/>
* 
* If the values of radiusX, radiusY, rotationAngle, or force are known, then the user agent 
* also must dispatch this event type to indicate when any of these attributes of a touch point 
* have changed.<br/><br/>
* 
* Note that the rate at which the user agent sends touchmove events is implementation-defined, 
* and may depend on hardware capabilities and other implementation details.
* @BB60+
* @PB10
* @event
* @param {TouchEvent} event
*/
Element.prototype.ontouchmove = function(event) { };
}

/**
* A user agent must dispatch this event type to indicate when a touch point moves onto the 
* interactive area defined by a DOM element. Events of this type must not bubble.
* @BB60+
* @PB10
* @event
* @param {TouchEvent} event
*/
Element.prototype.ontouchenter = function(event) { };
}

/**
* A user agent must dispatch this event type to indicate when a touch point moves off the 
* interactive area defined by a DOM element. Events of this type must not bubble.
* @BB60+
* @PB10
* @event
* @param {TouchEvent} event
*/
Element.prototype.ontouchleave = function(event) { };
}

/**
* A user agent must dispatch this event type to indicate when a touch point has been 
* disrupted in an implementation-specific manner, such as a synchronous event or action 
* originating from the UA canceling the touch, or the touch point leaving the document 
* window into a non-document area which is capable of handling user interactions. 
* (e.g. The UA's native user interface, plug-ins) A user agent may also dispatch this 
* event type when the user places more touch points on the touch surface than the device 
* or implementation is configured to store, in which case the earliest Touch object in 
* the TouchList should be removed.
* @BB60+
* @PB10
* @event
* @param {TouchEvent} event
*/
Element.prototype.ontouchcancel = function(event) { };
}


