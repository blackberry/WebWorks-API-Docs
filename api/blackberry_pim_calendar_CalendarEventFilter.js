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
 * @class The <code>CalenderEventFilter</code> object captures the searchable parameters for finding calendar event items.
 * @toc {PIM} CalendarEventFilter
 * @featureID blackberry.pim.calendar
 */
blackberry.pim.calendar.CalenderEventFilter = {};

/**
 * @description Start of the query's time range. All events that enter the range should be returned.
 * @type Date
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.start = null;

/**
 * @description End of the query's time range. Any event that crosses the range should be returned.
 * @type Date
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.end = null;

/**
 * @description If true, recurring events will be expanded in search results. This means all occurrences within a recurring event
 * happening in the time range will be returned.<br><strong>NOTE:</strong> The main use case for setting this flag to true is to
 * remove an occurrence in a recurring event, see {@link blackberry.pim.calendar.CalendarEvent#remove}(). For any other operations
 * to the recurring event (e.g. changing fields' values), make sure you obtain the event object by either calling {@link blackberry.pim.calendar.getEvent}()
 * or {@link blackberry.pim.calendar.findEvents}() with the expandRecurring flag set to false.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.expandRecurring = false;

/**
 * @description Substring used in the search. By setting the substring, the user instructs the
 * backend to return only events whose summary, location, or attendees' names or emails fields
 * contain the specified value.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.substring = "";

/**
 * @description When folders are specified, only events that belong to these folders are returned.
 * @type blackberry.pim.calendar.CalendarFolder[]
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.folders = [];
