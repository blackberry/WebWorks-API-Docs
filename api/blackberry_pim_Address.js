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
*       The Address object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {PIM} Address 
* @BB50+
* @class The Address object represents an address used for a contact or for use with launching the BlackBerry Maps application.
* @featureID blackberry.pim.Address
* @constructor Constructor for a new Address object. 
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   if (blackberry.system.hasCapability(&quot;location.maps&quot;)) {
*     &sol;&sol; Create our address 
*     var homeAddress = new blackberry.pim.Address();
*     homeAddress.country = &quot;Canada&quot;;
*     homeAddress.stateProvince = &quot;Ontario&quot;;
*     homeAddress.city = &quot;Waterloo&quot;;  
* 
*     &sol;&sol; Open our maps 
*     var args = new blackberry.invoke.MapsArguments(homeAddress);
*     blackberry.invoke.invoke(blackberry.invoke.APP_MAPS, args);  &sol;&sol; Maps
*   }
* &lt;&sol;script&gt;
*/
blackberry.pim.Address = function() { };

/**
* Contains the country of a particular address. 
* @type String
* @BB50+
*/
blackberry.pim.Address.prototype.country = { };

/**
* Contains the street of a particular address. 
* @type String
* @BB50+
*/
blackberry.pim.Address.prototype.address1 = { };

/**
* Contains the extra street information of a particular address. 
* @type String
* @BB50+
*/
blackberry.pim.Address.prototype.address2 = { };

/**
* Contains the locality information of a particular address, for example a city, county, town. 
* @type String
* @BB50+
*/
blackberry.pim.Address.prototype.city = { };

/**
* Contains the postal code or zip code of a pariticular address. 
* @type String
* @BB50+
*/
blackberry.pim.Address.prototype.zipPostal = { };

/**
* Contains the region information (such as province, state, or territory) of a particular address. 
* @type String
* @BB50+
*/
blackberry.pim.Address.prototype.stateProvince = { };


