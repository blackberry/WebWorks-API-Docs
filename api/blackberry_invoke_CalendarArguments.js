/*
* Copyright 2010-2011 Research In Motion Limited.
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
* <div><p>
*       The CalendarArguments object must be created as an instance using the new keyword.
*     </p></div>
* @toc {Invoke} CalendarArguments  
* @class The CalendarArguments object is an instance object, and is used as a parameter to the invoke() method when invoking the Calendar application.
* @featureID blackberry.invoke
* @featureID blackberry.invoke.CalendarArguments
* @featureID blackberry.pim.Appointment
* @constructor Constructor for a new CalendarArguments object. 
* @param {blackberry.pim.Appointment} appointment The appointment to be passed into the Calendar application.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;  
*   var appt = new blackberry.pim.Appointment();
*   appt.summary = &apos;Get Together For lunch&apos;;
*     
*   var args = new blackberry.invoke.CalendarArguments(appt);
*   args.view = 0;
*    
*   blackberry.invoke.invoke(blackberry.invoke.APP_CALENDAR, args);
* &lt;script&gt;
*/
blackberry.invoke.CalendarArguments = function() { };

/**
 * @function
 * @constructedBy blackberry.invoke.CalendarArguments
 * @description Create a new CalendarArguments object.
 * @param {Date} date The date to be passed into the Calendar application.
 * @BB50+
 * 
 */
blackberry.invoke.CalendarArguments.duplicateConstrucotr = function() { };

/**
* New&sol;Compose View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.CalendarArguments.VIEW_NEW = 0;

/**
* Read Only View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.CalendarArguments.VIEW_VIEW = 1;

/**
* Agenda View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.CalendarArguments.VIEW_AGENDA = 2;

/**
* Single Day View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.CalendarArguments.VIEW_DAY = 3;

/**
* User&apos;s Default View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.CalendarArguments.VIEW_DEFAULT = 4;

/**
* Month View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.CalendarArguments.VIEW_MONTH = 5;

/**
* Week View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.CalendarArguments.VIEW_WEEK = 6;

/**
* Date to open into the Calendar View. 
* @type Date
* @readOnly
* @BB50+
*/
blackberry.invoke.CalendarArguments.prototype.date = { };

/**
* Value specifying which view to show in the Calendar application. 
* @type Appointment
* @readOnly
* @BB50+
*/
blackberry.invoke.CalendarArguments.prototype.appointment = { };

/**
* Appointment to view in Calendar application. NOTE: appointment is only available in the Browser when used in a new view mode. 
* @type Number
* @BB50+
*/
blackberry.invoke.CalendarArguments.prototype.view = { };


