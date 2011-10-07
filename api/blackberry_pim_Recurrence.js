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
*       Examples of this rule could be to setup an appointment on a weekly or monthly basis. The Recurrence object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {PIM} Recurrence 
* @BB50+
* @RIPPLE
* @class The Recurrence object is used to represent the repetition rules for an appointment or a task.
* @featureID blackberry.pim.Recurrence
* @constructor Constructor for a new Recurrence object 
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Create our Event 
*   var newAppt = new blackberry.pim.Appointment();
*   newAppt.location = &quot;Your office&quot;;
*   newAppt.summary = &quot;Talk about project&quot;;
*   newAppt.freeBusy = 0; &sol;&sol; Free
* 
*   &sol;&sol; Create Recurrence
*   newAppt.recurrence = new blackberry.pim.Recurrence();
*   newAppt.recurrence.frequency = blackberry.pim.Recurrence.DAILY;
*   newAppt.save();
* &lt;&sol;script&gt;
*/
blackberry.pim.Recurrence = function() { };

/**
* Indicates no recurrence 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.NO_REPEAT = 0;

/**
* Indicates repetition daily 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.DAILY = 1;

/**
* Indicates repetition weekly 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.WEEKLY = 2;

/**
* Indicates repetition monthly 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.MONTHLY = 3;

/**
* Indicates repetition yearly 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.YEARLY = 4;

/**
* Constant representing the month of January 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.JANUARY = 0x20000;

/**
* Constant representing the month of February 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.FEBRUARY = 0x40000;

/**
* Constant representing the month of March 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.MARCH = 0x80000;

/**
* Constant representing the month of April 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.APRIL = 0x100000;

/**
* Constant representing the month of May 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.MAY = 0x200000;

/**
* Constant representing the month of June 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.JUNE = 0x400000;

/**
* Constant representing the month of July 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.JULY = 0x800000;

/**
* Constant representing the month of August 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.AUGUST = 0x1000000;

/**
* Constant representing the month of September 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.SEPTEMBER = 0x2000000;

/**
* Constant representing the month of October 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.OCTOBER = 0x4000000;

/**
* Constant representing the month of November 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.NOVEMBER = 0x8000000;

/**
* Constant representing the month of December 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.DECEMBER = 0x10000000;

/**
* Constant for the FIRST day of the week used with weekInMonth 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.FIRST = 0x1;

/**
* Constant for the SECOND day of the week used with weekInMonth 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.SECOND = 0x2;

/**
* Constant for the THIRD day of the week used with weekInMonth 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.THIRD = 0x4;

/**
* Constant for the FOURTH day of the week used with weekInMonth 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.FOURTH = 0x8;

/**
* Constant for the FIFTH day of the week used with weekInMonth 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.FIFTH = 0x10;

/**
* Constant for the LAST day of the week used with weekInMonth 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.LAST = 0x20;

/**
* Constant for the SECONDLAST day of the week used with weekInMonth 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.SECONDLAST = 0x40;

/**
* Constant for the THIRDLAST day of the week used with weekInMonth 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.THIRDLAST = 0x80;

/**
* Constant for the FOURTHLAST day of the week used with weekInMonth 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.FOURTHLAST = 0x100;

/**
* Constant for the FIFTHLAST day of the week used with weekInMonth 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.FIFTHLAST = 0x200;

/**
* Constant for SUNDAY used with dayInWeek 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.SUNDAY = 0x10000;

/**
* Constant for MONDAY used with dayInWeek 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.MONDAY = 0x8000;

/**
* Constant for TUESDAY used with dayInWeek 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.TUESDAY = 0x4000;

/**
* Constant for WEDNESDAY used with dayInWeek 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.WEDNESDAY = 0x2000;

/**
* Constant for THURSDAY used with dayInWeek 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.THURSDAY = 0x1000;

/**
* Constant for FRIDAY used with dayInWeek 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.FRIDAY = 0x800;

/**
* Constant for SATURDAY used with dayInWeek 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.SATURDAY = 0x400;

/**
* Specifies the frequency of the event repetition. Value can be: 
* @type Number
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.prototype.frequency = { };

/**
* Specifies the number of times this event repeats including the first time, starting from the first time the event starts (derived from the &apos;start&apos; property of the event) and continuing to the last date of the repeat (defined by the &apos;end&apos; property).  
* @type Number
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.prototype.count = { };

/**
* Specifies the number of iterations of the frequency between occurring dates, or how often the frequency repeats. 
* @type Number
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.prototype.interval = { };

/**
* Specifies the date when the event repetition would end. 
* @type Date
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.prototype.end = { };

/**
* Specifies the month in which an event occurs. Value can be one of the &apos;MONTH&apos; constants.  
* @type Number
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.prototype.monthInYear = { };

/**
* Specifies which week in a month a particular event occurs. Value can be one of the &apos;WEEK&apos; constants.  
* @type Number
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.prototype.weekInMonth = { };

/**
* Specifies the days of the week an event occurs. Value can be one of the &apos;DAY&apos; constants.  
* @type Number
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.prototype.dayInWeek = { };

/**
* Specifies the day of the month an event occurs. Value can be 1-31. 
* @type Number
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.prototype.dayInMonth = { };

/**
* Specifies the day of the year an event occurs. Value can be 1-366. 
* @type Number
* @BB50+
* @RIPPLE
*/
blackberry.pim.Recurrence.prototype.dayInYear = { };


