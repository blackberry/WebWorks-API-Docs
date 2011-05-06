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
* @toc {Phone} PhoneLogs 
* @BB50+
* @namespace A container to maintain a list of CallLog objects that together represent the call log for phone calls stored in the message list.
* @featureID blackberry.phone.Find
* @featureID blackberry.phone.PhoneLogs
*/
blackberry.phone.PhoneLogs = { };

/**
* Folder ID for the missed call folder. 
* @type Number
* @constant
* @default 0
* @BB50+
*/
blackberry.phone.PhoneLogs.FOLDER_MISSED_CALLS = 0;

/**
* Folder ID for other (not missed) calls. 
* @type Number
* @constant
* @default 1
* @BB50+
*/
blackberry.phone.PhoneLogs.FOLDER_NORMAL_CALLS = 1;

/**
* Retrieves the number of calls in a given phone log folder. 
* @param {Number} folderID ID of the folder to check (one of the FOLDER_* values).
* @returns {Number} Returns number of calls
* @BB50+
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;
*   // Display the number of &apos;missed&apos; call logs
*   var res = blackberry.phone.PhoneLogs.numberOfCalls(blackberry.phone.PhoneLogs.FOLDER_MISSED_CALLS);
*   alert(&quot;Number of missed calls: &quot; + res);
* &lt;/script&gt;
*/
blackberry.phone.PhoneLogs.numberOfCalls = function(folderID) { };

/**
* Deletes a call from the log. The call will be removed from the appropriate list. 
* @param {Number} index Index of the call log to delete, from 0 to numberOfCalls(folderID) - 1
* @param {Number} folderID ID of the folder containing the call log to delete (one of the FOLDER_* values).
* @returns {Boolean} Returns true if the item was successfully deleted
* @BB50+
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;
*   //Display if &apos;normal&apos; call log was successfully deleted at index specified
*   var index = 1;
*   var res = blackberry.phone.PhoneLogs.deleteCallAt(index, blackberry.phone.PhoneLogs.FOLDER_NORMAL_CALLS);
*   alert(&quot;Is deleting normal call at index: &quot; + index + &quot; succeeded? &quot; + res);
* &lt;/script&gt;
*/
blackberry.phone.PhoneLogs.deleteCallAt = function(index,folderID) { };

/**
* Retrieves a particular call from the appropriate log folder by index. 
* @param {Number} index The index of the call in the phone log, from 0 to numberOfCalls(folderID) - 1
* @param {Number} folderID ID of the folder from which to retrieve the call, (one of the FOLDER_* constants)
* @returns {CallLog} Returns the CallLog specified by the index
* @BB50+
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;
*   // Display &apos;normal&apos; call log retrieved at index specified
*   var index = 1;
*   var res = blackberry.phone.PhoneLogs.callAt(index, blackberry.phone.PhoneLogs.FOLDER_NORMAL_CALLS);
*   alert(&quot;CallLog retreived: &quot; + res);
* &lt;/script&gt;
*/
blackberry.phone.PhoneLogs.callAt = function(index,folderID) { };

/**
* This method lookup the CallLog that match the expression provided. 
* @param {FilterExpression} [filter] optional expression parameter that defines the search criteria for the find. If no value is provided all the Logs are suitable.
* @param {Number} [folderID] optional &apos;folderID&apos; parameter specifying the folder where to performed find. If &apos;folderID&apos; is not supplied the search is made in the missed calls folder (FOLDER_MISSED_CALLS).
* @param {String} [orderBy] optional &apos;orderBy&apos; parameter specifying the field which the results will be sorted by. If &apos;isAscending&apos; is not supplied or &apos;isAscending&apos; is true, the sort results will be in an ascending order. If &apos;isAscending&apos; is false, the sort results will be in a descending order.
* @param {Number} [maxReturn] optional integer parameter specifying the maximum number of results to return from the find.  If not supplied or set to -1, it will return all results found.
* @param {Boolean} [isAscending] optional &apos;isAscending&apos; parameter specifying whether the sort order is ascending or descending. If not supplied or set to true, the results sorted by the field specified by &apos;orderBy&apos; will be in an ascending order. If set to false, the sort results will be in a descending order. If no &apos;orderBy&apos; value is specified, &apos;isAscending&apos; is neglected.
* @returns {CallLog[]} The function returns list of CallLogs that match search criteria
* @BB50+
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;
*   // Iterating through array of &apos;normal&apos; call logs matching the find criteria
*   var filter = new blackberry.phone.Find.FilterExpression(&quot;duration&quot;, &quot;&gt;&quot;, 3);
*   var found = blackberry.phone.PhoneLogs.find(filter, blackberry.phone.PhoneLogs.FOLDER_NORMAL_CALLS, &quot;duration&quot;, 6, false);
*   if (found) {
*     alert(&quot;Length of find return is: &quot; + found.length);
* 
*     for (i = 0; i &lt; found.length; i++) {
*         alert((i + 1) + &quot;-&gt;duration: Duration=&quot; + found[i].duration + &quot;, name:&quot; + found[i].name);
*     }
*   }
* &lt;/script&gt;
*/
blackberry.phone.PhoneLogs.find = function(filter,folderID,orderBy,maxReturn,isAscending) { };

/**
* Registers PhoneLogListener to listen for call log events. 
* <br/><br/>
* Register listeners when interested in receiving call log events. When you subscribe more than one callback function, every new callback set 
* will overwrite each previous. To unsubscribe from all callbacks, pass null as a parameter.
* @callback {function} onCallLogAdded This callback function is triggered when a new call log is added.
* @callback {blackberry.phone.PhoneLogs.CallLog} onCallLogAdded.addedCallLog Object that contains the CallLog that was added
* @callback {function} onCallLogRemoved This callback function is triggered when a call log is removed.
* @callback {blackberry.phone.PhoneLogs.CallLog} onCallLogRemoved.removedCallLog Object that contains the CallLog that was removed
* @callback {function} onCallLogUpdated This callback function is triggered when a call log is updated.
* @callback {blackberry.phone.PhoneLogs.CallLog} onCallLogUpdated.newCallLog Object that contains the CallLog that represents the new CallLog
* @callback {blackberry.phone.PhoneLogs.CallLog} onCallLogUpdated.oldCallLog Object that contains the CallLog that represents the old CallLog
* @callback {function} onCallLogReset This callback function is triggered when a call log is reset.
* @returns {Boolean} Returns true if the listener is assigned
* @BB50+
* @example
* &lt;script type=&quot;text/javascript&quot;&gt;
*   // Register with phone log listener to be notified with its events
*   // Here, we are interested to get notified regarding all possible events other than phone log removal 
*   alert(&quot;Registering for phone log events.. &quot;);
*   var res = blackberry.phone.PhoneLogs.addPhoneLogListener(OnCallLogAdded,  null, OnCallLogUpdated, OnReset);
*   alert(&quot;Registered for phone log events: &quot; + res);
* 
*   // Invoked when a new call log added
*   function OnCallLogAdded(callLog) {
*     alert(&quot;Call Log Added!&quot;);
*   }
* 
*   // Invoked when a call log has been updated
*   function OnCallLogUpdated(newCallLog, oldCallLog) {
*     alert(&quot;Call Log Updated!&quot;);
*   }
* 
*   // Invoked to reset the log
*   function OnReset() {
*     alert(&quot;Log Reset!&quot;);
*   }
* &lt;/script&gt;
*/
blackberry.phone.PhoneLogs.addPhoneLogListener = function(onCallLogAdded,onCallLogRemoved,onCallLogUpdated,onCallLogReset) { };





