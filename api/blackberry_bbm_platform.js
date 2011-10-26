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
 * @toc {BBM} BBM Platform
 * @featureID blackberry.bbm.platform
 * @namespace Provides access to the BBM Social Platform.
 * 
 * <h1>Required BBM Version</h1>
 * 
 * BBM Social Platform APIs come with BBM6 and later. BBM6 is supported on BlackBerry OS 5, 6, and 7.
 * 
 * <h1>Authorization</h1>
 * 
 * <p>
 * Applications must first obtain access to the platform by calling
 * {@link blackberry.bbm.platform.register}.
 * </p>
 * 
 * <ul>
 * <li><b>Accessing other namespaces under</b> {@link blackberry.bbm.platform} <b>may throw exceptions
 * if not authorized.</b></li>
 * <li><b>Authorization may be revoked by the user or server at any time.</b></li>
 * </ul>
 * @BB50+
 * @learns {Download BBM SDK Resources} http://us.blackberry.com/developers/blackberrymessenger/ Download the resources required to use the BBM SDK for WebWorks [BlackBerry].
 * @learns {Getting Started Guide} http://docs.blackberry.com/en/developers/subcategories/?userType=21&category=BlackBerry+WebWorks+for+Smartphones Setup the BBM SDK for BlackBerry WebWorks [BlackBerry Developer Resource Center].
 * @learns {Sample Application Guide} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Getting-Started-BlackBerry-WebWorks-Development-for-Smartphones/ta-p/1185353 Get started with the sample application included with the BBM SDK for BlackBerry WebWorks [BlackBerry Developer Resource Center].
 */
blackberry.bbm.platform = {

    /**
     * @description Registers for access to BBM Platform.
     * <p>The application must assign a callback to {@link blackberry.bbm.platform.event:onaccesschanged}
     * before registering. During registration, a dialog will be shown to guide the user through the registration process.
     * The application should wait until {@link blackberry.bbm.platform.event:onaccesschanged} is invoked before continuing.</p>
     * <h4>Application in Test Environment</h4>
     * Applications must provide a UUID used to identify the application in the test
     * environment. If the application is in App World then the UUID will not be used. The same
     * UUID should be used for future releases of the same application; otherwise communication
     * between them will not be possible. The UUID must be a randomly generated 36-character UUID.
     * Any UUID generator can be used.
     * @param {Object} options Options.
     * @param {String} options.uuid ID used to identify the application in the test environment.
     * @throws {IllegalStateException} If <code>blackberry.bbm.platform.onaccesschanged</code> is not assigned.
     * @throws {IllegalArgumentException} If <code>UUID</code> is not a valid 36-character UUID.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Create callback invoked when access changes
     * blackberry.bbm.platform.onaccesschanged = function(accessible, status) {
     *     if (status == "allowed") {
     *         // Access allowed
     *     } else if (status == "user") {
     *         // Access blocked by user
     *     } else if (status == "rim") {
     *         // Access blocked by RIM
     *     }
     *     // Listen for other status...
     * };
     * 
     * // Register with the platform
     * blackberry.bbm.platform.register({
     *     uuid: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" // Randomly generated UUID
     * });
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    register : function(options) {
    },
    
    /**
     * @description Shows a dialog prompting the user to connect this application to BBM. This will
     * only work if the application is blocked by the user (i.e. access status is <code>"user"</code>).
     * <p>If the user decides to connect then the application should call {@link blackberry.bbm.platform.register}
     * to complete connecting this application to BBM.
     * @param {Function} onComplete Called when the user has finished connecting this application to BBM.
     * @param {Boolean} connected <code>true</code> if the user connected the application to BBM;
     * <code>false</code> otherwise.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Prompt the user to connect to BBM, and call register() if they do
     * blackberry.bbm.platform.requestUserPermission(function(allowed) {
     *     if(allowed) {
     *         // Register with the platform
     *         blackberry.bbm.platform.register({
     *             uuid: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" // Randomly generated UUID
     *         });
     *     }
     * });
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    requestUserPermission : function(onComplete) {
        
    }

    /**
     * Called when the access status changes.
     * <p>This callback is mandatory and must be assigned <b>before</b> the call to {@link blackberry.bbm.platform.register}.
     * @param {Boolean} accessible <code>true</code> if access is allowed;
     * <code>false</code> otherwise.
     * @param {String} status The access status.
     * <ul>
     * <li><code>"allowed"</code>: Access is allowed.
     * <li><code>"user"</code>: Access is blocked by the user.
     * <li><code>"rim"</code>: Access is blocked by RIM (the application has most likely violated the terms of use).
     * <li><code>"resetrequired"</code>: Access is blocked because a device reset is required to use the BBM Social Platform.
     * <li><code>"nodata"</code>: Access is blocked because the device is out of data coverage. A data connection is required
     * to register the application.
     * <li><code>"temperror"</code>: Access is blocked because of a temporary error. The application should try to call
     * {@link blackberry.bbm.platform.register} in 30 minutes, or the next time the application starts.
     * <li><code>"nonuiapp"</code>: Access is blocked because {@link blackberry.bbm.platform.register} was called from a non-UI application.
     * <p>The application must initially register from a UI application because user interaction is required. The application may register from a background application only after the application has been connected in a UI application at least once.</li> 
     * </ul>
     * @event
     * @BB50+
     */
    onaccesschanged : function(accessible, status) {
    },
    
    /**
     * Called in certain cases when the application is invoked from within BBM. At the moment this
     * event is only triggered by profile box items.
     * <p>This callback should be assigned <b>before</b> the call to {@link blackberry.bbm.platform.register}. If the application is not yet running then it will be launched. This callback will only be invoked once access to the platform is allowed.
     * <p>This callback is optional. Applications are not required to handle this type of event. 
     * <h3>ProfileBoxItem Invocations</h3>
     * The user can launch the application via profile box items (see {@link blackberry.bbm.platform.self.profilebox}).
     * This callback will be invoked with the reason <code>"profilebox"</code> and a
     * {@link blackberry.bbm.platform.self.profilebox.ProfileBoxItem} param -- the profile box item
     * which was clicked.
     * @param {String} reason The reason that the application was invoked. If <code>"profilebox"</code> then
     * <code>param</code> is a {@link blackberry.bbm.platform.self.profilebox.ProfileBoxItem}.
     * @param {blackberry.bbm.platform.self.profilebox.ProfileBoxItem} param The parameter associated with <code>reason</code>.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Trigger an action in the application when a profile box item is selected
     * blackberry.bbm.platform.onappinvoked = function(reason, param) {
     *     if(reason == "profilebox") {
     *         var boxItem = param;
     *         // Take action based on profile box item...
     *     }
     * };
     * 
     * &lt;/script&gt; 
     * @event
     * @BB50+
     */
    onappinvoked : function(reason, param) {
    },
    
    /**
     * The application environment.
     * <ul>
     * <li><code>"appworld"</code>: The application exists in App World.
     * <li><code>"test"</code>: The application does not exist in App World.
     * </ul>
     * @type String
     * @readOnly
     * @BB50+
     */
    environment : ""
};
