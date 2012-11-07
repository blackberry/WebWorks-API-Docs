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
 * @class A request to join sent from the peer's side.
 * @extends blackberry.bbm.platform.io.JoinRequest
 * @BB50+
 */
blackberry.bbm.platform.io.OutgoingJoinRequest = function() {

    /**
     * The host that the request is sent to.
     * @type blackberry.bbm.platform.users.BBMPlatformUser
     * @BB50+
     */
    this.host = undefined;
    
    /**
     * Cancels the request. The request can only be canceled if its <code>status == "pending"</code>; otherwise, this does nothing.
     * <p><code>onRequestCanceled</code> supplied to {@link blackberry.bbm.platform.io.host} is invoked on the host's side. 
     * @BB50+
     */
    this.cancel = function() { };

};
