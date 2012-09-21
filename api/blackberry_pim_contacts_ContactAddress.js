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
 * @toc {PIM} ContactAddress
 * @featureID blackberry.pim.contacts
 * @class The ContactAddress object contains the address information of a Contact object.
 * @constructor Constructor for a new ContactAddress object.
 * @param {Object} [properties] Optional object literal that specifies the field values for the ContactAddress object. The object should be in the following form (with any number of properties): <br><pre>
 * {
 *     type: &lt;type of address HOME, WORK, or OTHER - String&gt;,
 *     streetAddress: &lt;the street address - String&gt;,
 *     streetOther: &lt;extra information about street address - String&gt;,
 *     locality: &lt;the city or locality - String&gt;,
 *     region: &lt;the province, state, or region - String&gt;,
 *     postalCode: &lt;the postal code or zip code - String&gt;,
 *     country: &lt;the country name - String&gt;
 * }
 * </pre>
 * @BB10X
 * @example
 * function createContact() {
 *     var contacts = blackberry.pim.contacts,
 *         ContactAddress = contacts.ContactAddress;
 *
 *     var homeAddress = new ContactAddress({
 *             "type": ContactAddress.HOME,
 *             "streetAddress": "123 Abc Rd",
 *             "locality": "Waterloo",
 *             "region": "Ontario",
 *             "country": "Canada"
 *         });
 *     var workAddress = new ContactAddress({
 *             "type": ContactAddress.WORK,
 *             "streetAddress": "456 Industry St",
 *             "locality": "Waterloo",
 *             "region": "Ontario",
 *             "country": Canada"
 *         });
 *
 *     var newContact = contacts.create();
 *     newContact.addresses = [homeAddress, workAddress];
 *
 *     newContact.save(onSaveSuccess, onSaveError);
 *
 *     alert("Home address: " + homeAddress.formatted);
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
blackberry.pim.contacts.ContactAddress = {};

/**
 * @type String
 * @description Specifies the type of ContactAddress.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.type = "";

/**
 * @type String
 * @readOnly
 * @description A formatted version of the full address, for display.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.formatted = "";

/**
 * @type String
 * @description The street address.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.streetAddress = "";

/**
 * @type String
 * @description Extra information about the street address.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.streetOther = "";

/**
 * @type String
 * @description The city or locality.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.locality = "";

/**
 * @type String
 * @description The province, state, or region.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.region = "";

/**
 * @type String
 * @description The postal code or zip code.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.postalCode = "";

/**
 * @type String
 * @description The country name.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.country = "";

/**
 * @type String
 * @constant
 * @default "home"
 * @description The type of ContactAddress is "home".
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.HOME = "home";

/**
 * @type String
 * @constant
 * @default "work"
 * @description The type of ContactAddress is "work".
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.WORK = "work";

/**
 * @type String
 * @constant
 * @default "other"
 * @description The type of ContactAddress is "other".
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.OTHER = "other";

