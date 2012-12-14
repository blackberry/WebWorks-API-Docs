/*
* Copyright 2010-2012 Research In Motion Limited.
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
 * @toc {User Interface} Context Menu
 * @featureID blackberry.ui.contextmenu
 * @BB10X
 * @RIPPLE
 * @namespace The contextmenu namespace provides the facility to interact with the context menu api to control whether context menus are enabled, listen to events, add items to appear based on the context, and set the theme of the context menu.
 *
 * <h3>Context Menu</h3>
 * <p>Webworks applications can choose to use an in app contextmenu as opposed to the default operating system menu. The
 * contextmenu provides several facilities to developers to allow them to control the elements that appear in the menu, as
 * well as listen to specific events related to the context menu being triggered and displayed.
 * <p>
 *
 * <h4>Enabling</h4>
 * <p>The contextmenu can be enabled by calling the blackberry.ui.contextmenu.enabled property. When set to true, the
 * contextmenu will capture the context menu events, and pass any events that the user has registered for. When set to false
 * the contextmenu will default to the system, and the developer will have no access to the events described below.
 * </p>
 *
 * <h4>Context Information</h4>
 * <p>Context information is available from the window object through a contextmenu event "window.oncontextmenu". This event is triggered whenever there
 * is a context menu request from the client. This event provides all the contextual information needed to store the context yourself
 * and save what element the context menu was triggered on. This allows you to perform a multitude of different actions once a context
 * menu has been requested.
 *
 * <pre>
 * &lt;script type="text/javascript"&gt;
 *
 * // Update the path from a small icon to a full image
 * function translateIcontoFullImage (path) {
 *     if (path && path.indexOf('.ico') !== -1) {
 *         return path.replace('.ico', '.jpeg');
 *     }
 * }
 *
 * function onContextMenu (contextEvent) {
 *     var srcElement = contextEvent.srcElement;
 *     blackberry.invoke.interrupter = function (request) {
 *         // Check if this is an image we wish to translate
 *         if (srcElement && srcElement.src {
 *             request.uri = translateIcontoFullImage(srcElement.src);
 *         }
 *
 *         // Return the updated request object
 *         return request;
 *     };
 *
 * }
 *
 * window.addEventListener('oncontextmenu', onContextMenu);
 *
 * &lt;/script&gt;
 * </pre>
 *
 * <h3>Custom Context Menu</h3>
 * <p>Webworks applications can give Dom elements custom context by using the data-webworks-context xml attribute. When a Dom element contains this attribute, custom context menus will be activated when the element is long pressed.
 * Once you have created a custom context using the data-webworks-context attribute, you can then use addItem to add items to the custom context. You can also optionally use defineCustomContext to further define the items shown.
 * @example
 * &lt;script type="text/javascript"&gt;
 * function addMenuItemToCustomContext() {
 *     var myItem = {actionId: '7', label: 'itemForCustom', icon:'local:///img/myIcon.png'},
 *         contexts = ["myContext"];
 *     blackberry.ui.contextmenu.addItem(contexts, myItem);
 * }
 *
 * function addAdditionalItemsFromCustomContext) {
 *     var options = {
 *         includeContextItems: [blackberry.ui.contextmenu.CONTEXT_IMAGE, blackberry.ui.contextmenu.CONTEXT_IMAGE_LINK],
 *         includePlatformItems: true,
 *         includeMenuService: true
 *     };
 *     blackberry.ui.contextmenu.defineCustomContext("myContext", options);
 * }
 *
 * function removeAdditionalItemsFromCustomContext) {
 *     var options = {
 *         includeContextItems: [],
 *         includePlatformItems: false,
 *         includeMenuService: false
 *     };
 *     blackberry.ui.contextmenu.defineCustomContext("myContext", options);
 * }
 * &lt;/script&gt;
 * &lt;div data-webworks-context="myContext"&gt;I am a custom context!&lt;/div&gt;
 */
blackberry.ui.contextmenu = {

/**
 * @description Context Menu enabled allows the developer to enabled and disable crosscut context menus for their application.
 * @param {boolean} enabled property that sets the contextmenu to enabled or disabled
 * @type boolean
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * function disabledContextMenu() {
 *     blackberry.ui.contextmenu.enabled = false;
 * }
 *
 * if(!blackberry.ui.contextmenu.enabled){
 *     console.log("context menu is currently disabled");
 * }
 * &lt;/script&gt;
 *
 */
 enabled : Boolean,


 /**
 * @description Allows the developer to add custom items to the context menu. The items will be appended to the end of the list
 * of operating system defined functions. Developers must provide the following parameters to successfully add items to the context
 * menu.
 * @param {String[]} contexts An array of constants defining which contexts this new item should appear.
 * @param {Object} action An object which defines the menu item to be added.
 * @param {String} action.actionId A property that uniquely defines the action to be added to the context menu.
 * @param {String} action.label A string that will be displayed to the user describing the custom context to be performed. ie: Edit
 * @param {String} action.icon A path to the an image to display in the context menu
 * @callback {Function} callback A function which runs when the menu item action is executed
 * @param {String} callback.sourceId The returned sourceId from the element which defined the custom context and the context was invoked on.
 * @BB10X
 * @RIPPLE
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * function addMyItem() {
 *     var myItem = {actionId: 'MyItem', label: 'My Item', icon:'http://mysite.com/icon.png'},
 *         contexts = [blackberry.ui.contextmenu.CONTEXT_IMAGE, blackberry.ui.contextmenu.CONTEXT_INPUT];
 *     blackberry.ui.contextmenu.addItem(contexts, myItem, function() { console.log('hi') });
 * }
 *
 * //Perform an action on custom context, with a custom item
 * function deleteItem(sourceId) {
 *     var element = document.getElementById(sourceId);
 *         element.parentNode.removeChild(element);
 * }
 *
 * function greyOutItem(sourceId) {
 *     var element = document.getElementById(sourceId);
 *         element.className = "greyed-out";
 * }
 *
 * var options = {
 *         includeContextItems: [blackberry.ui.contextmenu.CONTEXT_ALL],
 *         includePlatformItems: true,
 *         includeMenuServiceItems: true
 *      },
 *      item,
 *      contexts = [blackberry.ui.contextmenu.CONTEXT_ALL];
 *
 * // Define the custom context with the options that we want used
 * blackberry.ui.contextmenu.defineCustomContext("PrincessContext", options);
 *
 * // Create a menu item and add it to the context
 * item = {actionId: '1', label: 'Delete Item', icon:'local:///images/icon.png'};
 * blackberry.ui.contextmenu.addItem(contexts, item, deleteItem);
 *
 * // And another
 * item = {actionId: '2', label: 'Grey Out', icon:'local:///images/icon.png'};
 * blackberry.ui.contextmenu.addItem(contexts, item, greyOutItem);
 *
 * &lt;/script&gt;
 *
 */
 addItem : function (){},

 /**
 * @description Allows the developer to remove previously added custom items from the context menu.
 * @param {String[]} contexts An array of constants defining which contexts this new item should appear.
 * @param {String} actionId An id that uniquely defines the action to be removed from the context menu.
 * @BB10X
 * @RIPPLE
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * function addMyItem() {
 *     var myItem = {actionId: 'MyItem', label: 'My Item', icon:'http://mysite.com/icon.png'},
 *         contexts = [blackberry.ui.contextmenu.CONTEXT_IMAGE, blackberry.ui.contextmenu.CONTEXT_INPUT];
 *     blackberry.ui.contextmenu.addItem(contexts, myItem);
 * }
 *
 * function removeMyItem() {
 *     var myItem = {actionId: 'MyItem', label: 'My Item', icon:'http://mysite.com/icon.png'},
 *         contexts = [blackberry.ui.contextmenu.CONTEXT_IMAGE, blackberry.ui.contextmenu.CONTEXT_INPUT];
 *     blackberry.ui.contextmenu.removeItem(contexts, myItem.actionId);
 * }
 *
 * &lt;/script&gt;
 *
 */
removeItem: function (){},

 /**
 * @description Allows the developer to define a custom context.
 * @param {String} context A String representing the custom context.
 * @param {Object} options An Object that contains the various options to set for the custom context.
 * @param {Array} options.includeContextItems An Array that defines a list of contexts to which custom items will be used from when applicable.
 * @param {boolean} options.includePlatformItems An boolean indicating whether to include the default platform items.
 * @param {boolean} options.includeMenuServiceItems An boolean indicating whether to add menu items provided by the menu service.
 * @BB10X
 * @RIPPLE
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * function defineCustomContext() {
 *     var options = {
 *         includeContextItems: [blackberry.ui.contextmenu.CONTEXT_IMAGE],//Includes custom items added for CONTEXT_IMAGE
 *         includePlatformItems: true,
 *         includeMenuServiceItems: true
 *     };
 *
 *     blackberry.ui.contextmenu.defineCustomContext("myContext", options)
 * }
 * &lt;/script&gt;
 *
 */
defineCustomContext: function (){},

/**
 * Constant denoting all contexts.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 CONTEXT_ALL: "CONTEXT_ALL",

 /**
 * Constant denoting the context of links.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 CONTEXT_LINK: "CONTEXT_LINK",

 /**
 * Constant denoting the context of images.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 CONTEXT_IMAGE: "CONTEXT_IMAGE",

 /**
 * Constant denoting the context of image links.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 CONTEXT_IMAGE_LINK: "CONTEXT_IMAGE_LINK",

 /**
 * Constant denoting the context of input fields.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 CONTEXT_INPUT: "CONTEXT_INPUT",

 /**
 * Constant denoting the context of text.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 CONTEXT_TEXT: "CONTEXT_TEXT"
};
