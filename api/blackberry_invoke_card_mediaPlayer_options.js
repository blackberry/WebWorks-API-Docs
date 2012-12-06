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

/**
 * @toc {Invoke} MediaPlayerOptions
 * @class The MediaPlayerOptions object contains options that are passed into {@link blackberry.invoke.card.invokeMediaPlayer}().
 * @BB10X
 */
blackberry.invoke.card.MediaPlayerOptions = {};

/**
 * @type String
 * @description  The title to be displayed in the media player title field.
 * @BB10X
 */
blackberry.invoke.card.MediaPlayerOptions.prototype.contentTitle = "";

/**
 * @type String
 * @description  The URL for the content to be played.
 * @BB10X
 */
blackberry.invoke.card.MediaPlayerOptions.prototype.contentUri = "";


/**
 * @type String
 * @description The image source URL that will be used to replace the default background image. This is useful if the content is audio type.
 * @BB10X
 */
blackberry.invoke.card.MediaPlayerOptions.prototype.imageUri = "";

