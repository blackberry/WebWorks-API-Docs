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
* @toc {Cache} WidgetCache 
* @BB50+
* @namespace The WidgetCache object provides functions and properties to control application Caching behavior.
* @featureID blackberry.widgetcache
*/
blackberry.widgetcache = { 

	/**
	* Requests the current total size used by the all the caches. 
	* @returns {Number} Returns the current total size in bytes
	* @BB50+
	*/
	getCurrentSize : function() { },

	/**
	* Requests all the cache information of the cached copies. 
	* @returns {blackberry.widgetcache.CacheInformation[]} Returns an array of CacheInformation objects
	* @BB50+
	*/
	getCacheInformation : function() { },

	/**
	* Removes all items currently in the cache. 
	* @BB50+
	* @example
	* &lt;script type=&quot;text/javascript&quot;&gt;
	*   // Clears the cache if its size is over 9000.
	*   function cleanUp() {
	*     if(blackberry.widgetcache.getCurrentSize()&gt;9000) {
	*       blackberry.widgetcache.clearAll();
	*     }
	*   }
	* &lt;/script&gt;
	*/
	clearAll : function() { },

	/**
	* Checks whether there is a cached copy for the specified URL, whether expired or not. 
	* @param {String} url The URL for which the cache will be checked.
	* @returns {Boolean} Returns true if there is a cached copy
	* @BB50+
	*/
	hasCache : function(url) { },

	/**
	* Clears the cached copy of the specified URL. 
	* @param {String} url The URL for which the cache will be cleared.
	* @BB50+
	*/
	clearCache : function(url) { }


};




