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
*       The Contact object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {PIM} Contact 
* @BB50+
* @RIPPLE
* @class The Contact object represents a contact in the BlackBerry PIM. This object can be created to be used when launching the new contact screen using the invoke API or for direct interaction with the PIM storage itself.
* @featureID blackberry.pim.Contact
* @featureID blackberry.pim.Address
* @featureID blackberry.identity
* @featureID blackberry.find
* @constructor Constructor for a new Contact object. 
* @param {blackberry.identity.Service} [service] optional parameter specifying which service to create this contact for.  If not provided, the default device service is used.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt; 
*   &sol;&sol; Create the contact  
*   var contact = new blackberry.pim.Contact();  
*   contact.firstName = &quot;John&quot;;  
*   contact.lastName = &quot;Doe&quot;;  
*   contact.homePhone = &quot;555-555-5555&quot;;  
*   contact.save(); 
* &lt;&sol;script&gt;
*/
blackberry.pim.Contact = function(service) { };

/**
* This function looks up the contacts that match the expression provided. 
* @param {blackberry.find.FilterExpression} [fieldFilter] Optional parameter that defines the search criteria for the find.  If no value is provided the method will return all the contacts on the device.
* @param {String} [orderBy] Optional &apos;orderBy&apos; parameter specifying the field which the results will be sorted by. If &apos;isAscending&apos; is not supplied or &apos;isAscending&apos; is true, the sort results will be in an ascending order. If &apos;isAscending&apos; is false, the sort results will be in a descending order.
* @param {Number} [maxReturn] Optional integer parameter specifying the maximum number of results to return from the find.  If not supplied or set to -1, it will return all results found.
* @param {blackberry.identity.Service} [service] Optional parameter specifying which service you wish to search for contacts.  If not supplied, the default service for contacts will be used.
* @param {Boolean} [isAscending] optional &apos;isAscending&apos; parameter specifying whether the sort order is ascending or descending. If not supplied or set to true, the results sorted by the field specified by &apos;orderBy&apos; will be in an ascending order. If set to false, the sort results will be in a descending order. If no &apos;orderBy&apos; value is specified, &apos;isAscending&apos; is neglected.
* @returns {Contact[]}
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.find = function(fieldFilter,orderBy,maxReturn,service,isAscending) { };

/**
* This function sets the picture for the contact. 
* @param {Blob} picture The blob object represents the image.
* @returns {void}
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.setPicture = function(picture) { };

/**
* This method will save the changes made to the contact object. 
* @returns {void}
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.save = function() { };

/**
* This method will remove a contact from the PIM storage. 
* @returns {void}
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.remove = function() { };

/**
* Contains the title of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.title = { };

/**
* Contains the first name of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.firstName = { };

/**
* Contains the last name of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.lastName = { };

/**
* Contains the home address of the contact. 
* @type Address
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.homeAddress = { };

/**
* Contains the work address of the contact. 
* @type Address
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.workAddress = { };

/**
* Contains the first email of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.email1 = { };

/**
* Contains the second email of the contact. After save() is called, if there is no email1 specified, email2 will replace email1 and email2 will be empty. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.email2 = { };

/**
* Contains the third email for the contact. After save() is called, if there is no email1 or email2 specified, email3 will replace email1 or email2 and email3 will be empty. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.email3 = { };

/**
* Contains the company name of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.company = { };

/**
* Contains the job title of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.jobTitle = { };

/**
* Contains the home telephone number of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.homePhone = { };

/**
* Contains the second home telephone number of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.homePhone2 = { };

/**
* Contains the work telephone number of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.workPhone = { };

/**
* Contains the second work telephone number of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.workPhone2 = { };

/**
* Contains the mobile telephone number of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.mobilePhone = { };

/**
* Contains the fax number of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.faxPhone = { };

/**
* Contains the pager number of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.pagerPhone = { };

/**
* Contains other telephone number of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.otherPhone = { };

/**
* Contains any note or description related to the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.note = { };

/**
* Contains the web page URL of the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.webpage = { };

/**
* The date of the contact&apos;s birthday. 
* @type Date
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.birthday = { };

/**
* The date of the contact&apos;s anniversary. 
* @type Date
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.anniversary = { };

/**
* The first user-defined field that contains extra information for the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.user1 = { };

/**
* The second user-defined field that contains extra information for the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.user2 = { };

/**
* The third user-defined field that contains extra information for the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.user3 = { };

/**
* The fourth user-defined field that contains extra information for the contact. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.user4 = { };

/**
* The contact&apos;s device PIN. 
* @type String
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.pin = { };

/**
* The unique identifier for this contact. 
* @type String
* @readOnly
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.uid = { };

/**
* It contains the base64-encoded string of the image object of the contact. 
* @type String
* @readOnly
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.picture = { };

/**
* The list of categories associated to the contact. 
* @type {String[]}
* @BB50+
* @RIPPLE
*/
blackberry.pim.Contact.prototype.categories = { };


