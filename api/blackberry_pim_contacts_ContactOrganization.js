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
 * @toc {PIM} ContactOrganization
 * @featureID blackberry.pim.contacts
 * @class The ContactOrganization object contains the organization information of a Contact object.
 * @BB10X
 * @example
 * function createContact() {
 *     var contacts = blackberry.pim.contacts;
 *
 *     var workOrg = {
 *         "name": "Research in Motion",
 *         "department": "BlackBerry WebWorks",
 *         "title": "Developer"
 *      };
 *
 *     var newContact = contacts.create();
 *     newContact.name = {
 *         "givenName": "Homer",
 *         "familyName": "Simpson"
 *     };
 *     newContact.organizations = [workOrg];
 *
 *     newContact.save(onSaveSuccess, onSaveError);
 *
 *     alert("Work organization: " + workOrg.name);
 * }
 *
 * function onSaveSuccess(contact) {
 *     alert("Contact saved: " + contact.organizations[0].name);
 * }
 *
 * function onSaveError(error) {
 *     alert("Contact save failed: " + error.code);
 * }
 */
blackberry.pim.contacts.ContactOrganization = {};

/**
 * @type String
 * @description The name of the organization.
 * @BB10X
 */
blackberry.pim.contacts.ContactOrganization.prototype.name = "";

/**
 * @type String
 * @description The contact's department within the organization.
 * @BB10X
 */
blackberry.pim.contacts.ContactOrganization.prototype.department = "";

/**
 * @type String
 * @description The contact's title within the organization.
 * @BB10X
 */
blackberry.pim.contacts.ContactOrganization.prototype.title = "";

