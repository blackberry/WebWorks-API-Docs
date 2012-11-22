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
 * @class The <code>CalendarFindOptions</code> object contains fields that filter and sort the results of {@link blackberry.pim.calendar.findEvents}().
 * @toc {PIM} CalendarFindOptions
 * @featureID blackberry.pim.calendar
 */
blackberry.pim.calendar.CalendarFindOptions = {};

/**
 * @description A search filter with which to search and initially filter the Calendar database.
 * @type blackberry.pim.calendar.CalenderEventFilter
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.prototype.filter = null;

/**
 * @type Object[]
 * @description An array of object literals that specifies the order of the results. The object should be in the following form: <br><pre>
 * {
 *     fieldName: &lt;field name, one of the SORT_FIELD_* constants&gt;,
 *     desc: true to sort results in descending order
 * }
 * </pre>
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.prototype.sort = [];

/**
 * @type Number
 * @description The maximum number of returned events.
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.prototype.limit = 0;

/**
 * @type Number
 * @description The detail level controls what attributes will be returned for each event. This should be one of the DETAIL_* constants. Defaults to {@link blackberry.pim.calendar.CalendarFindOptions.DETAIL_AGENDA}
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.prototype.detail = 0;

/**
 * @constant
 * @type Number
 * @description Used by specifying the sort field
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.SORT_FIELD_SUMMARY = 2;

/**
 * @constant
 * @type Number
 * @description Used by specifying the sort field
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.SORT_FIELD_LOCATION = 3;

/**
 * @constant
 * @type Number
 * @description Used by specifying the sort field
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.SORT_FIELD_START = 4;

/**
 * @constant
 * @type Number
 * @description Used by specifying the sort field
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.SORT_FIELD_END = 5;

/**
 * @constant
 * @type Number
 * @description Lowest detail level, used for monthly views. Event fields populated are:
 * accountId, allDay, transparency, start, end, folderId, id, parentId.
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.DETAIL_MONTHLY = 1;

/**
 * @constant
 * @type Number
 * @description Detail level for weekly views. Event fields populated are those in the monthly
 * level plus birthday and summary.
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.DETAIL_WEEKLY = 2;

/**
 * @constant
 * @type Number
 * @description Full detail level. All fields are populated.
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.DETAIL_FULL = 3;

/**
 * @constant
 * @type Number
 * @description Agenda detail level. Event fields populated are those in the monthly level plus
 * location, status, and recurrence.
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.DETAIL_AGENDA = 4;
