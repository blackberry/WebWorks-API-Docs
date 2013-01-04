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
 * @learns {Sample - Working with Contacts} https://github.com/blackberry/BB10-WebWorks-Community-Samples/tree/master/pimcontacts Sample that demonstrates how to use the BlackBerry Contacts API [BlackBerry Community Samples on GitHub].
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
         *         name = {},
         *         workPhone = { type: ContactField.WORK, value: "123-456-789" },
         *         workEmail = { type: ContactField.WORK, value: "abc@blah.com" },
         *         homeEmail = { type: ContactField.HOME, value: "hello@me.com" },
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
         *     console.log("Found " + results.length + " contacts in total");
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
         *         findOptions = {
         *              filter: [searchFirstName, searchLastName], // filter
         *              sort: [sortOrg],                           // sort
         *              limit: 20                                  // limit
         *         };
         *     // The first 20 contacts (based on specified sort specs) with given name "John"
         *     // and family name "Smith" will be returned
         *     contacts.find(["name"], findOptions, onFindSuccess, onFindError);
         * }
         *
         * function listAllContacts() {
         *     var sort = [{
         *              "fieldName": ContactFindOptions.SORT_FIELD_FAMILY_NAME,
         *              "desc": false
         *         }, {
         *              "fieldName": ContactFindOptions.SORT_FIELD_GIVEN_NAME,
         *              "desc": true
         *         }],
         *         // no filter - return all contacts
         *         findOptions = { 
         *              // sort contacts first by family name (desc), then by given name (asc)
         *              sort: sort,  
         *              limit: 20     // limit - return up to 20 contacts
         *         };
         *     // The first 20 contacts (based on specified sort specs) will be returned
         *     contacts.find(["name"], findOptions, onFindSuccess, onFindError);
         * }
         *
         * function listAllContactsWithEmptyFindOptions() {
         *     var findOptions = {};
         *     
         *     //Will return all contacts with no particular sort order
         *     contacts.find(["name"], findOptions, onFindSuccess, onFindError);
         * }
         *
         * function findContactErrorMissingFilterValue() {
         *     var findOptions = {
         *           filter: [{
         *                 "fieldName": ContactFindOptions.SEARCH_FIELD_GIVEN_NAME,
         *                 "fieldValue": ""
         *           }, {
         *                 "fieldName": ContactFindOptions.SEARCH_FIELD_FAMILY_NAME,
         *                 "fieldValue": "Smith"
         *           }],
         *           sort: [{
         *                 "fieldName": ContactFindOptions.SORT_FIELD_FAMILY_NAME,
         *                 "desc": false
         *           }, {
         *                 "fieldName": ContactFindOptions.SORT_FIELD_GIVEN_NAME,
         *                 "desc": true
         *           }],
         *           limit: 2
         *        };
         *     // Error - illegal argument (reason: fieldValue = "" for first search field)
         *     contacts.find(["name"], findOptions, onFindSuccess, onFindError);
         * }
         *
         *
         * @BB10X
         */
        find : function () {},

         /**
         * @name blackberry.pim.contacts.getContact
         * @function
         * @description Retrieves the contact with specified contactId. This function is especially useful if you have
         * previously obtained an contact object, and you want to get a fresh copy from the backend to make sure all its properties
         * are up-to-date.
         * @param {String} contactId The identifier of the contact
         * @returns {blackberry.pim.contacts.Contact}
         * @example
         * var contacts = blackberry.pim.contacts;
         *
         * function getContactById(contactId) {
         *     var contact = contacts.getContact(contactId);
         *     if (contact) {
         *        alert("Contact id #" + contactId + " corresponds to '" + contact.name.givenName + " " + contact.name.familyName +"'.");
         *     } else {
         *        alert("There is no contact with id: " + contactId);
         *     }
         * }
         * @BB10X
         */
         getContact: function (contactId) {},

        /**
         * @name blackberry.pim.contacts.invokeContactPicker
         * @function
         * @description Invokes contact picker card.
         * @param {blackberry.pim.contacts.ContactPickerOptions} options An object of type {@link blackberry.pim.contacts.ContactPickerOptions} which describes all options available to the contact picker.
         * @param {function} onDone The callback function that will be triggered when the user is finished with the contact picker.
         * @callback {Object} onDone.data The data returned by the contact picker. The returned data varies depends on the picker mode.
         * <ol>
         * <li>If mode = {@link blackberry.pim.contacts.ContactPickerOptions.MODE_SINGLE}:<pre>
         * {
         *    // id of the selected contact
         *    contactId: "123"
         * }</pre>
         * </li>
         * <li>If mode = {@link blackberry.pim.contacts.ContactPickerOptions.MODE_MULTIPLE}:<pre>
         * {
         *    // ids of the selected contacts
         *    contactIds: ["123", "456", "789"]
         * }</pre></li>
         * <li>If mode = {@link blackberry.pim.contacts.ContactPickerOptions.MODE_ATTRIBUTE}:<pre>
         * {
         *    // id of the contact
         *    contactId: "193",
         *    // value of the selected attribute
         *    value: "1234567890",
         *    // field name of the selected attribute
         *    field: "phoneNumbers",
         *    // field type of the selected attribute
         *    type: "work"
         * }</pre>
         * </li>
         * </ol>
         * @param {function} onCancel The callback function that will be triggered if the user presses cancel in the contact picker.
         * @param {function} onInvoke The callback function that will be triggered when the contact picker is invoked.
         * @callback {blackberry.pim.contacts.ContactError} [onInvoke.error] The {@link blackberry.pim.contacts.ContactError} object which contains the error code. If the contact picker is invoked successfully, the error object will be undefined.
         * @example
         * var contacts = blackberry.pim.contacts,
         *     ContactPickerOptions = contacts.ContactPickerOptions;
         *
         * function onCancel() {
         *     alert("User pressed cancel in contact picker.");
         * }
         *
         * function onInvoke(error) {
         *     if (error) {
         *        alert("Error invoking contact picker: " + error.code);
         *     } else {
         *        alert("Contact picker invoked!");
         *     }
         * }
         *
         * function onContactSelected(data) {
         *     alert("Id of selected contact: " + data.contactId);
         * }
         *
         * function onContactsSelected(data) {
         *     alert("Total # contacts selected: " + data.contactIds.length);
         * }
         *
         * function onContactAttributeSelected(data) {
         *     alert("The selected field '" + data.field + "(" + data.type + ")' has value '" + data.value + "' belongs to contact with id: " + data.contactId);
         * }
         *
         * function invokeContactPickerSingle() {
         *     contacts.invokeContactPicker({
         *         mode: ContactPickerOptions.MODE_SINGLE,
         *         fields: ["phoneNumbers"]
         *     }, onContactSelected, onCancel, onInvoke);
         * }
         *
         * function invokeContactPickerMultiple() {
         *     contacts.invokeContactPicker({
         *         mode: ContactPickerOptions.MODE_MULTIPLE,
         *         fields: ["phoneNumbers"]
         *     }, onContactsSelected, onCancel, onInvoke);
         * }
         *
         * function invokeContactPickerAttribute() {
         *     contacts.invokeContactPicker({
         *         mode: ContactPickerOptions.MODE_ATTRIBUTE,
         *         fields: ["phoneNumbers", "emails"]
         *     }, onContactAttributeSelected, onCancel, onInvoke);
         * }
         *
         * @BB10X
         */
        invokeContactPicker: function () {},

         /**
         * @name blackberry.pim.contacts.getContactAccounts
         * @function
         * @description Retrieves all contact accounts.
         * @returns {blackberry.pim.contacts.ContactAccount[]}
         * @BB10X
         */
        getContactAccounts: function () {}
}
