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
* @namespace
*/
blackberry.io.file = { };


/**
* <div><p>
*       This class can only be created by using the "blackberry.io.file.getFileProperties()" method.
*     </p></div>
* @toc {IO} File FileProperties 
* @BB50+
* @namespace The FileProperties object provides functions and attributes for interacting with a file&apos;s properties on the file system.
* @featureID blackberry.io.file
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   var filePath = &quot;file:&sol;&sol;&sol;store&sol;home&sol;user&sol;sample.xml&quot;;
*        
*   if (blackberry.io.file.exists(filePath)) {
*     var properties = blackberry.io.file.getFileProperties(filePath);
*     if (properties.readonly) {
*       alert(&quot;file is read only&quot;);
*     }
*   }
* &lt;&sol;script&gt;
*/
blackberry.io.file.FileProperties = { };

/**
* Whether or not the file is read-only 
* @type Boolean
* @readOnly
* @BB50+
*/
blackberry.io.file.FileProperties.prototype.isReadonly = { };

/**
* Whether or not the file is hidden 
* @type Boolean
* @readOnly
* @BB50+
*/
blackberry.io.file.FileProperties.prototype.isHidden = { };

/**
* File size in bytes 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.io.file.FileProperties.prototype.size = { };

/**
* File modified date 
* @type Date
* @readOnly
* @BB50+
*/
blackberry.io.file.FileProperties.prototype.dateModified = { };

/**
* Provides the file&apos;s extension 
* @type String
* @readOnly
* @BB50+
*/
blackberry.io.file.FileProperties.prototype.fileExtension = { };

/**
* Provides the directory that the file is in 
* @type String
* @readOnly
* @BB50+
*/
blackberry.io.file.FileProperties.prototype.directory = { };

/**
* Specifies the mime type for the file 
* @type String
* @readOnly
* @BB50+
*/
blackberry.io.file.FileProperties.prototype.mimeType = { };


