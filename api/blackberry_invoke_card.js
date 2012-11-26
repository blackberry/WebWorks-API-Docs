/*
* Copyright 2012 Research In Motion Limited.
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
 * @beta
 * @namespace The Card object contains methods that invoke cards.
 * <p/>
 * @toc {Invoke} Card
 * @featureID blackberry.invoke.card
 */
blackberry.invoke.card = {

        /**
         * @description Invokes the Camera Card.
         * @param {String} mode A string to specify the photo video or full mode.
         * @callback {function} onSave The callback function that will be triggered if the user saves a picture or video.
         * @callback {String} [onSave.path] A String that describes the path of the file saved.
         * @callback {function} onCancel The callback function that will be triggered if the user does not save and simply quits the camera.
         * @callback {String} [onCancel.reason] A String that describes the reason the camera was cancelled.
         * @callback {function} onInvoke The callback function that will be triggered when the camera is invoked.
         * @callback {String} [onInvoke.error] A String that describes if there was an error. No error will be returned on success.
         *
         * @BB10X
         * @example
         * &lt;script type="text/javascript"&gt;
         *
         *
         * function invokeCameraCard() {
         *       var mode = blackberry.invoke.card.CAMERA_MODE_PHOTO;
         *       blackberry.invoke.card.invokeCamera(mode, function (path) {
         *              alert("saved "+ path);
         *          },
         *          function (reason) {
         *              alert("cancelled " + reason);
         *          },
         *          function (error) {
         *              if (error) {
         *                  alert("invoke error "+ error);
         *               } else {
         *                  console.log("invoke success " );
         *               }
         *       });
         *  }
         *
         * &lt;/script&gt;
         */
        invokeCamera : function(mode, onSave, onCancel, onInvoke){},

        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the photo mode for camera.
         */
        CAMERA_MODE_PHOTO : 'photo',
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the video mode for camera.
         */
        CAMERA_MODE_VIDEO : 'video',
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the full mode for camera which means photo,video and TimeShift.
         */
        CAMERA_MODE_FULL : 'full',

        /**
         * @description Invokes the FilePicker Card.
         * @param {blackberry.invoke.card.FilePickerOptions} options An object to type {@link blackberry.invoke.card.FilePickerOptions} describe all the options available for FilePicker.
         * @callback {function} onDone The callback function that will be triggered if the user selects file(s) or folder(s).
         * @callback {String} [onDone.pathArray] An Array that describes the path of each of the files saved.
         * @callback {function} onCancel The callback function that will be triggered if the user does not select file(s) or folder(s) and simply cancels.
         * @callback {String} [onCancel.reason] A String that describes the reason the FilePicker was cancelled.
         * @callback {function} onInvoke The callback function that will be triggered when the camera is invoked.
         * @callback {String} [onInvoke.error] A String that describes if there was an error. No error will be returned on success.
         *
         * @BB10X
         * @example
         * &lt;script type="text/javascript"&gt;
         *
         * //invoke the filePicker Card
         * function invokeFilePicker(details) {
         *      blackberry.invoke.card.invokeFilePicker(details, function (path) {
         *               alert("saved "+ path);
         *           },
         *           function (reason) {
         *               alert("cancelled " + reason);
         *           },
         *           function (error) {
         *               if (error) {
         *                   alert("invoke error "+ error);
         *               } else {
         *                   console.log("invoke success " );
         *               }
         *           }
         *       );
         * }
         *
         *
         * //pick a file of picture or music type
         * function invokeFileInPickerMode0() {
         *  var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER,
         *           type: [blackberry.invoke.card.FILEPICKER_TYPE_PICTURE, blackberry.invoke.card.FILEPICKER_TYPE_MUSIC]
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //pick a file of picture with image crop enabled
         * function invokeFileInPickerMode1() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER,
         *           type: [blackberry.invoke.card.FILEPICKER_TYPE_PICTURE],
         *           imageCropEnabled: true
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //pick a file using a filter, of only jpg and mp4
         * function invokeFileInPickerMode2() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER,
         *           filter: ["*.jpg", "*.mp4"]
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //open file picker in GridView and sort by descending name
         * function invokeFileInPickerMode3() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER,
         *           viewMode: blackberry.invoke.card.FILEPICKER_VIEWER_MODE_GRID,
         *           sortBy: blackberry.invoke.card.FILEPICKER_SORT_BY_NAME,
         *           sortOrder: blackberry.invoke.card.FILEPICKER_SORT_ORDER_DESCENDING
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //open file picker in multiple mode with a title in viewMode list
         * function invokeFileInPickerMode4() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER,
         *           viewMode: blackberry.invoke.card.FILEPICKER_VIEWER_MODE_LIST,
         *           title: "Some Custom Title"
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //open file picker in multiple mode starting at two directories - APP HOME and SHARED FOLDER
         * function invokeFileInPickerMode5() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER,
         *           directory: [blackberry.io.home, blackberry.io.sharedFolder]
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //open file picker in saver mode starting at two directories
         * function invokeFileInPickerMode6() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER_MULTIPLE,
         *           directory: [blackberry.io.home, blackberry.io.sharedFolder]
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //open file picker in saver mode with 1 directory. Should open parent of App Home
         * function invokeFileInPickerMode7() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_SAVER,
         *           directory: [blackberry.io.home]
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //open file picker in saver mode and allow overwrite - try to save already saved file
         * function invokeFileInPickerMode8() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_SAVER,
         *           directory: [blackberry.io.sharedFolder],
         *           allowOverwrite: true
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //open file picker in multiple saver mode to save a folder path
         * function invokeFileInPickerMode9() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_SAVER_MULTIPLE,
         *
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //open file picker in  saver mode with single file name
         * function invokeFileInPickerMode10() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_SAVER,
         *           defaultSaveFileNames: ["file1.jpg"]
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //open file picker in multiple saver mode with file names and file types
         * function invokeFileInPickerMode11() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_SAVER_MULTIPLE,
         *           defaultSaveFileNames: ["file1.jpg", "file2.jpg"]
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * //open file picker in single  mode with a type and defaultType
         * function invokeFileInPickerMode12() {
         *   var details = {
         *           mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER,
         *           type: [blackberry.invoke.card.FILEPICKER_TYPE_PICTURE,
         *                  blackberry.invoke.card.FILEPICKER_TYPE_DOCUMENT],
         *           defaultType: blackberry.invoke.card.FILEPICKER_TYPE_DOCUMENT
         *       };
         *   invokeFilePicker(details);
         * }
         *
         * &lt;/script&gt;
         */
        invokeFilePicker : function(options, onSave, onCancel, onInvoke){},

        /**
         * @description Invokes the IcsViewer Card.
         * @param {blackberry.invoke.card.IcsViewerOptions} options An object to type {@link blackberry.invoke.card.IcsViewerOptions} describes all the options available for IcsViewer.
         * @callback {function} onDone The callback function that will be triggered .
         * @callback {String} [onDone.data] A data string might be an empty or to contain some information.
         * @callback {function} onCancel The callback function that will be triggered when the card invocation has been cancelled.
         * @callback {String} [onCancel.reason] A string that describes the reason the IcsViewer was cancelled.
         * @callback {function} onInvoke The callback function that will be triggered when the IcsViewer card is invoked.
         * @callback {String} [onInvoke.error] A String that describes if there was an error. No error will be returned on success.
         *
         * @BB10X
         * @example
         * &lt;script type="text/javascript"&gt;
         *
         * //invoke the IcsViewer Card
         * function invokeIcsViewer(options) {
         *   blackberry.invoke.card.invokeIcsViewer(options, function (data) {
         *         alert("Card is done");
         *       },
         *       function (reason) {
         *         alert("cancelled " + reason);
         *       },
         *       function (error) {
         *         if (error) {
         *           alert("invoke error "+ error);
         *         } else {
         *           console.log("invoke success " );
         *         }
         *       }
         *   );
         * }
         *
         *
         * //invoke IcsViewer with no account id provided
         * function invokeIcsViewerNoAccountId() {
         *   var options = {
         *     uri: "file:///accounts/1000/shared/documents/test.ics"
         *   };
         *
         *   invokeIcsViewer(options);
         * }
         *
         * //invoke IcsViewer with an account id provided
         * function invokeIcsViewerWithAccountId() {
         *   var options = {
         *     uri: "file:///accounts/1000/shared/documents/test.ics",
         *     accountId: 1
         *   };
         *
         *   invokeIcsViewer(options);
         * }
         *
         * &lt;/script&gt;
         */
        invokeIcsViewer : function(options, onSave, onCancel, onInvoke){},

        /**
         * @description Invokes the MediaPlayer Card.
         * @param {blackberry.invoke.card.MediaPlayerOptions} options An object to type {@link blackberry.invoke.card.MediaPlayerOptions} describe all the options available for meida player.
         * @callback {function} onDone The callback function that will be triggered when the user finished with the media player.
         * @callback {String} [onDone.data] The data string back from the media player.
         * @callback {function} onCancel The callback function that will be triggered if the user cancel the media player.
         * @callback {String} [onCancel.reason] A String that describes the reason the MediaPlayer was cancelled.
         * @callback {function} onInvoke The callback function that will be triggered when the media player is invoked.
         * @callback {String} [onInvoke.error] A String that describes if there was an error. No error will be returned on success.
         *
         * @BB10X
         * @example
         * &lt;script type="text/javascript"&gt;
         *
         * //invoke the mediaPlayer Card
         * function invokeMediaPlayer(options) {
         *   blackberry.invoke.card.invokeMediaPlayer(options, function (data) {
         *       alert("Done: "+ data);
         *     },
         *     function (reason) {
         *       alert("cancelled: " + reason);
         *     },
         *     function (error) {
         *       if (error) {
         *         alert("invoke error "+ error);
         *       } else {
         *         console.log("invoke success");
         *       }
         *     }
         *   );
         * }
         *
         *
         * //Invoke media player with the only title set.
         * function invokeMediaPlayerWithTitle() {
         *   var options = {
         *     contentTitle: "Just Title",
         *   };
         *
         *   invokeMediaPlayer(options);
         * }
         *
         * //Invoke media player with title and video.
         * function invokeMediaPlayerTitleAndVideo() {
         *   var options = {
         *     contentTitle: "My First Record",
         *     contentUri: "file:///accounts/1000/shared/camera/VID_00000001.mp4"
         *   };
         *
         *   invokeMediaPlayer(options);
         * }
         *
         * //Invoke media player with title, audio and a background image.
         * function invokeMediaPlayerTitleAudioAndImage() {
         *   var options = {
         *     contentTitle: "My First Record",
         *     contentUri: "file:///accounts/1000/shared/camera/AUD_00000001.m4a,
         *     imageUri: "local:///Background4MediaPlayerAudio.jpg"
         *   };
         *
         *   invokeMediaPlayer(options);
         * }
         *
         * &lt;/script&gt;
         */
        invokeMediaPlayer : function(options, onSave, onCancel, onInvoke){},

        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the picker mode for the FilePicker, allows picking a file.
        */
        FILEPICKER_MODE_PICKER : 'Picker';
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the saver mode for the FilePicker, allows saving a file.
        */
        FILEPICKER_MODE_SAVER : 'Saver';
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the multiple picker mode for the FilePicker, allows picking multiple files.
        */
        FILEPICKER_MODE_PICKER_MULTIPLE : 'PickerMultiple';
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the multiple saver mode for the FilePicker, allows saving mutltiple files.
        */
        FILEPICKER_MODE_SAVER_MULTIPLE : 'SaverMultiple';

        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the list view for the viewer of the FilePicker.
        */
        FILEPICKER_VIEWER_MODE_LIST : 'ListView';
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the grid view for the viewer of the FilePicker.
        */
        FILEPICKER_VIEWER_MODE_GRID : 'GridView';
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the default view for the viewer of the FilePicker.
        */
        FILEPICKER_VIEWER_MODE_DEFAULT : 'Default';

        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the sort by field name.
        */
        FILEPICKER_SORT_BY_NAME : 'Name';
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the sort by field date.
        */
        FILEPICKER_SORT_BY_DATE : 'Date';
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the sort by field suffix.
        */
        FILEPICKER_SORT_BY_SUFFIX : 'Suffix';
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the sort by field date.
        */
        FILEPICKER_SORT_BY_SIZE : 'Size';

        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the sort order of ascending.
        */
        FILEPICKER_SORT_ORDER_ASCENDING : 'Ascending';
        /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the sort order of descending.
         */
         FILEPICKER_SORT_ORDER_DESCENDING : 'Descending';

         /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the picture type file.
         */
         FILEPICKER_TYPE_PICTURE : 'picture';
         /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the picture type document.
         */
         FILEPICKER_TYPE_DOCUMENT : 'document';
         /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the picture type music.
         */
         FILEPICKER_TYPE_MUSIC : 'music';
         /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the picture type video.
         */
         FILEPICKER_TYPE_VIDEO : 'video';
         /**
         * @type String
         * @constant
         * @BB10X
         * @description Describes the picture type other.
         */
         FILEPICKER_TYPE_OTHER : 'other';

};

