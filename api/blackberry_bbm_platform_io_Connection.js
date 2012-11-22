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
 * @class The base interface for all connections. See {@link blackberry.bbm.platform.io.Channel} and
 * {@link blackberry.bbm.platform.io.Session} for more information on the respective connection types.
 * @BB50+
 */
blackberry.bbm.platform.io.Connection = function() {

    /**
     * @description The maximum number of users a connection can have, not including the current user.
     * <br/><br/>Once the limit is reached, the platform will not allow the user to send more join invitations
     * and will not allow more users to join.
     * @type Number
     * @constant
     * @default 24 users
     * @BB50+
     */
    this.MAX_USERS = 0;
    
    /**
     * @description The maximum length of an invitation cookie.
     * @type Number
     * @constant
     * @default 128 characters
     * @BB50+
     */
    this.MAX_COOKIE_LENGTH = 0;
    
    /**
     * @description The maximum length of an invitation message.
     * @type Number
     * @constant
     * @default 128 characters
     * @BB50+
     */
    this.MAX_INVITE_MSG_LENGTH = 0;
    
    /**
     * @description The maximum length of a data payload.
     * @type Number
     * @constant
     * @default 61440 characters
     * @BB50+
     */
    this.MAX_DATA_LENGTH = 0;
    
    /**
     * @description This connection's unique ID. Automatically set on connection creation.
     * @type Number
     * @readOnly
     * @BB50+
     */
    this.id = 0;
    
    /**
     * @description Users who have joined the connection.
     * @type blackberry.bbm.platform.users.BBMPlatformUser[]
     * @readOnly
     * @BB50+
     */
    this.joinedUsers = [];

    /**
     * @description The number of invited users who have not yet joined the connection.
     * @type Number
     * @readOnly
     * @BB50+
     */
    this.pendingUsersCount = 0;
    
    /**
     * @description Removes a user from the connection.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser | blackberry.bbm.platform.users.BBMPlatformUser[]}
     * user Single user, or an array of users, to remove from the connection.
     * @throws {NullPointerException} If <code>user</code> is null.
     * @throws {IllegalArgumentException} If one of the users being removed does not belong to the connection.
     * @throws {PersistentContentException} If Content Protection is enabled and the device is locked.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Remove the first user in a connection
     * var users = conn.joinedUsers;
     * if(users.length > 0) {
     *     conn.remove(conn.joinedUsers[0])
     * }
     * 
     * &lt;/script&gt;
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Remove all users in a connection
     * var users = conn.joinedUsers;
     * if(users.length > 0) {
     *     conn.remove(conn.joinedUsers)
     * }
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    this.remove = function(user) {
    };
    
    /**
     * @description Removes all users from the connection.
     * @throws {PersistentContentException} If Content Protection is enabled and the device is locked.
     * @BB50+
     */
    this.removeAll = function() {
    };
    
    /**
     * @description Adds a user, who has already joined a connection in this application, to this connection.
     * @param {blackberry.bbm.platform.user.BBMPlatformUser} user The user to be added.
     * @param {String} [cookie] A custom parameter provided by the third party application.
     * @throws {NullPointerException} If <code>user</code> is null.
     * @throws {IllegalArgumentException} If <code>user</code> is not connected with the current user in any existing connections in this application.
     * @throws {PersistentContentException} If Content Protection is enabled and the device is locked.
     * @BB50+
     */
    this.add = function(user, cookie) {
    };
    
    /**
     * @description Sends data to all users on the connection or a subset. Data cannot be sent to users
     * who have not joined.
     * <h3>Unreachable Users</h3>
     * <p>If a user becomes unreachable, up to 50 packets (50 calls of <code>send()</code>) will be queued. A ContactUnreachableException will be thrown on the 51st call.
     * <p>If the user later becomes reachable, {@link blackberry.bbm.platform.io.event:onuserreachable} will be invoked with the now-reachable user.
     * <p>The BBM Social Platform will continue to attempt to deliver the packets to an unreachable user for 24 hours. If the user does not become reachable within this time, the packets will expire, and {@link blackberry.bbm.platform.io.event:ondataexpired} will be invoked.
     * @param {String} data Object to be sent.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]} [users] Data recipients. 
     * If not provided, data will be sent to all users on this connection.
     * @throws {ContactUnreachableException} If a user is unreachable, up to 50 packets will be queued, and on the 51st call this exception is thrown.
     * @throws {DataOverflowException} If the application sends data at a rate greater than what the BBM Social Platform allows.
     * @throws {NullPointerException} If <code>data</code> is null or empty.
     * @throws {IllegalArgumentException} If <code>data.length</code> is larger than {@link blackberry.bbm.platform.io.Connection.MAX_DATA_LENGTH}.
     * @throws {IllegalArgumentException} If <code>users</code> contains a user who has not joined this connection.
     * @throws {IllegalArgumentException} If <code>users.length > 24</code>.
     * @throws {PersistentContentException} If Content Protection is enabled and the device is locked.
     * 
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Send message to all users
     * var replyText = ""; // Obtain reply text from user...
     * var msgObj = {
     *     id:'msg',
     *     value:replyText
     * };
     * try {
     *     connnection1.send(JSON.stringify(msgObj));
     * } catch(e) {
     *     // Error occurred while sending data
     * }
     *
     * &lt;/script&gt;
     *
     * @example
     * &lt;script type="text/javascript"&gt;
     *
     * // Ping all users
     * var pingObj = { id:'ping' };
     * try {
     *     connection1.send(JSON.stringify(pingObj));
     * } catch(e) {
     *     // Error occurred while sending data
     * }
     *
     * &lt;/script&gt;
     *
     * @example
     * &lt;script type="text/javascript"&gt;
     *
     * // Send high score to all users
     * var highScoreObj = {
     *     id: 'highscore',
     *     score: 9000,
     *     hits: 130,
     *     misses: 40
     * };
     * try {
     *     connection1.send(JSON.stringify(highScoreObj));
     * } catch(e) {
     *     // Error occurred while sending data
     * }
     *
     * &lt;/script&gt;
     * @BB50+
     */
    this.send = function(data, users) {
    };
    
    /**
     * @description Allows the user to invite contacts to join this connection.
     * <p>A Contact Picker dialog appears and allows the user to select contacts to invite. Only
     * contacts with the application will be shown in the Contact Picker.
     * @param {String} inviteMessage Message shown in the invitation to users.
     * @param {Object} [options] Options.
     * @param {Number} [options.expiryTime] Delay until the invitation expires (ms). If not provided
     * or <code><= 0</code>, the invitation will not expire.
     * @param {String} [options.cookie] A custom parameter provided by the third party application. 
     * e.g. The current game level. Max length of 128 characters.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]} [options.contacts] The contacts that
     * will be shown.
     * @throws {IllegalStateException} If the connection is full.
     * @throws {IllegalStateException} If the connection is inactive, which can happen if the user
     * ends or leaves the connection.
     * @BB50+
     */
    this.inviteContacts = function(inviteMessage, options) {
    };
    
    //////////////////////
    // LISTENER METHODS //
    //////////////////////

    /**
     * Invoked when data is received from a user.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} sender User that sent the data.
     * @param {String} data Data received.
     * @event
     * @example
     * &lt;script type="text/javascript"&gt;
     *
     * connection1.ondata = function(user, data) {
     *     var dataObj = JSON.parse(data);
     *     var dataID = dataObj.id;
     *
     *     // Handle application-defined data types
     *     if(dataID == "msg") {
     *         // Handle msg type
     *     } else if(dataID == "ping") {
     *         // Handle ping type
     *     } else if(dataID == "highscore") {
     *         // Handle highscore type
     *     }
     * };
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    this.ondata = function(sender, data) {  
    };
    
    /**
     * Invoked when the user invites others to join the connection. This will not be
     * called if the user invites others to download the application.
     * @param {blackberry.bbm.platform.io.BBMPlatformUser[]} users The users who were invited.
     * @event
     * @BB50+
     */
    this.onusersinvited = function(users) {
    };
    
    /**
     * Invoked when a user declines an invitation.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The user who declined.
     * @event
     * @BB50+
     */
    this.onuserdeclined = function(user) {
    };
    
    /**
     * Invoked when users join the connection by accepting an invitation.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]} users The users who joined.
     * @param {String} type The way that users joined.
     * <ul>
     * <li><code>"invitedbyme"</code>: The joining users were invited by the current user.
     * <li><code>"acceptedbyme"</code>: The current user is joining the connection.
     * </ul>
     * @param {String} cookie The cookie that was sent with the invitation. <code>undefined</code>
     * if no cookie was sent.
     * @event
     * @BB50+
     */
    this.onusersjoined = function(users, type, cookie) {
    };
    
    /**
     * Invoked when a user leaves the connection.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The user who left.
     * @event
     * @BB50+
     */
    this.onuserleft = function(user) {
    };
};
