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
 * @toc {PIM} ContactFindOptions
 * @featureID blackberry.pim.contacts
 * @class The ContactFindOptions object contains fields that filter and sort the results of {@link blackberry.pim.contacts.find}().
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions = {};

/**
 * @type Object[]
 * @description An array of object literals that specifies search criteria to filter the results.  The object should be in the following form: <br><pre>
 * {
 *     fieldName: &lt;The field being searched, one of the SORT_FIELD_* constants&gt;,
 *     fieldValue: &lt;value of the field&gt;
 * }
 * </pre>
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.prototype.filter = [];

/**
 * @type Object[]
 * @description An array of object literals that specifies the order of the results.  The object should be in the following form: <br><pre>
 * {
 *     fieldName: &lt;The field being searched, one of the SORT_FIELD_* constants&gt;,
 *     desc: true to sort results in descending order (descending if true).
 * }
 * </pre>
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.prototype.sort = [];

/**
 * @type Number
 * @description The maximum number of contact results returned. If limit is set to -1, all matching contacts will be returned.
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.prototype.limit = "";

/**
 * @type Boolean
 * @description If set to true, only Contacts marked as favorite would be included in search results.
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.prototype.favorite = false;

/**
 * @constant
 * @type Number
 * @description Used by specifying the search filter
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SEARCH_FIELD_GIVEN_NAME = 0;

/**
 * @constant
 * @type Number
 * @description Used by specifying the search filter
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SEARCH_FIELD_FAMILY_NAME = 1;

/**
 * @constant
 * @type Number
 * @description Used by specifying the search filter
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SEARCH_FIELD_ORGANIZATION_NAME = 2;

/**
 * @constant
 * @type Number
 * @description Used by specifying the search filter
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SEARCH_FIELD_PHONE = 3;

/**
 * @constant
 * @type Number
 * @description Used by specifying the search filter
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SEARCH_FIELD_EMAIL = 4;

/**
 * @constant
 * @type Number
 * @description Used by specifying the search filter
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SEARCH_FIELD_BBMPIN = 5;

/**
 * @constant
 * @type Number
 * @description Used by specifying the search filter
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SEARCH_FIELD_LINKEDIN = 6;

/**
 * @constant
 * @type Number
 * @description Used by specifying the search filter
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SEARCH_FIELD_TWITTER = 7;

/**
 * @constant
 * @type Number
 * @description Used by specifying the search filter
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SEARCH_FIELD_VIDEO_CHAT = 8;

/**
 * @constant
 * @type Number
 * @description Used by specifying the sort field
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SORT_FIELD_GIVEN_NAME = 0;

/**
 * @constant
 * @type Number
 * @description Used by specifying the sort field
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SORT_FIELD_FAMILY_NAME = 1;

/**
 * @constant
 * @type Number
 * @description Used by specifying the sort field
 * @BB10X
 */
blackberry.pim.contacts.ContactFindOptions.SORT_FIELD_ORGANIZATION_NAME = 2;

