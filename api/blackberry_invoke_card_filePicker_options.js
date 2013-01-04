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

/**
 * @toc {Invoke} FilePickerOptions
 * @class The FilePickerOptions object contains options that are passed into {@link blackberry.invoke.card.invokeFilePicker}().
 * @learns {Sample - Set Wallpaper using File Picker } https://github.com/blackberry/BB10-WebWorks-Samples/tree/master/SetWallpaper Sample that demonstrates how to use the BlackBerry Invoke FilePicker API [BlackBerry on GitHub].
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions = {};

/**
 * @type String
 * @description  A string that describes the mode of the FilePicker. Availabe modes can be found under properties.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.mode = "";

/**
 * @type String[]
 * @description  An array of strings that describes the type of files that the FilePicker will show. Defaults to showing all types. Availabe types can be found under properties.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.type = [];


/**
 * @type String
 * @description A string that describes the default type selected in the FilePicker dropdown. Defaults to the first type in the array of option.type. Only takes affect if more than one options.type is selected. Availabe types can be found under properties.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.defaultType = "";

/**
 * @type String
 * @description A string that describes the title of the FilePicker. Defaults to the folder name.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.title = "";

/**
 * @type String[]
 * @description An array of strings that describes the FileName of the FilePicker when its invoked in Saver mode. options.mode should either be FILEPICKER_MODE_SAVER or FILEPICKER_MODE_SAVER_MULTIPLE. Defaults to no file name. In FILEPICKER_MODE_SAVER mode it will only use the first item in this array and display the filename to the user. In FILEPICKER_MODE_SAVER_MULTIPLE it will only allow the user to select a folder and in the onDone call it will return the folder path appending with the fileNames.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.defaultSaveFileNames = [];

/**
 * @type String[]
 * @description  An array of strings where only the first value in array describes the folder that will presented to the FilePicker, all other items will be ignored. Defaults to the last folder that the picker was opened in. Recommended to be specified with every call to control the user experience.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.directory = [];

/**
 * @type String
 * @description A string describes the viewer mode of the FilePicker, such as grid or list layout. Availabe view modes can be found under properties.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.viewMode = "";

/**
 * @type String
 * @description A string describes the FilePicker's sort by name or date or suffix or size. Availabe sort by fields can be found under properties.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.sortBy = "";

/**
 * @type String
 * @description A string describes the viewer sort order of the FilePicker, such as ascending or descending or default layout. Defaults to default sort order. Availabe modes can be found under properties.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.sortOrder = "";

/**
 * @type String[]
 * @description An array of strings that the file picker files should be filtered on. example [".jpg",".bmp"]. Defaults to no filter.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.filter = [];

/**
 * @type Boolean
 * @description A true or false to describe the imageCrop. Defaults to false. It will only be allowed for pictures of format jpg,  jpe, jpeg or png in mode FILEPICKER_MODE_PICKER and FILEPICKER_MODE_PICKER_MULTIPLE.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.imageCrop = "";

/**
 * @type Boolean
 * @description A true or false that describes whether the file being saved can be overwritten or not. Defaults to false. It is only valid in FILEPICKER_MODE_SAVER and FILEPICKER_MODE_SAVER_MULTIPLE.
 * @BB10X
 */
blackberry.invoke.card.FilePickerOptions.prototype.allowOverwrite = "";

