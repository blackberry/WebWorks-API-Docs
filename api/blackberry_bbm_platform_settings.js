/**
 * @toc {BBM} Settings
 * @featureID blackberry.bbm.platform
 * @namespace Provides read access to BBM Connected Application settings.
 * @BB50+
 */
blackberry.bbm.platform.settings = {

    /**
     * @description Whether the application appears in the current user's BBM profile.
     * <p><code>"enabled"</code> if the application appears in the BBM profile; <code>"disabled"</code> otherwise.
     * <p>See {@link blackberry.bbm.platform.self.profilebox}
     * @type String
     * @readOnly
     * @BB50+
     */
    profilebox: "",
    
    /**
     * @description Whether a prompt is shown when hosting a public connection or requesting to join a public connection.
     * <p><code>"enabled"</code> if the prompt is never shown, <code>"disabled"</code> if the prompt is always shown.
     * <p>See {@link blackberry.bbm.platform.io.host} and {@link blackberry.bbm.platform.io.joinHost}
     * @type String
     * @readOnly
     * @BB50+
     */
    alwaysAllowPublicConns: ""
};