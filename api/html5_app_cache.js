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
 * @class The applicationCache object is your programmatic access to the browser's app cache.
 * @notice {Warning (BlackBerry 6.0 Notice):}
 * Support for Application Cache on BlackBerry Smartphones starts with 6.0.0.418
 * @toc {Cache} HTML5 ApplicationCache
 */

ApplicationCache ={
        
        /**
         * @constructedBy window.applicationCache 
         * @field
         * @description Returns the ApplicationCache object that applies to the active document of that Window.
         * @example 
         * &lt;script type="text/javascript"&gt;
         *   var appCache = window.applicationCache;
         * &lt;/script&gt;
         * @BB60+
         * @PB10
         */
        windowConstructor : undefined,
        
        /**
         * @constructedBy worker.applicationCache 
         * @field
         * @description Returns the ApplicationCache object that applies to the current shared {@link Worker#applicationCache}.
         * @example 
         * &lt;script type="text/javascript"&gt;
         *   var worker = new Worker('doWork.js');
         * &lt;/script&gt;
         *
         *doWork.js (the worker):
         *
         *   var appCache = self.applicationCache()
         * @BB60+
         * @PB10
         */
        workerConstructor : undefined,

		/**
		* @constant
		* @default 0
		* @description The ApplicationCache object's cache host is not associated with an application cache at this time.
		* @type Number
		* @BB60+
		* @PB10
		*/ 
		UNCACHED: 0,
		
		/**
		* @constant
		* @default 1
		* @description The ApplicationCache object's cache host is associated with
		* an application cache whose application cache group's update status is idle,
		* and that application cache is the newest cache in its application cache group,
		* and the application cache group is not marked as obsolete.
		* @type Number
		* @BB60+
		* @PB10
		*/ 
		IDLE: 1,

		/**
		* @constant
		* @default 2
		* @description The ApplicationCache object's cache host is associated with an application cache
		* whose application cache group's update status is checking.
		* @type Number
		* @BB60+
		* @PB10
		*/ 
		CHECKING: 2,
		
		/**
		* @constant
		* @default 3
		* @description The ApplicationCache object's cache host is associated with an application cache
		* whose application cache group's update status is downloading.
		* @type Number
		* @BB60+
		* @PB10
		*/ 
		DOWNLOADING: 3,

		/**
		* @constant
		* @default 4
		* @description The ApplicationCache object's cache host is associated with an application cache
		* whose application cache group's update status is idle, and whose application cache group
		* is not marked as obsolete, but that application cache is not the newest cache in its group.
		* @type Number
		* @BB60+
		* @PB10
		*/ 
		UPDATEREADY: 4,

		/**
		* @constant
		* @default 5
		* @description The ApplicationCache object's cache host is associated with an application cache
		* whose application cache group is marked as obsolete.
		* @type Number
		* @BB60+
		* @PB10
		*/ 
		OBSOLETE: 5
};

/**
 * @description 
 *The current state of the application cache that the ApplicationCache object's cache host is associated with, if any.
 * <br>This must be the appropriate value from the following list:
 *    <li>UNCACHED (numeric value 0)
 *    <li>IDLE (numeric value 1) 
 *    <li>CHECKING (numeric value 2)
 *    <li>DOWNLOADING (numeric value 3)
 *    <li>UPDATEREADY (numeric value 4)
 *    <li>OBSOLETE (numeric value 5)
 * @readonly
 * @type Number
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
ApplicationCache.prototype.status = undefined;
		
/**
 * @function
 * @description  Invokes the application cache download process.
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
ApplicationCache.prototype.update = undefined;
			
/**
 * @function
 * @description  Switches to the most recent application cache, if there is a newer one.
 * <br>This does not cause previously-loaded resources to be reloaded; for example,
 * images do not suddenly get reloaded and style sheets and scripts do not get reparsed or reevaluated.
 * The only change is that subsequent requests for cached resources will obtain the newer copies.<br>
 * @throws {INVALID_STATE_ERR} If the current app cache is the most recent
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
ApplicationCache.prototype.swapCache = undefined;
		
/**@event
 * @description  Sent when the cache update process begins.<br>
 * @BB60+
 * @PB10
 * @example 
 * function handleCacheEvent(e) {
 *     //...
 * }
 * // Checking for an update. Always the first event fired in the sequence.
 * appCache.addEventListener('checking', handleCacheEvent, false);
 */
ApplicationCache.prototype.checking = undefined;

/**
 * @event
 * @description  Sent when an error occurs.<br>
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
ApplicationCache.prototype.error = undefined;
		   
/**
 * @event
 * @description  Sent when the update process finishes but the manifest file does not change.<br>
 * @BB60+
 * @PB10
 * @example 
 * function handleCacheEvent(e) {
 *     //...
 * }
 * // Fired after the first download of the manifest.
 * appCache.addEventListener('noupdate', handleCacheEvent, false);
 */
ApplicationCache.prototype.noupdate = undefined;
		   
/**
 * @event
 * @description  Sent when the update process begins downloading resources in the manifest file.<br>
 * @BB60+
 * @PB10
 * @example 
 * function handleCacheEvent(e) {
 *     //...
 * }
 * // An update was found. The browser is fetching resources.
 * appCache.addEventListener('downloading', handleCacheEvent, false);
 */
ApplicationCache.prototype.downloading = undefined;
		   
/**
 * @event
 * @description  Sent when each resource in the manifest file begins to download.<br>
 * @BB60+
 * @PB10
 * @example 
 * function handleCacheEvent(e) {
 *     //...
 * }
 * // Fired for each resource listed in the manifest as it is being fetched.
 * appCache.addEventListener('progress', handleCacheEvent, false);
 */
ApplicationCache.prototype.progress = undefined;
		   
/**
 * @event
 * @description  Sent when there is an existing application cache, the update process finishes,
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
ApplicationCache.prototype.updateready = undefined;
		   
/**
 * @event
 * @description  Sent when the resources listed in the manifest have been downloaded, 
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
ApplicationCache.prototype.cached = undefined;
		   
/**
 * @event
 * @description  Sent when the manifest was found to have become a 404 or 410 page, 
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
ApplicationCache.prototype.obsolete = undefined;

