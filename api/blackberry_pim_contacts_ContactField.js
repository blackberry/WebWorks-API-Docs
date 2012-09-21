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
 * @toc {PIM} ContactField
 * @featureID blackberry.pim.contacts
 * @class The ContactField object provides a generic field in a Contact object.  Properties that are stored as ContactField objects include email addresses and phone numbers.
 * @constructor Constructor for a new ContactField object.
 * @param {String} type The type of ContactField.
 * @param {String} value The value of the ContactField.
 * @BB10X
 * @example
 * function createContact() {
 *     var contacts = blackberry.pim.contacts;
 *
 *     var homeEmail = new contacts.ContactField(
 *         contacts.ContactField.HOME,
 *         "xyz@person.com");
 *     var workEmail = new contacts.ContactField(
 *         contacts.ContactField.WORK,
 *         "abc@rim.com");
 *
 *     var newContact = contacts.create();
 *     newContact.emails = [homeEmail, workEmail];
 *
 *     newContact.save(onSaveSuccess, onSaveError);
 *
 *     alert("Home email: " + homeEmail.value);
 * }
 *
 * function onSaveSuccess(contact) {
 *     alert("Contact saved: " + contact.displayName);
 * }
 *
 * function onSaveError(error) {
 *     alert("Contact save failed: " + error.code);
 * }
 */
blackberry.pim.contacts.ContactField = {};

/**
 * @type String
 * @description Specifies the type of ContactField.
 * @BB10X
 */
blackberry.pim.contacts.ContactField.prototype.type = "";

/**
 * @type String
 * @description The value of the field.  For example, an email address or a phone number.
 * @BB10X
 */
blackberry.pim.contacts.ContactField.prototype.value = "";

/**
 * @type String
 * @constant
 * @default "home"
 * @description The type of ContactField is "home".  This constant can be used for email addresses, phone numbers, fax numbers, and pager numbers.
 * @BB10X
 */
blackberry.pim.contacts.ContactField.HOME = "home";

/**
 * @type String
 * @constant
 * @default "work"
 * @description The type of ContactField is "work".  This constant can be used for email addresses, phone numbers, fax numbers, and pager numbers.
 * @BB10X
 */
blackberry.pim.contacts.ContactField.WORK = "work";

/**
 * @type String
 * @constant
 * @default "other"
 * @description The type of ContactField is "other".  This constant can be used for email addresses, phone numbers, fax numbers, and pager numbers.
 * @BB10X
 */
blackberry.pim.contacts.ContactField.OTHER = "other";

/**
 * @type String
 * @constant
 * @default "mobile"
 * @description The type of ContactField is "mobile".  This constant can be used for phone numbers.
 * @BB10X
 */
blackberry.pim.contacts.ContactField.MOBILE = "mobile";

/**
 * @type String
 * @constant
 * @default "direct"
 * @description The type of ContactField is "mobile".  This constant can be used for fax numbers.
 * @BB10X
 */
blackberry.pim.contacts.ContactField.DIRECT = "direct";

