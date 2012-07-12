/*
 * Copyright 2012 Research In Motion Limited.
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
 * @toc {IO} HTML5 FileReader
 * @namespace Object to allow reading of files
 * @PB10+
 * @BB10X
 */
FileReader = {

        /**
         * @description function to abort the fileReading process
         * @PB10+
         * @BB50+
         * @example
         * function win(file) {
         *       var reader = new FileReader();
         *       reader.onloadend = function(evt) {
         *           console.log("read success");
         *           console.log(evt.target.result);
         *       };
         *
         *      reader.readAsText(file);
         *      reader.abort();
         * };
         *
         * function fail(error) {
         *      console.log(error.code);
         * }
         *
         * entry.file(win, fail);
         *
         */
    FileReader.prototype.abort = function () {};

   /**
    * @description function to read the file and return the data as a base64 encoded data url
    * @type {function}
    * @PB10+
    * @BB50+
    */
    FileReader.prototype.readAsDataURL = function(){};
    
    /**
     * @description function to read the text file and returns the data as text
     * @type {function} 
     * @PB10+
     * @BB10X
     */
     FileReader.prototype.readAsText = function() { },

    /**
     * @description function that is called when the read has been aborted
     * @event
     * @type {function}
     * @PB10+
     * @BB10X
     */
    onabort : function() {
    },

    /**
     * @description  the function that is called when the read starts
     * @event
     * @type {function}
     * @PB10+
     * @BB10X
     */
    onloadstart : function() {
    },


    /**
     * @description Description of what state the reader can be. File Reader can be one of three states: EMPTY, LOADING or DONE
     * @type String
     * @readOnly
     * @PB10+
     * @BB10X
     */
    readyState : ""

    /**
     * @description The contents of the file that has been read.
     * @type String
     * @readOnly
     * @PB10+
     * @BB10X
     */
    result : ""

    /**
     * @description An object containing errors. (FileError)
     * @type {fileError}
     * @readOnly
     * @PB10+
     * @BB10X
     */
    error : ""

    /**
     * @description  assigned to the function that is called when the read starts
     * @type {function}
     * @event
     * @PB10+
     * @BB10X
     */
    onload : ""

    /**
     * @description assigned to the function that will be executed when there is an error
     * @type {function}
     * @event
     * @PB10+
     * @BB10X
     */
    onerror : ""

    /**
     * @description function that is called when file reading has been completed
     * @type {function}
     * @event
     * @PB10+
     * @BB10X
     */
    onloadend : ""
};
