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
* @BB50+
* @namespace The Directory object provides functions for interacting with directories on the file system.
* @featureID blackberry.io.dir
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
blackberry.io.dir = { };

/**
* List all the files that reside in a given directory. 
* @param {String} path Path location of the directory.
* @returns {String[]} A string array containing all the files in the given directory. 
* @BB50+
*/
blackberry.io.dir.listFiles = function(path) { };

/**
* List all the directories that reside in a given directory. 
* @param {String} path path location of the directory.
* @returns {String[]} A string array containing all the subdirectories in a given directory. 
* @BB50+
*/
blackberry.io.dir.listDirectories = function(path) { };

/**
* Determine whether a given directory exists or not. 
* @param {String} path path location of the directory.
* @returns {Boolean} True if the given directory exists; false otherwise.
* @BB50+
*/
blackberry.io.dir.exists = function(path) { };

/**
* Rename a given directory. 
* @param {String} path path location of the directory to be renamed.
* @param {String} newDirectoryName the new name for the directory.
* @returns {void}
* @BB50+
*/
blackberry.io.dir.rename = function(path,newDirectoryName) { };

/**
* Delete a given directory. The directory has to be empty unless the recursive flag is set to true. 
* @param {String} path path of the directory to be deleted.
* @param {Boolean} [recursive] flag to decide if all contents should be deleted
* @returns {void}
* @BB50+
*/
blackberry.io.dir.deleteDirectory = function(path,recursive) { };

/**
* Returns the path location of the directory that the given file or directory resides in. 
* @param {String} path Path of the directory or file.
* @returns {String} The path location of the directory that the given file or directory resides in.
* @BB50+
*/
blackberry.io.dir.getParentDirectory = function(path) { };

/**
* Create an empty directory. 
* @param {String} path path location of the new directory. The name of the new directory should be included as parts of the path.
* @returns {void}
* @BB50+
*/
blackberry.io.dir.createNewDir = function(path) { };

/**
* Get a list of root directories. 
* @returns {String[]} A string array containing all root directories.
* @BB50+
*/
blackberry.io.dir.getRootDirs = function() { };

/**
* Get the amount of free space available in the specified root. 
* @param {String} rootPath Root path location to determine free space for.
* @returns {Number} The amound of free space availalble in the specified root.
* @BB50+
*/
blackberry.io.dir.getFreeSpaceForRoot = function(rootPath) { };


