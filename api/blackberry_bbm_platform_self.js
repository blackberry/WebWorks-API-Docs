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
 * @toc {BBM} Current User
 * @featureID blackberry.bbm.platform
 * @permission bbm_connect BBM APIs requre this permission to be set
 * @namespace Provides access to the current user's information.
 * @base blackberry.bbm.platform.users.BBMPlatformUser
 * @BB50+
 */
blackberry.bbm.platform.self = {
        
        prototype: new blackberry.bbm.platform.users.BBMPlatformUser(),
        
        /**
         * @description Gets the user's display picture.
         * @callback {Function} onComplete Invoked when the image has been retrieved.
         * @callback {String} onComplete.image contains a base64 string representation of the image
         * @BB10X
         * @example
         * &lt;script type="text/javascript"&gt;
         * // Get the user's display picture
         * blackberry.bbm.platform.self.getDisplayPicture(function (image) {
         *     // do something with the image here
         * });
         * &lt;/script&gt;
         */
        getDisplayPicture: function (onComplete) { },

        /**
         * @description Sets the user's display picture from a URI. A dialog will be presented to
         * the user to allow or deny the change.
         * <p>The URI must be fully qualified. Non-local URIs must be whitelisted in the application's configuration file. Examples:
         * <ul>
         * <li>Locally from within the widget package (e.g. "local:///smiley.jpg")
         * <li>From the filesystem of the a BB5.0+ device (e.g. "file:///SDCard/BlackBerry/pictures/smiley.jpg")
         * <li>From the filesystem of the a BB10 device (e.g. "/accounts/1000/shared/photos/smiley.jpg")
         * </ul>
         * </p>
         * @param {String} displayPictureURI The fully qualified URI.
         * @callback {Function} onComplete Invoked when the user has dismissed the dialog.
         * @callback {Boolean} onComplete.accepted <code>true</code> if the user allowed the change;
         * <code>false</code> otherwise.
         * @BB50+
         * @BB10X
         * @example
         * &lt;script type="text/javascript"&gt;
         * // Set the user's display picture
         * blackberry.bbm.platform.self.setDisplayPicture("local:///smiley.jpg", function (accepted) {
         *     if(accepted) {
         *         // User allowed the change
         *     } else {
         *         // User denied the change
         *     }
         * });
         * &lt;/script&gt;
         */
        setDisplayPicture: function(displayPictureURI, onComplete) { },
        
        /**
         * @description Sets the user's personal message. A dialog will be presented to the user to
         * allow or deny the change.
         * @param {String} personalMessage The personal message. The maximum length is 160 characters;
         * anything over will be truncated. If <code>null</code> is provided then the personal message
         * will be cleared.
         * @callback {Function} onComplete Invoked when the user has dismissed the dialog.
         * @callback {Boolean} onComplete.accepted <code>true</code> if the user allowed the change;
         * <code>false</code> otherwise.
         * @BB50+
         * @BB10X
         */
        setPersonalMessage: function(personalMessage, onComplete) { },
        
        /**
         * @description Sets the user's status. A dialog will be presented to the user to allow
         * or deny the change.
         * @param {String} status The status: one of <code>"available"</code> or <code>"busy"</code>.
         * @param {String} [message] The optional status message. If not provided then the default message of
         * either "Available" or "Busy" will be used.
         * @callback {Function} onComplete Invoked when the user has dismissed the dialog.
         * @callback {Boolean} onComplete.accepted <code>true</code> if the user allowed the change;
         * <code>false</code> otherwise.
         * @BB50+
         * @BB10X
         * @example
         * &lt;script type="text/javascript"&gt;
         * // Set the user's status and status message
         * blackberry.bbm.platform.self.setStatus("busy", "Playing Tic-Tac-Toe!", function (accepted) {
         *     if(accepted) {
         *         // User allowed the change
         *     } else {
         *         // User denied the change
         *     }
         * });
         * &lt;/script&gt;
         */
        setStatus: function(status, message, onComplete) { }
};
