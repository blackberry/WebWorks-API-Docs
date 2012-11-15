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
 * @class The <code>CalendarEvent</code> object represents an event in the device calendar. It can be obtained by calling {@link blackberry.pim.calendar.createEvent}() or {@link blackberry.pim.calendar.findEvents}()
 * @toc {PIM} CalendarEvent
 * @featureID blackberry.pim.calendar
 * @permission access_pimdomain_calendars Permits your app to access calendar.
 */
blackberry.pim.calendar.CalendarEvent = {};

/**
 * @description An identifier for the event.
 * @readOnly
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.id = "";

/**
 * @description A description of the event.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.description = "";

/**
 * @description A plain text description of the location of the event.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.location = "";

/**
 * @description A summary of the event.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.summary = "";

/**
 * @description The start date and time of the event.
 * @type Date
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.start = null;

/**
 * @description The end date and time of the event.
 * @type Date
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.end = null;

/**
 * @description An indication of the user's status of the event.
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.status = 0;

/**
 * @description An indication of the display status to set for the event. Its value can be one of: {@link blackberry.pim.calendar.CalendarEvent.TRANSPARENCY_FREE},
 * {@link blackberry.pim.calendar.CalendarEvent.TRANSPARENCY_TENTATIVE}, {@link blackberry.pim.calendar.CalendarEvent.TRANSPARENCY_BUSY},
 * or {@link blackberry.pim.calendar.CalendarEvent.TRANSPARENCY_OUT_OF_OFFICE}
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.transparency = 0;

/**
 * @description The recurrence or repetition rule for this event. This is used for creating a recurring event.
 * @type blackberry.pim.calendar.CalendarRepeatRule
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.recurrence = null;

/**
 * @description A reminder for the event, specified as the number of minutes between the alert and the start time.
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.reminder = 0;

/**
 * @description The list of attendees in the event.
 * @type blackberry.pim.calendar.Attendee[]
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.attendees = null;

/**
 * @description True if the event is an all-day event.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.allDay = false;

/**
 * @description True if the event represents a birthday.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.birthday = false;

/**
 * @description Sensitivity level of the event: {@link blackberry.pim.calendar.CalendarEvent.SENSITIVITY_NORMAL}, {@link blackberry.pim.calendar.CalendarEvent.SENSITIVITY_PERSONAL}, {@link blackberry.pim.calendar.CalendarEvent.SENSITIVITY_PRIVATE} or {@link blackberry.pim.calendar.CalendarEvent.SENSITIVITY_CONFIDENTIAL}
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.sensitivity = 0;

/**
 * @description The CalendarFolder that contains this event.
 * @readOnly
 * @type blackberry.pim.calendar.CalendarFolder
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.folder = null;

/**
 * @description This attribute is only meaningful in events that are recurrence exceptions.<br>
 * A recurrence exception is a differing instance of a recurring event. An example:
 * a daily meeting at 2:00 PM that is rescheduled to 3:00 PM on a given day. This
 * rescheduled occurrence is represented as an exception. It is stored in the
 * database as a separate event and it references the original recurring event by
 * means of the parent id.
 * @readOnly
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.parentId = "";

/**
 * @description This attribute is only meaningful in events that are recurrence exceptions.<br>
 * A recurrence exception is a differing instance of a recurring event. The
 * originalStartTime property stores the time and date of the recurrence instance that
 * is replaced by this event.  For example: a daily meeting at 2:00 PM that is rescheduled to
 * 3:00 PM on a given day would have an originalStartTime of 2:00 PM.
 * @type Date
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.originalStartTime = "";

/**
 * @description Name of the timezone where the event was created. To get the current device timezone, see {@link blackberry.system.getCurrentTimezone}(). To get the list of all possible timezones, see {@link blackberry.system.getTimezones}()
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.timezone = "";

/**
 * @description A URL associated with the event.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.url = "";

/**
 * Saves a new event to the calendar, or updates an existing event if an event with the same id already exists.
 * @param {function} onSaveSuccess The callback function that will be invoked when the contact is saved successfully.
 * @callback {blackberry.pim.calendar.CalendarEvent} onSaveSuccess.event The {@link blackberry.pim.calendar.CalendarEvent} object. You should save this object for further operations on the event and use it to replace the original event object prior to save.
 * @param {function} onSaveError The callback function that will be invoked when the event cannot be saved.
 * @callback {blackberry.pim.calendar.CalendarError} onSaveError.error The {@link blackberry.pim.calendar.CalendarError} object which contains the error code. Possible errors:
 * <ul>
 *    <li>{@link blackberry.pim.calendar.CalendarEvent#start} or {@link blackberry.pim.calendar.CalendarEvent#end} date time is missing, result in {@link blackberry.pim.calendar.CalendarError.INVALID_ARGUMENT_ERROR}</li>
 *    <li>end date time is before start date time, result in {@link blackberry.pim.calendar.CalendarError.INVALID_ARGUMENT_ERROR}</li>
 *    <li>{@link blackberry.pim.calendar.CalendarRepeatRule#frequency} is not set correctly for recurring event, result in {@link blackberry.pim.calendar.CalendarError.INVALID_ARGUMENT_ERROR}</li>
 *    <li>trying to save the event to a calendar folder which the app does not have access to (e.g.
 *        if the default calendar folder is set to an enterprise account, but the app is not running
 *        in work perimeter), result in {@link blackberry.pim.calendar.CalendarError.PERMISSION_DENIED_ERROR}</li>
 *    <li>other errors in the backend, result in {@link blackberry.pim.calendar.CalendarError.UNKNOWN_ERROR}</li>
 * </ul>
 * @returns {void}
 * @BB10X
 * @example
 * var calendar = blackberry.pim.calendar,
 *     // omitting optional folder parameter in createEvent(), calling save() will
 *     // save event to default calendar folder
 *     evt = calendar.createEvent({
 *         "summary": "Picnic",
 *         "location": "South Park",
 *         "start": new Date("Jan 1, 2013, 13:00"),
 *         "end": new Date("Jan 1, 2013, 16:00"),
 *         "transparency": calendar.CalendarEvent.SENSITIVITY_PERSONAL,
 *         "reminder": 2 * 24 * 60 // 2 days before start
 *     });
 *
 * // save event to default calendar folder
 * evt.save(function (saved) {
 *     evt = saved; // replace original evt object
 *     alert("Event saved: " + evt.id);
 * }, function (error) {
 *     alert("Error saving event, error code: " + error.code);
 * });
 *
 * // edit event description
 * evt.description = "This is going to be fun!";
 * // save changes to event
 * evt.save(function (saved) {
 *     evt = saved; // replace original evt object
 *     alert("Event description: " + evt.description);
 * }, function (error) {
 *     alert("Error saving event, error code: " + error.code);
 * });
 */
blackberry.pim.calendar.CalendarEvent.prototype.save = function () {};

/**
 * Removes the event from the calendar. An error callback is called with a {@link blackberry.pim.calendar.CalendarError} object if the removal is unsuccessful.
 * @param {function} onRemoveSuccess The callback function that will be invoked when the event is removed successfully.
 * @param {function} onRemoveError The callback function that will be invoked when the event cannot be removed.
 * @callback {blackberry.pim.calendar.CalendarError} onRemoveError.error The {@link blackberry.pim.calendar.CalendarError} object which contains the error code. A possible error is to remove an event before it was saved, this would result in {@link blackberry.pim.calendar.CalendarError.INVALID_ARGUMENT_ERROR}.
 * @param {Boolean} [removeAll] Optional flag that only applies to recurring events. If removeAll is set to true,
 * all occurrences of the recurring event will be removed; otherwise, only the single occurrence represented by
 * this event object will be removed. This parameter defaults to true if not specified.
 * @returns {void}
 * @BB10X
 * @example
 * var calendar = blackberry.pim.calendar,
 *     evt;
 *
 * function testRemove() {
 *    // omitting optional folder parameter in createEvent(), calling save()
 *    // will save event to default calendar folder
 *    evt = calendar.createEvent({
 *        "summary": "Picnic",
 *        "location": "South Park",
 *        "start": new Date("Jan 1, 2013, 13:00"),
 *        "end": new Date("Jan 1, 2013, 16:00"),
 *        "transparency": calendar.CalendarEvent.SENSITIVITY_PERSONAL,
 *        "reminder": 2 * 24 * 60 // 2 days before start
 *    });
 *
 *    // will result in error, since the event has not been saved to the
 *    // calendar folder yet
 *    evt.remove(onSuccess, onError);
 *
 *    // save event to default calendar folder
 *    evt.save(function (saved) {
 *       evt = saved; // replace original evt object
 *       alert("Event saved: " + evt.id);
 *    }, function (error) {
 *       alert("Error saving event, error code: " + error.code);
 *    });
 *
 *    // this will remove the event from the calendar folder
 *    setTimeout("evt.remove(onSuccess, onError)", 1000);
 * }
 *
 * function onSuccess() {
 *    alert("Event removed!");
 * }
 *
 * function onError(error) {
 *    alert("Failed to remove event, error code: " + error.code);
 * }
 *
 * function removeSingleOccurrence(keyword, dateToRemove) {
 *    // find all instances of the recurring event
 *    calendar.findEvents({
 *       "filter": {
 *           "substring": keyword,
 *           "expandRecurring": true
 *       }
 *    }, function (events) {
 *       alert("Found " + events.length + " events that matches filter!");
 *       events.forEach(function (evt) {
 *          if (evt.start.toISOString() === dateToRemove.toISOString()) {
 *             evt.remove(function () {
 *                alert(dateToRemove + " instance removed successfully!");
 *             }, function (error) {
 *                alert(dateToRemove + " instance not removed, error code: " + error.code);
 *             },
 *             false); // pass false to remove only this single occurrence
 *          }
 *       });
 *    }, function (error) {
 *       alert("Failed to find events, error code: " + error.code);
 *    });
 * }
 */
blackberry.pim.calendar.CalendarEvent.prototype.remove = function () {};

/**
 * Creates a new CalendarEvent object for a recurrence exception of the calling event. This is a deep copy of the object,
 * with the id property set to null, the parentId property set to the id of the calling event, and the originalStartTime
 * property set to the parameter value.
 * @param {Date} originalStartTime The date of the original recurrence instance that this event replaces. This date will be
 * added to the calling event's exceptionDates array within the recurrence field.
 * @returns {blackberry.pim.calendar.CalendarEvent}
 * @example
 * var evt,
 *     exceptionEvt,
 *     calendar = blackberry.pim.calendar,
 *     CalendarRepeatRule = calendar.CalendarRepeatRule;
 *
 * function onExceptionSaveSuccess(exceptionEvtCreated) {
 *    // Exception event created successcully, now the recurring event
 *    // has the following occurences:
 *    // Jan 22, 2013, 12:00
 *    // Jan 25, 2013, 12:00
 *    // Jan 29, 2013, 12:00
 *    // Feb  1, 2013, 12:00
 *    // Feb  5, 2013, 12:00
 *    // Feb  8, 2013, 12:00
 *    // Feb 12, 2013, 12:00
 *    // Feb 16, 2013, 12:00
 *    exceptionEvt = exceptionEvtCreated;
 *    // exception event has a different id than the original event
 *    alert("Exception event created successfully: " + exceptionEvt.id);
 *
 *    // get a fresh copy of the recurring event which contains the
 *    // updated recurrence
 *    evt = calendar.getEvent(evt.id, evt.folder);
 * }
 *
 * function onSaveSuccess(created) {
 *    // Recurring event created successcully, with the following occurences:
 *    // Jan 22, 2013, 12:00
 *    // Jan 25, 2013, 12:00
 *    // Jan 29, 2013, 12:00
 *    // Feb  1, 2013, 12:00
 *    // Feb  5, 2013, 12:00
 *    // Feb  8, 2013, 12:00
 *    // Feb 12, 2013, 12:00
 *    // Feb 15, 2013, 12:00
 *    evt = created;
 *
 *    // The following code replaces the last occurence with an exception
 *    // occurence on the day after
 *    exceptionEvt = evt.createExceptionEvent(new Date("Feb 15, 2013, 12:00"));
 *    exceptionEvt.start = new Date("Feb 16, 2013, 12:00");
 *    exceptionEvt.end = new Date("Feb 16, 2013, 12:30");
 *    exceptionEvt.save(onExceptionSaveSuccess, onSaveError);
 * }
 *
 * function onSaveError(error) {
 *    alert("Error saving event to device: " + error.code);
 * }
 *
 * function createRecurringEvent() {
 *    var start = new Date("Jan 21, 2013, 12:00");
 *    var end = new Date("Jan 21, 2013, 12:30");
 *    var location = "some location";
 *    var summary = "My recurring event";
 *    var repeatRule = new CalendarRepeatRule({
 *       "frequency": CalendarRepeatRule.FREQUENCY_WEEKLY,
 *       "expires": new Date("Feb 18, 2013, 12:00"),
 *       "dayInWeek": CalendarRepeatRule.TUESDAY | CalendarRepeatRule.FRIDAY
 *    });
 *    evt = calendar.createEvent({
 *       "summary": summary,
 *       "location": location,
 *       "start": start,
 *       "end": end,
 *       "recurrence": repeatRule
 *    });
 *    evt.save(onSaveSuccess, onSaveError);
 * }
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.createExceptionEvent = function () {};

/**
 * @description Sensitivity level for unrestricted events.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.SENSITIVITY_NORMAL = 0;

/**
 * @description Sensitivity level for personal events.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.SENSITIVITY_PERSONAL = 1;

/**
 * @description Sensitivity level for private events.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.SENSITIVITY_PRIVATE = 2;

/**
 * @description Sensitivity level for confidential events.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.SENSITIVITY_CONFIDENTIAL = 3;

/**
 * @description Transparency constant. Used to inform that the event represents free time (the event's owner is
 * available).
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.TRANSPARENCY_FREE = 0;

/**
 * @description Transparency constant. Used to inform that an event may or may not happen (the owner may be available).
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.TRANSPARENCY_TENTATIVE = 1;

/**
 * @description Transparency constant. Used to inform that an event is confirmed (the owner is busy).
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.TRANSPARENCY_BUSY = 2;

/**
 * @description Transparency constant. Used to inform that the event owner is out of office.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.TRANSPARENCY_OUT_OF_OFFICE = 3;

