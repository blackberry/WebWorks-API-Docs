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
 * @class The <code>Attendee</code> object represents an attendee of a calendar event item.
 * @toc {PIM} Attendee
 * @featureID blackberry.pim.calendar
 */
blackberry.pim.calendar.Attendee = {};

/**
 * @description The attendee's email address.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.Attendee.prototype.email = "";

/**
 * @description The attendee's name.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.Attendee.prototype.name = "";

/**
 * @description The attendee's type: {@link blackberry.pim.calendar.Attendee.TYPE_HOST} or {@link blackberry.pim.calendar.Attendee.TYPE_PARTICIPANT}
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.prototype.type = 0;

/**
 * @description The attendee's role: {@link blackberry.pim.calendar.Attendee.ROLE_CHAIR}, {@link blackberry.pim.calendar.Attendee.ROLE_REQUIRED_PARTICIPANT}, {@link blackberry.pim.calendar.Attendee.ROLE_OPTIONAL_PARTICIPANT} or {@link blackberry.pim.calendar.Attendee.ROLE_NON_PARTICIPANT}
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.prototype.role = 0;

/**
 * @description Acceptance status of the attendee: {@link blackberry.pim.calendar.Attendee.STATUS_UNKNOWN}, {@link blackberry.pim.calendar.Attendee.STATUS_TENTATIVE}, {@link blackberry.pim.calendar.Attendee.STATUS_ACCEPTED}, {@link blackberry.pim.calendar.Attendee.STATUS_DECLINED}, or {@link blackberry.pim.calendar.Attendee.STATUS_NOT_RESPONDED}
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.prototype.status = 0;

/**
 * @description True when the attendee represents the user.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.Attendee.prototype.owner = false;

/**
 * @description Identifier for the event in which this attendee participates.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.Attendee.prototype.eventId = "";

/**
 * @description Identifier for the contact that the attendee object represents.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.Attendee.prototype.contactId = "";

/**
 * @description Indicates the attendee is hosting the meeting.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.TYPE_HOST = 1;

/**
 * @description Indicates the attendee is a participant in the meeting.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.TYPE_PARTICIPANT = 1;

/**
 * @description Indicates that the attendee is the meeting's organizer.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.ROLE_CHAIR = 1;

/**
 * @description Indicates that the attendee is a required participant.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.ROLE_REQUIRED_PARTICIPANT = 2;

/**
 * @description Used on attendees whose participation is optional.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.ROLE_OPTIONAL_PARTICIPANT = 3;

/**
 * @description Indicates that an attendee is listed for information purposes only.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.ROLE_NON_PARTICIPANT = 4;

/**
 * @description Unknown acceptance status.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.STATUS_UNKNOWN = 0;

/**
 * @description Indicates the attendee will attempt to be in the meeting.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.STATUS_TENTATIVE = 2;

/**
 * @description Indicates the attendee has agreed to participate in the meeting.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.STATUS_ACCEPTED = 3;

/**
 * @description Used for an attendee that refused to participate in an event.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.STATUS_DECLINED = 4;

/**
 * @description Used when an attendee has not yet responded to the meeting request.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.Attendee.STATUS_NOT_RESPONDED = 4;