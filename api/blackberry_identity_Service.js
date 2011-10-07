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
*       A Service object will describe different settings for different kinds of accounts on the BlackBerry device.  A user might have Hotmail account, a Unite account, and a BES account on the device.
*       Each service entry will describe the details of that specific service and will also provide a class to be passed into the constructors of PIM objects that could be saved specifically to their intended service.
*       The Service object is an instance object that cannot be created using the new keyword.
*     </p></div>
* @toc {Identity} Service 
* @BB50+
* @RIPPLE
* @namespace The Service object represents a service entry that describes specifics for a service on a BlackBerry smartphone.
* @featureID blackberry.identity
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Enumerate all of our services on the device.
*   var services = blackberry.identity.getServiceList();
*   for (var i = 0; i &lt; services.length; i++) {
*     if (services[i].type == services[i].TYPE_CONTACT) {
*       alert(&quot;Name: &quot; + services[i].name);
*     }
*   }
* &lt;&sol;script&gt;
*/
blackberry.identity.Service = { };

/**
* Constant denoting a type of EMAIL 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.identity.Service.TYPE_EMAIL = 0;

/**
* Constant denoting a type of CALENDAR 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.identity.Service.TYPE_CALENDAR = 1;

/**
* Constant denoting a type of CONTACT 
* @type Number
* @constant
* @BB50+
* @RIPPLE
*/
blackberry.identity.Service.TYPE_CONTACT = 2;

/**
* Email address associated with the service. 
* @type String
* @readOnly
* @BB50+
* @RIPPLE
*/
blackberry.identity.Service.prototype.emailAddress = { };

/**
* Name of the service 
* @type String
* @readOnly
* @BB50+
* @RIPPLE
*/
blackberry.identity.Service.prototype.name = { };

/**
* Specifies the type of service.  This can be one of Calendar, Email or Contacts. 
* @type Number
* @readOnly
* @BB50+
* @RIPPLE
*/
blackberry.identity.Service.prototype.type = { };


