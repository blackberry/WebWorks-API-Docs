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
 * @toc {IO} FileTransfer
 * @learns {Sample - Using FileTransfer} https://github.com/blackberry/BB10-WebWorks-Samples/tree/master/fileTransfer Sample that demonstrates how to use the BlackBerry File Transfer API [BlackBerry on GitHub].
 * @featureID blackberry.io.filetransfer
 * @namespace The FileTransfer object contains functions for uploading and downloading files to/from a remote server.
 */
blackberry.io.filetransfer = {

		/**
		 * @function
		 * @description Uploads a file from the device to a remote server using an HTTP multi-part POST request. Both HTTP and HTTPS protocols are supported.
		 * The function is an asynchronous call and will not block execution.
		 * @param {String} filePath Full path of the file on the device.
		 * @param {String} server URL of the remote server that will receive the file.
		 * @callback {function} successCallback Callback function that will be invoked if the file upload is successful.
		 * @callback {Object} successCallback.info Object containing information about the upload.
		 * @callback {Number} successCallback.info.bytesSent Total number of bytes sent to the server.
		 * @callback {Number} successCallback.info.responseCode HTTP response code returned by the server.
		 * @callback {String} successCallback.info.response Response returned by the server.
		 * @callback {function} errorCallback Callback function that will be invoked if the file upload fails.
		 * @callback {Object} errorCallback.info Object containing information about the failed upload request.
		 * @callback {Number} errorCallback.info.code Error code indicating the type of error that occurred.
		 * @callback {String} errorCallback.info.source Path of the original file.
		 * @callback {String} errorCallback.info.target URL of the remote server.
		 * @callback {Number} errorCallback.info.http_status HTTP status code. This attribute is only available when a response code is received from the HTTP connection.
		 * @param {Object} [options] Optional Object literal that allows the user to customize the file key, file name, MIME type, parameters, and chunked mode of the upload request. It is not required to provide all parameters, and these do not have to be specified in any particular order.
		 * @param {String} [options.fileKey] Name of the form element. If not set, this defaults to "file".
		 * @param {String} [options.fileName] Name that the file will be saved as on the remote server. If not set, this defaults to "image.jpg". 
		 * @param {String} [options.mimeType] MIME type of the data being uploaded. If not set, this defaults to "image/jpeg".
		 * @param {Object} [options.params] A set of optional key/value pairs to be passed along in the HTTP request.
		 * @param {Boolean} [options.chunkedMode] Specifies whether the data should be uploaded in chunked streaming mode.  If not set, this defaults to true.
		 * @param {Number} [options.chunkSize] Specifies the size of each chunk when chunkedMode is true.  If not set, this defaults to 1024 bytes.
		 * @BB10X
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 *
		 * function uploadSuccess(result) {
		 *   alert("Upload was successful");
		 *   console.log("Bytes sent: " + result.bytesSent);
		 *   console.log("Response code: " + result.responseCode);
		 *   console.log("Response: " + result.response);
		 * }
		 *
		 * function uploadError(result) {
		 *   alert("Upload failed");
		 *   console.log("Error code: " + result.code);
		 *   console.log("Source: " + result.source);
		 *   console.log("Target: " + result.target);
		 *   console.log("HTTP Status: " + result.https_status);
		 * }
		 *
		 * function fileUpload() {
		 *   var parameters, options;
		 *   try {
		 *     parameters = { app : "webworks" };
		 *     options = {
		 *       fileKey : "file",
		 *       fileName : "blackberry.jpg",
		 *       mimeType : "image/jpeg",
		 *       params : parameters,
		 *       chunkedMode : true,
		 *       chunkSize : 1024
		 *     };
		 *     blackberry.io.filetransfer.upload("/accounts/1000/shared/camera/image_123.jpg", "http://www.blackberry.com/upload", uploadSuccess, uploadError, options);
		 *   } catch(e) {
		 *     alert("Exception in fileUpload: " + e);
		 *   }
		 * }
		 *
		 * &lt;/script&gt;
		 *  
		 * @example
		 * &#47;*
		 * FILENAME: upload.php
		 * A sample PHP upload server script which will save files into an "upload" directory. Make sure to create and set 777 permissions for the "upload" folder in the same directory as upload.php.
		 * *&#47;
		 * 
		 * &lt;?php
		 *
		 * if (move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"])) {
		 *   echo "Success";
		 * } else {
		 *   echo "Error";
		 * }
		 *
		 * ?&gt;
		 */
		upload : function(filePath, server, successCallback, errorCallback, options){},

		/**
		 * @function
		 * @description Downloads a file from a remote server to the device. <br/>
		 * The function is an asynchronous call and will not block execution.
		 * @param {String} source URL of the server to receive the file.
		 * @param {String} target Full path on the device that the download file will save to. 
		 * @callback {function} successCallback Callback function that will be invoked if the file download is successful.
		 * @callback {Object} successCallback.info Object containing information about the download.
		 * @callback {Boolean} successCallback.info.isFile Always true.
		 * @callback {Boolean} successCallback.info.isDirectory Always false.
		 * @callback {String} successCallback.info.name The name of the file, excluding the path leading to it.
		 * @callback {String} successCallback.info.fullPath The full absolute path from the root.
		 * @callback {function} errorCallback Callback function that will be invoked if the file download fails.
		 * @callback {Object} errorCallback.info Object containing information about the failed download request.
		 * @callback {Number} errorCallback.info.code Error code indicating the type of error that occurred.
		 * @callback {String} errorCallback.info.source Path of the original file.
		 * @callback {String} errorCallback.info.target URL of the remote server.
		 * @callback {Number} errorCallback.info.http_status HTTP status code. This attribute is only available when a response code is received from the HTTP connection.
		 * @BB10X
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 *
		 * function downloadSuccess(result) {
		 *   alert("Download was successful");
		 *   console.log("isFile: " + result.isFile);
		 *   console.log("isDirectory: " + result.isDirectory);
		 *   console.log("name: " + result.name);
		 *   console.log("fullPath: " + result.fullPath);
		 * }
		 *
		 * function downloadError(result) {
		 *   alert("Download failed");
		 *   console.log("Error code: " + result.code);
		 *   console.log("Source: " + result.source);
		 *   console.log("Target: " + result.target);
		 *   console.log("HTTP status: " + result.http_status);
		 * }
		 *
		 * function fileDownload() {
		 *   try {
		 *     blackberry.io.filetransfer.download("http://www.blackberry.com/download", "/accounts/1000/shared/camera/image_123.jpg", downloadSuccess, downloadError);
		 *   } catch(e) {
		 *     alert("Exception in fileDownload: " + e);
		 *   }
		 * }
		 *
		 * &lt;/script&gt;
		 */
		download : function(source, target, successCallback, errorCallback){},

		/**#@-*/

		/**
		 * @type Number
		 * @constant
		 * @default 1
		 * @description The file was not found.
		 * @BB10X
		 */
		 FILE_NOT_FOUND_ERR : 1,

		/**
		 * @type Number
		 * @constant
		 * @default 2
		 * @description The URL of the server was invalid.
		 * @BB10X
		 */
		 INVALID_URL_ERR : 2,

		/**
		 * @type Number
		 * @constant
		 * @default 3
		 * @description The upload failed due to a connection error.
		 * @BB10X
		 */
		 CONNECTION_ERR : 3,

		 /**
		 * @type Number
		 * @constant
		 * @default 4
		 * @description Application unable to write to target folder due to insufficient permissions.
		 * @BB10X
		 */
		 PERMISSIONS_ERR : 4
}
