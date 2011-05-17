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
* @toc {System} Network
* @namespace The blackberry object is the root of all BlackBerry specific JavaScript functionality. blackberry.network is available by default in the regular browser.
*/
blackberry = { 
        
       /**
        * @field
        * @description Returns the wireless network on which the BlackBerry device is communicating. 
        * @type String
        * @readOnly
        * @BB50+
        * @example
        * &lt;script type=&quot;text&sol;javascript&quot;&gt;
        *   alert(&quot;You are on the &quot; + blackberry.network + &quot; Network&quot;);
        * &lt;&sol;script&gt;
        */
        network : undefined
};

