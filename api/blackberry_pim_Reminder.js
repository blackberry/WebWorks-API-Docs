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
*       The Reminder object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {PIM} Reminder 
* @BB50+
* @class The Reminder object is used to represent the reminder rule for an appointment or a task.
* @featureID blackberry.pim.Reminder
* @constructor Constructor for a new Reminder object. 
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Create our Event 
*   var newAppt = new blackberry.pim.Appointment();
*   newAppt.location = &quot;Your office&quot;;
*   newAppt.summary = &quot;Talk about new project&quot;;
*   newAppt.freeBusy = 0; &sol;&sol; Free
*     
*   &sol;&sol; Create our hour time slot
*   var start = new Date();
*   newAppt.start = start;
*   var end = start.setHours(start.getHours() + 1);
*   newAppt.end = end;
* 
*   &sol;&sol; Create Reminder
*   newAppt.reminder = new blackberry.pim.Reminder();
*   newAppt.reminder.type = blackberry.pim.Reminder.RELATIVE;
*   newAppt.reminder.relativeHours = 0.25; &sol;&sol; 15 minutes
*   newAppt.save();
* &lt;&sol;script&gt;
*/
blackberry.pim.Reminder = function() { };

/**
* Indicates that this reminder is set by date 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Reminder.DATE = 0;

/**
* Indicates that this reminder is set by relative time to the appointment or task. 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Reminder.RELATIVE = 1;

/**
* What type of reminder it is, possible values:&bsol;n0 - By Date&bsol;n1 - Relative. 
* @type Number
* @BB50+
*/
blackberry.pim.Reminder.prototype.type = { };

/**
* Represents the relative timing of the reminder in hours. For example 0.25 would be 15 minutes, where 24 would be the equivalent to 1 day. This is only valid for a type of Relative(1). 
* @type Number
* @BB50+
*/
blackberry.pim.Reminder.prototype.relativeHours = { };

/**
* Specifies the exact date when the reminder will fire. This is only valid for a type of By Date(0). 
* @type Date
* @BB50+
*/
blackberry.pim.Reminder.prototype.date = { };


