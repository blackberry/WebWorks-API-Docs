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
blackberry.message = { };


/**
* <div><p>
*       The Message object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {Message} Message 
* @BB50+
* @class The Email Message object represents a message on the BlackBerry device. This class can be created to be used when launching the new message screen using the invoke API or for direct interaction with the message list storage itself.
* @featureID blackberry.message
* @featureID blackberry.identity
* @featureID blackberry.find
* @constructor The constructor will create a new instance of the Message for the proper targeted recipient. 
* @param {blackberry.identity.Service} [service] optional parameter that specifies the type of service that is expected.  This value can specify the email service to create an email message for.  If no parameter is specified the default email service will be used.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   var message = new blackberry.message.Message();
*   message.toRecipients = &quot;noone@blackberryWidgets.com&quot;;
*   message.subject = &quot;Hello&quot;;
*   message.body = &quot;World&quot;;
*   message.send();
* &lt;&sol;script&gt;
*/
blackberry.message.Message = function(service) { };

/**
* Constant representing the UNKNOWN status. The current status cannot be determined. 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.STATUS_UNKNOWN = -1;

/**
* Constant representing the SAVED status 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.STATUS_SAVED = 0;

/**
* Constant representing the DRAFT status 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.STATUS_DRAFT = 1;

/**
* Constant representing the SENT status 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.STATUS_SENT = 2;

/**
* Constant representing the ERROR status 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.STATUS_ERROR_OCCURED = 3;

/**
* Constant representing a HIGH priority 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.PRIORITY_HIGH = 0;

/**
* Constant representing a MEDIUM priority 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.PRIORITY_MEDIUM = 1;

/**
* Constant representing a LOW priority 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.PRIORITY_LOW = 2;

/**
* Constant representing the INBOX folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_INBOX = 0;

/**
* Constant representing the SENT folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_SENT = 1;

/**
* Constant representing the DRAFT folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_DRAFT = 2;

/**
* Constant representing the OUTBOX folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_OUTBOX = 3;

/**
* Constant representing the DELETED folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_DELETED = 4;

/**
* Constant representing an OTHER folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_OTHER = 5;

/**
* This method looks up the messages that match the expression provided. 
* @param {blackberry.find.FilterExpression} [filter] optional parameter that defines the search criteria for the find.  If no value is provided the method will return all the Messages on the device for the service provided.
* @param {Number} [maxReturn] optional integer parameter specifying the maximum number of results to return from the find.  If no value is specified, it will return all results found.
* @param {blackberry.identity.Service} [service] optional parameter to define which service you wish to search for your messages. If not provided the default service for messages will be used.
* @returns {Message[]}
* @BB50+
*/
blackberry.message.Message.find = function(filter,maxReturn,service) { };

/**
* This method will save the changes made to the message object. 
* @returns {void}
* @BB50+
*/
blackberry.message.Message.prototype.save = function() { };

/**
* This method will send the message to its recipients. 
* @returns {void}
* @BB50+
*/
blackberry.message.Message.prototype.send = function() { };

/**
* This method will remove a message from the PIM storage. 
* @returns {void}
* @BB50+
*/
blackberry.message.Message.prototype.remove = function() { };

/**
* Contains a list of the addresses that this message should be sent to; they are delimited by any white spaces (for example, space or &apos;&bsol;n&apos;), a semicolon, or a comma. 
* @type String
* @BB50+
*/
blackberry.message.Message.prototype.toRecipients = { };

/**
* Contains a list of the addresses that this message should be cc&apos;d to; they are delimited by any white spaces (for example, space or &apos;&bsol;n&apos;), a semicolon, or a comma. 
* @type String
* @BB50+
*/
blackberry.message.Message.prototype.ccRecipients = { };

/**
* Contains a list of the addresses that this message should be bcc&apos;d to; they are delimited by any white spaces (for example, space or &apos;&bsol;n&apos;), a semicolon, or a comma. 
* @type String
* @BB50+
*/
blackberry.message.Message.prototype.bccRecipients = { };

/**
* Contains the subject of the message. 
* @type String
* @BB50+
*/
blackberry.message.Message.prototype.subject = { };

/**
* Contains the body of the message. 
* @type String
* @BB50+
*/
blackberry.message.Message.prototype.body = { };

/**
* Contains the address that this message is sent from. This field is read-only; it is automatically filled in for created messages once they are sent. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.message.Message.prototype.from = { };

/**
* Contains the address that the reply to this message should be sent to. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.message.Message.prototype.replyTo = { };

/**
* Specifies which folder this message is in. This field is read-only. Created messages that are sent are put in the Sent folder. Can be one of the the FOLDER_* constants. 
* @type Number
* @BB50+
*/
blackberry.message.Message.prototype.folder = { };

/**
* Specifies the priority of the message. Can be one of the PRIORITY_* constants. 
* @type Number
* @BB50+
*/
blackberry.message.Message.prototype.priority = { };

/**
* Specifies the status of the message. Can be one of the STATUS_* constants. 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.message.Message.prototype.status = { };

/**
* Contains the unique identifier for this message. 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.message.Message.prototype.uid = { };


