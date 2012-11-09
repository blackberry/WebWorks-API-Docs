/*
* Copyright 2010-2012 Research In Motion Limited.
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
 * @toc {PIM} ContactPhoto
 * @featureID blackberry.pim.contacts
 * @class The ContactPhoto object contains the address information of a Contact object.
 * @BB10X
 * @example
 * function createContact() {
 *     var contacts = blackberry.pim.contacts;
 *
 *     // access_shared permission is needed to access shared folder
 *     var primaryPhoto = {
 *         originalFilePath: blackberry.io.sharedFolder + "/photos/contact.jpg",
 *         pref: true
 *     };
 *     var secondaryPhoto = {
 *         originalFilePath: blackberry.io.sharedFolder + "/photos/other.jpg",
 *         pref: false
 *     };
 *
 *     var newContact = contacts.create();
 *     newContact.name = {
 *         "givenName": "Lisa",
 *         "familyName": "Simpson"
 *     };
 *     newContact.photos = [primaryPhoto, secondaryPhoto];
 *
 *     newContact.save(onSaveSuccess, onSaveError);
 * }
 *
 * function onSaveSuccess(contact) {
 *     alert("Contact saved: " + contact.name.givenName);
 *     alert("Small primary photo: " + contact.photos[0].smallFilePath);
 * }
 *
 * function onSaveError(error) {
 *     alert("Contact save failed: " + error.code);
 * }
 */
blackberry.pim.contacts.ContactPhoto = {};

/**
 * @type Boolean
 * @description If true, this ContactPhoto contains the user's preferred value. 
 * @BB10X
 */
blackberry.pim.contacts.ContactPhoto.prototype.pref = false;

/**
 * @type String
 * @description Contains the file path of the original contact photo.
 * @BB10X
 */
blackberry.pim.contacts.ContactPhoto.prototype.originalFilePath = "";

/**
 * @type String
 * @readOnly
 * @description Contains the small photo file path.
 * @BB10X
 */
blackberry.pim.contacts.ContactPhoto.prototype.smallFilePath = "";

/**
 * @type String
 * @readOnly
 * @description Contains the large photo file path
 * @BB10X
 */
blackberry.pim.contacts.ContactPhoto.prototype.largeFilePath = "";

