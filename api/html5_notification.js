/*
* Copyright 2010-2012 Research In Motion Limited.
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
 * @toc {Notification} HTML5 Notifications
 * @learns {Sample - Using HTML5 Notifications} https://github.com/blackberry/BB10-WebWorks-Samples/blob/master/notify Sample that demonstrates how to use the HTML5 Notification API [BlackBerry on GitHub].
 * @permission post_notification Permits your application to create notifications.
 * @class The Notification API allows you to create a notification object in Universal inbox for BlackBerry 10.
 * @constructor Constructor for a new window.Notification object.
 * @param {String} title Mandatory. Used as title text in Universal inbox entries.
 * @param {Object} [options] The options object supplies more information needed to create the notification.
 * @param {String} [options.body] Used as subtitle text in Universal inbox entries.
 * @param {String} [options.tag] Tag of the notification. If provided, it can be used to close the notification by static method Notification.remove(). Only one notification with the given tag can exist in the UIB. A newly created notification with the same tag will replace the existing notification.
 * @param {String} [options.target] Target of application that will be launched if the user opens the notification in Universal inbox. This property should match the identifier returned by the invocation framework when the target application registered with the invocation framework. Value is passed on to the Invocation Framework as target. If the user doesn't specify options.target, the identifier of type "Application" of the current application will be used which means the current application will be invoked if the user opens the notification; if there is no valid invocation identifier defined, no application will be invoked.
 * @param {String} [options.targetAction] Action as registered with invocation framework. Value is passed on to the Invocation Framework as action. If the user doesn't specify options.targetAction, "bb.action.OPEN" will be used.
 * @param {String} [options.payload] Payload to send to the invoked app. Data must be Base64 encoded. Value is passed on to the Invocation Framework as data.
 * @param {String} [options.payloadURI] URI to payload data to send to the invoked app. Value is passed on to the Invocation Framework as uri. Example: "file://path/to/file".
 * @param {String} [options.payloadType] The MIME type of URI or payload data to send to the invoked app. Value is passed on to the Invocation Framework as type. Example: "text/plain".
 * @param {String} [options.onclick] It is ignored for WebWorks application. Instead, use oninvoked event handler, which will be triggered when the user opens the notification in UIB.
 * @param {String} [options.onshow] It will be triggered if the notification is created successfully; or onerror callback will be triggered.
 * @param {String} [options.onerror] It will be triggered if the notification could not be created; or onshow callback will be triggered.
 * @param {String} [options.onclose] It is ignored for WebWorks application as it has no clear usage of it.
 * @BB10X
 * @example
 * &lt;script type=&quot;text&#47;javascript&quot;&gt;
 *
 *   // Create the simplest notification
 *   new Notification("You have a simple notification");
 *
 *
 *   // Create a notification with body
 *   new Notification("The title", {body: "The body"});
 *
 *
 *   // Create a notification with events
 *   var title = "You have a notification";
 *   var options = {
 *       body : "Some details",
 *       onshow : function() { alert("The notification was created successfully!"); },
 *       onerror : function() { alert("The notification could not be created!"); }
 *   }
 *   var n = new Notification(title, options);
 *
 *
 *   // Create notifications with same tag for a chatroom session
 *   // Bob says "Hi"
 *   new Notification("Bob: Hi", { tag: 'chat_Bob' });
 *
 *   // Bob says "Are you free this afternoon?"
 *   // as only one notification will exist,
 *   // the application creates another notification with the combined message using the same tag
 *   new Notification("Bob: Hi / Are you free this afternoon?", { tag: 'chat_Bob' });
 *
 *
 *   // Create a notification with invocation information
 *   // and use invoked event to determine and do something for that notification
 *   var title = "A notification for something";
 *   var options = {
 *       targetAction : "bb.action.DoSomethingForNotification", // If no target is specified, it will invoke the current application
 *       payloadURI : "some link"
 *   }
 *
 *   // Create the notification
 *   new Notification(title, options);
 *
 *   // Register to listen to invoked event
 *   blackberry.event.addEventListener("invoked", onInvoked);
 *
 *   // Handle invoked event
 *   function onInvoked(onInvokedInfo) {
 * 	     // Do something if the action is "BB.action.DoSomethingForNotification"
 * 	     if(onInvokedInfo.action == "BB.action.DoSomethingForNotification") {
 * 	         doSomething(onInvokedInfo.uri); // onInvokedInfo.uri is "some link"
 *       }
 *   }
 *
 *
 *   // Create a notification with invocation information that invokes other application
 *   var title = "A notification will invoke browser";
 *   var options = {
 *       target : "sys.browser",
 *       targetAction : "bb.action.OPEN",
 *       payloadType : "text/html",
 *       payloadURI : "the link"
 *   }
 *
 *   // Create the notification
 *   // and when the user opens the notification item in UIB, it will invoke browser with "the link"
 *   new Notification(title, options);
 *
 * &lt;&#92;script&gt;
 */
Notification = {};

/**
 * This member method will delete the notification from the UIB notifications area automatically. UIB notifications will also be removed manually if the user clicks it.
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&#47;javascript&quot;&gt;
 *   var n = new Notification("You have a simple notification");
 *
 *   // Automatically close the notification after an hour
 *   setTimeout("n.close()", 1000 * 60 * 60);
 * &lt;&#92;script&gt;
*/
Notification.prototype.close = function() {};

/**
 * This static method will delete the notification from the UIB notifications area automatically. UIB notifications will also be removed manually if the user clicks it.
 * @param {String} tag Mandatory. Used as the Id of the notification for deleting it. tag is optional property of options object that is passed to Notification constructor; if it is omitted, the user won't be able to use this static function "remove" to delete the notification.
 * @returns {void}
 * @example
 * &lt;script type=&quot;text&#47;javascript&quot;&gt;
 *   new Notification("You have a tagged notification", { tag: 'tagged_notification' });
 *
 *   // Even the application is closed and the above object is destroyed,
 *   // you can still remove the notification
 *   Notification.remove('tagged_notification');
 * &lt;&#92;script&gt;
 * @BB10X
*/
Notification.remove = function() {};

/**
 * The w3c requestPermission function. As for a WebWorks application, permission is always granted, this function will just do nothing.
 * @param {function} [callback] The callback required by w3c requestPermission function. In WebWorks it is ignored.
 * @returns {void}
 * @BB10X
*/
Notification.requestPermission = function() {};

/**
* The w3c static permission attribute returns permission for showing notification for a given origin. As for a WebWorks application, permission is always granted, the value is always "granted".
* @type String
* @BB10X
*/
Notification.permission = {};
