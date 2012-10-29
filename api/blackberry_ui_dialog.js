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
 * @toc {User Interface} Dialog
 * @featureID blackberry.ui.dialog
 * @namespace The Dialog object contains functions for manipulating system dialog boxes.
 * <p/>
 * The functionality in this object allows you to integrate standard system dialog boxes into your BlackBerry WebWorks Application and control your application flow based on user responses.
 */
blackberry.ui.dialog ={

		/**
		 * @deprecated This API is deprecated, please use {@link blackberry.ui.dialog.customAskAsync} instead.
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
		 * @description Creates an asynchronous custom dialog to ask the user a question. <br/>
         * Uses the custom dialog. The function is an asynchronous call and will not block execution. It will return the 0-based index of the user's choice. <br/>
         * NOTE: function is only implemented for Ripple emulation on Playbook.
		 * @param {String} message Message to be displayed in the dialog.
		 * @param {String[]} buttons Array of string choices that will be presented to the user in the form of buttons.
		 * @callback {function} [onOptionSelected] Optional callback function that will be invoked when the user makes a selection. Expected signature: function onOptionSelected(selectedButtonIndex). <p> NOTE: onOptionSelected is required for BlackBerry OS5.0+.
		 * @callback {Number} [onOptionSelected.index] The index of the selection the user has made.
		 * @param {Object} [settings = null] Optional Object literal that allows the user to manipulate the size, location, title of the dialog, and whether this is a global dialog (your application cannot be minimized when a global dialog is active; by default when the 'global' flag is not passed, dialog will be modal only for your application). It is not required to provide all parameters, and these do not have to be specified in any particular order. <p> NOTE: The settings parameter applies only to PlayBook, Ripple, and BB10. On the other devices, it has no effect.
		 * @param {String} [settings.title] Desired title of the dialog.
		 * @param {String} [settings.size] Desired size of the dialog.
		 * @param {String} [settings.position] Desired position of the dialog.
		 * @param {Boolean} [settings.global] Specifies the global flag of the dialog window. (Your application cannot be minimized when the dialog global setting is set to true and when any dialog window is open). By default this parameter is false when not specified. <br/>
		 * NOTE: The parameters for 'size', 'position', and 'global' are NOT implemented for BB10.
		 * @BB50+
		 * @PB10+
		 * @BB10X
		 * @RIPPLE
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
		 *     var ops = {title : "Choose the answer that describes you best", size : blackberry.ui.dialog.SIZE_TALL, position : blackberry.ui.dialog.CENTER};
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
		 * @deprecated This API is deprecated, please use {@link blackberry.ui.dialog.standardAskAsync} instead.
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
		 * @description Creates an asynchronous standard dialog to ask the user a question. <br/>
		 * Uses the standard dialog. The function is an asynchronous call and will not block execution. It will return the 0-based index of the user's choice. On BB10 it will return an object containing selected elements and input values.<br/> 
         * NOTE: function is only implemented for Ripple emulation on Playbook.
		 * @param {String} message Message to be displayed in the dialog.
		 * @param {Number} type  Parameter that specifies the type of standard dialog. Constants starting with D_*. 
		 * @callback {function} [onOptionSelected] Optional callback function that will be invoked when the user makes a selection. Expected signature: function onOptionSelected(selectedButtonIndex).  <p> NOTE: onOptionSelected is required for BlackBerry OS5.0+.
		 * @callback {Number} [onOptionSelected.index] The index of the selection the user has made.
		 * @callback {Boolean} [onOptionSelected.firstButton] The element for the primary ok/save/yes/delete button. Set to true if selected.
		 * @callback {Boolean} [onOptionSelected.secondButton] The element for the secondary cancel/no/discard button. Set to true if selected.
		 * @callback {Boolean} [onOptionSelected.thirdOptionButton] The element for the optional button. Set to true if selected.
		 * @callback {String} [onOptionSelected.promptText] The element for entered text. Returns the user's entered string.(Option only used for select dialogs: D_PROMPT). <br/><br/>
		 * NOTE: Callback 'firstButton', 'secondButton', 'thirdOptionButton', 'promptText', are only implemented on BB10. Also note callback 'index' is NOT implemented for BB10.
		 * @param {Object} [settings = null] Optional Object literal that allows the user to manipulate the size, location, title of the dialog, and whether this is a global dialog (your application cannot be minimized when a global dialog is active; by default when the 'global' flag is not passed, dialog will be modal only for your application). It is not required to provide all parameters, and these do not have to be specified in any particular order. <p> NOTE: The settings parameter applies only to PlayBook, Ripple, and BB10. On the other devices, it has no effect.
		 * @param {String} [settings.title] Desired title of the dialog.
		 * @param {String} [settings.size] Desired size of the dialog.
		 * @param {String} [settings.position] Desired position of the dialog.
		 * @param {Boolean} [settings.global] Specifies the global flag of the dialog window. (Your application cannot be minimized when the dialog global setting is set to true and when any dialog window is open). By default this parameter is false when not specified.
		 * @param {String} [settings.thirdOptionLabel] Desired label for optional third button. (This option is only available for select dialogs: not available for D_PROMPT or D_OK). <br/>
		 * NOTE: The parameters for 'size', 'position', and 'global' are NOT implemented for BB10. Also note 'third' parameter is only implemented in BB10.
		 * @BB50+
		 * @PB10+
		 * @BB10X
		 * @RIPPLE
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 *
		 * function dialogCallBack(index){
		 *   alert(index);
		 * }
		 *
		 * function standardDialog() {
		 *   try {
		 *     blackberry.ui.dialog.standardAskAsync("Save?", blackberry.ui.dialog.D_SAVE, dialogCallBack, {title : "Save Dialog"});
		 *   }catch (e) {
		 *     alert("Exception in standardDialog: " + e);
		 *   }
		 * }
		 *
		 * &lt;/script&gt;
		 */
		standardAskAsync : function(message,type,onOptionSelected,settings){},

        /**
		 * @description Creates an asynchronous dialog to allow user to select one or many items in a list.
		 * <p/>The function is an asynchronous call and will not block JavaScript execution. It will return array of indexes that user selected.
		 * @param {Boolean} allowMultiple If true, the dialog will allow multiple selection.
		 * @param {Object[]} options Array of objects representing the select items and their states.
         * @param {String} options.label The value of an item in the dropdown list
         * @param {Boolean} options.selected Flag that indicates whether an item should be rendered as currently selected
         * @param {Boolean} options.enabled Flag that indicates whether an item should be enabled for selection
         * @param {String} options.type Can be either "group" or "option" to indicate whether an item is a group header or an option
		 * @callback {function} onSelected A callback that will be invoked with the user's choices from the native UI.
		 * @callback {Number[]} onSelected.indices The indices of the user's selections.
		 * @BB50+
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 *
		 * function onSelected(indices) {
         *   var i;
         *   for(i = 0; i < indices.length; i++) {
		 *     alert("Item selected: " + indices[i]);
         *   }
		 * }
		 *
		 * function selectAsync() {
		 *   try {
		 *     blackberry.ui.dialog.selectAsync(false,
         *                                      [ { label : "Animals", selected : false, enabled : false, type : "group"},
         *                                        { label : "cat", selected : true, enabled : true, type : "option"},
         *                                        { label : "dog", selected : false, enabled : true, type : "option"},
         *                                        { label : "mouse", selected : false, enabled : true, type : "option"},
         *                                        { label : "raccoon", selected : false, enabled : true, type : "option"}
         *                                      ],
         *                                      window.onSelected);
		 *   }catch (e) {
		 *     alert("Exception in selectAsync: " + e);
		 *   }
		 * }
		 *
		 * &lt;/script&gt;
		 */
		selectAsync : function(allowMultiple, options, onSelected){},

        /**
		 * @description Creates an asynchronous dialog to allow user to select a date/time for an HTML 5 input of types: date, datetime, datetime-local, month, time
		 * <p/>The function is an asynchronous call and will not block execution. It will return the value selected by the user.
		 * @param {String} type One of: "date", "datetime", "datetime-local", "month", "time".
		 * @param {Object[]} options The current state of the input control.
         * @param {String} options.value String representation of the current date/time displayed in the field
         * @param {String} options.min String representation of the minimum date/time allowed in the field
         * @param {String} options.max String representation of the maximum date/time allowed in the field
		 * @callback {function} onDateTimeSelected A callback that will be invoked with the user's choices from the native UI.
		 * @callback {String} onDateTimeSelected.datetime The date/time user has selected.
		 * @BB50+
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 *
		 * function onDateTimeSelected(datetime){
		 *   alert(datetime);
		 * }
		 *
         * //Input argument is a reference to an input control of type: date, datetime, datetime-local, month, time
		 * function dateTimeAsync(htmlDateTimeInput) {
		 *   try {
         *     var opts = { "value" : htmlDateTimeInput.value,
         *                   "min"   : htmlDateTimeInput.min || "",
         *                   "max"   : htmlDateTimeInput.max || ""
         *     };
         *
		 *     blackberry.ui.dialog.dateTimeAsync("date", opts, window.onDateTimeSelected);
		 *   }catch (e) {
		 *     alert("Exception in dateTimeAsync: " + e);
		 *   }
		 * }
		 *
		 * &lt;/script&gt;
		 */
		dateTimeAsync : function(type, options, onSelected){},

		/**
		 * @description Creates an asynchronous dialog to allow user to select a color.
		 * <p/>The function is an asynchronous call and will not block execution. It will return the value selected by the user.
		 * @param {String} initialColor Color that will first be selected when the color picker dialog appears in hexadecimal format.
		 * @callback {function} onColorSelected Callback function that will be invoked when the user makes a selection. It will be invoked with the user's choice from the native UI.
		 * @callback {String} onColorSelected.color The color user has selected in hexadecimal format.
		 * @BB50+
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 *
		 * function onColorSelected(color){
		 *   alert(color);
		 * }
		 *
		 * function colorPicker() {
		 *   try {
		 *     blackberry.ui.dialog.colorPickerAsync("000000", onColorSelected);
		 *   } catch (e) {
		 *     alert("Exception in colorPickerAsync: " + e);
		 *   }
		 * }
		 *
		 * &lt;/script&gt;
		 */
		colorPickerAsync : function(){initialColor, onColorSelected},

		/**
		 * @constant
		 * @type Number
		 * @description Standard OK dialog
		 * @default 0
		 * @BB50+
		 * @PB10+
		 * @BB10X
		 * @RIPPLE
		 */
		D_OK : 0,
		/**
		 * @constant
		 * @type Number
		 * @description Standard Save dialog
		 * @default 1
		 * @BB50+
		 * @PB10+
		 * @BB10X
		 * @RIPPLE
		 */
		D_SAVE:1,
		/**
		 * @constant
		 * @type Number
		 * @description Standard Delete confirmation dialog
		 * @default 2
		 * @BB50+
		 * @PB10+
		 * @BB10X
		 * @RIPPLE
		 */
		D_DELETE:2,
		/**
		 * @constant
		 * @type Number
		 * @description Standard Yes/No dialog
		 * @default 3
		 * @BB50+
		 * @PB10+
		 * @BB10X
		 * @RIPPLE
		 */
		D_YES_NO:3,
		/**
		 * @constant
		 * @type Number
		 * @description Standard OK/Cancel dialog
		 * @default 4
		 * @BB50+
		 * @PB10+
		 * @BB10X
		 * @RIPPLE
		 */
		D_OK_CANCEL:4,
		/**
	 	 * @constant
		 * @type Number
		 * @description Standard OK/Cancel dialog
		 * @default 5
		 * @BB10X
		 * @RIPPLE
		 */
		D_PROMPT:5,
		/**
		 * @constant
		 * @type Number
		 * @description Standard Prompt input dialog
		 * @default -1
		 * @BB50+
		 * @RIPPLE
		 */
		C_CANCEL:-1,
		/**
		 * @constant
		 * @type Number
		 * @description OK choice for use in dialogs
		 * @default 0
		 * @BB50+
		 * @RIPPLE
		 */
		C_OK:0,
		/**
		 * @constant
		 * @type Number
		 * @description SAVE choice for use in dialogs
		 * @default 1
		 * @BB50+
		 * @RIPPLE
		 */
		C_SAVE:1,
		/**
		 * @constant
		 * @type Number
		 * @description DISCARD choice for use in dialogs
		 * @default 2
		 * @BB50+
		 * @RIPPLE
		 */
		C_DISCARD:2,
		/**
		 * @constant
		 * @type Number
		 * @description DELETE choice for use in dialogs
		 * @default 3
		 * @BB50+
		 * @RIPPLE
		 */
		C_DELETE:3,
		/**
		 * @constant
		 * @type Number
		 * @description YES choice for use in dialogs
		 * @default 4
		 * @BB50+
		 * @RIPPLE
		 */
		C_YES:4,
		/**
		 * @constant
		 * @type Number
		 * @description NO choice for use in dialogs
		 * @default -1
		 * @BB50+
		 * @RIPPLE
		 */
		C_NO:-1,
		/**
		 * @constant
		 * @type String
		 * @description Bottom located dialog
		 * @default "bottomCenter"
		 * @PB10+
		 * @RIPPLE
		 */
		BOTTOM : "bottomCenter",
		/**
		 * @constant
		 * @type String
		 * @description Center located dialog
		 * @default "middleCenter"
		 * @PB10+
		 * @RIPPLE
		 */
		CENTER : "middleCenter",
		/**
		 * @constant
		 * @type String
		 * @description Top located dialog
		 * @default "topCenter"
		 * @PB10+
		 * @RIPPLE
		 */
		TOP : "topCenter",
		/**
		 * @constant
		 * @type String
		 * @description Full size dialog
		 * @default "full"
		 * @PB10+
		 * @RIPPLE
		 */
		SIZE_FULL : null,
		/**
		 * @constant
		 * @type String
		 * @description Large size dialog
		 * @default "large"
		 * @PB10+
		 * @RIPPLE
		 */
		SIZE_LARGE : null,
		/**
		 * @constant
		 * @type String
		 * @description Medium size dialog
		 * @default "medium"
		 * @PB10+
		 * @RIPPLE
		 */
		SIZE_MEDIUM : null,
		/**
		 * @constant
		 * @description Small size dialog
		 * @default "small"
		 * @PB10+
		 * @RIPPLE
		 */
		SIZE_SMALL : null,
		/**
		 * @constant
		 * @type String
		 * @description Tall size dialog
		 * @default "tall"
		 * @PB10+
		 * @RIPPLE
		 */
		SIZE_TALL : null
};
