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
*       The MapsArguments object must be created as an instance using the new keyword.
*     </p></div>
* @toc {Invoke} MapsArguments 
* @BB50+
* @class The MapsArguments object is an instance object, and is used as a parameter to the invoke() method when invoking the Maps application.
* @featureID blackberry.invoke
* @featureID blackberry.invoke.MapsArguments
* @featureID blackberry.pim.Address
* @constructor Constructor for a new MapsArguments object. 
* @param {Number} latitude The latitude for the BlackBerry Maps Application to startup with.
* @param {Number} longitude The longitude for the BlackBerry Maps Application to startup with.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;  
*    var args = new blackberry.invoke.MapsArguments(43.26, -80.30);
*    blackberry.invoke.invoke(blackberry.invoke.APP_MAPS, args);
* &lt;&sol;script&gt;
*/
blackberry.invoke.MapsArguments = {
    
    /**
     * @function
     * @constructedBy blackberry.invoke.MapsArguments
     * @BB50+
     * @description Creates a new MapsArguments object.
     * @param {blackberry.pim.Address} address The address for the BlackBerry Maps Application to startup with.
     */
    addrConstructor : undefined,
    
    /**
     * @function
     * @constructedBy blackberry.invoke.MapsArguments
     * @BB50+
     * @description Creates a new MapsArguments object.
     * @param {String} locationDocument The location for the BlackBerry Maps Application to startup with.
     */
    strConstructor : undefined,
    
    /**
     * @function
     * @constructedBy blackberry.invoke.MapsArguments
     * @BB50
     * @description Creates a new MapsArguments object.
     * @param {Document} locationDocument The location for the BlackBerry Maps Application to startup with.
     */
    docConstructor : undefined
};


