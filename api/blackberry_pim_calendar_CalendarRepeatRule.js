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
 * @class The <code>CalendarRepeatRule</code> object represents the recurrence of a calendar event item.
 * @toc {PIM} CalendarRepeatRule
 * @featureID blackberry.pim.calendar
 * @example
 * var calendar = blackberry.pim.calendar,
 *     CalendarRepeatRule = calendar.CalendarRepeatRule,
 *     recEvent;
 *
 * function onSaveSuccess(saved) {
 *     alert("Event saved successfully: " + saved.id);
 *     recEvent = saved;
 * }
 *
 * function onSaveError(error) {
 *     alert("Event not saved, error code: " + error.code);
 * }
 *
 * // Create an event that repeats every month for 4 times
 * function createEventRepeatEveryMonth() {
 *    var start = new Date("Jan 6, 2013, 12:00"),
 *        end = new Date("Jan 6, 2013, 12:30"),
 *        summary = "Every month",
 *        rule = {
 *            "frequency": CalendarRepeatRule.FREQUENCY_MONTHLY,
 *            "expires": new Date("Dec 31, 2013"),
 *            "numberOfOccurrences": 4
 *        };
 *
 *    recEvent = calendar.createEvent({"summary": summary, "start": start, "end": end, "recurrence": rule});
 *    recEvent.save(onSaveSuccess, onSaveError);
 * }
 *
 * // Create an event that repeats every month, sets explicit expiry date
 * // the event will only have 3 occurrences since the expiry date
 * // is before the 4th occurrence
 * function createEventRepeatEveryMonthExpire() {
 *    var start = new Date("Jan 7, 2013, 12:00"),
 *        end = new Date("Jan 7, 2013, 12:30"),
 *        venue = "some location",
 *        summary = "Every month binding expiry date",
 *        rule = {
 *            "frequency": CalendarRepeatRule.FREQUENCY_MONTHLY,
 *            "expires": new Date("Mar 30, 2013"),
 *            "numberOfOccurrences": 4
 *        };
 *
 *    recEvent = calendar.createEvent({"summary": summary, "location": venue, "start": start, "end": end, "recurrence": rule});
 *    recEvent.save(onSaveSuccess, onSaveError);
 * }
 *
 * // Create an event that repeats every week on Monday and Wednesday
 * function createEventRepeatEveryMonWed() {
 *    var start = new Date("Jan 21, 2013, 12:00"),
 *        end = new Date("Jan 21, 2013, 12:30"),
 *        venue = "some location",
 *        summary = "Every Mon and Wed",
 *        rule = {
 *            "frequency": CalendarRepeatRule.FREQUENCY_WEEKLY,
 *            "expires": new Date("Mar 30, 2013"),
 *            "dayInWeek": CalendarRepeatRule.MONDAY | CalendarRepeatRule.WEDNESDAY
 *        };
 *
 *    recEvent = calendar.createEvent({"summary": summary, "location": venue, "start": start, "end": end, "recurrence": rule});
 *    recEvent.save(onSaveSuccess, onSaveError);
 * }
 *
 * // Create an event that repeats on first Friday every month
 * function createEventFirstFriEveryMonth() {
 *    var start = new Date("Feb 1, 2013, 12:00"),
 *        end = new Date("Feb 1, 2013, 12:30"),
 *        venue = "some location",
 *        summary = "First Fri every month",
 *        rule = {
 *            "frequency": CalendarRepeatRule.FREQUENCY_MONTHLY_AT_A_WEEK_DAY,
 *            "expires": new Date("Jun 30, 2013"),
 *            "dayInWeek": CalendarRepeatRule.FRIDAY,
 *            "weekInMonth": 1
 *        };
 *
 *   recEvent = calendar.createEvent({"summary": summary, "location": venue, "start": start, "end": end, "recurrence": rule});
 *   recEvent.save(onSaveSuccess, onSaveError);
 * }
 *
 * // Create an event that repeats on the first Friday of the seventh
 * // month every year
 * function createEventFirstFriSeventhMonthEveryYear() {
 *    var start = new Date("Jul 5, 2013, 12:00"),
 *        end = new Date("Jul 5, 2013, 12:30"),
 *        venue = "some location",
 *        summary = "First Fri of seventh month every year",
 *        rule = {
 *            "frequency": CalendarRepeatRule.FREQUENCY_YEARLY_AT_A_WEEK_DAY_OF_MONTH,
 *            "expires": new Date("Jun 30, 2017, 12:00"),
 *            "dayInWeek": CalendarRepeatRule.FRIDAY,
 *            "weekInMonth": 1,
 *            "monthInYear": 7
 *        };
 *
 *   recEvent = calendar.createEvent({"summary": summary, "location": venue, "start": start, "end": end, "recurrence": rule});
 *   recEvent.save(onSaveSuccess, onSaveError);
 * }
 *
 * // Create an event that repeats on the last day of
 * // every month with 4 occurrences
 * function createEventRepeatsLastDayOfEveryMonth() {
 *    var start = new Date("Jan 31, 2013, 12:00"),
 *        end = new Date("Jan 31, 2013, 12:30"),
 *        venue = "some location",
 *        summary = "Last day of each month with 4 occurrences",
 *        rule = {
 *            "frequency": CalendarRepeatRule.FREQUENCY_MONTHLY_AT_A_WEEK_DAY,
 *            "numberOfOccurrences": 4,
 *            "dayInWeek": CalendarRepeatRule.LAST_DAY_IN_MONTH
 *        };
 *
 *   recEvent = calendar.createEvent({"summary": summary, "location": venue, "start": start, "end": end, "recurrence": rule});
 *   recEvent.save(onSaveSuccess, onSaveError);
 * }
 *
 */
blackberry.pim.calendar.CalendarRepeatRule = {};

/**
 * @description The frequency of the CalendarRepeatRule. Possible values are: {@link blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_DAILY},
 * {@link blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_WEEKLY}, {@link blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_MONTHLY},
 * {@link blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_MONTHLY_AT_A_WEEK_DAY}, {@link blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_YEARLY}, or
 * {@link blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_YEARLY_AT_A_WEEK_DAY_OF_MONTH}
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.prototype.frequency = "";

/**
 * @description The interval is the number of times a rule must generate a possible date to produce an occurrence.<br>A recurrence rule and a start date yield a set of possible dates. For example, a
 * daily event that repeats five times starting at July 23rd 2012 has five possible dates.<br> With the default interval value of one, the occurrences for this event will be
 * the 23rd, 24th, 25th, 26th and 27th. With a value of two, the occurrences will be 24th, 26th, 28th, 30th and 1st of August.
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.prototype.interval = 1;

/**
 * @description The date when the recurrence ends.<br>A finite recurrence should have an expiry date or a defined number of occurrences.
 * @type Date
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.prototype.expires = null;

/**
 * @description One or more dates and times to which the CalendarRepeatRule does not apply.
 * @type Date[]
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.prototype.exceptionDates = null;

/**
 * @description The number of repetitions in a finite recurrence.<br>A finite recurrence should have an expiry date or a defined number of occurrences.
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.prototype.numberOfOccurrences = 0;

/**
 * @description Days of the week when a recurrence repeats.<br>
 * This is only meaningful when the frequency is:
 * <ul>
 * <li>weekly,</li>
 * <li>monthly at a certain day of a certain week, or </li>
 * <li>yearly at a certain day of a certain week of a certain month</li>
 * </ul>
 * Each day of the week has a corresponding value. The values can be OR'ed together to have rules with multiple days.<br>
 * Refer to {@link blackberry.pim.calendar.CalendarRepeatRule.SUNDAY}, {@link blackberry.pim.calendar.CalendarRepeatRule.MONDAY},
 * {@link blackberry.pim.calendar.CalendarRepeatRule.TUESDAY}, {@link blackberry.pim.calendar.CalendarRepeatRule.WEDNESDAY},
 * {@link blackberry.pim.calendar.CalendarRepeatRule.THURSDAY}, {@link blackberry.pim.calendar.CalendarRepeatRule.FRIDAY}, and
 * {@link blackberry.pim.calendar.CalendarRepeatRule.SATURDAY}.
 * <p>
 * If an event should repeat on the last day of every month, you should set this field to {@link blackberry.pim.calendar.CalendarRepeatRule.LAST_DAY_IN_MONTH}
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.prototype.dayInWeek = 0;

/**
 * @description Day of month when a recurrence repeats.<br>
 * This is only meaningful when frequency is:
 * <ul>
 * <li>monthly or</li>
 * <li>yearly</li>
 * </ul>
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.prototype.dayInMonth = 0;

/**
 * @description Week in the month when a recurrence repeats.<br>
 * This is only meaningful when frequency is:
 * <ul>
 * <li>monthly at a certain day of a certain week or</li>
 * <li> yearly at a certain day of a certain week of a certain month</li>
 * </ul>
 * For example, the recurrence rule for an event on the second Sunday of May would have a value of 2 in this attribute.
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.prototype.weekInMonth = 0;

/**
 * @description Month of the year when a recurrence repeats.<br>
 * This is only meaningful when frequency is:
 * <ul>
 * <li>yearly or</li>
 * <li>yearly at a certain day of a certain week of a certain month</li>
 * </ul>
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.prototype.monthInYear = 0;

/**
 * @description Used for specifying a recurrence that involves day of the week.
 * @constant
 * @default 1
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.SUNDAY = 1;

/**
 * @description Used for specifying a recurrence that involves day of the week.
 * @constant
 * @default 2
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.MONDAY = 2;

/**
 * @description Used for specifying a recurrence that involves day of the week.
 * @constant
 * @default 4
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.TUESDAY = 4;

/**
 * @description Used for specifying a recurrence that involves day of the week.
 * @constant
 * @default 8
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.WEDNESDAY = 8;

/**
 * @description Used for specifying a recurrence that involves day of the week.
 * @constant
 * @default 16
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.THURSDAY = 16;

/**
 * @description Used for specifying a recurrence that involves day of the week.
 * @constant
 * @default 32
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.FRIDAY = 32;

/**
 * @description Used for specifying a recurrence that involves day of the week.
 * @constant
 * @default 64
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.SATURDAY = 64;

/**
 * @description Used for specifying a recurrence that involves last day in the month.
 * @constant
 * @default 127
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.LAST_DAY_IN_MONTH = 127;

/**
 * @description Indicates that a recurring event occurs daily.
 * @constant
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_DAILY = "daily";

/**
 * @description Indicates that a recurring event should happen on specific days of the week.
 * @constant
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_WEEKLY = "weekly";

/**
 * @description Indicates that a recurring event that happens at a given day of every month.
 * @constant
 * @type String
 * @see blackberry.pim.calendar.CalendarRepeatRule.prototype.dayInMonth
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_MONTHLY = "monthly";

/**
 * @description Indicates that a recurring event happens every month at a certain day of a certain week.
 * @constant
 * @type String
 * @see blackberry.pim.calendar.CalendarRepeatRule.prototype.weekInMonth
 * @see blackberry.pim.calendar.CalendarRepeatRule.prototype.dayInWeek
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_MONTHLY_AT_A_WEEK_DAY = "monthlyAtWeekDay";

/**
 * @description Indicates that a recurring event that happens every year at a given day of a month.
 * @constant
 * @type String
 * @see blackberry.pim.calendar.CalendarRepeatRule.prototype.dayInMonth
 * @see blackberry.pim.calendar.CalendarRepeatRule.prototype.monthInYear
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_YEARLY = "yearly";

/**
 * @description Indicates that a recurring event that happens at a certain day of a given week of a certain month of the year.
 * @constant
 * @type String
 * @see blackberry.pim.calendar.CalendarRepeatRule.prototype.dayInWeek
 * @see blackberry.pim.calendar.CalendarRepeatRule.prototype.weekInMonth
 * @see blackberry.pim.calendar.CalendarRepeatRule.prototype.monthInYear
 * @BB10X
 */
blackberry.pim.calendar.CalendarRepeatRule.FREQUENCY_YEARLY_AT_A_WEEK_DAY_OF_MONTH = "yearlyAtWeekDayOfMonth";
