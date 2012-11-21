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
 *     }
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
 *
 *  //Override the system Copy action by actionId using the ACTION_COPY constant
 *  function overridePlatformWithIcon() {
 *   var myItem = {actionId: blackberry.ui.contextmenu.ACTION_COPY, label: 'Custom Copy!',
 *       icon:'local:///icon.png'},
 *       contexts = [blackberry.ui.contextmenu.CONTEXT_ALL];
 *
 *   blackberry.ui.contextmenu.addItem(contexts, myItem, function() {
 *       alert("Wow you succesfully overrode the platform menu item Copy");
 *   });
 * }
 *  //Override the system Copy action by actionId using the ACTION_SAVE_IMAGE constant
 *  // this example does not provide a icon, and uses the system default
 *  function overridePlatformNoIcon() {
 *   var myItem = {actionId: blackberry.ui.contextmenu.ACTION_SAVE_IMAGE, label: 'Save Image'},
 *       contexts = [blackberry.ui.contextmenu.CONTEXT_ALL];
 *
 *   blackberry.ui.contextmenu.addItem(contexts, myItem, function() {
 *       alert("Custom Save using system icon");
 *   });
 * }
 * &lt;/script&gt;
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
 CONTEXT_TEXT: "CONTEXT_TEXT",

 /**
 * Constant denoting the actionId of cancel
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTION_CANCEL: "Cancel",

 /**
 * Constant denoting the actionId of clear field.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTION_CLEAR_FIELD: "ClearField",

 /**
 * Constant denoting the actionId of copy.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTION_COPY: "Copy",

 /**
 * Constant denoting the actionId of copy image link.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTION_COPY_IMAGE_LINK: "CopyImageLink",

 /**
 * Constant denoting the actionId of copy link.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTION_COPY_LINK: "CopyLink",

 /**
 * Constant denoting the actionId of cut.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTION_CUT: "Cut",

 /**
 * Constant denoting the actionId of inspect element
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 INSPECT_ELEMENT: "InspectElement",

 /**
 * Constant denoting the actionId of open link.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTION_OPEN_LINK: "OpenLink",

 /**
 * Constant denoting the actionId of paste.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTION_PASTE: "Paste",

 /**
 * Constant denoting the actionId of save image.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTIONE_SAVE_IMAGE: "SaveImage",

 /**
 * Constant denoting the actionId of save link as.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTION_SAVE_LINK_AS: "SaveLinkAs",

 /**
 * Constant denoting the actionId of select.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTION_SELECT: "Select",

 /**
 * Constant denoting the actionId of view image.
 * @type String
 * @constant
 * @BB10X
 * @RIPPLE
 */
 ACTION_VIEW_IMAGE: "ViewImage",

};
