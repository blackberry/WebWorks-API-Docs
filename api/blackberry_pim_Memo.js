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
*       The Memo object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {PIM} Memo 
* @BB50+
* @RIPPLE
* @class The Memo object is used to represent an entry in the MemoPad application.
* @featureID blackberry.pim.Memo
* @featureID blackberry.find
* @constructor Constructor for a new Memo object. 
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Create the Memo 
*   var memo = new blackberry.pim.Memo(); 
*   memo.title = &quot;Reminder To Self&quot;; 
*   memo.note = &quot;Don&apos;t forget to get your brakes fixed!!&quot;; 
*   memo.save(); 
* &lt;&sol;script&gt;
*/
blackberry.pim.Memo = function() { };

/**
* This method finds the memo that matches the regular expression provided. 
* @param {blackberry.find.FilterExpression} [filter] Optionalexpression parameter that defines the search criteria for the find.  If no value is provided the method will return all the Memos on the device.
* @param {String} [orderBy] Optional&apos;orderBy&apos; parameter specifying the field which the results will be sorted by. If &apos;isAscending&apos; is not supplied or &apos;isAscending&apos; is true, the sort results will be in an ascending order. If &apos;isAscending&apos; is false, the sort results will be in a descending order.
* @param {Number} [maxReturn] Optional integer parameter specifying the maximum number of results to return from the find.  If not supplied or set to -1, it will return all results found.
* @param {Boolean} [isAscending] Optional&apos;isAscending&apos; parameter specifying whether the sort order is ascending or descending. If not supplied or set to true, the results sorted by the field specified by &apos;orderBy&apos; will be in an ascending order. If set to false, the sort results will be in a descending order. If no &apos;orderBy&apos; value is specified, &apos;isAscending&apos; is neglected.
* @returns {Memo[]}
* @BB50+
* @RIPPLE
*/
blackberry.pim.Memo.find = function(filter,orderBy,maxReturn,isAscending) { };

/**
* This method will save the changes made to the memo object. 
* @returns {void}
* @BB50+
* @RIPPLE
*/
blackberry.pim.Memo.prototype.save = function() { };

/**
* This method will remove a memo from the PIM storage. 
* @returns {void}
* @BB50+
* @RIPPLE
*/
blackberry.pim.Memo.prototype.remove = function() { };

/**
* The title of the memo. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Memo.prototype.title = { };

/**
* The body text of the memo. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Memo.prototype.note = { };

/**
* Contains the unique ID of the object. It is the primary key and would be automatically generated. This field is read-only. 
* @type Number
* @readOnly
* @BB50+
* @RIPPLE
*/
blackberry.pim.Memo.prototype.uid = { };

/**
* The list of categories associated to the memo. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Memo.prototype.categories = { };


