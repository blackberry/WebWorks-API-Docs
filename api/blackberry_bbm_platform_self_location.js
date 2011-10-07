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
 * @namespace Provides access to the current user's location information.
 * <p><b>This namespace is <code>undefined</code> if the user has disabled this feature on their profile.</b>
 * @BB50+
 * @example
 * &lt;script type="text/javascript"&gt;
 * var location = blackberry.bbm.platform.self.location;
 * if(location) {
 *     var flag = location.flag;
 *     var countryCode = location.countryCode;
 *     var timezoneOffset = location.timezoneOffset;
 *     // Do something with location info
 * } else {
 *     // Location is not enabled by user
 * }
 * &lt;/script&gt;
 */
blackberry.bbm.platform.self.location = {

        /**
         * @description The timezone offset in minutes. Equal to 
         * <code>(new Date()).getTimezoneOffset()</code> for the same time zone.
         * @type Number
         * @BB50+
         */
        timezoneOffset: 0,
        
        /**
         * @description The country flag image, encoded as a base64 image string.
         * @type String
         * @BB50+
         */
        flag: { },
        
        /**
         * @description The country code.
         * @type String
         * @BB50+
         */
        countryCode: { }
};
