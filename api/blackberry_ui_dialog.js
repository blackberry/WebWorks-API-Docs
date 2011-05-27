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
 * @toc {User Interface} Dialog
 * @featureID blackberry.ui.dialog
 * @namespace The Dialog object contains functions for manipulating system dialog boxes.
 * <p/>
 * The functionality in this object allows you to integrate standard system dialog boxes into your BlackBerry WebWorks Application and control your application flow based on user responses.
 */
blackberry.ui.dialog ={
		
		/**
		 * @param {String} message Message to be displayed in the dialog.
		 * @param {String[]} choices Array of string choices that will be presented to the user in the form of buttons.
		 * @param {Number} [defaultChoice = 0] Optional parameter that specifies what choice should be selected by default. This is a number value representing the index of the choice provided in the choices parameter.
		 * @param {Boolean} [globalStatus = false] If set to true it adds a screen to the queue of displayed global status screens. Global status screens appear on top of all other screens on the PlayBook, even if the current application is not in the foreground. If no other status screens are currently displayed, your provided screen appears immediately. <p> NOTE: If the app is in the background and globalStatus is set to true, the app WILL NOT be brought to the foreground.
		 * @description Creates a dialog to ask the user a question. The dialog uses the standard question mark bitmap. The function will block execution and when the user selects an option it will return the index of the choice selected by the user.
		 * @returns {Number} The index of the choice selected by the user.
		 * @BB50+
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 * 
		 * function globalDialog() {
		 *   var ss = ["Saab", "Volvo", "BMW", "Subaru"];
		 *   var ret = blackberry.ui.dialog.customAsk("Select your favorite car", ss, 2, true);
		 *     
		 *   document.getElementById('carSelect').innerHTML = ss[ret]
		 * }
		 * 
		 * &lt;/script&gt;
		 */
		customAsk : function(message, choices,defaultChoice,globalStatus){},

		/**
         * @function
		 * @description Creates an asynchronous custom dialog to ask the user a question.
		 * <p/>
		 * Uses the custom dialog. The function is an asynchronous call and will not block execution. It will return the 0-based index of the user's choice.
		 * @param {String} message Message to be displayed in the dialog.
		 * @param {String[]} buttons Array of string choices that will be presented to the user in the form of buttons.
		 * @callback {function} [onOptionSelected] Optional callback function that will be invoked when the user makes a selection. Expected signature: function onOptionSelected(selectedButtonIndex).
		 * @callback {Number} [onOptionSelected.index] The index of the selection the user has made.
		 * @param {Object} [settings = null] Optional Object literal that allows the user to manipulate the size, location, title of the dialog, and whether this is a global dialog (your application cannot be minimized when a global dialog is active; by default when the 'global' flag is not passed, dialog will be modal only for your application). It is not required to provide all parameters, and these do not have to be specified in any particular order.
		 * @param {String} [settings.title] Desired title of the dialog.
		 * @param {String[]} [settings.size] Desired size of the dialog.
		 * @param {String[]} [settings.position] Desired position of the dialog.
		 * @PB10
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 * 
		 * function dialogCallBack(index){
		 *   alert(index);
		 * }  
		 * 
		 * function customDialog() {
		 *   try {
		 *     var buttons = ["Yes", "No", "Sometimes", "NA"];
		 *     var ops = {title : "Choose the answer that describes you best", size : blackberry.ui.dialog.SIZE_TALL, position : blackberry.ui.dialog.LOC_CENTER};
		 *     blackberry.ui.dialog.customAskAsync("Do you routinely work out?", buttons, dialogCallBack, ops);
		 *   } catch(e) {
		 *     alert("Exception in customDialog: " + e);
		 *   }
		 * }
		 * 
		 * &lt;/script&gt;
		 */
		customAskAsync : function(message,buttons,onOptionSelected,settings){},
		
		/**
		 * @param {Number} specifies the type of standard dialog. Constants starting with D_*.
		 * @param {String} message Message to be displayed in the dialog.
		 * @param {Number} [defaultChoice = 0] Optional parameter that specifies what choice should be selected by default. For the standard dialogs, these options can be one of the constants starting with C_*.
		 * @param {Boolean} [globalStatus = false] If set to true it adds a screen to the queue of displayed global status screens. Global status screens appear on top of all other screens on the PlayBook, even if the current application is not in the foreground. If no other status screens are currently displayed, your provided screen appears immediately. <p> NOTE: If the app is in the background and globalStatus is set to true, the app WILL NOT be brought to the foreground.
		 * @description Creates a standard dialog to ask the user a question.
		 * @returns {Number} The index of the choice selected by the user.
		 * @BB50+
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 *
		 * function launchDialog() {
		 *   setTimeout(globalDialog, 5000);
		 *   return;
		 * }
		 *
		 * function globalDialog() {
		 *   var ss = ["Saab", "Volvo", "BMW"];
		 *   var ret = blackberry.ui.dialog.customAsk("Select your favorite car", ss, 2, true);
		 *   blackberry.ui.dialog.standardAsk(blackberry.ui.dialog.D_OK, "You selected " + ss[ret], 0, true);
		 * }
		 *
		 * &lt;/script"&gt;
		 */
		standardAsk : function(type, message, defaultChoice, globalStatus){},
		
		/**
		 * @description Creates an asynchronous standard dialog to ask the user a question.
		 * <p/> Uses the standard dialog. The function is an asynchronous call and will not block execution. It will return the 0-based index of the user's choice.
		 * @param {String} message Message to be displayed in the dialog.
		 * @param {Number} type  Parameter that specifies the type of standard dialog. Constants starting with D_*.
		 * @callback {function} [onOptionSelected] Optional callback function that will be invoked when the user makes a selection. Expected signature: function onOptionSelected(selectedButtonIndex).
		 * @callback {Number} [onOptionSelected.index] The index of the selection the user has made.
		 * @param {Object} [settings = null] Optional Object literal that allows the user to manipulate the size, location, title of the dialog, and whether this is a global dialog (your application cannot be minimized when a global dialog is active; by default when the 'global' flag is not passed, dialog will be modal only for your application). It is not required to provide all parameters, and these do not have to be specified in any particular order.
		 * @param {String} [settings.title] Desired title of the dialog.
		 * @param {String[]} [settings.size] Desired size of the dialog.
		 * @param {String[]} [settings.position] Desired position of the dialog.
		 * @PB10
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 * 
		 * function dialogCallBack(index){
		 *   alert(index);
		 * }  
		 * 
		 * function standardDialog() {
		 *   try {
		 *     blackberry.ui.dialog.standardAskAsync("Save?", blackberry.ui.dialog.D_SAVE, dialogCallBack, {title : "Save Dialog", size: blackberry.ui.dialog.SIZE_MEDIUM, position : blackberry.ui.dialog.LOC_BOTTOM});
		 *   }catch (e) {
		 *     alert("Exception in standardDialog: " + e);
		 *   }
		 * }
		 * 
		 * &lt;/script&gt;
		 */
		standardAskAsync : function(message,type,onOptionSelected,settings){},
		
		/**
		 * @constant
		 * @type Number
		 * @description Standard OK dialog
		 * @default 0
		 * @BB50+
		 * @PB10
		 */	
		D_OK : 0,
		/**
		 * @constant
		 * @type Number
		 * @description Standard Save dialog
		 * @default 1
		 * @BB50+
		 * @PB10
		 */
		D_SAVE:1,
		/**
		 * @constant
		 * @type Number
		 * @description Standard Delete confirmation dialog
		 * @default 2
		 * @BB50+
		 * @PB10
		 */
		D_DELETE:2,
		/**
		 * @constant
		 * @type Number
		 * @description Standard Yes/No dialog
		 * @default 3
		 * @BB50+
		 * @PB10
		 */
		D_YES_NO:3,
		/**
		 * @constant
		 * @type Number
		 * @description Standard OK/Cancel dialog
		 * @default 4
		 * @BB50+
		 * @PB10
		 */
		D_OK_CANCEL:4,
		
		/**
		 * @constant
		 * @type Number
		 * @description Cancel Choice for us in dialogs
		 * @default -1
		 * @BB50+
		 */
		C_CANCEL:-1,
		/**
		 * @constant
		 * @type Number
		 * @description OK choice for use in dialogs
		 * @default 0
		 * @BB50+
		 */
		C_OK:0,
		/**
		 * @constant
		 * @type Number
		 * @description SAVE choice for use in dialogs
		 * @default 1
		 * @BB50+
		 */
		C_SAVE:1,
		/**
		 * @constant
		 * @type Number
		 * @description DISCARD choice for use in dialogs
		 * @default 2
		 * @BB50+
		 */
		C_DISCARD:2,
		/**
		 * @constant
		 * @type Number
		 * @description DELETE choice for use in dialogs
		 * @default 3
		 * @BB50+
		 */
		C_DELETE:3,
		/**
		 * @constant
		 * @type Number
		 * @description YES choice for use in dialogs
		 * @default 4
		 * @BB50+
		 */
		C_YES:4,
		/**
		 * @constant
		 * @type Number
		 * @description NO choice for use in dialogs
		 * @default -1
		 * @BB50+
		 */
		C_NO:-1,
		/**
		 * @constant
		 * @type String
		 * @description Bottom located dialog
		 * @default "bottomCenter"
		 * @PB10
		 */
		BOTTOM : "bottomCenter",
		/**
		 * @constant
		 * @type String
		 * @description Center located dialog
		 * @default "middleCenter"
		 * @PB10
		 */
		CENTER : "middleCenter",
		/**
		 * @constant
		 * @type String
		 * @description Top located dialog
		 * @default "topCenter"
		 * @PB10
		 */
		TOP : "topCenter",
		/**
		 * @constant
		 * @type String
		 * @description Full size dialog
		 * @default "full"
		 * @PB10
		 */
		SIZE_FULL : null,
		/**
		 * @constant
		 * @type String
		 * @description Large size dialog
		 * @default "large"
		 * @PB10
		 */
		SIZE_LARGE : null,
		/**
		 * @constant
		 * @type String
		 * @description Medium size dialog
		 * @default "medium"
		 * @PB10
		 */
		SIZE_MEDIUM : null,
		/**
		 * @constant
		 * @type String
		 * @description Small size dialog
		 * @default "small"
		 * @PB10
		 */
		SIZE_SMALL : null,
		/**
		 * @constant
		 * @type String
		 * @description Tall size dialog
		 * @default "tall"
		 * @PB10
		 */
		SIZE_TALL : null			
};
