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
 * @toc {BBM} Other Users
 * @featureID blackberry.bbm.platform
 * @permission bbm_connect BBM APIs requre this permission to be set
 * @namespace Provides access to and interaction with other users. For the current user see
 * {@link blackberry.bbm.platform.self}.
 * 
 * <h3>Picking Users</h3>
 * <p>The application can display a Contact Picker to the user with {@link blackberry.bbm.platform.users.pickUsers}.
 * This is generally part of a larger use case. For example, <code>pickUsers()</code> might be used
 * so that the current user can select players to remove from a connection.
 * 
 * <p><b>The Contact Picker will be displayed for all methods in this namespace.</b> The Contact Picker can be
 * avoided in {@link blackberry.bbm.platform.users.sendFile} and {@link blackberry.bbm.platform.users.startBBMChat}
 * by providing a {@link blackberry.bbm.platform.users.BBMPlatformUser} in the method call.
 * 
 * <h3>File Transfer, Invite to Download, Starting a BBM Chat, and Sharing Content</h3>
 * <p>The current user can send files, start a chat in BBM, invite others to download the
 * application, and share content using the following methods:
 * <ul>
 * <li>{@link blackberry.bbm.platform.users.sendFile}
 * <li>{@link blackberry.bbm.platform.users.startBBMChat}
 * <li>{@link blackberry.bbm.platform.users.inviteToDownload}
 * <li>{@link blackberry.bbm.platform.users.shareContent}
 * </ul>
 * </p>
 * 
 * <h3>Inviting users to BBM contact list</h3>
 * <p>Inviting users to the current user's contact list is also supported. You can invite anonymous
 * users by PIN using {@link blackberry.bbm.platform.users.inviteToBBM}. Alternatively you can invite
 * users from open connection(s) using {@link blackberry.bbm.platform.users.inviteToBBMFromConnections}.
 * 
 * <h3>BBM Social Graph</h3>
 * <p>Applications can also obtain access to the user's social graph.
 * {@link blackberry.bbm.platform.users.contactsWithApp} is a complete list of the current user's BBM
 * contacts who have the application installed.
 * 
 * <p>Applications can also listen for changes in the social graph by assigning a callback to
 * {@link blackberry.bbm.platform.users.event:onupdate}. Events are fired for both the current user
 * and their contacts who have the application installed. You can listen for user profile property
 * changes, such as display name and display picture, and also when a user installs/uninstalls your
 * application.
 * @BB50+
 */
blackberry.bbm.platform.users = {

    /**
     * @description Contacts who have the application installed.
     * @type blackberry.bbm.platform.users.BBMPlatformUser[]
     * @readOnly
     * @BB50+
     */
    contactsWithApp : [],

    /**
     * @description Shows Contact Picker dialog allowing the user to select users.
     * @param {Object} options Object containing Contact Picker options.
     * @param {String} [options.title] Title of the Contact Picker dialog.
     * @param {String} [options.type] Type of users to include in the dialog. May be "contactswithapp".
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]} [options.users] Users shown in the
     * dialog.
     * @param {Boolean} [options.multiSelect=false] <code>true</code> to allow the user to select
     * multiple users; <code>false</code> to only allow 1. 
     * @param {Boolean} [options.showSelectAll=false] <code>true</code> to show Select All option;
     * <code>false</code> otherwise. Ignored if <code>options.multiSelect == false</code>.
     * @callback {Function} onComplete Function called when user is finished.
     * @callback {blackberry.bbm.platform.users.BBMPlatformUser[]} onComplete.users The picked
     * users. <code>users.length == 0</code> if no users were selected.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * blackberry.bbm.platform.users.pickUsers( {
     *     title : "Who would you like to chat with?",
     *     type : "contactswithapp"
     * }, function(users) {
     *     if (users.length == 0) {
     *         // No users picked
     *     } else {
     *         // One or more users picked
     *     }
     * });
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    pickUsers : function(options, onComplete) {
    },

    /**
     * @description Starts a chat within BBM, bringing the chat screen to the foreground and entering
     * a message in the reply field.
     * <p>If <code>users</code> is provided, the chat screen is opened immediately; otherwise a Contact
     * Picker dialog is displayed beforehand.
     * <p><b>Chats can be started with any contact.</b>
     * @param {Function} onComplete Invoked when the chat has been started or canceled.
     * @param {String} message The initial message in the reply field of the chat screen.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]} [users] The users with whom to chat.
     * Must not contain {@link blackberry.bbm.platform.self}.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Start chat with Contact Picker dialog
     * blackberry.bbm.platform.users.startBBMChat(function() {
     *     // Continue with application...
     * }, "Did you see the game?");
     * 
     * &lt;/script&gt;
     * @BB50+
     */    
    startBBMChat: function(onComplete, message, users) {
    },

    /**
     * @description Sends a file to a contact. The user will be prompted to edit the comment and
     * choose to send or cancel the file transfer.
     * <p>If <code>contact</code> is not provided then the Contact Picker dialog be shown first,
     * allowing the user to pick someone in their contact list whom to send the file. Otherwise,
     * the Contact Picker dialog will not be shown.</p>
     * <p><b>Files can be sent to any contact.</b>
     * <p>If the contact cannot receive the specific file type, the file will not be sent.</p>
     * <p>The application is notified of any errors that occur through the <code>onFailure(reason)</code>
     * callback. The reasons are:</p>
     * <ul>
     * <li><code>"filenotfound"</code>: The file transfer failed because the file does not exist.
     * <li><code>"filetoolarge"</code>: The file transfer failed because the file size exceeds the limit permitted by BBM.
     * <li><code>"fileempty"</code>: The file transfer failed because the file is empty.
     * <li><code>"fileforwardlocked"</code>: The file transfer failed because the file is forward-locked.
     * <li><code>"filebadtype"</code>: The file transfer failed because the recipient is not permitted to receive files of the file type.
     * <li><code>"usercanceled"</code>: The file transfer failed because the current user canceled the file transfer.
     * <li><code>"noncontact"</code>: The file transfer failed because the recipient is not a BBM contact of the user.
     * </ul>
     * @param {String} fileURI The fully qualified path of the file to send.
     * @param {String} comment The default comment on the file. The user may edit this comment before sending.
     * @callback {Function} onFailure Invoked if the file transfer fails.
     * @callback {String} onFailure.reason The reason why the transfer failed.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} [contact] The recipient of the file. The recipient
     * must be in the current user's contact list.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * var onFailure = function(reason) {
     *     var message = getFileFailureString(reason);
     *     if(message) {
     *         alert(message);
     *     }
     * };    
     * blackberry.bbm.platform.users.sendFile("file:///SDCard/smiley.jpg", "Check out this file.", onFailure);
     * 
     * function getFileFailureString(reason) {
     *     if(reason == "filenotfound") {
     *         return "The file does not exist.";
     *     } else if(reason == "filetoolarge") {
     *         return "The file is too large.";
     *     } else if(reason == "fileforwardlocked") {
     *         return "The file is DRM protected.";
     *     } else if(reason == "filebadtype") {
     *         return "The user is unable to receive files of this type.";
     *     } else if(reason == "fileempty") {
     *         return "The file is empty and cannot be sent.";
     *     } else if(reason == "usercanceled") {
     *         return "You canceled the file transfer.";
     *     } else if(reason == "noncontact") {
     *         return "You may only send files to your BBM contacts.";
     *     }
     * };
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    sendFile : function(fileURI, comment, onFailure, contact) {
    },
    
     /**
     * @name onupdate^2
     * @function
     * Event listener when a user's information is updated. Assign a function to receive user updates.
     * <p>User updates can be captured such as profile information and application installation changes.
     * Updates can be received from the current user, contacts who have the application, and non-contacts
     * who have joined in an application connection with the current user.</p>
     * <ul>
     * <li><code>"displayname"</code>: Display name update.
     * <li><code>"personalmessage"</code>: Personal message update.
     * <li><code>"status"</code>: Status and/or status message update.
     * </ul>
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The user whose information updated.
     * @param {String} event The type of update.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * blackberry.event.addEventListener("onupdate", function(user, event) {
     *     // Handle events for other user
     *     if (event == "personalmessage") {
     *         alert("Personal message update: " + user.personalmessage);
     *     }
     * };
     * 
     * &lt;/script&gt;
     * @event
     * @BB10X
     */   
     
    /**
     * Invoked when a user's information is updated. Assign a function to receive user updates.
     * <p>User updates can be captured such as profile information and application installation changes.
     * Updates can be received from the current user, contacts who have the application, and non-contacts
     * who have joined in an application connection with the current user.</p>
     * <ul>
     * <li><code>"displayname"</code>: Display name update.
     * <li><code>"displaypicture"</code>: Display picture update.
     * <li><code>"personalmessage"</code>: Personal message update.
     * <li><code>"status"</code>: Status and/or status message update.
     * <li><code>"install"</code>: User installed or unblocked application.
     * <li><code>"uninstall"</code> User uninstalled or blocked application.
     * <li><code>"invited"</code>: The current user received an invitation to join this application in BBM. <i>This only applies to the current user.</i>
     * </ul>
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The user whose information updated.
     * @param {String} event The type of update.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * blackberry.bbm.platform.users.onupdate = function(user, event) {
     *     // Handle events for the current user
     *     if(user.handle == blackberry.platform.self.handle) {
     *         if (event == "displaypicture") {
     *             var displayPicImg = document.getElementById("myPicture"); // Must have img element with id="myPicture"
     *             displayPicImg.src = user.displayPicture;
     *         }
     *         // Handle other events for the current user...
     *     }
     *     // Handle events for other users...
     * };
     * 
     * &lt;/script&gt;
     * @event
     * @BB50+
     */
    onupdate : function(user, event) {
    },

    /**
     * @description Allows the user to invite contacts to download the application. A Contact Picker
     * dialog will appear allowing the user to select contacts to invite.
     * <p><b>Only contacts without the application can be invited to download.</b>
     * @callback {Function} onComplete Invoked when the user is complete.
     * @callback {String} onComplete.result <code>"limitreached"</code> if the download invitation limit has been reached;<code>undefined</code> otherwise. A 
     * maximum of 10 download invitations per minute is allowed.
     * @example
     * blackberry.bbm.platform.users.inviteToDownload(function(result) {
     *     if(result == "limitreached") {
     *         // Download invitation limit reached
     *     } else {
     *         // User is finished inviting
     *     }
     * });
     * @BB50+
     */
    inviteToDownload : function(onComplete) {
    },
    
    /**
     * @name blackberry.bbm.platform.users.inviteToDownload^2
     * @function
     * @description Allows the user to invite contacts to download the application. A download invitation
     * card will appear allowing the user to select contacts to invite.
     * <p><b>Only contacts without the application can be invited to download.</b>
     * @example
     * blackberry.bbm.platform.users.inviteToDownload();
     * 
     * @BB10X
     */
    inviteToDownload : function() {
    },

    /**
     * Allows the user to invite users to their BBM contact list. A dialog will appear allowing the
     * user to select users to invite. Users already in the current user's contact list will not be
     * included in the dialog.
     * @param {Function} onComplete Invoked when the user has finished selecting contacts to invite.
     * @param {Object[]} invitations The pin-name pairs of the users to invite to BBM.
     * @throws {IllegalArgumentException} If <code>PIN</code> is invalid for any invitation.
     * @throws {IllegalArgumentException} If <code>name</code> is null or empty for any invitation.
     * @throws {IllegalArgumentException} If <code>invitations.length > 24</code>.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Invite to BBM by PIN
     * var onComplete = function() {
     *     // Continue...
     * }
     * var users = blackberry.bbm.platform.users;
     * var invitations = [
     *         { pin:"2100000A", name:"John Doe" },
     *         { pin:"2100000B", name:"Jane Doe" }
     * ];
     * blackberry.bbm.platform.users.inviteToBBM(onComplete, invitations);
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    inviteToBBM: function(onComplete, invitations) {
    },
    
    /**
     * Allows the user to invite users to their BBM contact list. A dialog will appear allowing the
     * user to select users to invite. Users already in the current user's contact list will not be
     * included in the dialog.
     * <p>Users from <code>connection</code> (who are not in the user's contact list) will be shown
     * in the dialog.
     * <p>If <code>connection</code> is not provided, then users from all connections the application
     * has open (who are not in the user's contact list) will be shown in the dialog. 
     * @param {Function} onComplete Invoked when the user has finished selecting contacts to invite.
     * @param {blackberry.bbm.platform.io.Connection} [connection] The connection to invite users from.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Invite to BBM from a specific connection
     * blackberry.bbm.platform.users.inviteToBBMFromConnections(function () {
     *     // Continue...
     * }, connection);
     * 
     * &lt;/script&gt;
     * 
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Invite to BBM from all open connections in the application
     * blackberry.bbm.platform.users.inviteToBBMFromConnections(function () {
     *     // Continue...
     * });
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    inviteToBBMFromConnections: function() {
    },
    
    /**
     * @description Shares content with a one or more contacts. A Contact Picker dialog will be shown allowing
     * the user to select recipients of the content.
     * 
     * <p>The content will not appear in BBM but is received by the recipient's application. The
     * application does not need to be running in order to receive shared content. Once
     * the application is launched and registered with BBM Social Platform, the callback
     * {@link blackberry.bbm.platform.users.event:onsharecontent} will be invoked for the
     * application to handle the content.
     * 
     * <h3>Users without BBM 6.1.0 or the application installed</h3>
     * <p>Recipients also do not need to have BBM 6.1.0 (or later) or the application installed:
     * <ul>
     * <li>Recipients without BBM 6.1.0 will be prompted to download the latest version of BBM.
     * <li>Recipients without the application installed will receive a download invitation to download
     * the application from App World.
     * </ul>
     * Once a recipient has both BBM 6.1.0 and the application installed, the application will
     * be passed the content after registering with BBM Social Platform.
     * 
     * <h3>Application icon splat when shared content is received</h3>
     * <p>Applications can enable their icon to be splatted when shared content is received, in
     * order to notify the user of the new content. To enable splatting, add the property
     * <code>shareContentSplat: true</code> to the options object passed into {@link blackberry.bbm.platform.register}.
     * @param {String} content The content to be shared.
     * @param {String} description A short description of the content.
     * @param {Function} onComplete Invoked when the user has finished selecting content recipients.
     * @param {Object} [options] Object containing share content options.
     * @param {String} [options.title] Title of the Contact Picker. If not provided then the default title is used.
     * dialog.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]} [options.users] Users shown in the
     * dialog. If not provided then all contacts are shown in the dialog.  
     * @throws {Exception} if <code>description</code> is <code>null</code> or greater than 128 characters.
     * @throws {Exception} if <code>content</code> is greater than 61440 characters.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Share content
     * blackberry.bbm.platform.users.shareContent("A spoon full of sugar", "Mary's Recipe", function() {
     * 				// User finished sharing...
     * }, { title: "Choose Recipe Recipients" });
     * 
     * &lt;/script&gt;
     * 
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Enable splatting of the icon when shared content is received
     * blackberry.bbm.platform.register({
     *     uuid: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Randomly generated UUID
     *     
     *     shareContentSplat: true
     * });
     * 
     * &lt;/script&gt;
     * 
     * @BB50+
     */
    shareContent: function(content, description, onComplete, options) {
    	
    },
    
    /**
     * @description Invoked when shared content arrives at the recipient. If the application is not
     * running when content is received, then this will be invoked after the application starts and
     * is registered with BBM Social Platform.
     * <p>This callback must be assigned <b>before</b> the call to {@link blackberry.bbm.platform.register}.
     * <p>See {@link blackberry.bbm.platform.users.shareContent}
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} sender The user who shared the content.
     * @param {String} content The content data.
     * @param {String} description The content description.
     * @param {Date} timestamp Timestamp when the content was received.
     * @event
     * @BB50+
     */
    onsharecontent: function(sender, content, description, timestamp) {
    	
    }
};
