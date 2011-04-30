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
*       The AddressBookArguments object must be created as an instance using the new keyword.
*     </p></div>
* @toc {Invoke} AddressBookArguments 
* @BB50+
* @class The AddressBookArguments object is an instance object, and is used as a parameter to the invoke() method when invoking the Address Book application.
* @featureID blackberry.invoke
* @featureID blackberry.invoke.AddressBookArguments
* @featureID blackberry.pim.Contact
* @constructor Constructor for a new AddressBookArguments object. 
* @param {blackberry.pim.Contact} [contact] Contact to view in Contacts application.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;  
*   var contact = new blackberry.pim.Contact();
*   contact.firstName = &apos;Nick&apos;;
*   contact.lastName = &apos;Scott&apos;;
*   
*   var args = new blackberry.invoke.AddressBookArguments(contact);
*   args.view = 0;
*    
*   blackberry.invoke.invoke(blackberry.invoke.APP_ADDRESSBOOK, args);  
* &lt;&sol;script&gt;
*/
blackberry.invoke.AddressBookArguments = function(contact) { };

/**
* VIEW_NEW will launch the address book with the &apos;add contact&apos; window; if a contact object is specified, it will open that contact in the &apos;edit contact&apos; window of the address book.  
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.AddressBookArguments.VIEW_NEW = 0;

/**
* VIEW_COMPOSE will launch the address book with the &apos;message composing&apos; window. It&apos;s not allowed to specify a contact with VIEW_COMPOSE; if a contact object is specified, it will throw an exception. 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.AddressBookArguments.VIEW_COMPOSE = 1;

/**
* VIEW_DISPLAY will launch the address book with the &apos;view contact&apos; window displaying the specified contact; if a contact object is not specified, it will throw an exception. 
* @type Number
* @constant
* @BB50+
*/
blackberry.invoke.AddressBookArguments.VIEW_DISPLAY = 2;

/**
* Value that specifies what kind of view you want to view the contact. 
* @type Number
* @BB50+
*/
blackberry.invoke.AddressBookArguments.prototype.view = { };


