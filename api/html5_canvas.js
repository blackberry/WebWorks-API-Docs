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
 * @toc {User Interface} HTML5 Canvas
 * @namespace
 * The canvas tag is used to display graphics. <br>
 * The canvas tag is only a container for graphics, you must use a script to actually paint graphics.<br>
 * The canvas tag is new in HTML5.<br>
 * Any text inside the between &#60canvas&#62 and &#60/canvas&#62 will be displayed in browsers that does not support the canvas element.
 * @BB60+
 * @PB10
 */

 canvas ={

		/**
		 * @description Specifies the height of the canvas.
		 * <p/>
		 * The default value of height is 150 pixels.
		 * <p/>
		 * Whenever the height or width of a canvas is re-set the canvas content will be cleared.
		 * <p/>
		 * Syntax :
		 * &#60canvas height="value"&#62	
		 * @type pixels 
		 * @BB60+
		 * @PB10
		 * @example
		 * &#60canvas id="myCanvas" width="200" height="100"&#62&#60/canvas&#62
		 */
		height :,
		
		/**
		 * @description Specifies the width of the canvas.
		 * <p/>
		 * The default value of width is 300 pixels.
		 * <p/>
		 * Whenever the height or width of a canvas is re-set the canvas content will be cleared.
		 * <p/>
		 * Syntax :
		 * &#60canvas width="value"&#62	
		 * @type pixels 
		 * @BB60+
		 * @PB10
		 */
		width :,
		
		/**
		 * @description Returns an object that exposes an API for drawing on the canvas. 
		 * @param {String} contextId Specifies the desired API.<br>
		 * List of defined contexts: 2d, webgl. 
		 * @returns {Object} Returns an object for contextId.
		 * Returns null if the given context ID is not supported or if the canvas has already been initialised with some other (incompatible) 
		 * context type (e.g. trying to get a "2d" context after getting a "webgl" context).
		 * @BB60+
		 * @PB10
		 * @example
		 * &#60script type="text/javascript"&#62
		 *   var c=document.getElementById("myCanvas");
		 *   var cxt=c.getContext("2d");
		 *   cxt.fillStyle="#FF0000";
		 *   cxt.fillRect(0,0,150,75);
		 * &#60/script&#62 
		 */
		getContext: function(contextId) {},
			
		/**
		 * @description Returns a data:URL for the image in the canvas.
		 * @param {String} [type] The argument, if provided, controls the type of the image to be returned (e.g. PNG or JPEG). 
		 * The default is image/png; that type is also used if the given type isn't supported. 
		 * @returns {String} When called with no arguments, returns a data:URL containing a representation of the image as a PNG file.
		 * If the canvas has no pixels (i.e. either its horizontal dimension or its vertical dimension is zero) then the method must return the string "data:,". 
		 * When the method is called with one arguments, it must return a data:URL containing a representation of the image in the format 
		 * given by type. The possible values are MIME types with no parameters, for example image/png, image/jpeg, 
		 * or even maybe image/svg+xml if the implementation actually keeps enough information to reliably render an SVG image from the canvas.
		 * @BB60+
		 * @PB10
		 * @example
		 * &#60script&#62
		 *   var img1=new Image();
         *   img1.src="Image1.jpeg";
		 *   var canvas=document.createElement('canvas');
		 *   canvas.width=300;
		 *   canvas.height=300;
		 *   var canvas2d=canvas.getContext("2d");
		 *   canvas2d.drawImage(img1,100,100);
		 *   window.location = canvas.toDataURL("image/png");
		 * &#60/script&#62
		 * @example
		 * &#60canvas id=mycanvas width=200 height=200&#62&#60/canvas&#62
		 * &#60script&#62
		 *   var canvas = document.getElementById("mycanvas"); 
		 *   var context = canvas.getContext("2d"); 
		 *   var img = canvas.toDataURL(); 
		 *   document.write('&#60img src="'+img+'"/&#62');
		 * &#60/script&#62
		 */
		toDataURL: function(type) {}
};
