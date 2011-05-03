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
* @toc {Phone} CallLog 
* @BB50+
* @namespace The CallLog object represents an entry in the call log of the phone application.
* @featureID blackberry.phone.PhoneLogs
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Display the details of &apos;missed&apos; call log retreived at index specified
*   var index = 1;
*   var res = blackberry.phone.PhoneLogs.callAt(index, blackberry.phone.PhoneLogs.FOLDER_MISSED_CALLS);
*   displayLogDetails(res);
* 
*   function displayLogDetails(callLog) {
*     alert((&quot;Date: &quot; + callLog.date + &quot;&bsol;n&quot;) +
*     (&quot;Duration: &quot; + callLog.duration + &quot;&bsol;n&quot;) +
*     (&quot;Notes: &quot; + callLog.notes + &quot;&bsol;n&quot;) +
*     (&quot;Status: &quot; + callLog.status + &quot;&bsol;n&quot;) +
*     (&quot;Type: &quot; + callLog.type + &quot;&bsol;n&quot;) +
*     (&quot;Name: &quot; + callLog.name + &quot;&bsol;n&quot;) +
*     (&quot;Number: &quot; + callLog.number + &quot;&bsol;n&quot;) +
*     (&quot;AddressBookNumber: &quot; + callLog.addressBookNumber + &quot;&bsol;n&quot;) +
*     (&quot;AddressBookType: &quot; + callLog.addressBookType));
*   }    
* &lt;&sol;script&gt;
*/
blackberry.phone.PhoneLogs.CallLog = { };

/**
* Normal call status (no errors). 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_NORMAL = 0;

/**
* Busy call status. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_BUSY = 1;

/**
* Error due to congestion. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_CONGESTION = 2;

/**
* Error due to path unavailability. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_PATH_UNAVAILABLE = 3;

/**
* Error due to number unobtainability. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_NUMBER_UNOBTAINABLE = 4;

/**
* Error due to call authorization failure. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_AUTHENTICATION_FAILURE = 5;

/**
* Emergency calls only. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_EMERGENCY_CALLS_ONLY = 6;

/**
* Call hold error. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_HOLD_ERROR = 7;

/**
* Outgoing calls barred. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_OUTGOING_CALLS_BARRED = 8;

/**
* General error. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_GENERAL_ERROR = 9;

/**
* Maintenance required. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_MAINTENANCE_REQUIRED = 10;

/**
* Service not available. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_SERVICE_NOT_AVAILABLE = 11;

/**
* Call failed due to fading. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_CALL_FAIL_DUE_TO_FADING = 12;

/**
* Call lost due to fading. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_CALL_LOST_DUE_TO_FADING = 13;

/**
* Call failed, try again. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_CALL_FAILED_TRY_AGAIN = 14;

/**
* An FDN mismatch occured. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_FDN_MISMATCH = 15;

/**
* Call connection was denied. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_CONNECTION_DENIED = 16;

/**
* Incoming call barred 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.STATUS_INCOMING_CALL_BARRED = 27;

/**
* Incoming call that was successfully received. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.TYPE_RECEIVED_CALL = 0;

/**
* Successfully connected outgoing call. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.TYPE_PLACED_CALL = 1;

/**
* Call that was missed and has not been viewed yet. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.TYPE_MISSED_CALL_UNOPENED = 2;

/**
* Call that was missed and that has been viewed. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.TYPE_MISSED_CALL_OPENED = 3;

/**
* The call log&apos;s date. 
* @type Date
* @readOnly
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.prototype.date = { };

/**
* The call log&apos;s duration in seconds. 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.prototype.duration = { };

/**
* The call log&apos;s one of the STATUS_* values indicating the status of this logged call. 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.prototype.status = { };

/**
* The call log&apos;s notes. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.prototype.notes = { };

/**
* Type for this call; one of the TYPE_* values. 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.prototype.type = { };

/**
* Name associated with this call. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.prototype.name = { };

/**
* The original phone number for this call. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.prototype.number = { };

/**
* The address book phone number for this call. If not found, the raw phone number is returned 
* @type String
* @readOnly
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.prototype.addressBookNumber = { };

/**
* Type of the caller ID as stored in the contact list. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.phone.PhoneLogs.CallLog.prototype.addressBookType = { };


