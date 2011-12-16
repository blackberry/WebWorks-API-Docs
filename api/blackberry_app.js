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
 *			var details = document.getElementById("details");
 *			if (details) {
 *				var output = "<table>";
 *				output += "<tr><td><b>Author</b></td><td>" + blackberry.app.author + "</td></tr>";
 *				output += "<tr><td><b>Author Email</b></td><td>" + blackberry.app.authorEmail + "</td></tr>";
 *				output += "<tr><td><b>Author URL</b></td><td>" + blackberry.app.authorURL + "</td></tr>";
 *				output += "<tr><td><b>Copyright</b></td><td>" + blackberry.app.copyright + "</td></tr>";
 *				output += "<tr><td><b>Description</b></td><td>" + blackberry.app.description + "</td></tr>";
 *				output += "<tr><td><b>ID</b></td><td>" + blackberry.app.id + "</td></tr>";
 *				output += "<tr><td><b>License</b></td><td>" + blackberry.app.license + "</td></tr>";
 *				output += "<tr><td><b>License URL</b></td><td>" + blackberry.app.licenseURL + "</td></tr>";
 *				output += "<tr><td><b>Name</b></td><td>" + blackberry.app.name + "</td></tr>";
 *				output += "<tr><td><b>Version</b></td><td>" + blackberry.app.version + "</td></tr>";
 *			
 *				details.innerHTML = output;
 *			}
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
	 * @PB10+
     * @RIPPLE
	 */
	exit: function(){},
	
	/**
	 * @description This function will move the application to the background.
	 * @BB50+
     * @RIPPLE
	 */
	requestBackground: function(){},
	
	/**
	 * @description This function will move the application to the foreground application.
	 * @BB50+
     * @RIPPLE
	 */
	requestForeground : function(){},
	
	/**
	 * @description This method will set the icon that appears in the Home Screen of the Smartphone.
	 * @returns {Boolean} Returns true if successful, false otherwise. The hover icon can only be set when the application icon has been set first. Changes made using this API are NOT persisted across PlayBook resets.
	 * @BB50+
     * @RIPPLE
	 * @param {String} uri Location of the image to use for the icon. The path to the image resource must be fully qualified. An example of a fully qualified path is local:///resourceFolder/icons/icon.png. The path to the resource must also be included in the whitelist. For example, accessing an image on the file system requires 'file:///' to be whitelisted
	 * @param {Boolean} [hover=false]If set to true then the hover icon for the application is changed. By default this is false, so the icon that is changed is the default main icon for the application.
	 */
	setHomeScreenIcon : function(uri,hover){},
	
	/**
	 * @description This method will set the text for the icon that appears in the Home Screen of the Smartphone.
	 * @returns {Boolean} Returns true if successful, false otherwise. Changes made using this API are NOT persisted across resets. 
	 * @BB50+
     * @RIPPLE
	 * @param {String} text Text to appear on the home screen icon.
	 */
	setHomeScreenName : function(text){},
	
    /**
	 * @description This function will show an icon on the banner.
A banner indicator can have an optional numeric value that usually serves as a counter. The value can be negative, 0, or positive. If the indicator is used as a counter then the best practice is to hide it when its value is equal to 0. Some applications may choose to show 0 as a counter value if such information is important to user, for example, the number of financial transactions in the current business day. Due to limited real estate, the indicator value can be truncated if it is very large. In such case the indicator will display '99+' or '999+', which means 'over a hundred' or 'over a thousand'.
<br/><br/>Indicators are not guaranteed to be displayed. Different factors play a role in whether the indicator is displayed, such as available indicators space, number of registered indicators, and current application preferences. Application indicators have the lowest drawing priority compared to system indicators such as the unread email counter or missed calls indicator.
	 * @BB50+
     * @RIPPLE
	 * @param {String} icon The name of the icon to show on the banner. The icon must be a local resource and it's size varies from 10x10 up to 32x32 depending on current theme and device screen size.
	 * @param {Number} [value] Optional parameter to indicate the number to show on the banner.
	 */		 
	showBannerIndicator:function( icon, value ){} 

    /**
	 * @description This function will remove the indicator on the banner.
	 * @BB50+
     * @RIPPLE
	 */	 
	removeBannerIndicator:function(){} 
	
	/**
	 * @description The ID of the author's name that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @readonly
	 * @type String
	 */
	author : "",
	
	/**
	 * @description The author's email of the BlackBerry WebWorks application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @readonly
	 * @type String
	 */
	authorEmail : "",
	
	/**
	 * @description The author's URL of the BlackBerry WebWorks application that is specified in the config.xml file.
	 * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @readonly
	 * @type String
	 */
	authorURL : "",
	/**
	 * @description The copyright information of the BlackBerry WebWorks application that is specified in the config.xml file.
	 * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @readonly
	 * @type String
	 */
	copyright : "",
	
	/**
	 * @description The description of the BlackBerry WebWorks application that is specified in the config.xml file.
	 * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @readonly
	 * @type String
	 */
	description : "",
	
	/**
	 * @description The ID of the BlackBerry WebWorks Application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @readonly
	 * @type String
	 */
	id : "",
	
	/**
	 * @description A property that will return true if the BlackBerry WebWorks Application is in the foreground. 
	 * @BB50+
     * @RIPPLE
	 * @readonly
	 * @type Boolean
	 */
	isForeground : "",
	
	/**
	 * @description The license of the BlackBerry WebWorks Application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @readonly
	 * @type String
	 */
	license : "",
	
	/**
	 * @description The license URL of the BlackBerry WebWorks Application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @readonly
	 * @type String
	 */
	licenseURL : "",
	
	/**
	 * @description The name of the BlackBerry WebWorks Application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @readonly
	 * @type String
	 */
	name : "",
	
	/**
	 * @description The version of the BlackBerry WebWorks Application that is specified in the config.xml file. 
	 * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @readonly
	 * @type String
	 */
	version : "",

	
	
	/**
     * Returns a JSON object containing all properties of the application.
	 * @uri 
	 * @PB10+
	 * @returns {JSON of all the properties}
	 * {
	 * 	"data":{
	 *		"author":"John Doe",
	 *		"name":"My WebWorks Widget",
	 *		"authorEmail":"jdoe@company.com",
	 *		"authorURL":"www.company.com",
	 *		"description":"A sample widget",
	 *		"license":"Legal stuff goes here",
	 *		"id":"888",
	 *		"version":"1.0",
	 *		"copyright":"Company Ltd.",
	 *		"licenseURL":"www.company.com/license"
	 * 	}
	 * }
	 * @example 
	 * &lt;html&gt;
	 * &lt;head&gt;
	 *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt;
	 *     &lt;script type="text/javascript" src="js/jquery.form.js" &gt;&lt;/script&gt;
	 *     &lt;script type="text/javascript" src="js/jquery.populate.js" &gt;&lt;/script&gt;
	 *     
	 *     &lt;script type="text/javascript"&gt;  
	 *	function getAppData(){
	 *		$.ajax({
	 *		    type: "get",
	 *		    url: "http://localhost:8472/blackberry/app/get",
	 *		    success: function(msg){
	 *		      $('#myAppDiv').populate(JSON.parse(msg).data);
	 *		    }
	 *		});
	 *	}
	 *      &lt;/script&gt;
	 *      
	 *&lt;/head&gt;
	 *&lt;body&gt;
	 *
	 *    &lt;input type="button" onclick="getAppData();" value="Populate - APP"/&gt;
	 *    &lt;div id="myAppDiv"&gt;
	 *        Name: &lt;span id="author"&gt;&lt;/span&gt;&lt;br/&gt;
	 *        ID: &lt;span id="id"&gt;&lt;/span&gt;
	 *    &lt;/div&gt;
	 *    
	 *&lt;/body&gt;
	 *&lt;/html&gt;
	 */
	get: function(){}
	
	
};
