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
 * @toc {IO} HTML5 FileError
 * @class
 * @namespace Errors in the asynchronous File API are reported using callbacks that have a <b>FileError</b> object as one of their arguments.
 */
FileError = {
		/**
		 * @constant
		 * @type String
		 * @description File/directory not found error
		 * @PB10+
		 * @BB10X
		 */
		NOT_FOUND_ERR: NOT_FOUND_ERROR,

		/**
		 * @constant
		 * @type String
		 * @description This is a security error code to be used in situations not covered by any other error codes.
		 * @PB10+
		 * @BB10X
		 */
		SECURITY_ERR: SECURITY_ERR,

		/**
		 * @constant
		 * @type String
		 * @description This is returned when the read operation was aborted, typically with a call to abort() 
		 * @PB10+
		 * @BB10X
		 */
		ABORT_ERR: ABORT_ERR,

		/**
		 * @constant
		 * @type String
		 * @description This is returned if the file cannot be read, typically due to permission problems that occur after a reference to a file has been acquired (e.g. concurrent lock with another application).
		 * @PB10+
		 * @BB10X
		 */
		NOT_READABLE_ERR: NOT_READABLE_ERR,

		/**
		 * @constant
		 * @type String
		 * @description returned when encoding error
		 * @PB10+
		 * @BB10X
		 */
		ENCODING_ERR: ENCODING_ERR,

		/**
		 * @constant
		 * @type String
		 * @description returned when file is read-only
		 * @PB10+
		 * @BB10X
		 */
		NO_MODIFICATION_ALLOWED_ERR: NO_MODIFICATION_ALLOWED_ERR,

		/**
		 * @constant
		 * @type String
		 * @description The file is in an invalid state is, and the object is unable to perform the action due to it.
		 * @PB10+
		 * @BB10X
		 */
		INVALID_STATE_ERR: INVALID_STATE_ERR,

		/**
		 * @constant
		 * @type String
		 * @description Syntax Error
		 * @PB10+
		 * @BB10X
		 */
		SYNTAX_ERR: SYNTAX_ERR

		/**
		 * @constant
		 * @type String
		 * @description Invalid modification error due to security or privacy
		 * @PB10+
		 * @BB10X
		 */
		INVALID_MODIFICATION_ERR: INVALID_MODIFICATION_ERR,

		/**
		 * @constant
		 * @type String
		 * @description Error processing from asynchronous calls due to size
		 * @PB10+
		 * @BB10X
		 */
		QUOTA_EXCEEDED_ERR: QUOTA_EXCEEDED_ERR,

		/**
		 * @constant
		 * @type String
		 * @description Type mismatch error
		 * @PB10+
		 * @BB10X
		 */
		TYPE_MISMATCH_ERR: TYPE_MISMATCH_ERR,

		/**
		 * @constant
		 * @type String
		 * @description Directory already exists error
		 * @PB10+
		 * @BB10X
		 */
		PATH_EXISTS_ERR: PATH_EXISTS_ERR,
	};
