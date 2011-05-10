/**
* @toc {SampleArray} Array
* @class The array object
* @description This constructor creates a new array with an initialLength
* @constructs
* @param {Number} initialLength The initial length of the array.
*/
var Array = {
            
      /**
      * @squareAccessor
      * @function
      * @param {Number} i The index of the desired item
      * @description This shows how to document an accessor
	  * </br>Gets the item stored in the array at the given index
      * @returns {Object} The item stored at the given index i
      * @readOnly
      * @throws {IndexOutOfBoundsException} When the index is invalid
      * @BB50+
      */
      getter : {},
      
      
      /**
      * @description The number of elements in the array. 
      * @BB50+
      * @PB10
      * @readonly
      * @type Number
      */
      length : 0,
      
      /**
      * @returns THe last item in the array
      */
      pop : function(){}
}
