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
* @description The MenuItem object is an instance object, where if a new instance is desired, it must be created using the new keyword.
* @featureID blackberry.ui.menu
* @toc {User Interface} MenuItem 
* @BB50+
* @class The MenuItem object represents a menu item for the screen.
* @constructs  
* @param {Boolean} isSeparator If set to true the MenuItem will be created as a separator.
* @param {Number} ordinal The ordinal of this MenuItem. Ordinal has to be greater than or equal to zero. Exception will be thrown if it is less than zero.
* @param {String} [caption] The text to display on the menu item.  This must be supplied if isSeparator is false.
* @callback {function} [onClick] A parameter to specify the function to call when the user clicks the menu item.  
* @throws {Exception} If the onClick callback is supplied when isSeparator is true, an exception will be thrown.
* @learns {Sample - Menu Items} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Adding-Menu-Items-using-the-BlackBerry-WebWorks-SDK/ta-p/516885 Example that demonstrates how to use the Menu API to 
* create a custom application menu in a BlackBerry WebWorks application [BlackBerry Developer Resource Center].
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   
*   function clickMe() {
*      alert(&quot;user just clicked me&quot;);
*   }
*   
*   var item = new blackberry.ui.menu.MenuItem(false, 1, &quot;Hello World&quot;, clickMe);
*   blackberry.ui.menu.addMenuItem(item);
*   
* &lt;&sol;script&gt;
*/
blackberry.ui.menu.MenuItem = function(isSeparator,ordinal,caption,onClick) { };

/**
* Contains the caption for the menu item. 
* @type String
* @BB50+
*/
blackberry.ui.menu.MenuItem.prototype.caption = { };

/**
* Each MenuItem has an ordinal specifying the sort order within the menu. MenuItems with a lower ordinal will have higher positions on the menu than the MenuItems with higher ordinal. A separator will be automatically inserted between adjacent items whose ordinals differ by at least 0x00010000. 
* @type Number
* @BB50+
*/
blackberry.ui.menu.MenuItem.prototype.ordinal = { };

/**
* Value is true if the menu item is a separator. 
* @type Boolean
* @readOnly
* @BB50+
*/
blackberry.ui.menu.MenuItem.prototype.isSeparator = { };

/**
* Value is true if the menu item is marked as the default item to be selected in the menu. 
* @type Boolean
* @readOnly
* @BB50+
*/
blackberry.ui.menu.MenuItem.prototype.isDefault = { };


