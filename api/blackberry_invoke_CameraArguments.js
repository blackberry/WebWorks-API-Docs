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
*       The CameraArguments object must be created as an instance using the new keyword.
*     </p></div>
* @toc {Invoke} CameraArguments 
* @BB50+
* @PB10+
* @RIPPLE
* @class The CameraArguments object is an instance object, and is used as a parameter to the invoke() method when invoking the Camera application or Recorder application.
* @featureID blackberry.invoke
* @featureID {BB50+} blackberry.invoke.CameraArguments
* @constructor Constructor for a new CameraArguments object. 
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;    
*   var args = new blackberry.invoke.CameraArguments();
*   args.view = 1; &sol;&sol; Video Recorder
*      
*   blackberry.invoke.invoke(blackberry.invoke.APP_CAMERA, args);  &sol;&sol; Video Recorder Application
* &lt;&sol;script&gt;
*/
blackberry.invoke.CameraArguments = function() { };

/**
* Photo Camera 
* @type Number
* @constant
* @PB10+
* @BB50+
* @RIPPLE
*/
blackberry.invoke.CameraArguments.VIEW_CAMERA = 0;

/**
* Video Recorder 
* @type Number
* @constant
* @BB50+
* @PB10+
* @RIPPLE
*/
blackberry.invoke.CameraArguments.VIEW_RECORDER = 1;

/**
* Value that specifies what kind of camera application you want to open. 
* @type Number
* @BB50+
* @PB10+
* @RIPPLE
*/
blackberry.invoke.CameraArguments.prototype.view = { };


