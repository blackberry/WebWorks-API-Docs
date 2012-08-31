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
 * @class The Contact object represents a contact in the device PIM. It can be obtained by calling {@link blackberry.pim.contacts.create}() or {@link blackberry.pim.contacts.find}()
 * @toc {PIM} Contact
 * @featureID blackberry.pim.contacts
 * @permission access_pimdomain_contacts Permits your app to access contacts.
 */
blackberry.pim.contacts.Contact = {};

/**
 * @description A globally unique identifier.
 * @readOnly
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.id = "";

/**
 * @description The name of this Contact, suitable for display to end-users.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.displayName = "";

/**
 * @description An object containing all components of a person's name.
 * @type blackberry.pim.contacts.ContactName
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.name = null;

/**
 * @description A casual name to address the contact by.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.nickname = "";

/**
 * @description An array of all the contact's phone numbers.<br>Possible types: {@link blackberry.pim.contacts.ContactField.HOME}, {@link blackberry.pim.contacts.ContactField.WORK}, {@link blackberry.pim.contacts.ContactField.MOBILE}, {@link blackberry.pim.contacts.ContactField.OTHER}
 * @type blackberry.pim.contacts.ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.phoneNumbers = null;

/**
 * @description An array of all the contact's fax numbers.<br>Possible types: {@link blackberry.pim.contacts.ContactField.HOME}, {@link blackberry.pim.contacts.ContactField.WORK}, {@link blackberry.pim.contacts.ContactField.DIRECT}, {@link blackberry.pim.contacts.ContactField.OTHER}
 * @type blackberry.pim.contacts.ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.faxNumbers = null;

/**
 * @description An array of all the contact's pager numbers.<br>Possible types: {@link blackberry.pim.contacts.ContactField.HOME}, {@link blackberry.pim.contacts.ContactField.WORK}, {@link blackberry.pim.contacts.ContactField.OTHER}
 * @type blackberry.pim.contacts.ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.pagerNumbers = null;

/**
 * @description An array of all the contact's email addresses.<br>Possible types: {@link blackberry.pim.contacts.ContactField.HOME}, {@link blackberry.pim.contacts.ContactField.WORK}, {@link blackberry.pim.contacts.ContactField.OTHER}
 * @type blackberry.pim.contacts.ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.emails = null;

/**
 * @description An array of all the contact's addresses.
 * @type blackberry.pim.contacts.ContactAddress[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.addresses = null;

/**
 * @description An array of all the contact's IM addresses.<br>Possible types: BbmPin, Aim, Aliwangwang, GoogleTalk, Sametime, Icq, Irc, Jabber, MsLcs, Msn, Qq, Skype, YahooMessenger, YahooMessengerJapan
 * @type blackberry.pim.contacts.ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.ims = null;

/**
 * @description An array of all the contact's organizations.
 * @type blackberry.pim.contacts.ContactOrganization[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.organizations = null;

/**
 * @description The birthday of the contact.
 * @type Date
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.birthday = null;

/**
 * @description The anniversary of the contact.
 * @type Date
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.anniversary = null;

/**
 * @description A note about the contact.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.note = "";

/**
 * @description An array of the contact's photos.
 * @type blackberry.pim.contacts.ContactPhoto[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.photos = null;

/**
 * @description An array of the contact's social networks.<br>Possible types: LinkedIn, Facebook, Twitter, Gist
 * @type blackberry.pim.contacts.ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.socialNetworks = null;

/**
 * @description An array of the contact's video chat IDs
 * @type String[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.videoChat = null;

/**
 * @description An array of all the contacts user defined categories.
 * @type blackberry.pim.contacts.ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.categories = null;

/**
 * @description An array of web pages associated to the contact.<br>Possible types: blog, resume, portfolio, personal, company, other
 * @type blackberry.pim.contacts.ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.urls = null;

/**
 * @description Ringtone for the contact.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.ringtone = "";

/**
 * @description Whether this contact is a favorite.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.favorite = false;

/**
 * Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same id already exists.
 * @param {function} onSaveSuccess The callback function that will be invoked when the contact is saved successfully.
 * @callback {blackberry.pim.contacts.Contact} onSaveSuccess.contact The Contact object.
 * @param {function} onSaveError The callback function that will be invoked when the contact cannot be saved. Possible errors are: permission denied error (if access_pimdomain_contacts is not specified) or illegal arguments error (if mandatory parameters are missing or invalid).
 * @callback {blackberry.pim.contacts.ContactError} onSaveError.error The {@link blackberry.pim.contacts.ContactError} object which contains the error code.
 * @returns {void}
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.save = function () {};

/**
 * Removes the contact from the device contacts database. An error callback is called with a {@link blackberry.pim.contacts.ContactError} object if the removal is unsuccessful.
 * @param {function} onRemoveSuccess The callback function that will be invoked when the contact is removed successfully.
 * @param {function} onRemoveError The callback function that will be invoked when the contact cannot be removed.
 * @callback {blackberry.pim.contacts.ContactError} onRemoveError.error The {@link blackberry.pim.contacts.ContactError} object which contains the error code. Possible errors are: permission denied error (if access_pimdomain_contacts is not specified) or illegal arguments error (if mandatory parameters are missing or invalid).
 * @returns {void}
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.remove = function () {};

/**
 * Returns a new Contact object that is a deep copy of the calling object, with the id property set to null.
 * @returns {blackberry.pim.contacts.Contact}
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.clone = function () {};