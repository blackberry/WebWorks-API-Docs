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
 * @toc {Video} HTML5 Video 
 *The &#60video&#62 tag specifies video, such as a movie clip or other video streams.<br>
 * Tip: Any text inside the between &#60video&#62 and &#60/video&#62 will be displayed in browsers that do not support the video element.<br>
 * The &#60video&#62 tag also supports the Event Attributes in HTML5.<br>
 *
 *@class
 *@property {muted} audioNew The audio attribute controls the default state of the audio channel of the video.<br>
 * Specifies that the audio on the video should be muted by default.
 *@property {String} [autoplayNew=autoplay] If present, then the video will start playing as soon as it is ready.
 *@property {controls} controlsNew The controls attribute specifies that the browser should provide playback controls for the video.<br>
 *When this attribute is set, it specifies that there are no scripted controls set by the author.<br>
 *The browser controls should include:<br>
 *<ul>
 *<li>Play
 *<li>Pause
 *<li>Seeking
 *<li>Volume
 *<li>Fullscreen toggle
 *<li>Captions/Subtitles (when available)
 *<li>Audio track (when available)
 *</ul>
 *@pb10
 *@property {pixels} heightNew 
 *The height attribute specifies the height of the video player.<br>
 *<p>Tip: It is a good practice to specify both the height and width attributes for a video. If these attributes are set, the space required is reserved when the page is loaded. However, without these attributes, the browser does not know the size of the video, and cannot reserve the appropriate space to it. The effect will be that the page layout may change during loading (while the video loads).
 *<p>Tip: Do not rescale video with the height and width attributes! Downsizing a large video with the height and width attributes forces a user to download the original video (even if it looks small on the page). The correct way to rescale a video is with a program, before using it on a page.
 *</p></p>
 *The height in pixels (like "100px" or just "100")
 *@property {loop} loopNew The loop attribute specifies that the audio will start over again, every time it is finished.<br>
 * If this attribute is present the audio will loop.
 *@property {url} posterNew the URL of an image representing the video.
 *Specifies an image to be shown while no video data is available.
 *The image should represent the video (like one of the frames from the video), and should give the user an idea of what the video is like.
 *The URL of the video file.
 *Possible values:
 *<ul>
 *<li>An absolute URL - points to another web site (like href="http://www.example.com/movie.ogg")
 *<li>A relative URL - points to a file within a web site (like href="movie.ogg")
 *</ul>
 *@property {preload} preloadNew If present, the video will be loaded at page load, and ready to run. Ignored if "autoplay" is present.
 *Specifies if the video should be preloaded or not.
 *Possible values:
 *<ul>
 *<li>auto - load entire video when page loads.
 *<li>metadata - load only metadata when page loads.
 *<li>none - do not load video when page loads.
 *</ul>
 *@property {url} srcNew The src attribute specifies the URL of the video to play.
 *The URL of the video file.
 *Possible values:
 *<ul>
 *<li>An absolute URL - points to another web site (like href="http://www.example.com/movie.ogg")
 *<li>A relative URL - points to a file within a web site (like href="movie.ogg")
 *</ul>
 *@property {pixels} widthNew Sets the width of the video player.
 *The width attribute specifies the width of the video player.
 *<ul>
 *<li>Tip: It is a good practice to specify both the width and height attributes for a video. If these attributes are set, the space required is reserved when the page is loaded. However, without these attributes, the browser does not know the size of the video, and cannot reserve the appropriate space to it. The effect will be that the page layout may change during loading (while the video loads).
 *<li>ip: Do not rescale video with the height and width attributes! Downsizing a large video with the height and width attributes forces a user to download the original video (even if it looks small on the page). The correct way to rescale a video is with a program, before using it on a page.
 *</ul>
 *The width in pixels (like "100px" or just "100")
 *@example
 */ 
video={
	audioNew:, 
	autoplayNew:,
	controlsNew:,
	heightNew:,
	loopNew:,
	posterNew:,
	preloadNew:,
	srcNew:,
	widthNew,
};
