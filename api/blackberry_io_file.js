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
* @toc {IO} File
* @namespace The File object provides functions for interacting with the file system.<br><br>
* See also {@link blackberry.io.dir}
* @featureID blackberry.io.file
* @permission [access_shared] Any references to files/directories under "shared" folder (e.g. music) requires this permission to be set.
*/
blackberry.io.file = {
	/**
	* Get the FileProperties object for a given file. 
	* @param {String} path local storage file path to the file
	* @returns {blackberry.io.file.FileProperties}
	* @BB50+
	* @PB10
	*/
	getFileProperties : function(path) { },
	
	/**
	 * @name blackberry.io.file.exists^2	
	 * @function
	 * @description Check whether or not a given file exists. 
	 * @param {String} path local storage file path to the file
	 * @returns {Boolean}
	 * @BB50+
	 * @PB10
	 */
	/**
	 * @name blackberry.io.file.exists
	 * @description Determine whether a given file exists or not. 
	 * @param {String} path path of the file, specified in the form of file:/// URL
	 * @returns {Object Literal}
	 * {
	 *   "data" : {
	 *     "path": "&lt;path that was passed&gt;",
	 *     "exists" : true if the path exists and points to a file, false otherwise
	 *   }
	 * }
	 * @PB10
	 * @uri
	 * @function	 
	 */	
	exists : function(path) { },
	
	/**
	 * @name blackberry.io.file.open^2	
	 * @function
	 * @description Open the specified file with the registered content handler. 
	 * @param {String} path file path to the file to be opened.
	 * @returns {Boolean}
	 * @BB50+
	 * @PB10
	 */
	/**
	 * @name blackberry.io.file.open
	 * @description Open the specified file with the registered content handler.
	 * @param {String} path path to the file to be opened, specified in the form of file:/// URL
	 * @returns {Object Literal}
	 * {
	 *   "data" : {
	 *     "path" : "&lt;path that was passed&gt;"
	 *   }
	 * }
	 * @type {Boolean}
	 * @PB10
	 * @uri
	 * @function
	 */		
	open : function(path) { },
	
	/**
	* @name blackberry.io.file.rename^2
	* @function
	* @description Rename a given file. 	
	* @param {String} path local storage file path to the file
	* @param {String} newFileName the new file name.
	* @returns {void}
	* @BB50+
	* @PB10
	*/
	/**
	 * @name blackberry.io.file.rename
	 * @description Rename a given file.
	 * @param {String} path path to the file, specified in the form of file:/// URL
	 * @param {String} newFileName new file name
	 * @returns {Object Literal}
	 * {
	 *   "data" : {
	 *     "path" : "&lt;path that was passed&gt;",
	 *     "newFileName" : "&lt;newFileName that was passed&gt;"
	 *   }
	 * }
	 * @PB10
	 * @uri
	 * @function
	 */	
	rename : function(path,newFileName) { },
	
   /**
	* @name blackberry.io.file.copy^2
	* @function
	* @description Copy a file to a given destination. 
	* @param {String} sourcePath local storage file path to the file to be copied
	* @param {String} targetPath local storage file path to the new copied file. The name of the copied file should be specified at the end of the targetPath.
	* @returns {void}
	* @BB50+
	* @PB10
	*/
	/**
	 * @name blackberry.io.file.copy
	 * @description Copy a file to a given destination.
	 * @param {String} path path to the file to be copied, specified in the form of file:/// URL
	 * @param {String} targetPath path to the newly copied file, the name of the copied file should be specified at the end of the targetPath, in the form of file:/// URL
	 * @returns {Object Literal}
	 * {
	 *   "data" : {
	 *     "path" : "&lt;path that was passed&gt;",
	 *     "targetPath" : "&lt;targetPath that was passed&gt;"
	 *   }
	 * }
	 * @PB10
	 * @uri
	 * @function
	 */
	copy : function(sourcePath,targetPath) { },
	
	/**
	* Delete a given file. 
	* @param {String} path local storage file path to the file to be deleted
	* @returns {void}
	* @BB50+
	* @PB10
	*/
	deleteFile : function(path) { },
	
	/**
	* Save a Blob to the local file system. 
	* @param {String} path Local storage file path to the file that is going to store the data
	* @param {Blob} data The Blob to be saved.
	* @returns {void}
	* @BB50+
    * @example
    * &lt;script type=&quot;text&sol;javascript&quot;&gt;
    *   // This example is for BlackBerry OS 5.0+
    *   var xmlString = &quot;&lt;test&gt;IO functions&lt;&sol;test&gt;&quot;;
    *   var filePath = &quot;file:&sol;&sol;&sol;store&sol;home&sol;user&sol;sample.xml&quot;;
    *   var parser = new DOMParser();
    *   var doc = parser.parseFromString(xmlString, &quot;text&sol;xml&quot;);
    *   var blob_data = blackberry.utils.documentToBlob(doc);
    *      
    *   blackberry.io.file.saveFile(filePath, blob_data);
    *                 
    *   if (blackberry.io.file.exists(filePath)) {
    *     blackberry.io.file.copy(filePath, &quot;file:&sol;&sol;&sol;SDCard&sol;myxmlfile2.xml&quot;);
    *     blackberry.io.file.readFile(filePath,handleOpenedFile);
    *   }
    *      
    *   function handleOpenedFile(fullPath, blobData) {
    *     alert(&quot;file opened was: &quot; + fullPath + &quot; which contained &quot; + blobData.length + &quot; bytes&quot;);
    *   }
    * &lt;&sol;script&gt;
	*/
	saveFile : function(path,data) { },
	
	/**
	* Reads in a file from the local file system. 
	* @param {String} path local storage file path to the file to be opened into a Blob
	* @callback {function} onFileOpened callback function to call on completion of loading the file from the file system.
	* @callback {String} onFileOpened.fullPath full path of the file that was just opened
	* @callback {Blob} onFileOpened.blobData blob that contains the file&apos;s contents
	* @param {Boolean} [async] a flag specifying if the call to read should be asynchronous or synchronous.  If this parameter is not supplied the default of true will be used. This flag is ignored if used on BlackBerry PlayBook.
	* @returns {void}
	* @BB50+
	*/
	readFile : function(path,onFileOpened,async) { },
	
	/**
	 * @name blackberry.io.file.delete
	 * @description Delete the specified file.
	 * @param {String} path path to the file to be deleted, specified in the form of file:/// URL
	 * @returns {Object Literal}
	 * {
	 *   "data" : {
	 *     "path" : "&lt;path that was passed&gt;"
	 *   }
	 * }
	 * @PB10
	 * @uri
	 * @function
	 */
	delete : function(path) {},
	
	/**
	 * Get properties for a given file.
	 * @param {String} path path to the file, specified in the form of file:/// URL
	 * @returns {Object Literal}
	 * {
	 *   "data" : {
	 *     "path" : "&lt;path that was passed&gt;",
	 *     "dateCreated" : "&lt;file creation date, in number of milliseconds since UTC&gt;", // only defined if "code" is 0
	 *     "dateModified" : "&lt;file modification date, in number of milliseconds since UTC&gt;", // only defined if "code" is 0
	 *     "directory" : "&lt;path of directory that contains this file&gt;", // only defined if "code" is 0
	 *     "fileExtension" : "&lt;file extension&gt;", // only defined if "code" is 0
	 *     "isHidden" : true (if file is hidden) or false (if file is not hidden), // only defined if "code" is 0
	 *     "size" : &lt;file size in bytes&gt; // only defined if "code" is 0
	 *   }
	 * }
	 * @PB10
	 * @uri
	 * @example
	 * &lt;script type="text/javascript" src="js/jquery-1.4.2.js"&gt;&lt;/script&gt;	 
	 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	 *   var filePath = encodeURI(blackberry.io.dir.appDirs.app.storage.path + '/myfile.txt'); 
	 *   var reviverFn = function(key, value) {
	 *      // construct JS Date object from number of milliseconds since UTC
	 *      if (key.toLowerCase().indexOf('date') != -1) {
	 *         return new Date(value);
	 *      } else {
	 *         return value;
	 *      }
	 *   };
	 *
	 *   // inspect properties for this file
	 *   $.ajax({
	 *      url: "webworks://blackberry/io/file/get?path=" + filePath,
	 *      success: function(result, textStatus, jqXHR){
	 *        try {
	 *      	 var resultObj = JSON.parse(result, reviverFn);
	 *      	 alert("code=" + resultObj.code + " msg=" + resultObj.msg);
	 *
	 *           for (var f in resultObj.data) {
	 *              alert(f + ':' + resultObj.data[f]);
	 *           }
	 *        } catch (e) {
	 *           alert('e.message = ' + e.message);
	 *        }				
	 *      }
	 *   });
	 * &lt;&sol;script&gt;	 
	 */	
	get : function(path) {}
};
