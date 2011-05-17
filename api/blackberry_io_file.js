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
* @BB50+
* @namespace The File object provides functions for interacting with the file system.
* @featureID blackberry.io.file
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
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
blackberry.io.file = { };

/**
* Get the FileProperties object for a given file. 
* @param {String} path local storage file path to the file
* @returns {FileProperties}
* @BB50+
*/
blackberry.io.file.getFileProperties = function(path) { };

/**
* Check whether or not a given file exists. 
* @param {String} path local storage file path to the file
* @returns {Boolean}
* @BB50+
*/
blackberry.io.file.exists = function(path) { };

/**
* Open the specified file with the registered content handler. 
* @param {String} path file path to the file to be opened.
* @returns {Boolean}
* @BB50+
*/
blackberry.io.file.open = function(path) { };

/**
* Rename a given file. 
* @param {String} path local storage file path to the file
* @param {String} newFileName the new file name.
* @returns {void}
* @BB50+
*/
blackberry.io.file.rename = function(path,newFileName) { };

/**
* Copy a file to a given destination. 
* @param {String} sourcePath local storage file path to the file to be copied
* @param {String} targetPath local storage file path to the new copied file. The name of the copied file should be specified at the end of the targetPath.
* @returns {void}
* @BB50+
*/
blackberry.io.file.copy = function(sourcePath,targetPath) { };

/**
* Delete a given file. 
* @param {String} path local storage file path to the file to be deleted
* @returns {void}
* @BB50+
*/
blackberry.io.file.deleteFile = function(path) { };

/**
* Save a Blob to the local file system. 
* @param {String} path Local storage file path to the file that is going to store the data
* @param {Blob} data The Blob to be saved.
* @returns {void}
* @BB50+
*/
blackberry.io.file.saveFile = function(path,data) { };

/**
* Reads in a file from the local file system. 
* @param {String} path local storage file path to the file to be opened into a Blob
* @callback {function} onFileOpened Javascript function to call on completion of loading the file from the file system.
* @callback {String} onFileOpened.fullPath Full path of the file that was just opened
* @callback {Blob} onFileOpened.blobData Blob that contains the file&apos;s contents
* @param {Boolean} [async] an optional parameter specifying if the call to read should be asynchronous or synchronous.  If this parameter is not supplied the default of true- you async true? - will be used.
* @returns {void}
* @BB50+
*/
blackberry.io.file.readFile = function(path,callback,async) { };


