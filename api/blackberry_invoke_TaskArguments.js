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
*       The TaskArguments object must be created as an instance using the new keyword.
*     </p></div>
* @toc {Invoke} TaskArguments 
* @BB50+
* @RIPPLE
* @class The TaskArguments object is an instance object, and is used as a parameter to the invoke() method when invoking the Tasks application.
* @featureID blackberry.invoke
* @featureID blackberry.invoke.TaskArguments
* @featureID blackberry.pim.Task
* @constructor Constructor for a new TaskArguments object. 
* @param {blackberry.pim.Task} [task] Task to view in Tasks application.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   var task= new blackberry.pim.Task();
*   task.summary = &apos;Pick it up&apos;;
*     
*   var args = new blackberry.invoke.TaskArguments(task);
*   args.view = 0;
*    
*   blackberry.invoke.invoke(blackberry.invoke.APP_TASKS, args);    
* &lt;&sol;script&gt;
*/
blackberry.invoke.TaskArguments = function(task) { };

/**
* New View 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.invoke.TaskArguments.VIEW_NEW = 0;

/**
* Edit View 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.invoke.TaskArguments.VIEW_EDIT = 1;

/**
* Value that specifies what kind of view you want to view the task in Tasks application. 
* @type Number
* @BB50+
* @RIPPLE
*/
blackberry.invoke.TaskArguments.prototype.view = { };


