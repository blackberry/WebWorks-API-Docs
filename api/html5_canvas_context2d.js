/**
* @namespace
* The 2D context represents a flat Cartesian surface whose origin 
* (0,0) is at the top left corner, with the coordinate space 
* having x values increasing when going right, and y values 
* increasing when going down.
* @toc {User Interface} HTML5 2D Canvas Context
* @constructedBy {canvas.getContext(&#039;2d&#039;)} {to create an CanvasRenderingContext2D object you must fetch the context of a {@link Canvas} using the '2d' identifier}
* &lt;html&gt;
* &lt;head&gt;
*     &lt;title&gt;Example&lt;/title&gt;
*     &lt;script type=&quot;text/javascript&quot;&gt;
*         function foo()
*         {
*                 var canvas = document.getElementById(&quot;myCanvas&quot;)
*                 var context = canvas.getContext(&#039;2d&#039;);      
*                 
*                 // Draw a pink triangle  
*                 context.beginPath();              
*                 context.lineWidth=&quot;3&quot;;
*                 context.strokeStyle=&quot;magenta&quot;;
*                 context.fillStyle=&quot;pink&quot;;
*                 context.moveTo(150,0);
*                 context.lineTo(300,200);
*                 context.lineTo(0,200);
*                 context.closePath();
*                 context.fill();
*                 context.stroke();
*         }
*     &lt;/script&gt;
*     &lt;/head&gt;
*     &lt;body onload=&quot;foo();&quot;&gt;
*         &lt;canvas id=&quot;myCanvas&quot; width=&quot;300&quot; height=&quot;300&quot;&gt;&lt;/canvas&gt;
*     &lt;/body&gt;
* &lt;/html&gt;
* @BB60+
* @PB10
*/ 
CanvasRenderingContext2D = { };

/**
* Return the canvas interface element that the context paints on.
* @type HTMLCanvasElement
* @readOnly
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.canvas = { }

/**
* Push a copy of the current drawing state onto the drawing state stack.
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.save = function() { }; 

/**
* Pop the top entry in the drawing state stack, and reset the drawing 
* state it describes.
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.restore = function() { };


/**
* Add the scaling transformation described by the arguments to the 
* transformation matrix. The x argument represents the scale factor 
* in the horizontal direction and the y argument represents the scale factor in the vertical direction. The factors are multiples.
* @param {Number} x
* @param {Number} y
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.scale = function(x, y) { };
    

/**
* Add the rotation transformation described by the argument to the 
* transformation matrix. The angle argument represents a clockwise 
* rotation angle expressed in radians.
* @param {Number} angle
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.rotate = function(angle) { };

/**
* Add the translation transformation described by the arguments to 
* the transformation matrix. The x argument represents the translation 
* distance in the horizontal direction and the y argument represents 
* the translation distance in the vertical direction. The arguments 
* are in coordinate space units.
* @param {Number} x
* @param {Number} y
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.translate = function(x, y) { };

/**
* Method must multiply the current transformation matrix with the 
* matrix described by:
* <table>
*   <tr><td>m11</td><td>m21</td><td>dx</td></tr>
*   <tr><td>m12</td><td>m22</td><td>dy</td></tr>
*   <tr><td>0</td><td>0</td><td>1</td></tr>
* </table>
* @param {Number} m11
* @param {Number} m12
* @param {Number} m21
* @param {Number} m22
* @param {Number} dx
* @param {Number} dy
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.transform = function(m11, m12, m21, m22, dx, dy) { };

/**
* Reset the current transform to the identity matrix (it should not 
* change the image). To transform the image, invoke the transform(m11, 
* m12, m21, m22, dx, dy) method with the appropriate arguments.
* @param {Number} m11
* @param {Number} m12
* @param {Number} m21
* @param {Number} m22
* @param {Number} dx
* @param {Number} dy
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.setTransform = function(m11, m12, m21, m22, dx, dy) { };

/**
* The current alpha value applied to rendering operations.
* Can be set, to change the alpha value. Values outside of the range 
* from 0.0 to 1.0 are ignored.
* @type Number
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.globalAlpha = 1.0; 

/**
* The current composition operation, from the list below.
* Can be set, to change the composition operation. Unknown values 
* are ignored.
*
* <ul>
*   <li>&quot;copy&quot;:<br/>
* A (B is ignored). Display the source image instead of the 
* destination image.</li>
* <li>&quot;destination-atop&quot;:<br/>
* B atop A. Display the destination image wherever both images 
* are opaque. Display the source image wherever the source image 
* is opaque but the destination image is transparent. Display 
* transparency elsewhere.</li>
* <li>&quot;destination-in&quot;:<br/>
* B in A. Display the destination image wherever both the 
* destination image and source image are opaque. Display 
* transparency elsewhere.</li>
* <li>&quot;destination-out&quot;:<br/>
* B out A. Display the destination image wherever the destination 
* image is opaque and the source image is transparent. Display 
* transparency elsewhere.</li>
* <li>&quot;destination-over&quot;:<br/>
* B over A. Display the destination image wherever the destination 
* image is opaque. Display the source image elsewhere.</li>
* <li>&quot;lighter&quot;:<br/>
* A plus B. Display the sum of the source image and destination 
* image, with color values approaching 1 as a limit.</li>
* <li>&quot;source-atop&quot;:<br/>
* A atop B. Display the source image wherever both images are opaque. 
* Display the destination image wherever the destination image is 
* opaque but the source image is transparent. Display transparency 
* elsewhere.</li>
* <li>&quot;source-in&quot;:<br/>
* A in B. Display the source image wherever both the source image 
* and destination image are opaque. Display transparency elsewhere.</li>
* <li>&quot;source-out&quot;:<br/>
* A out B. Display the source image wherever the source image is 
* opaque and the destination image is transparent. Display 
* transparency elsewhere.</li>
* <li>&quot;source-over&quot; (default):<br/>
* A over B. Display the source image wherever the source image is 
* opaque. Display the destination image elsewhere.</li>
* <li>&quot;vendorName-operationName&quot;:<br/>
* Vendor-specific extensions to the list of composition operators 
* should use this syntax.</li>
* <li>&quot;xor&quot;:<br/>
* A xor B. Exclusive OR of the source image and destination image.</li>
* </ul><br/><br/>
* These values are all case-sensitive and must be used exactly as 
* shown. User agents must not recognize values that are not a 
* case-sensitive match for one of the values given above.<br/><br/>
* 
* The operators in the previous list must be treated as described 
* by the Porter-Duff operator given at the start of their 
* description (e.g. A over B).<br/><br/>
* 
* On setting, if the user agent does not recognize the 
* specified value, the value must be ignored, leaving 
* the value of globalCompositeOperation unaffected.
* @type String
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.globalCompositeOperation = "source-over";

/**
*The current style used for the stroke of the shapes. <br/>
* Can be set, to change the stroke style. <br/>
* The style can be either a string containing a CSS color, or a 
* {@link CanvasGradient} or {@link CanvasPattern} object. 
* @type Object
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.strokeStyle = "black"; 

/**
* The current style used for filling shapes. <br/>
* Can be set, to change the fill style.<br/>
* The style can be either a string containing a CSS color, or a 
* {@link CanvasGradient} or {@link CanvasPattern} object. 
* Invalid values are ignored.
* @type Object
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.fillStyle = "black"

/**
* Takes four arguments that represent the start point (x0, y0) and 
* end point (x1, y1) of the gradient. If any of the arguments to 
* createLinearGradient() are infinite or NaN, the method must 
* raise a NOT_SUPPORTED_ERR exception. Otherwise, the method 
* must return a linear {@link CanvasGradient} initialized with the 
* specified line.<br/><br/>
* 
* Linear gradients must be rendered such that all points on a line 
* perpendicular to the line that crosses the start and end points 
* have the color at the point where those two lines cross 
* (with the colors coming from the interpolation and extrapolation 
* described above). The points in the linear gradient must be 
* transformed as described by the current transformation matrix 
* when rendering.<br/><br/>
* 
* If x0 = x1 and y0 = y1, then the linear gradient must paint nothing.
* @param {Number} x0
* @param {Number} y0
* @param {Number} x1
* @param {Number} y1
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.createLinearGradient = function(x0, y0, x1, y1) { };

/**
* Method takes six arguments, the first three representing the start 
* circle with origin (x0, y0) and radius r0, and the last three 
* representing the end circle with origin (x1, y1) and radius r1. 
* The values are in coordinate space units. If any of the arguments 
* are infinite or NaN, a NOT_SUPPORTED_ERR exception must be raised. 
* If either of r0 or r1 are negative, an INDEX_SIZE_ERR exception must 
* be raised. Otherwise, the method must return a radial 
* {@link CanvasGradient}  initialized with the two 
* specified circles.<br/><br/>
* 
* Radial gradients must be rendered by following these steps:<br/><br/>
* 
* 1. If x0 = x1 and y0 = y1 and r0 = r1, then the radial gradient 
* must paint nothing. Abort these steps.<br/><br/>
* 
* 2. Let x(?) = (x1-x0)? + x0<br/>
* Let y(?) = (y1-y0)? + y0<br/>
* Let r(?) = (r1-r0)? + r0<br/><br/>
* 
* Let the color at ? be the color at that position on the gradient 
* (with the colors coming from the interpolation and extrapolation 
* described above).<br/><br/>
* 
* 3. For all values of ? where r(?) > 0, starting with the value 
* of ? nearest to positive infinity and ending with the value 
* of ? nearest to negative infinity, draw the circumference of 
* the circle with radius r(?) at position (x(?), y(?)), with the 
* color at ?, but only painting on the parts of the canvas that have 
* not yet been painted on by earlier circles in this step for this 
* rendering of the gradient.<br/><br/>
* 
* This effectively creates a cone, touched by the two circles 
* defined in the creation of the gradient, with the part of the 
* cone before the start circle (0.0) using the color of the first 
* offset, the part of the cone after the end circle (1.0) using the 
* color of the last offset, and areas outside the cone untouched 
* by the gradient (transparent black).
* @param {Number} x0
* @param {Number} y0
* @param {Number} r0
* @param {Number} x1
* @param {Number} y1
* @param {Number} r1
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.createRadialGradient = function (x0, y0, r0, x1, y1, r1) { };

/**
* Returns a CanvasPattern object that uses the given image and 
* repeats in the direction(s) given by the repetition 
* argument.<br/><br/>
* 
* The allowed values for repetition are "repeat" (both directions), 
* "repeat-x" (horizontal only), "repeat-y" (vertical only), and 
* "no-repeat" (neither). If the repetition argument is empty or 
* null, the value repeat is used. <br/><br/>
* 
* If the first argument is not an img, canvas interface 
* element, or video element, throws a 
* TYPE_MISMATCH_ERR exception.<br/><br/>
* 
* If the image is not fully decoded yet or has no image data, 
* throws an INVALID_STATE_ERR exception. <br/><br/>
* 
* If the second argument is not one of the allowed values 
* a SYNTAX_ERR exception.<br/><br/>
* @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} image
* @param {String} repetition
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.createPattern = function(image, repetition) { };

/**
* The current line width.<br/>
* Can be set, to change the line width.<br/>
* Values that are not finite values greater than zero are ignored.
* @type Number
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.lineWidth = 1; // (default 1)


/**
* The current line cap style. <br/>
* Can be set, to change the line cap style.<br/>
* The possible line cap styles are "butt", "round", and "square". <br/>
* Other values are ignored.<br/>
* @type String
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.lineCap = "butt"; // "butt", "round", "square" (default "butt")

/**
* Returns the current line join style.<br/>
* Can be set, to change the line join style.<br/>
* The possible line join styles are "miter", "round", and "bevel". <br/>
* Other values are ignored.
* @type String
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.lineJoin = "miter"; // "miter", "round", "bevel"  (default "miter")

/**
* The current miter limit ratio.<br/>
* Can be set, to change the miter limit ratio.<br/>
* Values that are not finite values greater than zero are ignored.
* @type Number
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.miterLimit = 10; // (default 10)

/**
* The current shadow offset.<br/>
* Can be set, to change the shadow offset. Values that are not 
* finite numbers are ignored.
* @type Number
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.shadowOffsetX = 0; // (default 0)

/**
* The current shadow offset.<br/>
* Can be set, to change the shadow offset. Values that are not 
* finite numbers are ignored.
* @type Number
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.shadowOffsetY = 0; // (default 0)

/**
* The current level of blur applied to shadows.<br/>
* Can be set, to change the blur level. Values that are not finite 
* numbers greater than or equal to zero are ignored.<br/><br/>
* The units do not map to coordinate space units and are 
* not affected by the current transformation matrix.
* @type Number
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.shadowBlur = 0; // (default 0)

/**
* Returns the current shadow color.<br/>
* Can be set, to change the shadow color. Values that cannot be 
* parsed as CSS colors are ignored.
* @type String
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.shadowColor = "transparent black"; // (default transparent black)

/**
* Clears all pixels on the canvas in the given rectangle 
* to transparent black.
* @param {Number} x
* @param {Number} y
* @param {Number} w
* @param {Number} h
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.clearRect = function(x, y, w, h) { };

/**
* Paints the given rectangle onto the canvas, using 
* the current fill style.
* @param {Number} x
* @param {Number} y
* @param {Number} w
* @param {Number} h
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.fillRect = function(x, y, w, h) { };

/**
* Paints the box that outlines the given rectangle onto the 
* canvas, using the current stroke style.
* @param {Number} x
* @param {Number} y
* @param {Number} w
* @param {Number} h
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.strokeRect = function(x, y, w, h) { };


/**
* Resets the current path.
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.beginPath = function() { };

/**
* Marks the current subpath as closed, and starts a new subpath with 
* a point the same as the start and end of the newly closed subpath.
*/
CanvasRenderingContext2D.prototype.closePath = function() { };

/**
* Creates a new subpath with the given point as its first 
* (and only) point.
* @param {Number} x
* @param {Number} y
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.moveTo = function(x, y) { };

/**
* Adds the given point to the current subpath, connected to 
* the previous point by a straight line.
* @param {Number} x
* @param {Number} y
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.lineTo = function(x, y) { };

/**
* Adds the given point to the current path, connected to 
* the previous one by a quadratic Bézier curve with the 
* given control point.
* @param {Number} cpx
* @param {Number} cpy
* @param {Number} x
* @param {Number} y
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.quadraticCurveTo = function(cpx, cpy, x, y) { };

/**
* Adds the given point to the current path, connected to the 
* previous one by a cubic Bézier curve with the given control points.
* @param {Number} cp1x
* @param {Number} cp1y
* @param {Number} cp2x
* @param {Number} cp2y
* @param {Number} x
* @param {Number} y
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) { };

/**
* Adds a point to the current path, connected to the previous one by 
* a straight line, then adds a second point to the current path, 
* connected to the previous one by an arc whose properties are 
* described by the arguments.<br/><br/>
* 
* If the given radius is negative, throws an INDEX_SIZE_ERR exception .
* @param {Number} x1
* @param {Number} y1
* @param {Number} x2
* @param {Number} y2
* @param {Number} radius
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.arcTo = function(x1, y1, x2, y2, radius) { };

/**
* Adds a new closed subpath to the path, representing the 
* given rectangle.
* @param {Number} x
* @param {Number} y
* @param {Number} w
* @param {Number} h
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.rect = function(x, y, w, h) { };

/**
* Adds points to the subpath such that the arc described by the 
* circumference of the circle described by the arguments—starting 
* at the given start angle, ending at the given end angle, and going 
* in the given direction—is added to the path, connected to the 
* previous point by a straight line. <br/><br/>
* 
* If the given radius is negative, throws an INDEX_SIZE_ERR exception.
* @param {Number} x
* @param {Number} y
* @param {Number} radius
* @param {Number} startAngle
* @param {Number} endAngle
* @param {Boolean} anticlockwise
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) { };

/**
* Fills the subpaths with the current fill style.
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.fill = function() { };

/**
* Creates the strokes of the subpaths with the current 
* stroke style.
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.stroke = function() { };

/**
* Further constrains the clipping region to the given path.
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.clip = function() { };

/**
* Returns true if the given point is in the current path.
* @param {Number} x
* @param {Number} y
* @returns {Boolean}
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.isPointInPath = function(x, y) { };


/**
* The drawing path is used to form the focus ring provided that drawing 
* path contains a closed path. The drawing path is used to form a 
* best fit bounding rectangle in screen coordinates. The bounding 
* rectangle and drawing path may be used to enhance accessibility 
* properties for the targeted element.
* @param {Element} element
* @param {Boolean} [canDrawCustom]
* @returns {Boolean}
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.drawFocusRing = function(element, canDrawCustom) { };


/**
* Returns the blink rate of the system in milliseconds if supported. 
* Otherwise, returns -1 if it is unsupported by the system.
* @returns {Number}
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.caretBlinkRate = function() { };
 

/**
* Returns true if the given element is focused or a document 
* descendant of an element with focus. Otherwise, returns false.
* @param {Element} element
* @param {Number} x point x-coord
* @param {Number} y point y-coord
* @param {Number} w width
* @param {Number} h height
* @returns {Boolean}
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.setCaretSelectionRect(element, x, y, w, h);


/**
* The current font settings.<br/>
* Can be set, to change the font. The syntax is the same as 
* for the CSS 'font' property; values that cannot be parsed 
* as CSS font values are ignored.<br/>
* Relative keywords and lengths are computed relative to the 
* font of the canvas interface element.
* @type String
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.font = "10px sans-serif"; // (default 10px sans-serif)

/**
* The current text alignment settings.<br/>
* Can be set, to change the alignment. The possible values are 
* "start", "end", "left", "right", and "center". The default 
* is "start". <br/>
* Other values are ignored.
* @type String
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.textAlign = "start"; // "start", "end", "left", "right", "center" (default: "start")

/**
* The current baseline alignment settings.<br/>
* Can be set, to change the baseline alignment. The possible 
* values are "top", "hanging", "middle", "alphabetic", "ideographic", 
* and "bottom". The default is "alphabetic". Other values are 
* ignored.
* @type String
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.textBaseline = "alphabetic"; // "top", "hanging", "middle", "alphabetic", "ideographic", "bottom" (default: "alphabetic")

/**
* Renders fill for the given text at the given position. If a 
* maximum width is provided, the text is scaled to fit that 
* width if necessary.
* @param {String} text
* @param {Number} x
* @param {Number} y
* @param {Number} [maxWidth]
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.fillText = function(text, x, y, maxWidth) { };

/**
* Renders strokes for the given text at the given position. 
* If a maximum width is provided, the text is scaled to fit 
* that width if necessary.
* @param {String} text
* @param {Number} x
* @param {Number} y
* @param {Number} [maxWidth]
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.strokeText = function(text, x, y, maxWidth) { };

/**
* Returns a {@link TextMetrics} object with the metrics of the 
* given text in the current font.
* @param {String} text
* @returns {TextMetrics}
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.measureText = function(text) { };


/**
* Draw the given image onto the canvas.<br/><br/>
* {@image images/drawImage.png}
* @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} image
* @param {Number} dx
* @param {Number} dy
* @param {Number} [dw]
* @param {Number} [dh]
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.drawImage = function(image, dx, dy, dw, dh) { };

/**
* Draw the given image onto the canvas.<br/><br/>
* The source rectangle is the rectangle whose corners are the four 
* points (sx, sy), (sx+sw, sy), (sx+sw, sy+sh), 
* (sx, sy+sh).<br/><br/>
* 
* The destination rectangle is the rectangle whose corners are 
* the four points (dx, dy), (dx+dw, dy), 
* (dx+dw, dy+dh), (dx, dy+dh).<br/><br/>
* 
* If not specified, the dw and dh arguments must default to 
* the values of sw and sh, interpreted such that one CSS pixel 
* in the image is treated as one unit in the canvas 
* coordinate space. If the sx, sy, sw, and sh arguments are 
* omitted, they must default to 0, 0, the image's intrinsic 
* width in image pixels, and the image's intrinsic height 
* in image pixels, respectively.<br/><br/>
* {@image images/drawImage.png}
* @name CanvasRenderingContext2D.prototype.drawImage^2
* @function
* @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} image
* @param {Number} dx
* @param {Number} dy
* @param {Number} sw
* @param {Number} sh
* @param {Number} dx
* @param {Number} dy
* @param {Number} dw
* @param {Number} dh
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.drawImage^2 = function(image, sx, sy, sw, sh, dx, dy, dw, dh) { };


/**
*
* @param {Number} sw
* @param {Number} sh
* @returns {ImageData}
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.createImageData = function(sw, sh) { };

/**
*
* @param {ImageData} imagedata
* @returns {ImageData}
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.createImageData = function(imagedata) { };

/**
*
* @param {Number} sx
* @param {Number} sy
* @param {Number} sw
* @param {Number} sh
* @returns {ImageData}
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.getImageData = function(sx, sy, sw, sh) { };


/**
*
* @param {ImageData} imagedata
* @param {Number} dx
* @param {Number} dy
* @param {Number} [dirtyX]
* @param {Number} [dirtyY]
* @param {Number} [dirtyWith]
* @param {Number} [dirtyHeight]
* @returns {ImageData}
* @BB60+
* @PB10
*/
CanvasRenderingContext2D.prototype.putImageData = function(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) { };


/**
* @namespace
* An object representing a canvas gradient pattern 
* @BB60+
* @PB10
*/
CanvasGradient = function() { };

/*
* Adds a new stop to a gradient. If the offset is less than 0, greater 
* than 1, infinite, or NaN, then an INDEX_SIZE_ERR exception must be 
* raised. If the color cannot be parsed as a CSS <color> value, then 
* a SYNTAX_ERR exception must be raised. Otherwise, the gradient must 
* have a new stop placed, at offset offset relative to the whole 
* gradient, and with the color obtained by parsing color as a CSS 
* <color> value. If multiple stops are added at the same offset on a 
* gradient, they must be placed in the order added, with the first 
* one closest to the start of the gradient, and each subsequent one 
* infinitesimally further along towards the end point (in effect 
* causing all but the first and last stop added at each point to 
* be ignored).
* @param {Number} offset
* @param {String} color
* @BB60+
* @PB10
*/
CanvasGradient.prototype.addColorStop = function(offset, color) { };

/**
* @namespace
* An object representing a canvas pattern 
* @BB60+
* @PB10
*/
CanvasPattern = function() { };

/**
* @namespace
* The measureText() method takes one argument, text. When the 
* method is invoked it returns a {@link TextMetrics} object with 
* width property set to the width the text given the set font and 
* element properties.
* @BB60+
* @PB10
*/
TextMetrics = function() { };

/**
* text width
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
TextMetrics.prototype.width = { };

/**
* @namespace
* An object representing image data on a canvas
* @BB60+
* @PB10
*/
ImageData = function() { }

/**
* The image data
* @type CanvasPixelArray
* @readOnly
* @BB60+
* @PB10
*/
ImageData.prototype.data;

/**
* The number of physical device pixels per row in the image data.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
ImageData.prototype.height;

/**
* The number of rows in the image data.
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
ImageData.prototype.width;

/**
* @namespace
* The CanvasPixelArray object provides ordered, indexed access to 
* the color components of each pixel of the image data. The data 
* must be represented in left-to-right order, row by row top 
* to bottom, starting with the top left, with each pixel's 
* red, green, blue, and alpha components being given in that 
* order for each pixel. Each component of each device pixel 
* represented in this array must be in the range 0..255, 
* representing the 8 bit value for that component. The 
* components must be assigned consecutive indices starting with 
* 0 for the top left pixel's red component.
* @BB60+
* @PB10
*/
CanvasPixelArray = function() {};

/**
* @squareAccessor
* @function
* @param {Number} index the index'th component in the array to set or retrieve 
* @returns {Number} the value of the index'th component in the array
* @readOnly
* @BB60+
* @PB10
*/
CanvasPixelArray.prototype.item = function() { };

/**
* The length of the pixel array
* @type Number
* @readOnly
* @BB60+
* @PB10
*/
CanvasPixelArray.prototype.length = { };
