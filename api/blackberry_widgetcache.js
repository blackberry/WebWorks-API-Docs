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
blackberry = { };


/**
* @toc {Cache} Widgetcache 
* @BB50+
* @namespace The WidgetCache object provides functions and properties to control Widget Caching behavior.
* @featureID blackberry.widgetcache
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol;Clears the cache if its size is over 9000.
*   function cleanUp() {
*     if(blackberry.widgetcache.getCurrentSize()&gt;9000) {
*       blackberry.widgetcache.clearAll();
*     }
*   }
* &lt;&sol;script&gt;
*/
blackberry.widgetcache = { };

/**
* Returns the current total size used by the caches. 
* @returns {Number}
* @BB50+
*/
blackberry.widgetcache.getCurrentSize = function() { };

/**
* Returns all the cache information of the cached copies. 
* @returns {CacheInformation[]}
* @BB50+
*/
blackberry.widgetcache.getCacheInformation = function() { };

/**
* Removes all items currently in the cache. 
* @returns {void}
* @BB50+
*/
blackberry.widgetcache.clearAll = function() { };

/**
* Checks whether there is a cached copy for the specified URL, whether expired or not. 
* @param {String} url The URL for which the cache will be checked.
* @returns {Boolean}
* @BB50+
*/
blackberry.widgetcache.hasCache = function(url) { };

/**
* Clears the cached copy of the specified URL. 
* @param {String} url The URL for which the cache will be cleared.
* @returns {void}
* @BB50+
*/
blackberry.widgetcache.clearCache = function(url) { };


