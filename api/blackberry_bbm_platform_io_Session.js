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
 * @class A connection to communicate with one or more peers, where <b>the peers are aware of each other</b>.
 * <p>Peers may in turn invite other users, who are also visible to everyone in the session, whether or not they are contacts of the session originator.</p>
 * <p>For example, a session connection could be used for a multi-player game application such as a poker game. When all the users in the session want to see the poker table, and game data is sent to each player in the game as it occurs.</p>
 * <b>User A invites user B, and user B joins the session</b>
 * <br><br> {@image /images/bbm/session_invite1.png} <br><br>
 * <b>User B invites user C, and user C joins the session</b>
 * <br><br> {@image /images/bbm/session_invite2.png} <br><br>
 * <b>User C invites user D, and user D joins the session</b>
 * <br><br> {@image /images/bbm/session_invite3.png} <br><br>
 * Once a user has joined they can send data to anyone in the session.
 * @featureID blackberry.bbm.platform
 * @extends blackberry.bbm.platform.io.Connection
 * @BB50+
 */
blackberry.bbm.platform.io.Session = function() {
    
    /////////////////////
    // Session methods //
    /////////////////////
    
    /**
     * Ends the connection for all participants.
     * <p>All participants will be removed from {@link joinedUsers}. All pending invitations will be
     * removed and {@link pendingUsers} will be set to <code>0</code>.
     * <p>{@link blackberry.bbm.platform.io.Session#event:onended} will be called for all users currently in the connection.
     * <p>The connection will become inactive for the current user, and should not be used afterwards.
     * @throws {IllegalStateException} if the current user has already ended the connection.
     * @BB50+
     */
    this.end = function() { };
    
    /**
     * Removes the current user from the connection, but leaves it active for all other participants.
     * <p>{@link onUserLeft} will be called for all other users currently in the connection.
     * <p>The connection will become inactive for the current user, and should not be used afterwards.
     * @throws {IllegalStateException} if the current user has already left the connection.
     * @BB50+
     */
    this.leave = function() { };
    
    /**
     * Sends data to all users.
     * @throws {ContactUnreachableException} If a user is unreachable, up to 50 packets will be queued. This will be thrown on the 51st call.
     * @throws {DataOverflowException} If the rate of data sent by the application exceeds that which the BBM Platform allows.
     * @throws {NullPointerException} If <code>data</code> is null or empty.
     * @throws {IllegalArgumentException} If <code>data.length</code> is larger than {@link blackberry.bbm.platform.io.Connection.MAX_DATA_LENGTH}.
     * @throws {PersistentContentException} If Content Protection is enabled and device is locked.
     * @param {String} data Object to be sent.
     * @BB50+
     */
    this.broadcast = function(data) { };
    
    /////////////////////////////
    // SessionListener methods //
    /////////////////////////////
    
    /**
     * Invoked when broadcast data is received from a user.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} sender User that sent the data.
     * @param {String} data Data received.
     * @event
     * @BB50+
     */
    this.onbroadcastdata = function(sender, data) { };
    
    /**
     * Invoked when users are removed.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} remover The user who removed <code>users</code>.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]}users The removed users.
     * @event
     * @BB50+
     */
    this.onusersremoved = function(remover, users) { };
    
    /**
     * Invoked when the connection is ended by another user.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The user who ended the connection.
     * @event
     * @BB50+
     */
    this.onended = function(user) { };
};
