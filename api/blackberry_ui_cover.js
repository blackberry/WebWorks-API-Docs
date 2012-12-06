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
 * @toc {User Interface} Window Covers
 * @featureID blackberry.ui.cover
 * @BB10X
 * @namespace The cover namespace provides the ability to modify the application's window cover which is displayed when the application is in thumbnail mode.
 *
 */

blackberry.ui.cover = {};

/**
 * @description resets the window cover to default behavior: scaled snapshot on entering window cover
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * blackberry.ui.cover.resetCover();
 *
 * &lt;/script&gt;
 * @BB10X
 */
blackberry.ui.cover.prototype.resetCover = function () {};

/**
 * @description updates the application's window cover
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * blackberry.ui.cover.updateCover();
 *
 * &lt;/script&gt;
 * @BB10X
 */
blackberry.ui.cover.prototype.updateCover = function () {};

/**
 * @description sets content for application's window cover. See constants.
 * @param {String} type type of content to be displayed
 * @param {Object} options contains relevant information based on type
 * @param {String} [options.path] path to image to display for window cover, necessary for image mode
 * @param {Number} [options.x] starting x for cover snapshot, necessary for snapshot mode
 * @param {Number} [options.y] starting y for cover snapshot, necessary for snapshot mode
 * @param {Number} [options.width] snapshot width, necessary for snapshot mode
 * @param {Number} [options.height] snapshot height, necessary for snapshot mode
 * @BB10X
 */
blackberry.ui.cover.prototype.setContent = function () {};

/**
 * @description Sets the application's window cover transition. The default transition is TRANSITION_SLIDE.
 * @param {String} transition See constants
 * @BB10X
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * blackberry.ui.cover.setTransition(blackberry.ui.TRANSITION_FADE);
 *
 * &lt;/script&gt;
 */
blackberry.ui.cover.prototype.setTransition = function () {};

/**
 * @type blackberry.ui.cover.CoverLabel[]
 * @description list of labels to be displayed on the window cover
 * @BB10X
 */
blackberry.ui.cover.prototype.labels = [];

/**
 * @type Boolean
 * @description Should the window cover show notification badges. The default value is true.
 * @BB10X
 */
blackberry.ui.cover.prototype.showBadges = {};

/**
 * @type Object
 * @description The application's cover dimensions, contains a width and height (in pixels)
 * @BB10X
 */
blackberry.ui.cover.prototype.coverSize = {};

/**
* @description The <b>entercover</b> event is triggered whenever the the application displays the window cover in thumbnail mode.
* @example
* &lt;script type="text/javascript"&gt;
*
* function onEnterCover() {
*   blackberry.ui.cover.updateCover();
* }
*
* blackberry.event.addEventListener("entercover", onEnterCover);
*
* &lt;/script&gt;
* @event
* @BB10X
*/
blackberry.ui.cover.prototype.entercover : function(){};

/**
* @description The <b>exitcover</b> event is triggered whenever the the application removes the window cover exiting thumbnail mode.
* @example
* &lt;script type="text/javascript"&gt;
*
* function onExitCover() {
*   console.log("app is exiting cover mode");
* }
*
* blackberry.event.addEventListener("exitcover", onExitCover);
*
* &lt;/script&gt;
* @event
* @BB10X
*/
blackberry.ui.cover.prototype.exitcover : function(){};

/**
 * @type String
 * @BB10X
 * @constant
 * @description Specifies image mode
 */
blackberry.ui.cover.prototype.TYPE_IMAGE = 'file';

/**
 * @type String
 * @BB10X
 * @constant
 * @description Specifies snapshot mode
 */
blackberry.ui.cover.prototype.TYPE_SNAPSHOT = 'snapshot';

/**
 * @type String
 * @BB10X
 * @constant
 * @description Specifies fade window cover transition
 */
blackberry.ui.cover.prototype.TRANSITION_FADE = 'fade';

/**
 * @type String
 * @BB10X
 * @constant Specifies no window cover transition
 */
blackberry.ui.cover.prototype.TRANSITION_NONE = 'none';

/**
 * @type String
 * @BB10X
 * @constant
 * @description Specifies slide window cover transition
 */
blackberry.ui.cover.prototype.TRANSITION_SLIDE = 'slide';

/**
 * @type String
 * @BB10X
 * @constant
 * @description Specifies default window cover transition
 */
blackberry.ui.cover.prototype.TRANSITION_DEFAULT = 'default';
