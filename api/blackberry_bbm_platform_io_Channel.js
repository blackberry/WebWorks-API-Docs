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
 * @class A connection to communicate with one or more peers, where <b>the peers are not aware of
 * each other</b>. Each peer can only communicate with the current user.
 * <p>For example, a channel connection could be used when a user wants to have a private chat with
 * a contact, or wants to send their location information to one or more contacts.
 * <br><br> {@image /images/bbm/channel.png} <br><br>
 * In the diagram above, the current user (user A) has invited users B, C, and D to the channel. Once 
 * the users join, user A can send data to B, C, and D, but B, C, and D can only send data to A.
 * @featureID blackberry.bbm.platform
 * @extends blackberry.bbm.platform.io.Connection
 * @BB50+
 */
blackberry.bbm.platform.io.Channel = function() {
    
    /**
     * Removes the current user from the connection, but leaves it active for all other participants.
     * <p>{@link onUserLeft} will be called for all other users currently in the connection.
     * <p>The connection will become inactive for the current user, and should not be used afterwards.
     * @throws {IllegalStateException} if the current user has already left the connection.
     * @BB50+
     */
    this.leave = function() { };
};
