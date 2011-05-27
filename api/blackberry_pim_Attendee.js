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
*       The Attendee object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {PIM} Attendee 
* @BB50+
* @class The Attendee object is used to represent a person who is invited to a calendar appointment.
* @featureID blackberry.pim.Attendee
* @constructor Constructor for a new Attendee object. 
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Create our Event
*     var newAppt = new blackberry.pim.Appointment();
*     newAppt.location = &quot;Your office&quot;;
*     newAppt.summary = &quot;Talk about new project&quot;;
*     newAppt.freeBusy = 0; &sol;&sol; Free
* 
*   &sol;&sol; Create our hour time slot
*     var start = new Date();
*     newAppt.start = start;
*     var end = start.setHours(start.getHours() + 1);
*     newAppt.end = end;
* 
*   &sol;&sol; Create Attendee
*     var attendees = [];
*     var onlyAttendee = new blackberry.pim.Attendee();
*     onlyAttendee.address = &quot;john@foo.com&quot;;
*     onlyAttendee.type = blackberry.pim.Attendee.INVITED;
*     attendees.push(onlyAttendee);
* 
*     newAppt.attendees = attendees;
*     newAppt.save();
* &lt;&sol;script&gt;
*/
blackberry.pim.Attendee = function() { };

/**
* Event organizer 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Attendee.ORGANIZER = 0;

/**
* Attendee as been invited. 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Attendee.INVITED = 1;

/**
* Attendee has accepted the invitation. 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Attendee.ACCEPTED = 2;

/**
* Attendee has declined the invitation. 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Attendee.DECLINED = 3;

/**
* Attendee has tentatively accepted the invitation. 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Attendee.TENTATIVE  = 4;

/**
* Indicates the type of a particular attendee. Value can be one of the Attendee types. 
* @type Number
* @BB50+
*/
blackberry.pim.Attendee.prototype.type = { };

/**
* Contains the email address of a particular attendee. 
* @type String
* @BB50+
*/
blackberry.pim.Attendee.prototype.address = { };


