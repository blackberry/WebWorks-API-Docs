/*
* Copyright 2012 Research In Motion Limited.
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
 * @class The ContactName object contains name properties of a {@link blackberry.pim.contacts.Contact} object.
 * @toc {PIM} ContactName
 * @featureID blackberry.pim.contacts
 * @constructor Constructor for a new ContactName object.
 * @param {Object} [properties] Optional object literal that specifies the field values for the ContactName object. The object should be in the following form (with any number of properties): <br><pre>
 * {
 *      familyName: &lt;family name of the contact - String&gt;,
 *      givenName: &lt;given name of the contact - String&gt;,
 *      middleName: &lt;middle name of the contact - String&gt;,
 *      honorificPrefix: &lt;prefix of the contact - String&gt;,
 *      honorificSuffix: &lt;suffix of the contact - String&gt;,
 *      alias: &lt;alias of the contact - String&gt;,
 *      phoneticGivenName: &lt;phonetic given name of the contact - String&gt;,
 *      phoneticFamilyName: &lt;phonetic family name of the contact - String&gt;
 * }
 * </pre>
 * @BB10X
 * @example
 * function createContact() {
 *     var contacts = blackberry.pim.contacts;
 *
 *     var name = new contacts.ContactName({
 *             "givenName": "John",
 *             "familyName": "Smith"
 *         });
 *
 *     var newContact = contacts.create();
 *     newContact.name = name;
 *
 *     newContact.save(onSaveSuccess, onSaveError);
 *
 *     alert("Contact first name: " + newContact.name.givenName);
 * }
 *
 * function onSaveSuccess(contact) {
 *     alert("Contact saved: " + contact.name.givenName);
 * }
 *
 * function onSaveError(error) {
 *     alert("Contact save failed: " + error.code);
 * }
 */
blackberry.pim.contacts.ContactName = {};

/**
 * @description The complete name of the contact.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.formatted = "";

/**
 * @description The contact's family name.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.familyName = "";

/**
 * @description The contact's given name.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.givenName = "";

/**
 * @description The contact's middle name.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.middleName = "";

/**
 * @description The contacts prefix (example Mr. or Dr.)
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.honorificPrefix = "";

/**
 * @description The contacts suffix (example Esq.).
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.honorificSuffix = "";

/**
 * @description The contact's alias.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.alias = "";

/**
 * @description The contact's phonetic given name.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.phoneticGivenName = "";

/**
 * @description The contact's phonetic family name.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.phoneticFamilyName = "";