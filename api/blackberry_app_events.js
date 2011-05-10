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
 * @toc {System} Application Event
 * @featureid blackberry.app.event
 * @namespace The Application Event object allows you to access events triggered by the application
  * <p/>
 * The Application Event Object is static; all of its functions and properties are used directly from the object.
 * @learns {Sample - Swipe Down Menu} http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Sample-Code-Swipe-down-menu-for-BlackBerry-WebWorks-SDK-for/ta-p/943521  Sample that demonstrates how to add a swipe-down menu to your PlayBook application using the onSwipeDown function [BlackBerry Developer Resource Center]. 
 */
blackberry.app.event = {
	
	/**
	 * @function
	 * @description Assigns a listener that is called when the application goes to the background.
	 * <p/>
	 * This event is dispatched whenever the application goes to the background, but has not ended. Only one function can be assigned to this event. To unregister the callback, call the onBackground method and pass in null for the callback parameter.
	 * <p/>Note: The BlackBerry PlayBook's "Application Behavior" setting has an impact on when onBackground gets dispatched. When "Application Behavior" is set to "Default", onBackground does not get dispatched until another application goes fullscreen.  When "Application Behavior" is set to "Showcase", onBackground does not get dispatched because all open applications stay active. When "Application Behavior" is set to "Paused", onBackground gets dispatched once the application is sent to the background. 	
	 * @callback {function} onBackgroundCallback Function to be called when the application goes to the background. Expected signature: function onBackgroundCallback().
	 * @PB10 
	 * @BB50+
	 * @example
	 * &lt;script type="text/javascript"&gt;
	 * function onBackgroundCallback() {
	 * 	alert("Going to the background!");
	 * }
	 *
	 * function notifyMeWhenMinimized() {
	 * 	blackberry.app.event.onBackground(onBackgroundCallback);
	 * }
	 * 
	 * notifyMeWhenMinimized();
	 * &lt;/script&gt;
	 */
	onBackground : function(onBackgroundCallBack){},
	
	/**
	 * @function
	 * @description Assigns a listener that is called when the application goes to the foreground.
	 * <p/>
	 * This event is dispatched whenever the application comes to the foreground, for example, when the user re-opens the application from the application list. Only one function can be assigned to this event. To unregister the callback call the onForeground method and pass in null for the callback parameter.
	 * <p/>Note: The BlackBerry PlayBook's "Application Behavior" setting has an impact on when onForeground gets dispatched. Refer to {@link blackberry.app.event.onBackground} documentation for details.	
	 * @callback {function} onForegroundCallback Function to be called when the application goes to the foreground. Expected signature: function onForegroundCallback().
	 * @PB10
	 * @BB50+
	 */
	onForeground : function(onForegroundCallback){},
	
	/**
	 * @function
	 * @description Assigns a listener that is called when a user swipes down from the top bezel of the BlackBerry PlayBook onto the screen.
	 * <p/>
	 * This event is dispatched when a user swipes down from the top bezel of the BlackBerry PlayBook onto the screen. Only one function can be assigned to this event. To unregister the callback call the onSwipeDown method and pass in null for the callback parameter. 	
	 * @callback {function} onSwipeDownCallback Function to be called when the swipe down action occurs. Expected signature: function onSwipeDownCallback().
	 * @PB10
	 */
	onSwipeDown : function(onSwipeDownCallback) {},
	
	/**
	 * @function
	 * @description Assigns a listener for when when a user begins to swipe from the top bezel of the BlackBerry PlayBook into the screen.
	 * <p/>
	 * This event is dispatched when the user starts a swipe from the top bezel of the BlackBerry PlayBook. Only one function can be assigned to this event. To unregister the callback call the onSwipeStart method and pass in null for the callback parameter.
	 * @callback {function} onSwipeStartCallback Function to be called when the user starts a swipe from the top bezel of the PlayBook. Expected signature: function onSwipeStartCallback().
	 * @PB10
	 */
	onSwipeStart : function(onSwipeStartCallback) {}

};