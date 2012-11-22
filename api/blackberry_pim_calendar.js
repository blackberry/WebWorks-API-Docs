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
 * @namespace The <code>Calendar</code> object provides functions for creating and finding contacts.
 * @toc {PIM} Calendar
 * @featureID blackberry.pim.calendar
 * @permission access_pimdomain_calendars Permits your app to access calendar.
 */
blackberry.pim.calendar = {
    /**
     * @name blackberry.pim.calendar.createEvent
     * @function
     * @description Returns a new {@link blackberry.pim.calendar.CalendarEvent} object. This method does not persist the CalendarEvent object to the device. To persist the CalendarEvent object to the device, invoke {@link blackberry.pim.calendar.CalendarEvent#save}().
     * @param {Object} properties Optional object literal that specifies the field values for the CalendarEvent object. The object should be in the following form (with any number of properties):
     * @param {blackberry.pim.calendar.CalendarFolder} [folder]  Optional CalendarFolder object that contains the event. If no folder is specified, the event will be created in the default calendar.
     * @returns {blackberry.pim.calendar.CalendarEvent}
     * @example
     * var evt,
     *     calendar = blackberry.pim.calendar;
     *
     * function onSaveSuccess(created) {
     *    // set evt to the object returned in save success callback, which
     *    // contains the persisted event id
     *    evt = created;
     *    alert("Event saved to device: " + evt.id);
     * }
     *
     * function onSaveError(error) {
     *    alert("Error saving event to device: " + error.code);
     * }
     *
     * function createEventInDefaultCalendarFolder(summary, location) {
     *    evt = calendar.createEvent({
     *        "summary": summary,
     *        "location": location,
     *        "start": new Date("Jan 01, 2015, 12:00"),
     *        "end": new Date("Jan 01, 2015, 12:30"),
     *        // if timezone is specified explicitly, then the times will be
     *        // for that particular timezone; otherwise, the times will be
     *        // for the current device timezone
     *        "timezone": "America/New_York"
     *    });
     *    evt.save(onSaveSuccess, onSaveError);
     * }
     * @BB10X
     */
    createEvent: function (properties, folder) {},

    /**
     * @name blackberry.pim.calendar.findEvents
     * @function
     * @description Find calendar event(s) in the calendar based on some criteria. This function can be used to look up events based on start/end time, location, or summary.
     * @param {blackberry.pim.calendar.CalendarFindOptions} findOptions  Options to be applied to the search.
     * @param {function} onFindSuccess Success callback function that is invoked with the events returned from the calendar.
     * @callback {blackberry.pim.calendar.CalendarEvent[]} onFindSuccess.events The array of CalendarEvent objects from the search.
     * @param {function} [onFindError] Optional error callback function. Invoked when error occurs.
     * @callback {blackberry.pim.calendar.CalendarError} onFindError.error The CalendarError object which contains the error code.
     * @returns {void}
     * @example
     * var calendar = blackberry.pim.calendar,
     *     CalendarFindOptions = calendar.CalendarFindOptions;
     *
     * function onFindSuccess(events) {
     *    alert("Found " + events.length + " events!");
     *    events.forEach(function (evt) {
     *       alert("Event summary: " + evt.summary);
     *       alert("Event location: " + evt.location);
     *    });
     * }
     *
     * function onFindError(error) {
     *    alert("Error: " + error.code);
     * }
     *
     * // Find any events by keyword in any of the following fields:
     * // -location
     * // -summary
     * // -attendees' names or emails
     * function findEventsByKeyword(keyword) {
     *    var filter = { "substring" : keyword };
     *    var findOptions = {
     *        "filter" : filter,
     *        "detail" : CalendarFindOptions.DETAIL_FULL
     *    };
     *
     *    // Find all events that has the specified keyword in summary,
     *    // location or attendees' name/email
     *    calendar.findEvents(findOptions, onFindSuccess, onFindError);
     * }
     *
     * function findEventsSortSummaryDescending(keyword) {
     *    var filter = { "substring" : keyword };
     *    var findOptions = {
     *        "filter" : filter,
     *        "sort": [{
     *           "fieldName": CalendarFindOptions.SORT_FIELD_SUMMARY,
     *           "desc": true
     *        }],
     *        "detail" : CalendarFindOptions.DETAIL_FULL
     *    };
     *
     *    calendar.findEvents(findOptions, onFindSuccess, onFindError);
     * }
     *
     * // Only events in the specified folder will be returned in search results
     * function findEventsInCalendarFolder(keyword, folder, limit) {
     *    var filter = {
     *        "substring": keyword,
     *        "folders": [folder]
     *    };
     *    var findOptions = {
     *        "filter": filter,
     *        "sort": [{
     *           "fieldName": CalendarFindOptions.SORT_FIELD_SUMMARY,
     *           "desc": false
     *        }],
     *        "detail": CalendarFindOptions.DETAIL_AGENDA,
     *        "limit": limit
     *    };
     *
     *    calendar.findEvents(findOptions, onFindSuccess, onFindError);
     * }
     *
     * // Filter is optional in search
     * function listAllEvents(limit) {
     *    var findOptions = {
     *        "sort": [{
     *           "fieldName": CalendarFindOptions.SORT_FIELD_SUMMARY,
     *           "desc": false
     *        }],
     *        "detail": CalendarFindOptions.DETAIL_AGENDA,
     *        "limit": limit
     *    };
     *
     *    calendar.findEvents(findOptions, onFindSuccess, onFindError);
     * }
     *
     * @BB10X
     */
    findEvents: function (findOptions, onFindSuccess, onFindError) {},

    /**
     * @name blackberry.pim.calendar.getDefaultCalendarFolder
     * @function
     * @description Retrieves the default calendar folder.
     * @returns {blackberry.pim.calendar.CalendarFolder}
     * @BB10X
     */
    getDefaultCalendarFolder: function () {}

    /**
     * @name blackberry.pim.calendar.getCalendarAccounts
     * @function
     * @description Retrieves all calendar accounts.
     * @returns {blackberry.pim.calendar.CalendarAccount[]}
     * @BB10X
     */
    getCalendarAccounts: function () {},

   /**
     * @name blackberry.pim.calendar.getDefaultCalendarAccount
     * @function
     * @description Retrieves the default calendar account.
     * @returns {blackberry.pim.calendar.CalendarAccount}
     * @BB10X
     */
    getDefaultCalendarAccount: function () {}

    /**
     * @name blackberry.pim.calendar.getEvent
     * @function
     * @description Retrieves the event with specified eventId and folder. This function is especially useful if you have
     * previously obtained an event object, and you want to get a fresh copy from the backend to make sure all its properties
     * are up-to-date.
     * @param {String} eventId The identifier of the event
     * @param {blackberry.pim.calendar.Folder} folder the folder that contains this event
     * @returns {blackberry.pim.calendar.CalendarEvent}
     * @BB10X
     */
    getEvent: function (eventId, folder) {}
};
