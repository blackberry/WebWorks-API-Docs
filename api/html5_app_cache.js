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
 * The applicationCache object is your programmatic access to the browser's app cache.
 * <br>cache = window.applicationCache (In a window.)
 * <br>   Returns the ApplicationCache object that applies to the active document of that Window.
 * <br>cache = self.applicationCache (In a shared worker.)
 * <br>   Returns the ApplicationCache object that applies to the current shared worker. [WEBWORKERS] 
 * @toc {Cache} HTML5 ApplicationCache
 */

ApplicationCache ={

		/**
		* @constant
		* @default 0
		* @desc The ApplicationCache object's cache host is not associated with an application cache at this time.
		* @type unsigned short
		* @BB60+
		* @PB10
		*/ 
		const UNCACHED: 0;
		
		/**
		* @constant
		* @default 1
		* @desc The ApplicationCache object's cache host is associated with
		* an application cache whose application cache group's update status is idle,
		* and that application cache is the newest cache in its application cache group,
		* and the application cache group is not marked as obsolete.
		* @type unsigned short
		* @BB60+
		* @PB10
		*/ 
		const IDLE: 1,

		/**
		* @constant
		* @default 2
		* @desc The ApplicationCache object's cache host is associated with an application cache
		* whose application cache group's update status is checking.
		* @type unsigned short
		* @BB60+
		* @PB10
		*/ 
		const CHECKING: 2,
		
		/**
		* @constant
		* @default 3
		* @desc The ApplicationCache object's cache host is associated with an application cache
		* whose application cache group's update status is downloading.
		* @type unsigned short
		* @BB60+
		* @PB10
		*/ 
		const DOWNLOADING: 3,

		/**
		* @constant
		* @default 4
		* @desc The ApplicationCache object's cache host is associated with an application cache
		* whose application cache group's update status is idle, and whose application cache group
		* is not marked as obsolete, but that application cache is not the newest cache in its group.
		* @type unsigned short
		* @BB60+
		* @PB10
		*/ 
		const UPDATEREADY: 4,

		/**
		* @constant
		* @default 5
		* @desc The ApplicationCache object's cache host is associated with an application cache
		* whose application cache group is marked as obsolete.
		* @type unsigned short
		* @BB60+
		* @PB10
		*/ 
		const OBSOLETE: 5,

		/**
		 * @desc 
		 *The current state of the application cache that the ApplicationCache object's cache host is associated with, if any.
		 * <br>This must be the appropriate value from the following list:
		 *    <li>UNCACHED (numeric value 0)
		 *    <li>IDLE (numeric value 1) 
		 *    <li>CHECKING (numeric value 2)
		 *    <li>DOWNLOADING (numeric value 3)
		 *    <li>UPDATEREADY (numeric value 4)
		 *    <li>OBSOLETE (numeric value 5)
		 * @readonly
		 * @type unsigned short
		 * @BB60+
		 * @PB10
		 * @example
		 * var appCache = window.applicationCache;
		 * switch (appCache.status) {
		 * case appCache.UNCACHED:    // UNCACHED == 0
		 * 	return 'UNCACHED';
		 * 	break;
		 * case appCache.IDLE: 		  // IDLE == 1
		 * 	return 'IDLE'; 
		 * 	break;
		 * case appCache.CHECKING:    // CHECKING == 2
		 *	return 'CHECKING';
		 * 	break;
		 * case appCache.DOWNLOADING: // DOWNLOADING == 3
		 * 	return 'DOWNLOADING';
		 * 	break;
		 * case appCache.UPDATEREADY: // UPDATEREADY == 5
		 * 	return 'UPDATEREADY';
		 * 	break;
		 * case appCache.OBSOLETE:    // OBSOLETE == 5
		 * 	return 'OBSOLETE';
		 * 	break;
		 * default:
		 * 	return 'UKNOWN CACHE STATUS';
		 * 	break;
		 * };
		 */
		status :,
		
		/**
		 * @desc  Invokes the application cache download process.
		 * <br>Throws an INVALID_STATE_ERR exception if there is no application cache to update.<br>
		 * @BB60+
		 * @PB10
		 * @example
		 * var appCache = window.applicationCache;
		 * appCache.update(); // Attempt to update the user's cache.
		 * ...
		 * if (appCache.status == window.applicationCache.UPDATEREADY) {
		 *     appCache.swapCache();  // The fetch was successful, swap in the new cache.
		 * }
		 */
		update: function() {},
			
		/**
		 * @desc  Switches to the most recent application cache, if there is a newer one.
		 * If there isn't, throws an INVALID_STATE_ERR exception.
		 * <br>This does not cause previously-loaded resources to be reloaded; for example,
		 * images do not suddenly get reloaded and style sheets and scripts do not get reparsed or reevaluated.
		 * The only change is that subsequent requests for cached resources will obtain the newer copies.<br>
		 * @BB60+
		 * @PB10
		 * @example
		 * var appCache = window.applicationCache;
		 * appCache.update(); // Attempt to update the user's cache.
		 * ...
		 * if (appCache.status == window.applicationCache.UPDATEREADY) {
		 *     appCache.swapCache();  // The fetch was successful, swap in the new cache.
		 * }
		 */
		swapCache: function() {},
		
		/**@event
		 * @desc  Sent when the cache update process begins.<br>
		 * @BB60+
		 * @PB10
		 * @example 
		 * function handleCacheEvent(e) {
		 *     //...
		 * }
		 * // Checking for an update. Always the first event fired in the sequence.
		 * appCache.addEventListener('checking', handleCacheEvent, false);
		 */
        checking:,

		/**
		 * @event
		 * @desc  Sent when an error occurs.<br>
		 * @BB60+
		 * @PB10
		 * @example 
		 * function handleCacheErro(e) {
		 *     alert('Error: Cache failed to update!');
		 * };
		 * // The manifest returns 404 or 410, the download failed,
		 * // or the manifest changed while the download was in progress.
		 * appCache.addEventListener('error', handleCacheError, false);
		 */
        error:,
		   
		/**
		 * @event
		 * @desc  Sent when the update process finishes but the manifest file does not change.<br>
		 * @BB60+
		 * @PB10
		 * @example 
		 * function handleCacheEvent(e) {
		 *     //...
		 * }
		 * // Fired after the first download of the manifest.
		 * appCache.addEventListener('noupdate', handleCacheEvent, false);
		 */
        noupdate:,
		   
		/**
		 * @event
		 * @desc  Sent when the update process begins downloading resources in the manifest file.<br>
		 * @BB60+
		 * @PB10
		 * @example 
		 * function handleCacheEvent(e) {
		 *     //...
		 * }
		 * // An update was found. The browser is fetching resources.
		 * appCache.addEventListener('downloading', handleCacheEvent, false);
		 */
        downloading:,
		   
		/**
		 * @event
		 * @desc  Sent when each resource in the manifest file begins to download.<br>
		 * @BB60+
		 * @PB10
		 * @example 
		 * function handleCacheEvent(e) {
		 *     //...
		 * }
		 * // Fired for each resource listed in the manifest as it is being fetched.
		 * appCache.addEventListener('progress', handleCacheEvent, false);
		 */
        progress:,
		   
		/**
		 * @event
		 * @desc  Sent when there is an existing application cache, the update process finishes,
		 * and there is a new application cache ready for use.<br>
		 * @BB60+
		 * @PB10
		 * @example 
		 * function handleCacheEvent(e) {
		 *     //...
		 * }
		 * // Fired when the manifest resources have been newly redownloaded.
		 * appCache.addEventListener('updateready', handleCacheEvent, false);
		 */
        updateready:,
		   
		/**
		 * @event
		 * @desc  Sent when the resources listed in the manifest have been downloaded, 
		 * and the application is now cached.<br>
		 * @BB60+
		 * @PB10
		 * @example 
		 * function handleCacheEvent(e) {
		 *     //...
		 * }
		 * // Fired after the first cache of the manifest.
		 * appCache.addEventListener('cached', handleCacheEvent, false);
		 */
        cached:,
		   
		/**
		 * @event
		 * @desc  Sent when the manifest was found to have become a 404 or 410 page, 
		 * so the application cache is being deleted.<br>
		 * @BB60+
		 * @PB10
		 * @example 
		 * function handleCacheEvent(e) {
		 *     //...
		 * }
		 * // Fired if the manifest file returns a 404 or 410.
		 * // This results in the application cache being deleted
		 * appCache.addEventListener('obsolete', handleCacheEvent, false);
		 */
        obsolete:
};
