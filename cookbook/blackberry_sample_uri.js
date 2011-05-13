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
 * @permission view_sample_URI
 */
blackberry.sampleURI = {
        /**
         * @uri 
         * @PB10
         * @description The objects in hasPermission will always be ALLOW (0). They will correspond to all the entries in the whitelist. If they are not whitelisted, they are omitted from the list. Similarly, all of the objects in hasCapability will be true, otherwise they will be omitted.
         * @returns 
         * {
         *     "data":{
         *         "hasCapability":[
         *             "location.gps",
         *             "media.audio.capture",
         *             "media.video.capture",
         *             "media.recording",
         *             "network.bluetooth",
         *             "network.wlan"
         *         ],
         *         "softwareVersion":"QNX",
         *         "hasPermission":[
         *             "blackberry.invoke",
         *             "blackberry.system",
         *             "blackberry.app",
         *             "blackberry.app.event",
         *             "blackberry.system.event",
         *             "blackberry.ui.dialog",
         *             "blackberry.utils"
         *         ],
         *         "model":100669958,
         *         "hasDataCoverage":true,
         *         "scriptApiVersion":"1.0.0.0",
         *         "isMassStorageActive":false
         *     }
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
         *                  url: "webworks://blackberry/system/get",
         *                  success: function(msg){
         *                      $('#mySystemDiv').populate(JSON.parse(msg).data);
         *                  }
         *               });
         *           }
         *      &lt;/script&gt;
         *&lt;/head&gt;
         *&lt;body&gt;
         *
         *    &lt;input type="button" onclick="getAppData();" value="Populate - APP"/&gt;
         *    &lt;input type="button" onclick="getSystemData();" value="Populate - System"/&gt;
         *    &lt;div id="myAppDiv"&gt;
         *        Name: &lt;span id="author"&gt;&lt;/span&gt;&lt;br/&gt;
         *        ID: &lt;span id="id"&gt;&lt;/span&gt;
         *    &lt;/div&gt;
         *    &lt;br/&gt;
         *    &lt;br/&gt;
         *    &lt;div id="mySystemDiv"&gt;
         *        Software Version: &lt;span id="softwareVersion"&gt;&lt;/span&gt;&lt;br/&gt;
         *        Mass Storage Active: &lt;span id="isMassStorageActive"&gt;&lt;/span&gt;
         *    &lt;/div&gt;
         *&lt;/body&gt;
         *&lt;/html&gt;
         */
        get: function(){}
};