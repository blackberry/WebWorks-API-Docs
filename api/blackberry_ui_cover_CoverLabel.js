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
 * @class Represents a label object to be displayed on the application's window cover.
 * @toc {User Interface} Cover Labels
 * @featureID blackberry.ui.cover
 * @learns {Sample - Using a label on a Window Cover} https://github.com/blackberry/BB10-WebWorks-Samples/tree/master/WindowCovers Sample that demonstrates how to use the BlackBerry CoverLabel API [BlackBerry on GitHub]. 
 * @BB10X
 */
blackberry.ui.cover.CoverLabel = {}

/**
 * @type String
 * @BB10X
 * @description text to be displayed for this label
 */
blackberry.ui.cover.CoverLabel.prototype.label = {};

/**
 * @type Boolean
 * @BB10X
 * @description whether or not the label text should wrap to the next line
 */
blackberry.ui.cover.CoverLabel.prototype.wrap = {};

/**
 * @type Number
 * @BB10X
 * @description text size
 */
blackberry.ui.cover.CoverLabel.prototype.size = {};
