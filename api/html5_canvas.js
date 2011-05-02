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
 * @toc {canvas} HTML5 canvas element
 * @class
 * The canvas tag is used to display graphics. <br>
 * The canvas tag is only a container for graphics, you must use a script to actually paint graphics.<br>
 * The canvas tag is new in HTML5.<br>
 * Any text inside the between &#60canvas&#62 and &#60/canvas&#62 will be displayed in browsers that does not support the canvas element.
 * @BB60+
 * @example
 * Add a canvas element to the HTML5 page:
 *   &#60canvas id="myCanvas" width="200" height="100"&#62&#60/canvas&#62
 * @example
 * The canvas element has no drawing abilities of its own. 
 * <br>All drawing must be done inside a JavaScript:
 *   &#60script type="text/javascript"&#62
 *     var c=document.getElementById("myCanvas");
 *     var cxt=c.getContext("2d");
 *     cxt.fillStyle="#FF0000";
 *     cxt.fillRect(0,0,150,75);
 *   &#60/script&#62 
 * @example
 * Draw a red rectangle:
 *   var c=document.getElementById("myCanvas"); 
 *   var cxt=c.getContext("2d"); 
 *   cxt.fillStyle="#FF0000";
 *   cxt.fillRect(0,0,150,75); 
 */

canvas ={

		/**
		 * @desc Specifies the height of the canvas.
		 * <p/>
		 * The default value of height is 150 pixels.
		 * <p/>
		 * Whenever the height or width of a canvas is re-set the canvas content will be cleared.
		 * <p/>
		 * Syntax :
		 * &#60canvas height="value"&#62	
		 * @type {pixels} The height in pixels (like "100px" or just "100")
		 */
		height :,
		
		/**
		 * @desc Specifies the width of the canvas.
		 * <p/>
		 * The default value of width is 300 pixels.
		 * <p/>
		 * Whenever the height or width of a canvas is re-set the canvas content will be cleared.
		 * <p/>
		 * Syntax :
		 * &#60canvas width="value"&#62	
		 * @type {pixels} The width in pixels (like "100px" or just "100")
		 */
		width :,
			
		/**
		 * @desc Returns a URL for the image in the canvas.
		 * @param {String} [type] The argument, if provided, controls the type of the image to be returned (e.g. PNG or JPEG). 
		 * The default is image/png; that type is also used if the given type isn't supported. 
		 * @returns {String} When called with no arguments, returns a data:URL containing a representation of the image as a PNG file.
		 * When the method is called with one arguments, it must return a data:URL containing a representation of the image in the format 
		 * given by type. The possible values are MIME types with no parameters, for example image/png, image/jpeg, 
		 * or even maybe image/svg+xml if the implementation actually keeps enough information to reliably render an SVG image from the canvas.
		 */
		toDataURL: function([type]) {},
		
		/**
		 * @desc Returns an object that exposes an API for drawing on the canvas. 
		 * @param {String} contextId Specifies the desired API. 
		 * @returns {Object} Returns an object for contextId.
		 * Returns null if the given context ID is not supported or if the canvas has already been initialised with some other (incompatible) 
		 * context type (e.g. trying to get a "2d" context after getting a "webgl" context).
		 */
		getContext: function(contextId) {}
};

  