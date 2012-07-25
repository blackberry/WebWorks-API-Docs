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
 enabled : Boolean
};
