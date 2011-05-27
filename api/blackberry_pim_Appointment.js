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
*       This Appointment object can be used for manipulating calendar appointments. The Appointment object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {PIM} Appointment 
* @BB50+
* @class The Appointment object represents an appointment in your calendar.
* @featureID blackberry.pim.Appointment
* @featureID blackberry.pim.Attendee
* @featureID blackberry.pim.Recurrence
* @featureID blackberry.pim.Reminder
* @featureID blackberry.find
* @constructor Constructor for a new Appointment object. 
* @param {Service} [service] Optional parameter specifying which service to create this appointment for.  If not provided, the default device service is used.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol;Create our Event
*   var newAppt = new blackberry.pim.Appointment();
*   newAppt.location = &quot;Your office&quot;;
*   newAppt.summary = &quot;Talk about new project&quot;;
*   newAppt.freeBusy = blackberry.pim.Appointment.FREE;
* 
*   &sol;&sol; Create our hour time slot
*   var start = new Date();
*   newAppt.start = start;
*   var end = start.setHours(start.getHours() + 1);
*   newAppt.end = end;
* 
*   &sol;&sol; Create Attendee
*   var attendees = [];
*   var onlyAttendee = new blackberry.pim.Attendee();
*   onlyAttendee.address = &quot;john@foo.com&quot;;
*   onlyAttendee.type = blackberry.pim.Attendee.INVITED;
*   attendees.push(onlyAttendee);
* 
*   newAppt.attendees = attendees;
*   newAppt.save();
* &lt;&sol;script&gt;
*/
blackberry.pim.Appointment = function(service) { };

/**
* Marks time as free in calendar 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Appointment.FREE = 0;

/**
* Mark time as tentative in calendar 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Appointment.TENTATIVE = 1;

/**
* Mark time as busy in calendar 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Appointment.BUSY = 2;

/**
* Mark time as out of office in calendar 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Appointment.OUT_OF_OFFICE = 3;

/**
* Looks up the appointments that match the regular expression provided. 
* @param {FilterExpression} [filter] optional parameter that defines the search criteria for the find.  If no value is provided, the method will return all the appointments on the device.
* @param {String} [orderBy] optional &apos;orderBy&apos; parameter specifying the field which the results will be sorted by. If &apos;isAscending&apos; is not supplied or &apos;isAscending&apos; is true, the sort results will be in an ascending order. If &apos;isAscending&apos; is false, the sort results will be in a descending order.
* @param {Number} [maxReturn] optional integer parameter specifying the maximum number of results to return from the find.  If not supplied or set to -1, it will return all results found.
* @param {Service} [service] optional parameter to define which service you wish to search for your appointments. If not provided the default service for appointments will be used.
* @param {Boolean} [isAscending] optional &apos;isAscending&apos; parameter specifying whether the sort order is ascending or descending. If not supplied or set to true, the results sorted by the field specified by &apos;orderBy&apos; will be in an ascending order. If set to false, the sort results will be in a descending order. If no &apos;orderBy&apos; value is specified, &apos;isAscending&apos; is neglected.
* @returns {Appointment[]}
* @BB50+
*/
blackberry.pim.Appointment.find = function(filter,orderBy,maxReturn,service,isAscending) { };

/**
* Saves the changes made to the Appointment object. 
* @returns {void}
* @BB50+
*/
blackberry.pim.Appointment.prototype.save = function() { };

/**
* Removes an event from the PIM storage. 
* @returns {void}
* @BB50+
*/
blackberry.pim.Appointment.prototype.remove = function() { };

/**
* Holds the location information for this appointment, for example, a meeting room name. 
* @type String
* @BB50+
*/
blackberry.pim.Appointment.prototype.location = { };

/**
* Contains a brief description of the appointment. 
* @type String
* @BB50+
*/
blackberry.pim.Appointment.prototype.summary = { };

/**
* Contains a more complete description than the summary field. 
* @type String
* @BB50+
*/
blackberry.pim.Appointment.prototype.note = { };

/**
* The start date for this appointment. 
* @type Date
* @BB50+
*/
blackberry.pim.Appointment.prototype.start = { };

/**
* The end date for this appointment. 
* @type Date
* @BB50+
*/
blackberry.pim.Appointment.prototype.end = { };

/**
* This is the rule to store how this appointment should be repeated if any. 
* @type Recurrence
* @BB50+
*/
blackberry.pim.Appointment.prototype.recurrence = { };

/**
* This is the rule to store how the user should be reminded about the appointment. 
* @type Reminder
* @BB50+
*/
blackberry.pim.Appointment.prototype.reminder = { };

/**
* The list of attendees that will be invited to this appointment. 
* @type Attendee
* @BB50+
*/
blackberry.pim.Appointment.prototype.attendees = { };

/**
* The free&sol;busy status for the appointment. Value can be one of the FreeBusy options. 
* @type Number
* @BB50+
*/
blackberry.pim.Appointment.prototype.freeBusy = { };

/**
* Boolean field denoting whether the appointment is an all day event. 
* @type Boolean
* @BB50+
*/
blackberry.pim.Appointment.prototype.allDay = { };

/**
* Represents the unique ID of the appointment. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.pim.Appointment.prototype.uid = { };


