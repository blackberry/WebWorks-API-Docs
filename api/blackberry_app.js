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
 * @toc {System} Application
 * @featureID blackberry.app
 * @namespace The Application object provides functions and properties for the currently running application.
 * @example
 * &lt;script type="text/javascript"&gt;
 *	function makeTable() {
 *		try {
 *			alert("<b>Author</b>" + blackberry.app.author );
 *			alert("<b>Author Email</b>" + blackberry.app.authorEmail );
 *			alert("<b>Author URL</b>" + blackberry.app.authorURL );
 *			alert("<b>Copyright</b>" + blackberry.app.copyright );
 *			alert("<b>Description</b>" + blackberry.app.description );
 *			alert("<b>ID</b>" + blackberry.app.id );
 *			alert("<b>License</b>" + blackberry.app.license );
 *			alert("<b>License URL</b>" + blackberry.app.licenseURL );
 *			alert("<b>Name</b>" + blackberry.app.name );
 *			alert("<b>Version</b>" + blackberry.app.version );
 *			
 *		} catch(e) {
 *			alert("Exception in displayDetails: " + e);
 *		}
 *	}
 * &lt;/script&gt;
 */
blackberry.app ={
	
	/**
	 * @description This function will cause the application to exit.
	 * @BB50+
	 * @PB10
	 */
	exit: function(){},
	
	/**
	 * @description This function will move the application to the background.
	 * @BB50+
	 */
	requestBackground: function(){},
	
	/**
	 * @description This function will move the application to the foreground application.
	 * @BB50+
	 */
	requestForeground : function(){},
	
	/**
	 * @description This method will set the icon that appears in the Home Screen of the PlayBook.
	 * @returns {Boolean} Returns true if successful, false otherwise. The hover icon can only be set when the application icon has been set first. Changes made using this API are NOT persisted across PlayBook resets.
	 * @BB50+
	 * @param {String} uri Location of the image to use for the icon. The path to the image resource must be fully qualified. An example of a fully qualified path is local:///resourceFolder/icons/icon.png. The path to the resource must also be included in the whitelist. For example, accessing an image on the file system requires 'file:///' to be whitelisted
	 * @param {Boolean} [hover=false]If set to true then the hover icon for the application is changed. By default this is false, so the icon that is changed is the default main icon for the application.
	 */
	setHomeScreenIcon : function(uri,hover){},
	
	/**
	 * @description This method will set the text for the icon that appears in the Home Screen of the PlayBook.
	 * @returns {Boolean} Returns true if successful, false otherwise. Changes made using this API are NOT persisted across resets. 
	 * @BB50+
	 * @param {String} text Text to appear on the home screen icon.
	 */
	setHomeScreenName : function(text){},
	
	/**
	 * @description The ID of the author's name that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
	author : "",
	
	/**
	 * @description The author's email of the BlackBerry WebWorks application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
	authorEmail : "",
	
	/**
	 * @description The author's URL of the BlackBerry WebWorks application that is specified in the config.xml file.
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
	authorURL : "",
	/**
	 * @description The copyright information of the BlackBerry WebWorks application that is specified in the config.xml file.
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
	copyright : "",
	
	/**
	 * @description The description of the BlackBerry WebWorks application that is specified in the config.xml file.
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
	description : "",
	
	/**
	 * @description The ID of the BlackBerry WebWorks Application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
	id : "",
	
	/**
	 * @description A property that will return true if the BlackBerry WebWorks Application is in the foreground. 
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
	//isForeground : "",
	
	/**
	 * @description The license of the BlackBerry WebWorks Application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
	license : "",
	
	/**
	 * @description The license URL of the BlackBerry WebWorks Application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
	licenseURL : "",
	
	/**
	 * @description The name of the BlackBerry WebWorks Application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
	name : "",
	
	/**
	 * @description The version of the BlackBerry WebWorks Application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10
	 * @readonly
	 * @type String
	 */
	version : "",

};