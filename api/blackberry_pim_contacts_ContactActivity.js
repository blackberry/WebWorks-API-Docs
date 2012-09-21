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
 * @toc {PIM} ContactActivity
 * @featureID blackberry.pim.contacts
 * @class The ContactActivity object is an activity that is linked to the contact by either an email, phone call, or calendar event.
 * @BB10X
 */
blackberry.pim.contacts.ContactActivity = {};

/**
 * @type Boolean
 * @readOnly
 * @description If True, the direction of the activity is incoming, and outgoing otherwise.
 * @BB10X
 */
blackberry.pim.contacts.ContactActivity.prototype.direction = "";

/**
 * @type String
 * @readOnly
 * @description The MIME Type value of the operation in question.
 * @BB10X
 */
blackberry.pim.contacts.ContactActivity.prototype.mimeType = "";

/**
 * @type String
 * @readOnly
 * @description This is the description of the activity. For messages, this would be the subject.
 * For call log, this would be the phone number.
 * @BB10X
 */
blackberry.pim.contacts.ContactActivity.prototype.description = "";

/**
 * @type Date
 * @readOnly
 * @description The timestamp associated with the contact activity.
 * @BB10X
 */
blackberry.pim.contacts.ContactActivity.prototype.timestamp = "";

/**
 * @constant
 * @type Boolean
 * @description The direction of the activity is incoming.
 * @BB10X
 */
blackberry.pim.contacts.ContactActivity.INCOMING = true;

/**
 * @constant
 * @type Boolean
 * @description The direction of the activity is outgoing.
 * @BB10X
 */
blackberry.pim.contacts.ContactActivity.OUTGOING = false;