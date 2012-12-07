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
 * @class The ContactAccount object contains information of a contact account.
 * @toc {PIM} ContactAccount
 * @featureID blackberry.pim.contacts
 * @BB10X
 */
blackberry.pim.contacts.ContactAccount = {};

/**
 * @description Contains the id of this contact account.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactAccount.prototype.id = "";

/**
 * @description Name of the contact account.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactAccount.prototype.name = "";

/**
 * @description True when this contact account is an enterprise account.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.contacts.ContactAccount.prototype.enterprise = "";
