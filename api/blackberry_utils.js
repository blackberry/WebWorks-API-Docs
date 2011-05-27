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
 * @namespace The Utils object provides useful utility functions and properties.  
 * @toc {Utilities} Utils
 * @featureID blackberry.utils
 */
blackberry.utils = {
		
	
	/**
	 * @description Construct a new String by converting the blob using the specified character encoding
	 * @param {Blob} blob The Blob object to be converted.
	 * @param {String} [encoding = ISO-8859-1] The name of a supported character encoding.BlackBerry supports the following character encodings: ISO-8859-1, UTF-8, UTF-16BE, US-ASCII. Besides these encodings, Web API supports also supports BASE64 encoding. Support of other encodings depends on the configuration of the BlackBerry PlayBook.
	 * @returns {String} The String result from converting the Blob
	 * @BB50+
     * @BB50+
	 */
	blobToString : function(blob,encoding){},

	/**
	 * @description Convert a document into a Blob. Supported in 5.0.0 only. 
	 * @param {Document} doc The document to be converted.
	 * @returns {Blob} The Blob result from converting the Document
	 * @BB50
	 */
	documentToBlob : function(doc){},

	/**
	 * @description Convert a string object into a Blob using the specified character encoding.
	 * @param {Blob} blob The string to be converted.
	 * @param {String} [encoding = UTF-16BE] The name of a supported character encoding.BlackBerry supports the following character encodings: ISO-8859-1, UTF-8, UTF-16BE, US-ASCII. Besides these encodings, Web API supports also supports BASE64 encoding. Support of other encodings depends on the configuration of the BlackBerry PlayBook.
	 * @returns {Blob} The Blob result from converting the String
	 * @BB50+
     * @BB50+
	 */
	stringToBlob : function(str,encoding){},
	
	
	/**
	 * @description This method will generate a unique number.
	 * @returns {Number} A unique number from JavaScript's Math.random() function.
	 * @PB10
     * @BB50+
	 */
	generateUniqueID: function(){},
	
	/**
	 * @description Parses a URL string and returns an URL object.
	 * @param {String} url The URL string to be parsed.
	 * @returns {blackberry.utils.URL} A {@link blackberry.utils.URL} object is returned if the parsing is successful.
     * @BB50+
	 * @PB10 
	 */
	parseURL: function(url){},
		
	/**
	 * @class A URL Utility object contains information about a URL string.   
	 * @toc {Utilities} URL
	 * @featureID blackberry.utils
	 * @description Construct a URL object.
	 */
	URL : {
		
		
		/**
		 * @description Obtain the value of a parameter by key.
		 * @param {String} key The key of the parameter to be retrieved.
		 * @returns {String} An undefined object is returned if the key does not exist in the URL query.
		 * @BB50+
		 * @PB10
		 */
		getURLParameter:function(key){},
		
		/**
		 * @description Obtain the value of a parameter by index. The values are stored in the order they appear in the URL string.
		 * @param {Number} index The index of the parameter to be retrieved.
		 * @returns {String} An undefined object is returned if the index is invalid.
         * @BB50+
		 * @PB10
		 */
		getURLParameterByIndex:function(index){},
		
		/**
		 * @readOnly
		 * @type String
		 * @BB50+
		 * @PB10
		 * @description Host address in the URL string.
		 */
		host:null,
		/**
		 * @readOnly
		 * @type String
		 * @BB50+
		 * @PB10
		 * @description Port number in the URL string.
		 */
		port:null
	}
};