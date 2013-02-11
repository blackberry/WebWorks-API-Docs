/*
 * Copyright 2010 Research In Motion Limited.
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
 * @toc {BBM} Profile Box
 * @featureID blackberry.bbm.platform
 * @namespace Provides access to the current user's profile box.
 * <p>A box for this application that appears in the current user's profile. Each box contains a
 * list of items, each composed of text and an optional icon. There is a maximum of 3 items; as
 * more are added, older items will be removed automatically.</p>
 * 
 * <p>This box can be viewed by the current user and their contacts, and is editable by the current
 * user and the owning application (on this device). The current user can only remove items.</p>
 * 
 * <h2>Permission Model</h2>
 * The user must manually show the profile box via the "activities" option in the BBM options screen
 * for the application. The application can add items whether or not this option is enabled.
 * <p>The application can read {@link blackberry.bbm.platform.settings.profileboxEnabled} to determine if
 * the user is showing the profile box, and prompt them to enable it with {@link blackberry.bbm.platform.showBBMAppOptions}.
 * 
 * <h2>Icon recommendations</h2>
 * <ul>
 * <li>Recommended icon size is 100x100, regardless of device.
 * <li>Icons should be square.
 * <li>Alpha is supported.
 * <li>Animating icons are not supported. Only the first frame will be used.
 * </ul>
 * 
 * <h2>Launching your application from the profile box</h2>
 * <p>The user can invoke an application through its profile box items in their profile or a
 * contact's profile. The application will be brought to the foreground and/or launched if not yet
 * running. The invoking profile box item can be obtained by assigning a callback to
 * {@link blackberry.bbm.platform.event:onappinvoked}.
 * @BB50+
 */
blackberry.bbm.platform.self.profilebox = {

    /**
     * <code>true</code> if the profile box is accessible and can be updated; <code>false</code> otherwise.
     * The profile box is not accessible when the device is in mass storage mode.
     * @type Boolean
     * @readOnly
     * @BB50+
     * @BB10X
     */
    accessible : false,
    
    /**
     * The profile box items. <code>undefined</code> if the device is in mass storage mode.
     * @type blackberry.bbm.platform.self.profilebox.ProfileBoxItem[]
     * @readOnly
     * @BB50+
     * @BB10X
     */
    items : null,

    /**
     * @name blackberry.bbm.platform.self.profilebox.addItem^2
     * @function
     * @description
     * Adds an item to the top of the user's profile box.
     * <p>Icons are optional and must be registered before an item is added.
     * @param {Object} options The options.
     * @param {String} options.text The text of the item.
     * @param {String} options.cookie The customizable cookie string.
     * @param {Number} [options.iconId] <i>Optional</i> The icon ID of a previously registered icon.
     * @callback {Function} onSuccess Invoked when the item has been removed.
     * @callback {blackberry.bbm.platform.self.profilebox.ProfileBoxItem} onSuccess.item The new item.
     * @callback {Function} onError Invoked when when there was an error removing the item.
     * @callback {String} onError.error Contains error message. 
     * @example
     * &lt;script type="text/javascript"&gt;
     * // Add an item with icon, text, and a cookie
     * var options = {text: "Planted an apple orchard on 10 acres!", icon: "local:///smiley.jpg", cookie: "10acres"};
     * blackberry.bbm.platform.self.profilebox.addItem(options, function (item) {
           // do something with the item
       }), function (error) {
           alert(error);
       });
     * &lt;/script&gt;
     * @BB10X
     */
    
    /**
     * Adds an item to the top of the user's profile box.
     * <p>Icons are optional and are provided via a fully-qualified URI. Non-local URIs must be whitelisted in the application's configuration file. Examples:
     * <ul>
     * <li>Locally from within the widget package (e.g. "local:///smiley.jpg")
     * <li>From the file system of the device (e.g. "file:///SDCard/BlackBerry/pictures/smiley.jpg")
     * </ul>
     * @param {Object} options The options.
     * @param {String} options.text The text of the item.
     * @param {Number} [options.icon] <i>Optional</i> The URI of the icon to use. If not provided,
     * no icon is used.
     * @param {String} [options.cookie] <i>Optional</i> The customizable cookie.
     * @returns {blackberry.bbm.platform.self.profilebox.ProfileBoxItem} The new item.
     * @throws {UserProfileBoxAccessException} If the profile box is inaccessible.
     * @example
     * &lt;script type="text/javascript"&gt;
     * // Add an item with icon, text, and a cookie
     * var options = {text:"Planted an apple orchard on 10 acres!", icon:"local:///smiley.jpg", cookie:"10acres"};
     * blackberry.bbm.platform.self.profilebox.addItem(options);
     * &lt;/script&gt;
     * 
     * @example
     * &lt;script type="text/javascript"&gt;
     * // Add an item with text
     * var options = {text:"Bought a 100 acre farm!"};
     * blackberry.bbm.platform.self.profilebox.addItem(options);
     * &lt;/script&gt;
     * @BB50+
     */
    addItem : function(options) {
    },

    /**
     * @name blackberry.bbm.platform.self.profilebox.removeItem^2
     * @function
     * @description
     * Removes an item.
     * @param {blackberry.bbm.platform.self.profilebox.ProfileBoxItem} item The item to remove.
     * @callback {Function} onSuccess Invoked when the item has been removed.
     * @callback {blackberry.bbm.platform.self.profilebox.ProfileBoxItem} onSuccess.item The item that was removed.
     * @callback {Function} onError Invoked when when there was an error removing the item.
     * @callback {String} onError.error Contains error message. 
     * @BB10X
     */

    /**
     * Removes an item.
     * @param {blackberry.bbm.platform.self.profilebox.ProfileBoxItem} item The item to remove.
     * @throws {UserProfileBoxAccessException} If the profile box is inaccessible.
     * @BB50+
     */
    removeItem: function(item) {  
    },

    /**
     * @name blackberry.bbm.platform.self.profilebox.clearItems^2
     * @function
     * @description
     * Removes all items.
     * @BB10X
     */
    
    /**
     * Removes all items.
     * @throws {UserProfileBoxAccessException} If the profile box is inaccessible.
     * @BB50+
     */
    clearItems: function() {
    }

    /** 
     * Registers an icon for use with user's profile box.
     * <p>Icons are provided via a fully-qualified URI. Non-local URIs must be whitelisted in the application's configuration file. Examples:
     * <ul>
     * <li>Locally from within the widget package (e.g. "local:///smiley.jpg")
     * <li>From the file system of the device (e.g. "file:///SDCard/BlackBerry/pictures/smiley.jpg")
     * </ul> 
     * @param {Object} options The options.
     * @param {String} options.icon The URI of the icon to register.
     * @param {Number} options.iconId An icon ID for the icon, this number must be unique.     
     * @callback {Function} onSuccess Invoked when the icon has been registered.
     * @callback {Object} onSuccess.iconId The icon ID of the registered icon.
     * @callback {Function} onError Invoked when when there was an error registering the icon.
     * @callback {String} onError.error Contains error message. 
     * @example
     * &lt;script type="text/javascript"&gt;
     * // Register an icon
     * var options = {icon: "local:///smiley.jpg", iconId: 1337};
     * blackberry.bbm.platform.self.profilebox.registerIcon(options, function (icon) {
           // do something
           alert("Registered " + icon.iconId)
       }), function (error) {
           alert(error);
       });
     * &lt;/script&gt;
     * @BB10X
     */     
    registerIcon: function () {
    }
};
