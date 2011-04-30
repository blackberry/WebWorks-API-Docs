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
blackberry.invoke = { };


/**
* <div><p>
*       The MemoArguments object must be created as an instance using the new keyword.
*     </p></div>
* @toc {Invoke} MemoArguments 
* @BB50+
* @class The MemoArguments object is an instance object, and is used as a parameter to the invoke() method when invoking the Memo application.
* @featureID blackberry.invoke
* @featureID blackberry.invoke.MemoArguments
* @featureID blackberry.pim.Memo
* @constructor Constructor for a new MemoArguments object. 
* @param {blackberry.pim.Memo} [memo] Memo to view in MemoPad application.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;  
*   var memo = new blackberry.pim.Memo();
*   memo.title = &apos;Oranges I like&apos;;
*   memo.note = &apos;Sunkist&apos;;
*   
*   var args = new blackberry.invoke.MemoArguments(memo);
*   args.view = 0; &sol;&sol; New
*    
*   blackberry.invoke.invoke(blackberry.invoke.APP_MEMOPAD, args);  &sol;&sol; Memo Pad
* &lt;&sol;script&gt;
*/
blackberry.invoke.MemoArguments = function(memo) { };

/**
* New View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.MemoArguments.VIEW_NEW = 0;

/**
* Edit View 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.MemoArguments.VIEW_EDIT = 1;

/**
* Value that specifies what kind of view you want to view the memo in MemoPad application. 
* @type Number
* @BB50+
*/
blackberry.invoke.MemoArguments.prototype.view = { };


