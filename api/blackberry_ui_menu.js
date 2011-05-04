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
* <div><p>
*       The functionality in this object allows you to manipulate the dynamically created menu items for the application.  This will not allow you to remove the default menu items for the application.
*       To create a separator simply pass the appropriate parameters into the MenuItem constructor.
*     </p></div>
* @toc {User Interface} Menu 
* @BB50+
* @namespace The Menu object contains functionality for manipulating menu items for the application.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   function loadCustomMenuItemsForPage() {
*     if (blackberry.ui.menu.getMenuItems().length &gt; 0) {
*       blackberry.ui.menu.clearMenuItems();
*     }
*     
*     var item = new blackberry.ui.menu.MenuItem(false, 1, &quot;Click Me&quot;, customMenuItemClick);
*     blackberry.ui.menu.addMenuItem(item);         
*   }
* 
*     function customMenuItemClick() {
*       alert(&quot;user just clicked me&quot;);
*     }
* &lt;&sol;script&gt;
 * @learns {Sample - Menu Items} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Adding-Menu-Items-using-the-BlackBerry-WebWorks-SDK/ta-p/516885 Example that demonstrates how to use the Menu API to create a custom application menu in a BlackBerry WebWorks application [BlackBerry Developer Resource Center].

*/
blackberry.ui.menu = { };

/**
* Sets which item on the menu should be selected by default. 
* @param {blackberry.ui.menu.MenuItem} item The menu item to set as the default.
* @returns {void}
* @BB50+
*/
blackberry.ui.menu.setDefaultMenuItem = function(item) { };

/**
* This method will return an array representing the menu items for the screen. 
* @returns {blackberry.ui.menu.MenuItem[]}
* @BB50+
*/
blackberry.ui.menu.getMenuItems = function() { };

/**
* Opens the current screen&apos;s menu. 
* @returns {void}
* @BB50+
*/
blackberry.ui.menu.open = function() { };

/**
* Removes all menu items from the current menu. 
* @returns {void}
* @BB50+
*/
blackberry.ui.menu.clearMenuItems = function() { };

/**
* Removes the specified menu item from the menu. 
* @param {blackberry.ui.menu.MenuItem} item The menu item to remove.
* @returns {void}
* @BB50+
*/
blackberry.ui.menu.removeMenuItem = function(item) { };

/**
* Adds the supplied menu item to the menu. 
* @param {blackberry.ui.menu.MenuItem} item The menu item to add.
* @returns {void}
* @BB50+
*/
blackberry.ui.menu.addMenuItem = function(item) { };

/**
* determine whether the menu contains the specified MenuItem. 
* @param {blackberry.ui.menu.MenuItem} item The menu item to be checked.
* @returns {Boolean}
* @BB50+
*/
blackberry.ui.menu.hasMenuItem = function(item) { };


