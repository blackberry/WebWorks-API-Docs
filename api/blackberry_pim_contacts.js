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
 * @namespace The contacts object provides functions for creating and finding contacts.
 * @toc {PIM} Contacts
 * @featureID blackberry.pim.contacts
 * @permission access_pimdomain_contacts Permits your app to access contacts.
 */
blackberry.pim.contacts = {

        /**
         * @name blackberry.pim.contacts.create
         * @function
         * @description Returns a new Contact object. This method does not persist the Contact object to the device contacts database. To persist the Contact object to the device, invoke the Contact.save method.
         * @param {Object} [properties] Optional object literal that specifies the field values for the Contact object. The object should be in the following form (with any number of properties): <br><pre>
         * {
         *     displayName: &lt;display name - String&gt;,
         *     name: &lt;name - ContactName&gt;,
         *     nickname: &lt;nickname - String&gt;,
         *     phoneNumbers: &lt;phone numbers - ContactField[]&gt;,
         *     emails: &lt;email addresses - ContactField[]&gt;,
         *     addresses: &lt;addresses - ContactAddress[]&gt;,
         *     ims: &lt;IM addresses - ContactField[]&gt;,
         *     organizations: &lt;organization - ContactOrganization[]&gt;,
         *     birthday: &lt;birthday - Date&gt;,
         *     note: &lt;note - String&gt;,
         *     photos: &lt;photos - ContactField[]&gt;,
         *     categories: &lt;user defined categories - ContactField[]&gt;,
         *     urls: &lt;web pages - ContactField[]&gt;
         * }
         * </pre>
         * @returns {blackberry.pim.contacts.Contact}
         * @example
         * function onSaveSuccess(contact) {
         *     console.log("Contact with id=" + contact.id + " is saved!");
         * }
         *
         * function onSaveError(error) {
         *     console.log("Error saving contact: " + error.code);
         * }
         *
         * function createContact() {
         *     var contacts = blackberry.pim.contacts,
         *         ContactField = contacts.ContactField,
         *         name = new contacts.ContactName(),
         *         workPhone = new ContactField(ContactField.WORK, "123-456-789"),
         *         workEmail = new ContactField(ContactField.WORK, "abc@blah.com"),
         *         homeEmail = new ContactField(ContactField.HOME, "hello@me.com"),
         *         contact;
         *         
         *     name.familyName = "Smith";
         *     name.givenName = "Joe";
         *     contact = contacts.create({
         *          "displayName": "Batman",
         *          "name": name,
         *          "phoneNumbers": [workPhone],
         *          "emails": [workEmail, homeEmail]
         *     });
         *     contact.save(onSaveSuccess, onSaveError);
         * }
         * @BB10X
         */
        create : function () {},

        /**
         * @name blackberry.pim.contacts.find
         * @function
         * @description Queries the device contacts database. The search results are passed to the onFindSuccess callback function specified by the onFindSuccess parameter.
         * @param {String[]} contactFields A String array of contact fields to be used as search qualifier. Only these fields will have values in the resulting Contact objects.
         * @param {blackberry.pim.contacts.ContactFindOptions} findOptions Options to be applied to the search.
         * @param {function} onFindSuccess Success callback function that is invoked with the contacts returned from the contacts database.
         * @callback {blackberry.pim.contacts.Contact[]} onFindSuccess.contacts The array of Contact objects from the search.
         * @param {function} [onFindError] Optional error callback function. Invoked when error occurs. Possible errors are: permission denied error (if access_pimdomain_contacts is not specified) or illegal arguments error (if mandatory parameters are missing or invalid).
         * @callback {blackberry.pim.contacts.ContactError} onFindError.error The {@link blackberry.pim.contacts.ContactError} object which contains the error code.
         * @example
         * var contacts = blackberry.pim.contacts,
         *     ContactFindOptions = contacts.ContactFindOptions;
         *
         * function onFindSuccess(results) {
         *     console.log("Found " + results.length + " John Smith in total");
         * }
         *
         * function onFindError(error) {
         *     console.log("Error: " + error.code);
         * }
         *
         * function searchContactsByName() {
         *     var searchFirstName = {
         *              "fieldName" : ContactFindOptions.SEARCH_FIELD_GIVEN_NAME,
         *              "fieldValue" : "John"
         *         },
         *         searchLastName = {
         *              "fieldName" : ContactFindOptions.SEARCH_FIELD_FAMILY_NAME,
         *              "fieldValue" : "Smith"
         *         },
         *         sortOrg = {
         *              "fieldName" : ContactFindOptions.SORT_FIELD_ORGANIZATION_NAME,
         *              "desc" : false
         *         },
         *         findOptions = new ContactFindOptions(
         *             [searchFirstName, searchLastName], // filter
         *             [sortOrg],                         // sort
         *             20                                 // limit
         *         );
         *     // The first 20 contacts (based on specified sort specs) with given name "John"
         *     // and family name "Smith" will be returned
         *     contacts.find(["name"], findOptions, onFindSuccess, onFindError);
         * }
         *
         * function listAllContacts() {
         *     var sort = [{
         *             "fieldName": ContactFindOptions.SORT_FIELD_FAMILY_NAME,
         *             "desc": false
         *         }, {
         *             "fieldName": ContactFindOptions.SORT_FIELD_GIVEN_NAME,
         *             "desc": true
         *         }],
         *         findOptions = new ContactFindOptions(
         *             null,  // null filter - return all contacts
         *             sort,  // sort contacts first by family name (desc), then by given name (asc)
         *             20     // limit - return up to 20 contacts
         *         );
         *     // The first 20 contacts (based on specified sort specs) will be returned
         *     contacts.find(["name"], findOptions, onFindSuccess, onFindError);
         * }
         *
         * function findContactErrorMissingFilterValue() {
         *     var findOptions = new ContactFindOptions([{
         *             "fieldName": ContactFindOptions.SEARCH_FIELD_GIVEN_NAME,
         *             "fieldValue": ""
         *         }, {
         *             "fieldName": ContactFindOptions.SEARCH_FIELD_FAMILY_NAME,
         *             "fieldValue": "Smith"
         *         }], [{
         *             "fieldName": ContactFindOptions.SORT_FIELD_FAMILY_NAME,
         *             "desc": false
         *         }, {
         *             "fieldName": ContactFindOptions.SORT_FIELD_GIVEN_NAME,
         *             "desc": true
         *         }],
         *         2);
         *     // Error - illegal argument (reason: fieldValue = "" for first search field)
         *     contacts.find(["name"], findOptions, onFindSuccess, onFindError);
         * }
         *
         * function findContactErrorMissingFilter() {
         *     var findOptions = new ContactFindOptions([{
         *             "fieldName": ContactFindOptions.SORT_FIELD_FAMILY_NAME,
         *             "desc": false
         *         }, {
         *             "fieldName": ContactFindOptions.SORT_FIELD_GIVEN_NAME,
         *             "desc": true
         *         }], // sort
         *         2); // limit
         *     // Error - illegal argument (reason: filter omitted, but the params followed by it are not)
         *     // Once an optional param is omitted, all params followed by it should also be omitted
         *     contacts.find(["name"], findOptions, onFindSuccess, onFindError);
         * }
         * @BB10X
         */
        find : function () {}
}
