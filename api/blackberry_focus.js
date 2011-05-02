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
* <div><h3>Guidelines</h3><p>
*       If the BlackBerry device doesn't have a trackball or trackpad, the focus-based navigation mode will not be enabled even if the widget configuration document specifies that focus-based navigation is used.
*       If the widget is configured for focus-based navigation and it runs on a BlackBerry device that uses a trackpad or trackball, focus-based navigation will be enabled.
*     </p></div>
* <div><p>
*       In summary, running a widget with focus-based navigation mode markup on a BlackBerry device without a trackball is the same as running the widget without specifying any focus-based navigation and the entire navigation related HTML mark-up, JavaScript and CSS extensions are ignored.
*     </p></div>
* <div><p>
*       Currently, focus based navigation will not function in a "child" document that is contained by a <frameset> <frame>
*       or <iframe> or any other HTML element that contains a document element. Focus based navigation only works in the "root" document.
*       </p></div>
* <div><h3>Configuration</h3><p>
*       Navigation mode can be enabled for BlackBerry devices with trackball by adding a  <rim:navigation> element in config.xml document that looks like the following:
*         <rim:navigation mode="focus" />
*         </p></div>
* <div><h3>HTML Mark-up Details</h3><p>
*       By default, all <textarea>, <a>, <input>, <select> and <button> elements are focusable.
*       If you wish to have other HTML elements to become focusable, which will make them a part of the navigation map, you can add the attribute x-blackberry-focusable with the value of "true" to these elements, e.g.
*         </p></div>
* <div><p>
*       <td id="Td1" x-blackberry-focusable="true" > 1 </td>
*       </p></div>
* <div><p>
*       In addition, if you want to remove some of the default focusable elements from the navigation map, which prevent them from gaining focus, add the attribute x-blackberry-focusable with the value of "false" to these elements. For example:
*     </p></div>
* <div><p>
*       <input value="Fixed" x-blackberry-focusable="false" />
*       </p></div>
* <div><p>
*       By default, the "highest" focusable element will be initially focused after the document is completely loaded.
*       You can set a specific focusable element to be initially focused after the document is loaded by adding the "x-blackberry-initialFocus" attribute to it.  For example:
*     </p></div>
* <div><p>
*       <a class="list" x-blackberry-initialFocus="true" >First Link</a>
*       </p></div>
* <div><h3>Events and Overrides</h3><p>
*       By default, all focusable HTML elements compose the navigation map and the focus will move from one focusable element to another focusable element according to the direction of the scroll wheel and the 2-D dimension of the focusable elements.
*       This default navigation behavior can be overridden and customized, by using the x-blackberry-onUp, x-blackberry-onDown, x-blackberry-onLeft, and x-blackberry-onRight event attributes.
*       For example, here is a snippet of HTML:
*     </p></div>
* <div><p>
*       <input id="input1" value="OverrideNavigationBehavior" x-blackberry-onUp="SomeJsFunction()" />
*       </p></div>
* <div><p>
*       If the input1 element is currently focused, and the user scrolls up using the trackpad or trackball, SomeJsFunction() will be executed instead of the default focus moving behavior.
*       The content of the x-blackberry-onUp value will be executed as JavaScript and the default focus movement will not occur.
*     </p></div>
* <div><p>
*       In the above case, if SomeJsFunction() doesn't programmatically move the focus to another element, the current focused element will not change.  If you want
*       to trap scrolling and do not want any navigation action to occur, or JavaScript to execute, you can override one of the navigation attributes with an empty value like the following: x-blackberry-onUp="".
*     </p></div>
* <div><p>
*       When an element gains focus, it will receive a mouseover event. An element can gain focus when the user moves the trackpad or trackball under the default navigation behavior or if blackberry.focus.setFocus() is called programmatically to set the focus to an element.
*       When an element loses focus, it will receive a mouseout event. An element loses focus when the focus is set to another element.
*     </p></div>
* <div><p>
*       When the user presses the trackpad or trackball in a selection action, the current focused element will receive a mousedown, mouseup, and click in sequence if it doesn't consume these actions as UI events in advance.
*       For example, when the current focused element is a text box, the element won't receive a mousedown, mouseup, and click when the user presses the trackpad or trackball, because the text box consumed these actions as UI events before these actions were popped up to the DOM level.
*     </p></div>
* <div><p>
*       When there is no focusable element visible in the current viewable part of the screen, no element will be considered focused. In this case, the mousedown, mouseup, and click event is not directed to any element if you press the scroll wheel.
*     </p></div>
* <div><h3>Focus Visual Effect</h3><p>
*       By default, when an element is focused, a light-blue round rectangle appears around the dimension of the element. When an element gains focus, the CSS hover will be triggered, allowing you to customize
*       the focused element. You can also turn off the default focus highlight by using the following meta tag:
*     </p></div>
* <div><p>
*       <meta name="x-blackberry-defaultHoverEffect" content="false" />
*       </p></div>
* <div><h3>Limitations</h3><p>
*       Currently focus navigation doesn't support the <select> element with the "multiple" attribute. Therefore the <select>
*       element with the "multiple" attribute is not focusable and cannot be added to navigation map. The workaround is to either add some navigation JavaScript outside the <select> element or simply using other HTML elements to mimic the multiple selection function.
*       </p></div>
* @toc {User Interface} Focus 
* @BB50+
* @namespace The focus object provides functions and properties for retrieving and setting focus to focusable areas of the HTML
* @example
* &lt;html&gt;
*   &lt;head&gt;
*     &lt;meta name=&quot;viewport&quot; id=&quot;viewport&quot; content=&quot;initial-scale=1.0,user-scalable=no&quot; &sol;&gt;
*     &lt;script type=&quot;text&sol;javascript&quot;&gt;
*       function moveDown(id)
*       {
*         blackberry.focus.setFocus(id);
*       }
*     &lt;&sol;script&gt;
*   &lt;&sol;head&gt;
*   &lt;body&gt;
*     &lt;table&gt;
*       &lt;tr&gt;
*           &lt;td&gt;&lt;&sol;td&gt;
*           &lt;td x-blackberry-focusable=&quot;true&quot; x-blackberry-onDown=&quot;moveDown(&apos;bottom&apos;);&quot; &gt;&lt;&sol;td&gt;
*           &lt;td &gt;&lt;&sol;td&gt;
*       &lt;&sol;tr&gt;
*       &lt;tr&gt;
*           &lt;td x-blackberry-focusable=&quot;true&quot;&gt;&lt;&sol;td&gt;
*           &lt;td x-blackberry-focusable=&quot;true&quot; onclick=&quot;alert(&apos;clicked me&apos;)&quot; &gt;&lt;&sol;td&gt;
*           &lt;td x-blackberry-focusable=&quot;true&quot; x-blackberry-onDown=&quot;&quot;&gt;&lt;&sol;td&gt;
*       &lt;&sol;tr&gt;
*       &lt;tr&gt;
*           &lt;td&gt;&lt;&sol;td&gt;
*           &lt;td x-blackberry-focusable=&quot;true&quot; id=&quot;bottom&quot;&gt;&lt;&sol;td&gt;
*           &lt;td&gt;&lt;&sol;td&gt;
*       &lt;&sol;tr&gt;
*     &lt;&sol;table&gt;
*   &lt;&sol;body&gt;
* &lt;&sol;html&gt;
*/
blackberry.focus = { };

/**
* User scrolled Right 
* @type Number
* @constant
* @BB50+
*/
blackberry.focus.RIGHT = 0;

/**
* User scrolled Left 
* @type Number
* @constant
* @BB50+
*/
blackberry.focus.LEFT = 1;

/**
* User scrolled Up 
* @type Number
* @constant
* @BB50+
*/
blackberry.focus.UP = 2;

/**
* User scrolled Down 
* @type Number
* @constant
* @BB50+
*/
blackberry.focus.DOWN = 3;

/**
* Returns the id of the current focused HTML element 
* @returns {String}
* @BB50+
*/
blackberry.focus.getFocus = function() { };

/**
* Returns the id of the prior focused HTML element to current focused element 
* @returns {String}
* @BB50+
*/
blackberry.focus.getPriorFocus = function() { };

/**
* Returns the current direction of the scroll action.  This is an integer value that is represented in the direction constants RIGHT, LEFT, UP, DOWN 
* @returns {Number}
* @BB50+
*/
blackberry.focus.getDirection = function() { };

/**
* This function will set the focus on the HTML element with specified id value 
* @param {String} id The element &apos;id&apos; in which you want to set focus
* @returns {void}
* @BB50+
*/
blackberry.focus.setFocus = function(id) { };


