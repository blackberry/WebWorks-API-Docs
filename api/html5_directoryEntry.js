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
 * @toc {IO} HTML5 DirectoryEntry
 * @class
 * @constructedBy FileSystem.root
 * @description This object represents a directory on a file system.
*/
DirectoryEntry = function() {};

    /**
    * @description Look up metadata about a directory.
    * @callback {successCallback} callback function that will execute when the event occurs successfully.
    * @callback {errorCallback} callback function that will execute when the event fails
    * @PB10+
    * @RIPPLE
    * @BB10X
    * @example
    * Main script:
    *
    *
    */
    DirectoryEntry.prototype.getMetadata = function(successCallBack, errorCallback) {};

    /**
    * @description  Moves a directory to a different location. When moving the directory to a location where the name already exists, <b>moveTo</b> will attempt to overwrite it.
    * @param {DirectoryEntry} The directory that you want to move
    * @param {String} The new name of the directory. Defaults to the current name if unspecified.
    * @callback {successCallback} callback function to execute when it is successful
    * @callback {errorCallback} callback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
    * @BB10X
    * @example
    * Main script:
    *
    */
    DirectoryEntry.prototype.moveTo = function(parent, newName, successCallback, errorCallback) {};

    /**
    * @description Copies the directory to a new location. When copying to a location where the name already exists, <b>copyTo</b> will attempt to overwrite it.
    * @param {DirectoryEntry} original directory
    * @param {String} newName new name of directory
    * @callback {successCallback} callback function to execute when it is successful
    * @callback {errorCallback} callback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
    * @BB10X
    */
    DirectoryEntry.prototype.copyTo = function(parent, newName, successCallback, errorCallback) {};

    /**
     * @description Returns a URL that can be used to locate the directory.
     * @type string
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    DirectoryEntry.prototype.toURL = function() {};

    /**
    * @description function to delete a directory.
    * @callback {successCallback} callback function to execute when it is successful
    * @callback {@callback} callback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
    * @BB10X
    */
    DirectoryEntry.prototype.remove = function(successCallback, errorCallback) {};

    /**
    * @description  returns the parent DirectoryEntry
    * @callback {successCallback} callback function to execute when it is successful
    * @callback {errorCallback} callback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
    * @BB10X
    */
    DirectoryEntry.prototype.getParent = function(successCallback, errorCallback) {};

    /**
    * @description  creates a new DirectoryReader to read contents in a directory
    * @returns {DirectoryReader} The directoryReader object
    * @PB10+
    * @RIPPLE
    * @BB10X
    */
    DirectoryEntry.prototype.createReader  = function() {};

    /**
    * @description Create or look up a directory.
    * @param {String} path - path of the directory to be looked up or created.
    * @param {flags} options - options to specify whether the directory is to be created if it doesn't exist
    * @callback {successCallback} callback function that is called with a File object. (Function)
    * @callback {errorCallback} callback function to execute when there is an error during creating the File object. Invoked with a FileError object. (Function)
    * @PB10+
    * @RIPPLE
    * @BB10X
    */
    DirectoryEntry.prototype.getDirectory  = function(path, options, successCallback, errorCallback) {};

    /**
    * @description Creates or look up a file.
    * @param {String} path - path of the file to be looked up or created.
    * @param {flags} options - options to specify whether the file is created if it doesn't exist
    * @callback {successCallback} callback function that is called with a File object. (Function)
    * @callback {errorCallback} callback function to execute when there is an error during creating the File object. Invoked with a FileError object. (Function)
    * @PB10+
    * @RIPPLE
    * @BB10X
    */
    DirectoryEntry.prototype.getFile  = function(path, options, successCallback, errorCallback) {};

    /**
    * @description Delete a directory and all of its contents.
    * @callback {successCallback} callback function that is called with a File object. (Function)
    * @callback {errorCallback} callback function to execute when there is an error during creating the File object. Invoked with a FileError object. (Function)
    * @PB10+
    * @RIPPLE
    * @BB10X
    */
    DirectoryEntry.prototype.removeRecursively  = function(successCallback, errorCallback) {};

    /**
     * @description Returns whether the object is a file or not. Value is always false.
     * @field
     * @type boolean
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    DirectoryEntry.isFile = false;

    /**
     * @field
     * @description Returns whether the object is a directory or not. Value is always true.
     * @type boolean
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    DirectoryEntry.isDirectory = true;

    /**
     * @field
     * @description {string} The full absolute path from the root to the DirectoryEntry
     * @type File
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    DirectoryEntry.fullPath = undefined;

    /**
     * @field
     * @description {string} The file system on which the DirectoryEntry resides
     * @type File
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    DirectoryEntry.filesystem = undefined;


/**
 * @toc {IO} HTML5 Flags
 * @namespace
 * @description This object is used to indicate the the file or directory should be created or not.
*/
Flags = function() {};

    /**
     * @field
     * @description {boolean} Indicates whether the file or directory should be created or not, if it does not exist.
     * @type boolean
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    Flags.create = undefined;

    /**
     * @field
     * @description {boolean} By itself, exclusive has no effect. Used with create, it causes the file or directory creation to fail if the target path already exists.
     * @type boolean
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    Flags.exclusive = undefined;
