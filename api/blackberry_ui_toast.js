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
 * @toc {User Interface} Toast
 * @featureID blackberry.ui.toast
 * @namespace The Toast object contains functions for displaying toast notifications.
 * <p/>
 * The functionality of this object allows the developer to display system toast notifications within their WebWorks application.
 */
blackberry.ui.toast ={

        /**
         * @param {String} message Message to be displayed in the toast.
         * @param {Object} [options] options object that specifies the buttonText, and callback handlers that should be used by the toast
         * @param {String} [options.buttonText] parameter that specifies the label for the button within the toast.
         * @callback {function} [options.buttonCallback] callback for receiving the button event when the user selects the toast button.
         * @callback {function} [options.dismissCallback] callback for receiving an event when the toast dismisses either through the toast's timeout or when the button is selected.
         * @param {Number} [options.timeout] timeout value that can be used to extend the toast for as long as the user desires. The value specified is parsed in milliseconds.
         * @returns {Number} A numeric ID to reference this toast by.
         * @description Displays a toast notification.
         * @BB10X
         * @example
         * &lt;script type="text/javascript"&gt;
         *
         * function showCustomToast() {
         *    var message = "This is my toast!",
         *        buttonText = "Click Me",
         *        toastId,
         *        onButtonSelected = function () {
         *           console.log('Button was clicked for toast: ' + toastId);
         *        },
         *        onToastDismissed = function () {
         *           console.log('Toast disappeared: ' + toastId);
         *        },
         *        options = {
         *          buttonText : buttonText,
         *          dismissCallback : onToastDismissed,
         *          buttonCallback : onButtonSelected
         *        };
         *
         *    toastId = blackberry.ui.toast.show(message, options);
         * }
         *
         * function showCustomToastWithTimeout() {
         *    var message = "This is my toast!",
         *        buttonText = "Click Me",
         *        toastId,
         *        onButtonSelected = function () {
         *           console.log('Button was clicked for toast: ' + toastId);
         *        },
         *        onToastDismissed = function () {
         *           console.log('Toast disappeared: ' + toastId);
         *        },
         *        options = {
         *          buttonText : buttonText,
         *          dissmissCallback : onToastDismissed,
         *          buttonCallback : onButtonSelected,
         *          timeout : 10000
         *        };
         *
         *    toastId = blackberry.ui.toast.show(message, options);
         * }
         * &lt;/script&gt;
         */
        show : function(message, options){};
};
