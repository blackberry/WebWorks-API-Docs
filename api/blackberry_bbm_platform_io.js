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
 * @toc {BBM} Connections
 * @featureID blackberry.bbm.platform
 * @namespace Provides services to create, accept, and manage connections.
 * <h3>Connections</h3>
 * <h4>Connection types</h4>
 * The BBM Platform supports the following types of connections:
 * <br/>{@link blackberry.bbm.platform.io.Channel}
 * <br/>{@link blackberry.bbm.platform.io.Session}
 * 
 * <h4>Creating a connections</h4>
 * <p>Connections can be created using {@link blackberry.bbm.platform.io.createConnection}.
 * When a connection is created, the application should assign callbacks to it in order to be notified
 * of various events.</p>
 * 
 * <pre>
 * var type = ... // One of "channel" or "session"
 * var conn = blackberry.bbm.platform.io.createConnection(type);
 * setConnectionCallbacks(conn, type);
 * </pre>
 * 
 * <h4>Accepting incoming connections</h4>
 * When the current user accepts an invitation within BBM, {@link blackberry.bbm.platform.io.event:onconnectionaccepted}
 * will be invoked with the connection on which the invitation was accepted. The application should
 * assign callbacks to the connection within this method.
 * <pre>
 * var conn;
 * 
 * blackberry.bbm.platform.io.onconnectionaccepted = function(type, connection, cookie) {
 *     // Save the connection and set the callbacks
 *     conn = connection;
 *     setConnectionCallbacks(conn, type);
 * };
 * </pre>
 * 
 * <h4>Connection events</h4>
 * A generic function can be used to assign callbacks to connections.
 * <pre>
 * function setConnectionCallbacks(conn, type) {
 *     // Channel/Session callbacks
 *     conn.onusersinvited = function(users) {
 *         // ...
 *     };
 *     conn.onusersjoined = function(users, type, cookie) {
 *         // ...
 *     };
 *     conn.onuserdeclined = function(user) {
 *         // ...
 *     };
 *     conn.onuserleft = function(user) {
 *         // ...
 *     };
 *     conn.ondata = function(user, data) {
 *         // ...
 *     };
 *     
 *     // Session callbacks
 *     if(type == "session") {
 *         conn.onbroadcastdata = function(user, data) {
 *             // ...
 *         };
 *         conn.onusersremoved = function(user, users) {
 *             // ...
 *         };
 *         conn.onended = function(user) {
 *             // ...
 *         };
 *     }
 * };
 * </pre>
 * 
 * <h3>Adding Users to Connections</h3>
 * <p>There are two ways to add users to connections: (1) inviting contacts to join a connection, and
 * (2) hosting a connection for non-contacts to join. A user does not have to be the connection
 * creator in order to invite users.
 * 
 * <h4>1. Inviting contacts to join</h4>
 * <p>An application user can invite contacts to join a connection.</p>
 * <p>When the application calls {@link blackberry.bbm.platform.io.Connection#inviteContacts} a Contact Picker dialog will be shown containing contacts that have the application installed.
 * If the user invites contacts then the {@link blackberry.bbm.platform.io.Connection#event:onusersinvited} callback will be invoked on the inviter's side.</p>
 * <p>Invitees receive the invitations within BBM.</p>
 * <ul>
 * <li>If they accept the invitation, {@link blackberry.bbm.platform.io.Connection#event:onusersjoined} is invoked on the inviter's side, and {@link blackberry.bbm.platform.io.event:onconnectionaccepted} is invoked on the invitee's side with the connection they just joined. 
 * <li>If they decline the invitation, {@link blackberry.bbm.platform.io.Connection#event:onuserdeclined} is invoked on the inviter's side.
 * </ul>
 * <br>{@image /images/bbm/invite_to_join.png}<br>
 * 
 * <h4>2. Hosting a public connection for non-contacts to join</h4>
 * <p>An application user can also host an event within a public connection to let all application users join.</p>
 * <p>When the application calls {@link blackberry.bbm.platform.io.host} a dialog will be shown for the user to allow or deny the decision. If the user allows, the application should then post the host's PIN and PPID to its discovery service. <b>The BBM platform does not provide a discovery service. This must be provided by the application developer.</b>
 * <p>Peers should download host information (PIN and PPID) from the discovery service and then call {@link blackberry.bbm.platform.io.joinHost}. The peer will also be presented with a dialog to allow or deny the decision.
 * <p>At this point the request is in the <code>"pending"</code> state. In this state the peer can {@link blackberry.bbm.platform.io.OutgoingJoinRequest#cancel} the request, and the host can {@link blackberry.bbm.platform.io.IncomingJoinRequest#accept} or {@link blackberry.bbm.platform.io.IncomingJoinRequest#decline}.</p>
 * <br>{@image /images/bbm/hosting.png}<br>
 * </p>
 * @BB50+
 */
blackberry.bbm.platform.io = {
        
    /**
     * @description Creates a connection.
     * <p><b>The application should assign callbacks to the connection after creating it.</b></p>
     * @param {String} type The type of connection to create: <code>"channel"</code> or <code>"session"</code>.
     * @returns {blackberry.bbm.platform.io.Channel|blackberry.bbm.platform.io.Session} The connection created.
     * @BB50+
     */
    createConnection: function(type) {
    },
    
    /**
     * Invoked when an incoming connection is accepted. There are two cases when this may happen:
     * <ul>
     * <li>When an invitation is accepted in the BBM chat window.
     * <li>When a host accepts a join request.
     * </ul>
     * <p>This callback is required when using either invitation framework. It must be assigned <b>before</b> the call to {@link blackberry.bbm.platform.register}. 
     * <p><b>The application should assign callbacks to the connection in this method.</b></p>
     * @param {String} connectionType The type of connection: <code>"channel"</code> or <code>"session"</code>.
     * @param {blackberry.bbm.platform.io.Channel|blackberry.bbm.platform.io.Session} connection The connection.
     * @param {String} cookie The cookie sent with the invitation. May be <code>null</code>.
     * @event
     * @BB50+
     */
    onconnectionaccepted: function(connectionType, connection, cookie) {
    },
    
    ////////////////////////////////////
    // Non-BBM Contact Invite Support //
    ////////////////////////////////////
    
    /**
     * @description Sends a join request to a user hosting a public connection for others to join.
     * <p>The host does not need to be a contact of the current user.
     * <h3>Reasons why a request is declined</h3>
     * <ul>
     * <li><code>"hostdeclined"</code>: The host declined without a specific reason.
     * <li><code>"hostppidinvalid"</code>: The host PPID is invalid.
     * <li><code>"appnotrunning"</code>: The host's application was not running when they received the request.
     * <li><code>"connectionnotfound"</code>: The host is not hosting on any connection, or stopped hosting on the connection while the request was pending.
     * <li><code>"connectionfull"</code>: The host's hosted connection is full.
     * </ul>
     * @param {String} hostPIN The host PIN. Can be obtained by <code>blackberry.identity.PIN</code>
     * @param {String} hostPPID The host PPID. Can be obtained by <code>blackberry.bbm.platform.self.ppid</code>.
     * @callback {Function} onComplete Invoked when the user finishes approving the join request.
     * @callback {blackberry.bbm.platform.io.OutgoingJoinRequest} onComplete.request The
     * request sent to the host; <code>undefined</code> if the user aborted the join request.
     * @callback {Function} onHostAccepted Invoked when the join request is accepted by the host.
     * @callback {blackberry.bbm.platform.io.OutgoingJoinRequest} onHostAccepted.request The accepted request.
     * @callback {String} onHostAccepted.cookie The cookie sent when the host accepted the join request in {@link blackberry.bbm.platform.io.IncomingJoinRequest#accept}. <code>undefined</code>
     * if no cookie was provided.
     * @callback {Function} onHostDeclined Invoked when the join request is declined by the host.
     * @callback {blackberry.bbm.platform.io.OutgoingJoinRequest} onHostDeclined.request The declined request.
     * @callback {String} onHostDeclined.reason The reason that the request was declined. 
     * @param {String} [cookie] A custom parameter provided by the application.
     * e.g. Their current game level. Max length of 128 characters.
     * @throws {IllegalStateException} If the current user has connected with the host in a connection
     * but still attempts to send another join request to the host.
     * @throws {IllegalArgumentException} If <code>hostPIN</code> is invalid.
     * @throws {IllegalArgumentException} If <code>hostPPID</code> is invalid.
     * @throws {IllegalArgumentException} If <code>cookie</code> is longer than 128 characters.
     * @BB50+
     */
    joinHost: function(pin, ppid, onComplete, onHostAccepted, onHostDeclined, cookie) { },
    
    /**
     * Requests that the current user (peer) has sent to hosts using {@link blackberry.bbm.platform.io.joinHost}.
     * <p>Requests in this list are in the pending state. New requests will be added to this list
     * automatically. Requests that are accepted, denied, or canceled will be removed from this
     * list automatically.
     * <p>The user can cancel a request using {@link blackberry.bbm.platform.io.OutgoingJoinRequest#cancel}.
     * @type blackberry.bbm.platform.io.OutgoingJoinRequest[]
     * @readOnly
     * @BB50+
     */
    joinHostRequests: [],
    
    /**
     * Enables hosting on this connection. The user will be prompted with a dialog to allow or deny hosting.
     * <p>To stop hosting, call <code>blackberry.bbm.platform.io.host()</code>. Stopping hosting will not
     * remove users from the connection who have already joined, it will only disallow others from joining.
     * {@link blackberry.bbm.platform.io.hostRequests} will be emptied.</p>
     * <p>The user may only host on one connection in the application. If this application is already
     * hosting a public connection and this method is invoked on a different connection, then hosting
     * will stop on the old connection and begin on the new one. The user will again be prompted with
     * a dialog to allow or deny hosting.</p>
     * <h3>Reasons why a request is canceled</h3>
     * <ul>
     * <li><code>"peercanceled"</code>: The peer canceled the request without a specific reason.
     * <li><code>"peerleft"</code>: The peer exited the application.
     * </ul>
     * @param    {blackberry.bbm.platform.io.Connection} connection The connection on which to host.
     * @callback {Function} onComplete Invoked when the user finishes approving/denying hosting.
     * @callback {Boolean} onComplete.hosting <code>true</code> if the user decided to start hosting;
     * <code>false</code> otherwise.
     * @callback {Function} onRequestReceived Invoked when the host receives a join request from a peer.
     * @callback {blackberry.bbm.platform.io.IncomingJoinRequest} onRequestReceived.request The received request.
     * @callback {Function} onRequestCanceled Invoked when a peer cancels a join request.
     * @callback {blackberry.bbm.platform.io.IncomingJoinRequest} onRequestCanceled.request The canceled request.
     * @callback {String} onRequestCanceled.reason The reason that the request was canceled.
     * @BB50+
     */
    host: function(connection, onComplete, onRequestReceived, onRequestCanceled) {
    },
    
    /**
     * The connection being hosted. <code>undefined</code> if no connection is being hosted.
     * <p>Use {@link blackberry.bbm.platform.io.host} to host an existing connection.
     * @type blackberry.bbm.platform.io.Connection
     * @readOnly
     * @BB50+
     */
    hostedConnection: undefined,
    
    /**
     * Requests that the current user (host) has received on {@link blackberry.bbm.platform.io.hostedConnection}.
     * <p>Requests in this list are in the pending state. New requests will be added to this list
     * automatically. Requests that are accepted, denied, or canceled will be removed from this
     * list automatically.
     * <p>The host can accept or decline a request using {@link blackberry.bbm.platform.io.IncomingJoinRequest#accept}
     * and {@link blackberry.bbm.platform.io.IncomingJoinRequest#decline}.
     * @type blackberry.bbm.platform.io.IncomingJoinRequest[]
     * @readOnly
     * @BB50+
     */
    hostRequests: [],
    
    /////////////////////////////////
    // CONTACT UNREACHABLE SUPPORT //
    /////////////////////////////////
    
    /**
     * Invoked when a contact has become reachable after a ContactUnreachableException was thrown from {@link blackberry.bbm.platform.io.Connection#send}.
     * <p>See {@link blackberry.bbm.platform.io.Connection#send}
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The user who has become reachable.
     * @event
     * @BB50+
     */
    onuserreachable: function(user) { },
    
    /**
     * Invoked when pending data for an unreachable user has expired. See {@link blackberry.bbm.platform.io.Connection#send} for more details.
     * <p>See {@link blackberry.bbm.platform.io.Connection#send}
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The unreachable user.
     * @param {String[]} data The data messages which expired.
     * @event
     * @BB50+
     */
    ondataexpired: function(user, data) { }
};
