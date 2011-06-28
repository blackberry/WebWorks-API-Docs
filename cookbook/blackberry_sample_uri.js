/* Copyright 2010-2011 Research In Motion Limited.
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
 * @namespace This sample object shows how to document a uri function.   
 * @toc {Samples} Sample URI
 * @featureID blackberry.sampleURI
 * @permission view_sample_URI Some descriptive text for the first sample URI permission
 * @permission [view_op_sample_URI] Example with other sample URI permission
 */
blackberry.sampleURI = {
        /**
         * @uri 
         * @PB10
         * @description The objects in hasPermission will always be ALLOW (0). They will correspond to all the entries in the whitelist. If they are not whitelisted, they are omitted from the list. Similarly, all of the objects in hasCapability will be true, otherwise they will be omitted.
         * @returns {Object Literal}
         * {
         * "code":0,
         * "msg":null,
         * "data":{
         *      "dateCreated" : "Tue Apr 26 09:45:25 GMT-0400 2011", // date string format to be confirmed
         *      "dateModified" : "Tue Apr 26 09:45:25 GMT-0400 2011", // date string format to be confirmed
         *      "directory" : "file:///accounts/1000/appdata/WebWorksAppTemplate.testa3NBcHBUZW1wbGF0ZSAgICA/shared/camera",
         *      "fileExtension" : "txt",
         *      "isHidden" : false,
         *      "size" : 1289242,
         *      "author":"John Doe",
         *      "name":"My WebWorks Widget",
         *      "authorEmail":"jdoe@company.com",
         *      "authorURL":"www.company.com",
         *      "description":"A sample widget",
         *      "license":"Legal stuff goes here",
         *      "id":"888",
         *      "version":"1.0",
         *      "copyright":"Company Ltd.",
         *      "licenseURL":"www.company.com/license"
         *      }
         * }
         * @example 
         * &lt;html&gt;
         * &lt;head&gt;
         *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt;
         *     &lt;script type="text/javascript" src="js/jquery.form.js" &gt;&lt;/script&gt;
         *     &lt;script type="text/javascript" src="js/jquery.populate.js" &gt;&lt;/script&gt;
         *     
         *     
         *     &lt;script type="text/javascript"&gt;
         *     
         *          function getSystemData(){
         *              $.ajax({
         *                  type: "get",
         *                  url: "webworks://blackberry/sample_uri/get",
         *                  success: function(msg){
         *                      $('#myAppDiv').populate(JSON.parse(msg).data);
         *                  }
         *               });
         *           }
         *      &lt;/script&gt;
         *&lt;/head&gt;
         *&lt;body&gt;
         *
         *    &lt;input type="button" onclick="getData();" value="Populate"/&gt;
         *    &lt;div id="myAppDiv"&gt;
         *        Name : &lt;span id="author"&gt;&lt;/span&gt;&lt;br/&gt;
         *        ID : &lt;span id="id"&gt;&lt;/span&gt;&lt;br/&gt;
         *        Date Created : &lt;span id="dateCreated"&gt;&lt;/span&gt;&lt;br/&gt;
         *        File Extension : &lt;span id="fileExtension"&gt;&lt;/span&gt;&lt;br/&gt;
         *    &lt;/div&gt;
         *&lt;/body&gt;
         *&lt;/html&gt;
         */
        get: function(){}
};