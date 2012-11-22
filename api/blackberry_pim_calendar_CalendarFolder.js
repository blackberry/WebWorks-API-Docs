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
 * @class A calendar in the calendar application is represented by a <code>CalendarFolder</code> object. Folders are containers for events.
 * @toc {PIM} CalendarFolder
 * @featureID blackberry.pim.calendar
 */
blackberry.pim.calendar.CalendarFolder = {};

/**
 * @description Name of the calendar folder.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarFolder.prototype.name = "";

/**
 * @description The email for the folder owner.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarFolder.prototype.ownerEmail = "";

/**
 * @description The folder's account id.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarFolder.prototype.accountId = "";

/**
 * @description The identifier for the folder.
 * @readonly
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarFolder.prototype.id = "";

/**
 * @description The folder's type.
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarFolder.prototype.type = 0;

/**
 * @description True if the folder is read-only, false otherwise.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.CalendarFolder.prototype.readonly = false;

/**
 * @description True if the user has marked the folder as visible in the calendar application, false otherwise
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.CalendarFolder.prototype.visible = false;

/**
 * @description The folder's color in a hexadecimal string starts with #
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarFolder.prototype.color = "";

/**
 * @description True if this calendar folder is the default
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.CalendarFolder.prototype.default = true;

/**
 * @description True if this calendar folder is an enterprise calendar folder
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.CalendarFolder.prototype.enterprise = true;
