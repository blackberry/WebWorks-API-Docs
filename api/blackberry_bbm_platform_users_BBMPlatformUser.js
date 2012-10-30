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
 * @featureID blackberry.bbm.platform
 * @permission bbm_connect BBM APIs requre this permission to be set
 * @class <p>Provides read-only access to a BBM platform user's information as defined in their BBM profile.
 * <p><i>Instances of this object are not created, but obtained from the BBM platform.</i>
 * <h3>Current User</h3>
 * The current user's BBMPlatformUser instance is {@link blackberry.bbm.platform.self}. It also provides the ability to set properties of the current user.
 * <h3>Other Users</h3>
 * You can obtain other users from the following functions/callbacks:
 * <ul>
 * <li>{@link blackberry.bbm.platform.users.contactsWithApp}
 * <li>{@link blackberry.bbm.platform.users.pickUsers}
 * <li>{@link blackberry.bbm.platform.users.event:onupdate}
 * </ul>
 * {@link blackberry.bbm.platform.io.Channel} and {@link blackberry.bbm.platform.io.Session} also use BBMPlatformUser extensively.
 * @BB50+
 */
blackberry.bbm.platform.users.BBMPlatformUser = function() {
    /**
     * @description The display picture, encoded as a base64 image string.
     * <p><b>This is not supported in BlackBerry OS 5.0</b></p>
     * @type String
     * @readOnly
     * @BB60+
     * @example
     * &lt;script type="text/javascript"&gt;
     * // Show the current user's display picture
     * var user = blackberry.bbm.platform.self;
     * var displayPicImg = document.getElementById("displayPicture"); // Must have img tag with id='displayPicture'
     * displayPicImg.src = user.displayPicture;
     * &lt;/script&gt;
     */
    this.displayPicture = "";

    /**
     * @description The display name.
     * @type String
     * @readOnly
     * @BB50+
     * @BB10X
     */
    this.displayName = "";

    /**
     * @description The personal message.
     * @type String
     * @readOnly
     * @BB50+
     * @BB10X
     */
    this.personalMessage = "";

    /**
     * @description One of <code>"available"</code> or <code>"busy"</code>.
     * @type String
     * @readOnly
     * @BB50+
     * @BB10X
     */
    this.status = "";

    /**
     * @description The status message.
     * @type String
     * @readOnly
     * @BB50+
     * @BB10X
     */
    this.statusMessage = "";
    
    /**
     * @description A unique ID representing the user on a specific device. This will be <b>different</b> for the same user on different devices (BlackBerry smartphone, BlackBerry PlayBook, etc.)
     * @type String
     * @readOnly
     * @BB50+
     * @BB10X
     */
    this.handle = 0;
    
    /**
     * @description A unique ID representing the user on all devices. This will be <b>the same</b> for the same user on all devices (BlackBerry smartphone, BlackBerry PlayBook, etc.)
     * @type String
     * @readOnly
     * @BB50+
     * @BB10X
     */
    this.ppid = 0;
    
    /**
     * @description The version of this BBM Connected Application that the user is running.
     * @type String
     * @readOnly
     * @BB50+
     * @BB10X
     */
    this.appVersion = "";
    
    /**
     * @description The version of the BBM SDK that the user is running.
     * <ul>
     * <li>BBM SDK 1.0: <code>100</code>
     * <li>BBM SDK 1.2: <code>120</code>
     * <li>BBM SDK 1.3: <code>130</code>
     * </ul>
     * @type Number
     * @readOnly
     * @BB50+
     * @BB10X
     */
    this.bbmsdkVersion = 0;

};
