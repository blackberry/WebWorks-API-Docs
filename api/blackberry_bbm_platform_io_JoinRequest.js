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
 * @class Provides basic request functionality including a request ID and status.
 * @BB50+
 */
blackberry.bbm.platform.io.JoinRequest = function() {
    /**
     * @description The unique ID.
     * @type Number
     * @BB50+
     */
    this.id = 0;
    
    /**
     * @description The status.
     * <ul>
     * <li><code>"pending"</code>: The request has not been accepted or denied by the host, or canceled by the peer.
     * <li><code>"accepted"</code>: The request has been accepted by the host.
     * <li><code>"declined"</code>: The request has been declined by the host.
     * <li><code>"canceled"</code>: The request has been canceled by the peer.
     * </ul>
     * @type String
     * @BB50+
     */
    this.status = "";

};
