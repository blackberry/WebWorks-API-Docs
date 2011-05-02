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
* @toc {Phone} Phone Call 
* @BB50+
* @namespace Represents an active phone call.
* @featureID blackberry.phone.Phone
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Check if active call at index specified is on hold
*   var res = blackberry.phone.Phone.activeCalls();
*   if (res) {
*     var index = 0;
*     alert(&quot;Is active call &quot; + index + &quot; on hold? &quot; + res[index].isOnHold());
*   }
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Check if active call at index specified is outgoing
*   var res = blackberry.phone.Phone.activeCalls();
*   if (res) {
*     var index = 0;
*     alert(&quot;Is active call &quot; + index + &quot; outgoing? &quot; + res[index].outgoing);
*   }
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Check recipient name of active call at index specified
*   var res = blackberry.phone.Phone.activeCalls();
*   if (res) {
*     var index = 0;
*     alert(&quot;Recipient name of active call &quot; + index + &quot; is: &quot; + res[index].recipientName);
*   }
* &lt;&sol;script&gt;
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Check recipient number of active call at index specified
*   var res = blackberry.phone.Phone.activeCalls();
*   if (res) {
*     var index = 0;
*     alert(&quot;Recipient number of active call &quot; + index + &quot; is: &quot; + res[index].recipientNumber);
*   }
* &lt;&sol;script&gt;
*/
blackberry.phone.Phone.Call = { };

/**
* Determines whether or not the current call is being held. 
* @returns {Boolean}
* @BB50+
*/
blackberry.phone.Phone.Call.prototype.isOnHold = function() { };

/**
* Indicates if the call is outgoing. 
* @type Boolean
* @readOnly
* @BB50+
*/
blackberry.phone.Phone.Call.prototype.outgoing = { };

/**
* Number string for display in a UI. If a contact list entry is found with a matching phone number, the &apos;friendly name&apos; (either First&sol;Last or Company name) is returned. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.phone.Phone.Call.prototype.recipientName = { };

/**
* Number associated with this phone call. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.phone.Phone.Call.prototype.recipientNumber = { };


