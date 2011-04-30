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
* @namespace
*/
blackberry.phone = { };


/**
* @toc {Phone} PhoneLogs 
* @BB50+
* @namespace A container to maintain a list of CallLog objects that together represent the call log for phone calls stored in the message list.
* @featureID blackberry.phone.Find
* @featureID blackberry.phone.PhoneLogs
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Display the number of &apos;missed&apos; call logs
*   var res = blackberry.phone.PhoneLogs.numberOfCalls(blackberry.phone.PhoneLogs.FOLDER_MISSED_CALLS);
*   alert(&quot;Number of missed calls: &quot; + res);
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol;Display if &apos;normal&apos; call log was successfully deleted at index specified
*   var index = 1;
*   var res = blackberry.phone.PhoneLogs.deleteCallAt(index, blackberry.phone.PhoneLogs.FOLDER_NORMAL_CALLS);
*   alert(&quot;Is deleting normal call at index: &quot; + index + &quot; succeeded? &quot; + res);
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Display &apos;normal&apos; call log retrieved at index specified
*   var index = 1;
*   var res = blackberry.phone.PhoneLogs.callAt(index, blackberry.phone.PhoneLogs.FOLDER_NORMAL_CALLS);
*   alert(&quot;CallLog retreived: &quot; + res);
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Register with phone log listener to be notified with its events
*   &sol;&sol; Here, we are interested to get notified regarding all possible events other than phone log removal 
*   alert(&quot;Registering for phone log events.. &quot;);
*   var res = blackberry.phone.PhoneLogs.addPhoneLogListener(OnCallLogAdded, &sol;*OnCallLogRemoved*&sol; null, OnCallLogUpdated, OnReset);
*   alert(&quot;Registered for phone log events: &quot; + res);
* 
*   &sol;&sol; Invoked when a new call log added
*   function OnCallLogAdded(callLog) {
*     alert(&quot;Call Log Added!&quot;);
*   }
* 
*   &sol;&sol; Invoked when a call log has been updated
*   function OnCallLogUpdated(newCallLog, oldCallLog) {
*     alert(&quot;Call Log Updated!&quot;);
*   }
* 
*   &sol;&sol; Invoked to reset the log
*   function OnReset() {
*     alert(&quot;Log Reset!&quot;);
*   }
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Iterating through array of &apos;normal&apos; call logs matching the find criteria
*   var filter = new blackberry.phone.Find.FilterExpression(&quot;duration&quot;, &quot;&gt;&quot;, 3);
*   var found = blackberry.phone.PhoneLogs.find(filter, blackberry.phone.PhoneLogs.FOLDER_NORMAL_CALLS, &quot;duration&quot;, 6, false);
*   if (found) {
*     alert(&quot;Length of find return is: &quot; + found.length);
* 
*     for (i = 0; i &lt; found.length; i++) {
*         alert((i + 1) + &quot;-&gt;duration: Duration=&quot; + found[i].duration + &quot;, name:&quot; + found[i].name);
*     }
*   }
* &lt;&sol;script&gt;
*/
blackberry.phone.PhoneLogs = { };

/**
* Folder ID for the missed call folder. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.FOLDER_MISSED_CALLS = 0;

/**
* Folder ID for other (not missed) calls. 
* @type Number
* @constant
* @BB50+
*/
blackberry.phone.PhoneLogs.FOLDER_NORMAL_CALLS = 1;

/**
* Retrieves the number of calls in a given phone log folder. 
* @param {Number} folderID ID of the folder to check (one of the FOLDER_* values).
* @returns {Number}
* @BB50+
*/
blackberry.phone.PhoneLogs.numberOfCalls = function(folderID) { };

/**
* Deletes a call from the log. The call will be removed from the appropriate list. 
* @param {Number} index Index of the call log to delete, from 0 to numberOfCalls(folderID) - 1
* @param {Number} folderID ID of the folder containing the call log to delete (one of the FOLDER_* values).
* @returns {Boolean}
* @BB50+
*/
blackberry.phone.PhoneLogs.deleteCallAt = function(index,folderID) { };

/**
* Retrieves a particular call from the appropriate log folder by index. 
* @param {Number} index The index of the call in the phone log, from 0 to numberOfCalls(folderID) - 1
* @param {Number} folderID ID of the folder from which to retrieve the call, (one of the FOLDER_* constants)
* @returns {CallLog}
* @BB50+
*/
blackberry.phone.PhoneLogs.callAt = function(index,folderID) { };

/**
* This method lookup the CallLog that match the expression provided. 
* @param {FilterExpression} [filter] optional expression parameter that defines the search criteria for the find. If no value is provided all the Logs are suitable.
* @param {Number} [folderID] optional &apos;folderID&apos; parameter specifying the folder where to performed find. If &apos;folderID&apos; is not supplied the search is made in the missed calls folder (FOLDER_MISSED_CALLS).
* @param {String} [orderBy] optional &apos;orderBy&apos; parameter specifying the field which the results will be sorted by. If &apos;isAscending&apos; is not supplied or &apos;isAscending&apos; is true, the sort results will be in an ascending order. If &apos;isAscending&apos; is false, the sort results will be in a descending order.
* @param {Number} [maxReturn] optional integer parameter specifying the maximum number of results to return from the find.  If not supplied or set to -1, it will return all results found.
* @param {Boolean} [isAscending] optional &apos;isAscending&apos; parameter specifying whether the sort order is ascending or descending. If not supplied or set to true, the results sorted by the field specified by &apos;orderBy&apos; will be in an ascending order. If set to false, the sort results will be in a descending order. If no &apos;orderBy&apos; value is specified, &apos;isAscending&apos; is neglected.
* @returns {CallLog[]}
* @BB50+
*/
blackberry.phone.PhoneLogs.find = function(filter,folderID,orderBy,maxReturn,isAscending) { };

/**
* Registers PhoneLogListener to listen for call log events. 
* @param {OnCallLogAdded} callback Invoked when a new call log added. When invoked gets added CallLog object as a parameter.
* @param {OnCallLogRemoved} callback Invoked when a call log has been removed. When invoked gets removed CallLog object as a parameter.
* @param {OnCallLogUpdated} callback Invoked when a call log has been updated. When invoked gets updated and an old version of CallLog object as parameters.
* @param {OnCallLogReset} callback Invoked to reset the log, when a batch operation occurs. Implementations should release all held CallLog references and rebuild the current set.
* @returns {Boolean}
* @BB50+
*/
blackberry.phone.PhoneLogs.addPhoneLogListener = function(callback,callback,callback,callback) { };


/**
* <div><p>
*           This is the interface that must be available on the callback function to receive the added CallLog.
*         </p></div>
* @toc {Phone} OnCallLogAdded 
* @BB50+
* @class Invoked when a new call log added.
* @constructor 
* @param {CallLog} addedCallLog Expected to get added CallLog.
*/
blackberry.phone.PhoneLogs.OnCallLogAdded = function(addedCallLog) { };


/**
* <div><p>
*           This is the interface that must be available on the callback function to receive the removed CallLog.
*         </p></div>
* @toc {Phone} OnCallLogRemoved 
* @BB50+
* @class Invoked when a call log has been removed.
* @constructor 
* @param {CallLog} removedCallLog Expected to get removed CallLog.
*/
blackberry.phone.PhoneLogs.OnCallLogRemoved = function(removedCallLog) { };


/**
* <div><p>
*           This is the interface that must be available on the callback function to receive the new and old CallLog after an update operation.
*         </p></div>
* @toc {Phone} OnCallLogUpdated 
* @BB50+
* @class Invoked when a call log has been updated.
* @constructor 
* @param {CallLog} newCallLog Expected to get a new CallLog.
* @param {CallLog} oldCallLog Expected to get an old CallLog.
*/
blackberry.phone.PhoneLogs.OnCallLogUpdated = function(newCallLog,oldCallLog) { };


/**
* <div><p>
*           This is the interface that must be available on the callback function to get notified when a logs reset occurs.
*         </p></div>
* @toc {Phone} OnCallLogReset 
* @BB50+
* @namespace Invoked to reset the log.
*/
blackberry.phone.PhoneLogs.OnCallLogReset = { };


