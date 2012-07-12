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
 * @toc {IO} HTML5 FileEntry
 * @class
 * @description An object that represents a file on the filesystem. 
 * @PB10+
 * @RIPPLE
 * @BB10X
 */
fileEntry = function() {};

    /**
    * @description  returns information (metadata) regarding to the fileEntry
    * @callback {successCallback} callback function that will execute when the event occurs successfully.
    * @callback {errorCallback} callback function that will execute when the event fails
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    fileEntry.prototype.getMetadata = function(successCallBack, errorCallback) {};

	/**
    * @description  moves a file to a different location on the file system
    * @param {DirectoryEntry} parent directory to move the file to
	* @param {String} newName The new name of the file.
	* @callback {successCallback} callback function to execute when it is successful
	* @callback {errorCallback} callback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
	* @BB10X	
	*
	*/
	fileEntry.prototype.moveTo = function(parent, newName, successCallback, errorCallback) {};

    /**
    * @description Copy function to copy a file to another location in the file system.
    * @param {DirectoryEntry} parent directory to copy the file to
	* @param {String} newName New file name.
	* @callback {successCallback} callback function to execute when it is successful
	* @param {errorCallback} callback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    fileEntry.prototype.copyTo = function(parent, newName, successCallback, errorCallback) {};
    
    /**
     * @description Returns a URL that can be used to locate the file.
     * @type string
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    fileEntry.prototype.toURL = function() {};

    /**
     * @description deletes the file from the filesystem
     * @callback {successCallback} Callback function when the file is successful
     * @callback {errorCallback} Callback function when there is a failure 
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    fileEntry.prototype.remove = function(successCallBack, errorCallBack) {};
		
    /**
    * @description  returns the parent directoryEntry containing the specified fileEntry
 	* @callback {successCallback} callback function to execute when it is successful
	* @callback {errorCallback} callback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
	* @BB10X
	* @example
	*
	* function success(parent) {
    *	console.log("Parent Name: " + parent.name);
	* }
	*
	* function fail(error) {
    * 	alert(error.code);
	* }
	*
	* // Get the parent DirectoryEntry
	* entry.getParent(success, fail);
	*
	*
    */
    fileEntry.prototype.getParent = function(successCallback, errorCallback) {};
 
    /**
    * @description  creates the writer to write into the file
    * @callback {successCallback} callback function that is called with a FileWriter object. 
    * @callback {errorCallback} callback function to execute when there is a failure. Invoked with a FileError object. 
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    fileEntry.prototype.createWriter  = function(successCallback, errorCallback) {};

	/**
    * @description  Return a File object that represents the current state of the file that this FileEntry represents.
    * @callback {successCallback} callback function that is called with a File object. 
    * @callback {errorCallback} callback function to execute when there is an error during creating the File object. Invoked with a FileError object. (Function)
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    fileEntry.prototype.file  = function(successCallback, errorCallback) {};
