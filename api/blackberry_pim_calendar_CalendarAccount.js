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
 * @class The <code>CalendarAccount</code> object contains the calendar account information.
 * @toc {PIM} CalendarAccount
 * @BB10X
 * @featureID blackberry.pim.calendar
 */
blackberry.pim.calendar.CalendarAccount = {};

/**
 * Contains the unique identifier of the calendar account.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarAccount.prototype.id = { };

/**
 * @description Name of the calendar account.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarAccount.prototype.name = "";

/**
 * Return all the folders of the calendar account.
 * @type blackberry.pim.calendar.CalendarFolder[]
 * @BB10X
 * @example
 * function getCalendarAccountsForGmail() {
 *    var calendar = blackberry.pim.calendar,
 *        accounts = calendar.getCalendarAccounts();
 *
 *    // gets all calendar accounts that contains "gmail" in its name
 *    return accounts.filter(function (acct) {
 *       return /gmail/i.test(acct.name);
 *    });
 * }
 */
blackberry.pim.calendar.CalendarAccount.prototype.folders = { };

/**
 * @description True when this calendar account is an enterprise account.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.CalendarAccount.prototype.enterprise = false;