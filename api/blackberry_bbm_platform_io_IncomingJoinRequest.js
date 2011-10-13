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
 * @class A request to join received on the host's side.
 * @extends blackberry.bbm.platform.io.JoinRequest
 * @BB50+
 */
blackberry.bbm.platform.io.IncomingJoinRequest = function() {

    /**
     * The cookie specified by the requesting peer. <code>undefined</code> if no cookie was specified.
     * @type String
     * @BB50+
     */
    this.cookie = undefined;
    
    /**
     * The user who is requesting to join.
     * @type blackberry.bbm.platform.users.BBMPlatformUser
     * @BB50+
     */
    this.peer = undefined;
    
    /**
     * Accepts the join request from a peer. This can be called from the host's side.
     * <p><code>onHostAccepted</code> supplied to {@link blackberry.bbm.platform.io.joinHost} will
     * be invoked on the peer's side. 
     * @param {String} [cookie] A custom parameter provided by the third party application. This
     * parameter will be sent to the joining peer.
     * @throws {IllegalArgumentException} If <code>cookie</code> is longer than 128 characters.
     * @BB50+
     */
    this.accept = function(cookie) { };
    
    /**
     * Declines the join request from a peer. This can be called from the host's side.
     * <p><code>onHostDeclined</code> supplied to {@link blackberry.bbm.platform.io.joinHost} will
     * be invoked on the peer's
     * side, with the reason <code>"declinedbyhost"</code>.
     * @BB50+
     */
    this.decline = function() { };
};
