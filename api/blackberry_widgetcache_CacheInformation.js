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
* @toc {Cache} CacheInformation 
* @BB50+
* @namespace The CacheInformation object provides information about entities saved in the {@link blackberry.widgetcache} .
* @featureID blackberry.widgetcache.CacheInformation
*/
blackberry.widgetcache.CacheInformation = {};

/**
* Contains the URL string of the mapping request. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.widgetcache.CacheInformation.prototype.url = undefined;

/**
* Contains the disk size of the cached copy. 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.widgetcache.CacheInformation.prototype.size = undefined;

/**
* Contains the expiration date of the cached copy. 
* @type Date
* @readOnly
* @BB50+
*/
blackberry.widgetcache.CacheInformation.prototype.expires = undefined;





