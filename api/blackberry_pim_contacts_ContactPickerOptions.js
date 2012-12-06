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
 * @toc {PIM} ContactPickerOptions
 * @featureID blackberry.pim.contacts
 * @class The ContactPickerOptions object contains options available for invoking the contact picker, see {@link blackberry.pim.contacts.invokeContactPicker}().
 * @BB10X
 */
blackberry.pim.contacts.ContactPickerOptions = {};

/**
 * @type Number
 * @description Describes the mode of the contact picker. Possible values are: {@link blackberry.pim.contacts.ContactPickerOptions.MODE_SINGLE}, {@link blackberry.pim.contacts.ContactPickerOptions.MODE_MULTIPLE} or {@link blackberry.pim.contacts.ContactPickerOptions.MODE_ATTRIBUTE}. If mode is not specified, the picker will be invoked in {@link blackberry.pim.contacts.ContactPickerOptions.MODE_SINGLE}.
 * @BB10X
 */
blackberry.pim.contacts.ContactPickerOptions.prototype.mode = 0;

/**
 * @type String
 * @description A custom message to be displayed in the title of the picker.<br/>If not specified, the default title will be used.
 * </pre>
 * @BB10X
 */
blackberry.pim.contacts.ContactPickerOptions.prototype.title = "";

/**
 * @type String
 * @description A custom label to be displayed in the confirmation button of the picker.<br/>If not specified, the default label will be used. Note that the confirmation button is only displayed if the picker is invoked in {@link blackberry.pim.contacts.ContactPickerOptions.MODE_MULTIPLE}.
 * @BB10X
 */
blackberry.pim.contacts.ContactPickerOptions.prototype.confirmButtonLabel = "";

/**
 * @type String[]
 * @description An array of field names (e.g. phoneNumbers, emails etc.) that should be used for filtering the contacts in the picker. (The names correspond to the field names in the {@link blackberry.pim.contacts.Contact} object.) A contact must have one or more of the attributes in this set in order to be displayed. If mode is {@link blackberry.pim.contacts.ContactPickerOptions.MODE_MULTIPLE}, this would determine the attributes to be shown in the picker. Fields must be specified in order for the picker to be invoked in {@link blackberry.pim.contacts.ContactPickerOptions.MODE_MULTIPLE}.
 * @BB10X
 */
blackberry.pim.contacts.ContactPickerOptions.prototype.fields = [];

/**
 * @constant
 * @type Number
 * @description This mode allows the user to select a single contact.<br/>The selection will complete as soon as a contact is selected.
 * @BB10X
 */
blackberry.pim.contacts.ContactPickerOptions.MODE_SINGLE = 0;

/**
 * @constant
 * @type Number
 * @description This mode allows the selection of multiple contacts.<br/>The user can select multiple contacts and the selection completes when the user confirms the selection using the confirmation button. 
 * @BB10X
 */
blackberry.pim.contacts.ContactPickerOptions.MODE_MULTIPLE = 1;

/**
 * @constant
 * @type Number
 * @description This mode allows the selection of an attribute of a contact.<br/>For example, a user can select a single phone number or an email address.
 * @BB10X
 */
blackberry.pim.contacts.ContactPickerOptions.MODE_ATTRIBUTE = 2;
