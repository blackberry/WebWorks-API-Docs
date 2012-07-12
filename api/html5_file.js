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
 * @toc {IO} HTML5 File
 * @class File objects  provides functionatlity to be able to read, write and navigate file system hierarchies
 * @constructedBy fileEntry.file
 * @description  File Object 
*/
File = function() {

    /**
     * 
     * @function
     * @constructedBy FileEntry.file
     * @description returns the file object associated to the fileEntry
     * @callback {function} successCallBack function to be executed when successful
     * @callback {File} successCallBack.File The new File object
     * @callback {function} errorCallBack function to be executed when an error is encountered
     * @callback {FileError} errorCallBack.FileError Invoked with a FileError object
     */
     file : undefined

};
    
    /**
     * @field
     * @description The name of the file
     * @type File
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    File.prototype.name = undefined;

    /**
     * @field
     * @description The full path of the file including the file name
     * @type File
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    File.prototype.fullPath = undefined;
	
    /**
     * @field
     * @description The mime type of the file
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    File.prototype.type = undefined;	

    /**
     * @field
     * @description lists the date that it was last modified
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    File.prototype.lastModifiedDate = undefined;
	
    /**
     * @field
     * @description size of file in bytes
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    File.prototype.size = undefined;	
