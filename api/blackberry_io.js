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
 * @namespace The IO object provides the functionality to access un-sandboxed file system and other related attributes.
 * @toc {IO} IO
 * @featureID blackberry.io
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * function readFile() {
 *     // un-sandbox file system to access shared folder
 *     blackberry.io.sandbox = false;
 *
 *     window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
 *
 *     window.requestFileSystem(window.TEMPORARY, 1024 * 1024,
 *         function (fs) {
 *              // in order to access the shared folder,
 *              // config.xml must declare the "access_shared" permission
 *              // reference file by absolute path since file system is un-sandboxed
 *              fs.root.getFile(blackberry.io.sharedFolder + '/documents/log.txt', {},
 *                  function (fileEntry) {
 *                      fileEntry.file(function (file) {
 *                          var reader = new FileReader();
 *
 *                          reader.onloadend = function (e) {
 *                              var txtArea = document.createElement('textarea');
 *                              txtArea.value = this.result;
 *                              document.body.appendChild(txtArea);
 *                          };
 *
 *                          reader.readAsText(file);
 *                     }, errorHandler);
 *                  }, errorHandler);
 *         });
 * }
 *
 * function errorHandler(e) {
 *     var msg = '';
 *
 *     switch (e.code) {
 *     case FileError.QUOTA_EXCEEDED_ERR:
 *         msg = 'QUOTA_EXCEEDED_ERR';
 *         break;
 *     case FileError.NOT_FOUND_ERR:
 *         msg = 'NOT_FOUND_ERR';
 *         break;
 *     case FileError.SECURITY_ERR:
 *          msg = 'SECURITY_ERR';
 *          break;
 *     case FileError.INVALID_MODIFICATION_ERR:
 *          msg = 'INVALID_MODIFICATION_ERR';
 *          break;
 *     case FileError.INVALID_STATE_ERR:
 *          msg = 'INVALID_STATE_ERR';
 *          break;
 *     default:
 *          msg = 'Unknown Error';
 *         break;
 *     };
 *
 *     console.log('Error: ' + msg);
 * }
 * &lt;/script&gt;
 */
blackberry.io = {

       /**
        * @description Whether the file system is sandboxed. It is set to true by default.<br/>When sandbox is set to false, you must use absolute path to reference a file or directory, you can use {@link blackberry.io.sharedFolder}, {@link blackberry.io.home} or {@link blackberry.io.SDCard} to construct file paths.
        * @type Boolean
        * @BB10X
        */
       sandbox : true,

       /**
        * @description The full path of the application data folder
        * @type String
        * @readOnly
        * @BB10X
        */
       home : "",

       /**
        * @description The full path of the shared folder. In order to access this folder, you must specify the <code>access_shared</code> permission in config.xml
        * @type String
        * @readOnly
        * @BB10X
        */
       sharedFolder : "",

       /**
        * @description The full path of the SD card folder
        * @type String
        * @readOnly
        * @BB10X
        */
       SDCard : ""
}
