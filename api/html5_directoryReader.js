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
 * @toc {IO} HTML5 DirectoryReader
 * @class 
 * @description An object that lists out contents in a directory.
*/
DirectoryReader = function() {};

    /**
    * @description  function that reads the contents of a directory
    * @callback {successCallback} callback function that is passed an array of FileEntry and DirectoryEntry objects
    * @callback {errorCallback} callback that is called if an error occurs retrieving the directory listing. Invoked with a FileError object.
    * @PB10+
    * @RIPPLE
    * @BB10X
    */
    DirectoryReader.prototype.readEntries = function (successCallback, errorCallback) {};
