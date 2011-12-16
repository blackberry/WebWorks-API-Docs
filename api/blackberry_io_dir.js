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
* @toc {IO} Directory 
* @namespace The Directory object provides functions for interacting with directories on the file system.<br><br>
* See also {@link blackberry.io.file}
* @featureID blackberry.io.dir
* @permission [access_shared] Any references to files/directories under "shared" folder (e.g. music) requires this permission to be set.
*/
blackberry.io.dir = {
   /**
    * @name blackberry.io.dir.appDirs^2	
    * @description Gets the full paths of application storage folder and sub-folders under "shared". Paths are in the form of file:// URL <br><br>
    * The application storage folder is created when you first access blackberry.io.dir.appDirs. This directory is a convenient location to store application-specific data that can only be accessed by the application.<br><br>
    * The "shared" folder is the parent directory to the sub-folders such as camera and music, which can be accessed by all applications. These sub-folders can also be accessed when the BlackBerry PlayBook has "File Sharing"
    * turned on. The <b>access_shared</b> permission must be set in order to reference any files/folders under "shared".
    *
    * @type Object
    * @readOnly
    * @RIPPLE
    * @PB10+
    * @example
    * &lt;script type=&quot;text&sol;javascript&quot;&gt;
    *   var dirs = blackberry.io.dir.appDirs;
    *	
    *   alert('Application storage folder path:' + dirs.app.storage.path);
    *		
    *   // access_shared permission must be added in order to access shared folder
    *   for (var subfolder in dirs.shared) {
    *       alert(subfolder + '.path:' + eval('dirs.shared.' + subfolder + '.path'));
    *   }
    *
    *   var musicDir = dirs.shared.music.path;
    *   alert('Music folder path:' + musicDir);
    * &lt;&sol;script&gt;	
    */
   /**
    * @name blackberry.io.dir.appDirs
    * @description Gets the full paths of application storage folder and sub-folders under "shared". Paths are in the form of file:// URL <br><br>
    * The application storage folder is created when you first invoke this call. This directory is a convenient location to store application-specific data that can only be
    * accessed by the application.<br><br>
    * The "shared" folder is the parent directory to the sub-folders such as camera and music, which can be accessed by all applications. These sub-folders can also be accessed when the
    * BlackBerry PlayBook has "File Sharing" turned on. The <b>access_shared</b> permission must be set in order to reference any files/folders under "shared".
    * @returns {Object Literal}
    * {
    *   "data" : {
    *     "app": {
    *       "storage" : {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/data"
    *       }
    *     },
    *     "shared": {
    *       "bookmarks": {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/bookmarks"
    *       },
    *       "books": {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/books"
    *       },
    *       "camera": {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/camera"
    *       },
    *       "documents": {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/documents"
    *       },
    *       "downloads": {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/downloads"
    *       },
    *       "misc": {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/misc"
    *       },
    *       "music": {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/music"
    *       },
    *       "photos": {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/photos"
    *       },
    *       "print": {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/print"
    *       },
    *       "videos": {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/videos"
    *       },
    *       "voice": {
    *         "path" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/voice"
    *       }
    *     }
    *   }
    * }
    * @PB10+
    * @uri
    * @function
    */	
    appDirs : {},

   /**
    * List all the files that reside in a given directory. 
    * @param {String} path Path location of the directory.
    * @returns {String[]}
    * @BB50+
    * @RIPPLE
    * @PB10+
    */
    listFiles : function(path) { },
	
   /**
    * List all the directories that reside in a given directory. 
    * @param {String} path path location of the directory.
    * @returns {String[]}
    * @BB50+
    * @RIPPLE
    * @PB10+
    */
    listDirectories : function(path) { },
	
   /**
    * @name blackberry.io.dir.exists^2	
    * @function
    * @description Determine whether a given directory exists or not. Returns true if the path exists and points to a
    * directory, false otherwise.
    * @param {String} path path location of the directory.
    * @returns {Boolean}
    * @BB50+
    * @RIPPLE
    * @PB10+
    */
   /**
    * @name blackberry.io.dir.exists
    * @description Determine whether a given directory exists or not. 
    * @param {String} path path of the directory, specified in the form of file:/// URL
    * @returns {Object Literal}
    * {
    *   "data" : {
    *     "path": "&lt;path that was passed&gt;",
    *     "exists" : true if the path exists and points to a directory, false otherwise
    *   }
    * }
    * @PB10+
    * @uri
    * @function     
    */	
    exists : function(path) { },
	
   /**
    * @name blackberry.io.dir.rename^2	
    * @function
    * @description Rename a given directory. 
    * @param {String} path path location of the directory to be renamed.
    * @param {String} newDirectoryName the new name for the directory.
    * @returns {void}
    * @BB50+
    * @RIPPLE
    * @PB10+
    */
   /**
    * @name blackberry.io.dir.rename
    * @description Rename a given directory.
    * @param {String} path path of the directory, specified in the form of file:/// URL
    * @param {String} newDirectoryName new name for the directory
    * @returns {Object Literal}
    * {
    *   "data" : {
    *     "path": "&lt;path that was passed&gt;",
    *     "newDirectoryName" : "&lt;newDirectoryName that was passed&gt;"
    *   }
    * }
    * @PB10+
    * @uri
    * @function
    */ 	
    rename : function(path, newDirectoryName) { },
	
   /**
    * Delete a given directory. The directory has to be empty unless the recursive flag is set to true. 
    * @param {String} path path of the directory to be deleted.
    * @param {Boolean} [recursive] flag to decide if all contents should be deleted
    * @returns {void}
    * @BB50+
    * @RIPPLE
    * @PB10+
    */
    deleteDirectory : function(path, recursive) { },	
	
   /**
    * Returns the path location of the directory that the give file or directory resides in. 
    * @param {String} path Path of the directory or file.
    * @returns {String}
    * @BB50+
    * @RIPPLE
    * @PB10+
    */
    getParentDirectory : function(path) { },
	
   /**
    * Create an empty directory. 
    * @param {String} path path location of the new directory. The name of the new directory should be included as parts of the path.
    * @returns {void}
    * @BB50+
    * @RIPPLE
    * @PB10+
    */
    createNewDir : function(path) { },
	
   /**
    * Get a list of root directories. 
    * @returns {String[]}
    * @BB50+
    * @RIPPLE
    * @example
    * &lt;script type=&quot;text&sol;javascript&quot;&gt;
    *   var i;
    *   var root = blackberry.io.dir.getRootDirs();
    *   &sol;&sol; Loop through all the files in the first root directory and display them
    *   var files = blackberry.io.dir.listFiles(root[0]);
    *   for (i = 0; i &lt; files.length; i++) {
    *     alert(files[i]);
    *   }
    *   var roots = blackberry.io.dir.getRootDirs();
    *   for (i = 0; i &lt; roots.length; i++) {
    *     alert(&quot;Free space on &apos;&quot; + roots[i] + &quot;&apos; is &quot; + blackberry.io.dir.getFreeSpaceForRoot(roots[i]) + &quot; bytes&quot;);
    *   }
    * &lt;&sol;script&gt;	
    */
    getRootDirs : function() { },
	
   /**
    * Get the amount of free space available in the specified root. 
    * @param {String} rootPath Root path location to determine free space for.
    * @returns {Number} The amound of free space availalble in the specified root.
    * @BB50+
    * @RIPPLE
    */
    getFreeSpaceForRoot : function(rootPath) { },	
	
   /**
    * Create an empty directory.
    * @param {String} path path of the directory to be created, the name of the new directory should be included as parts of the path, specified in the form of file:/// URL
    * @returns {Object Literal}
    * {
    *   "data" : {
    *     "path": "&lt;path that was passed&gt;"
    *   }
    * }
    * @PB10+
    * @uri
    */
    create : function(path) {},

   /**
    * @name blackberry.io.dir.delete
    * @description Delete a given directory. The directory has to be empty unless the recursive flag is set to true.
    * @param {String} path path of the directory to be deleted, specified in the form of file:/// URL
    * @param {Boolean} [recursive] flag to decide if all contents should be deleted, defaulted to false
    * @returns {Object Literal}
    * {
    *   "data" : {
    *     "path": "&lt;path that was passed&gt;",
    *     "recursive" : the boolean that was passed (false if "recursive" was not specified)
    *   }
    * }
    * @PB10+
    * @uri
    * @function	 
    */
    delete : function(path, recursive) {},	

   /**
    * Get properties for a given directory.
    * @param {String} path path of the directory, specified in the form of file:/// URL
    * @returns {Object Literal}
    * {
    *   "data" : {
    *     "path": "&lt;path that was passed&gt;",
    *     "name": "&lt;name of the directory&gt;", // only defined if "code" is 0
    *     "spaceAvailable": &lt;space available for use at this directory, in bytes&gt;, // only defined if "code" is 0
    *     "isEmpty": true (if directory does not contain files or sub-directories) or false (if directory contains files or sub-directories), // only defined if "code" is 0
    *   }
    * }
    * @PB10+
    * @uri
    */
    get : function(path) {},
	
   /**
    * Gets the path location of the directory that the give file or directory resides in.
    * @param {String} path path of the directory or file, specified in the form of file:/// URL
    * @returns {Object Literal}
    * {
    *   "data" : {
    *     "path": "&lt;path that was passed&gt;",
    *     "directory" : "&lt;parent directory&gt;" // only defined if "code" is 0
    *   }
    * }
    * @PB10+
    * @uri
    */
    parent : function(path) {},
	
   /**
    * List all the files and subdirectories that reside in a given directory.
    * @param {String} path path of the directory or file, specified in the form of file:/// URL
    * @returns {Object Literal}
    * {
    *   "data" : {
    *     "path": "&lt;path that was passed&gt;",
    *     "directories" : [
    *       "folder1",
    *       "folder2" ],  // only defined if "code" is 0
    *     "files" : [
    *       "5-snowflakes.swf",
    *       "chromeBookmarks.html",
    *       "test.txt ] // only defined if "code" is 0
    *   }
    * }
    * @example
    * &lt;script type="text/javascript" src="js/jquery-1.4.2.js"&gt;&lt;/script&gt;	 	 
    * &lt;script type=&quot;text&sol;javascript&quot;&gt;
    *   var dirPath = encodeURI(blackberry.io.dir.appDirs.app.storage.path + '/app_settings'); 
    *   $.ajax({
    *      url: "http://localhost:8472/blackberry/io/dir/list?path=" + filePath,
    *      success: function(result, textStatus, jqXHR){
    *        try {
    *           var resultObj = JSON.parse(result);
    *           alert("code=" + resultObj.code + " msg=" + resultObj.msg);
    *
    *           if (resultObj.code == 0) {
    *              for (var i = 0; i < resultObj.data.directories.length; i++) {
    *                 alert('Sub-directory[' + i + ']: ' + resultObj.data.directories[i]);
    *              }
    *
    *              for (var i = 0; i < resultObj.data.files.length; i++) {
    *                 alert('File[' + i + ']: ' + resultObj.data.files[i]);
    *              }
    *           }
    *        } catch (e) {
    *           alert('e.message = ' + e.message);
    *        }				
    *      }
    *   });
    * &lt;&sol;script&gt;
    * @PB10+
    * @uri
    */
    list : function(path) {}
};





