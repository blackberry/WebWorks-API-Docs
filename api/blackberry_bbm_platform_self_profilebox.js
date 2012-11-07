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
     */
    accessible : false,
    
    /**
     * The profile box items. <code>undefined</code> if the device is in mass storage mode.
     * @type blackberry.bbm.platform.self.profilebox.ProfileBoxItem[]
     * @readOnly
     * @BB50+
     */
    items : null,
    
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
     * Removes an item.
     * @param {blackberry.bbm.platform.self.profilebox.ProfileBoxItem} item The item to remove.
     * @throws {UserProfileBoxAccessException} If the profile box is inaccessible.
     * @BB50+
     */
    removeItem: function(item) {  
    },
    
    /**
     * Removes all items.
     * @throws {UserProfileBoxAccessException} If the profile box is inaccessible.
     * @BB50+
     */
    clearItems: function() {
    }
};
