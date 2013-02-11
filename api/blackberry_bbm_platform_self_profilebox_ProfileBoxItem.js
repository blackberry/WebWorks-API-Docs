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
 * @class A profile box item. Consists of text and possibly an icon.
 * @BB50+
 */
blackberry.bbm.platform.self.profilebox.ProfileBoxItem = function() {
    /**
     * @name blackberry.bbm.platform.self.profilebox.ProfileBoxItem.id^2
     * @field
     * @description
     * The item ID.
     * @type String
     * @readOnly
     * @BB10X
     */

    /**
     * The item ID.
     * @type Number
     * @readOnly
     * @BB50+
     */
    this.id = 0;
    
    /**
     * The item icon as a base64 encoded image string. This is <code>undefined</code> if the item has no icon.
     * @type String
     * @readOnly
     * @BB50+
     */
    this.icon = 0;

    /**
     * The item icon as a base64 encoded image string. This is <code>undefined</code> if the item has no icon.
     * @type Number
     * @readOnly
     * @BB10X
     */
    this.iconId = 0;
    
    /**
     * The item text.
     * @type String
     * @readOnly
     * @BB50+
     * @BB10X     
     */
    this.text = "";
    
    /**
     * The customizable cookie. This is <code>undefined</code> if this item has no cookie.
     * @type String
     * @readOnly
     * @BB50+
     * @BB10X     
     */
    this.cookie = "";
};
