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

/*
* Taken from: http://www.khronos.org/registry/webgl/specs/latest/ and http://www.khronos.org/opengles/sdk/docs/man/xhtml/
*/

/**
* @namespace
* The WebGLRenderingContext object is used to manage OpenGL state and render to the drawing buffer
* @toc {User Interface} HTML5 WebGL Canvas Context
* @PB20
* @RIPPLE
*/
WebGLRenderingContext = { 
		/**
		* @type GLenum 
		* @constant
		* @default 0x00000400
		* @PB20
		* @RIPPLE
		*/
		STENCIL_BUFFER_BIT : 0x00000400,

		/**
		* @type GLenum
		* @constant
		* @default 0x00004000
		* @PB20
		* @RIPPLE
		*/
		COLOR_BUFFER_BIT : 0x00004000,

		/**
		* @type GLenum
		* @constant
		* @default 0x0000
		* @PB20
		* @RIPPLE
		*/
		POINTS : 0x0000,

		/**
		* @type GLenum
		* @constant
		* @default 0x0001
		* @PB20
		* @RIPPLE
		*/
		LINES : 0x0001,

		/**
		* @type GLenum
		* @constant
		* @default 0x0002
		* @PB20
		* @RIPPLE
		*/
		LINE_LOOP : 0x0002,

		/**
		* @type GLenum
		* @constant
		* @default 0x0003
		* @PB20
		* @RIPPLE
		*/
		LINE_STRIP : 0x0003,

		/**
		* @type GLenum
		* @constant
		* @default 0x0004
		* @PB20
		* @RIPPLE
		*/
		TRIANGLES : 0x0004,

		/**
		* @type GLenum
		* @constant
		* @default 0x0005
		* @PB20
		* @RIPPLE
		*/
		TRIANGLE_STRIP : 0x0005,

		/**
		* @type GLenum
		* @constant
		* @default 0x0006
		* @PB20
		* @RIPPLE
		*/
		TRIANGLE_FAN : 0x0006,

		/**
		* @type GLenum
		* @constant
		* @default 0
		* @PB20
		* @RIPPLE
		*/
		ZERO : 0,

		/**
		* @type GLenum
		* @constant
		* @default 1
		* @PB20
		* @RIPPLE
		*/
		ONE : 1,

		/**
		* @type GLenum
		* @constant
		* @default 0x0300
		* @PB20
		* @RIPPLE
		*/
		SRC_COLOR : 0x0300,

		/**
		* @type GLenum
		* @constant
		* @default 0x0301
		* @PB20
		* @RIPPLE
		*/
		ONE_MINUS_SRC_COLOR : 0x0301,

		/**
		* @type GLenum
		* @constant
		* @default 0x0302
		* @PB20
		* @RIPPLE
		*/
		SRC_ALPHA : 0x0302,

		/**
		* @type GLenum
		* @constant
		* @default 0x0303
		* @PB20
		* @RIPPLE
		*/
		ONE_MINUS_SRC_ALPHA : 0x0303,

		/**
		* @type GLenum
		* @constant
		* @default 0x0304
		* @PB20
		* @RIPPLE
		*/
		DST_ALPHA : 0x0304,

		/**
		* @type GLenum
		* @constant
		* @default 0x0305
		* @PB20
		* @RIPPLE
		*/
		ONE_MINUS_DST_ALPHA : 0x0305,

		/**
		* @type GLenum
		* @constant
		* @default 0x0306
		* @PB20
		* @RIPPLE
		*/
		DST_COLOR : 0x0306,

		/**
		* @type GLenum
		* @constant
		* @default 0x0307
		* @PB20
		* @RIPPLE
		*/
		ONE_MINUS_DST_COLOR : 0x0307,

		/**
		* @type GLenum
		* @constant
		* @default 0x0308
		* @PB20
		* @RIPPLE
		*/
		SRC_ALPHA_SATURATE : 0x0308,

		/**
		* @type GLenum
		* @constant
		* @default 0x8006
		* @PB20
		* @RIPPLE
		*/
		FUNC_ADD : 0x8006,

		/**
		* @type GLenum
		* @constant
		* @default 0x8009
		* @PB20
		* @RIPPLE
		*/
		BLEND_EQUATION : 0x8009,

		/**
		* @type GLenum
		* @constant
		* @default 0x8009
		* @PB20
		* @RIPPLE
		*/
		BLEND_EQUATION_RGB : 0x8009,   /* same as BLEND_EQUATION */

		/**
		* @type GLenum
		* @constant
		* @default 0x883D
		* @PB20
		* @RIPPLE
		*/
		BLEND_EQUATION_ALPHA : 0x883D,

		/**
		* @type GLenum
		* @constant
		* @default 0x800A
		* @PB20
		* @RIPPLE
		*/
		FUNC_SUBTRACT : 0x800A,

		/**
		* @type GLenum
		* @constant
		* @default 0x800B
		* @PB20
		* @RIPPLE
		*/
		FUNC_REVERSE_SUBTRACT : 0x800B,

		/**
		* @type GLenum
		* @constant
		* @default 0x80C8
		* @PB20
		* @RIPPLE
		*/
		BLEND_DST_RGB : 0x80C8,

		/**
		* @type GLenum
		* @constant
		* @default 0x80C9
		* @PB20
		* @RIPPLE
		*/
		BLEND_SRC_RGB : 0x80C9,

		/**
		* @type GLenum
		* @constant
		* @default 0x80CA
		* @PB20
		* @RIPPLE
		*/
		BLEND_DST_ALPHA : 0x80CA,

		/**
		* @type GLenum
		* @constant
		* @default 0x80CB
		* @PB20
		* @RIPPLE
		*/
		BLEND_SRC_ALPHA : 0x80CB,

		/**
		* @type GLenum
		* @constant
		* @default 0x8001
		* @PB20
		* @RIPPLE
		*/
		CONSTANT_COLOR : 0x8001,

		/**
		* @type GLenum
		* @constant
		* @default 0x8002
		* @PB20
		* @RIPPLE
		*/
		ONE_MINUS_CONSTANT_COLOR : 0x8002,

		/**
		* @type GLenum
		* @constant
		* @default 0x8003
		* @PB20
		* @RIPPLE
		*/
		CONSTANT_ALPHA : 0x8003,

		/**
		* @type GLenum
		* @constant
		* @default 0x8004
		* @PB20
		* @RIPPLE
		*/
		ONE_MINUS_CONSTANT_ALPHA : 0x8004,

		/**
		* @type GLenum
		* @constant
		* @default 0x8005
		* @PB20
		* @RIPPLE
		*/
		BLEND_COLOR : 0x8005,

		/**
		* @type GLenum
		* @constant
		* @default 0x8892
		* @PB20
		* @RIPPLE
		*/
		ARRAY_BUFFER : 0x8892,

		/**
		* @type GLenum
		* @constant
		* @default 0x8893
		* @PB20
		* @RIPPLE
		*/
		ELEMENT_ARRAY_BUFFER : 0x8893,

		/**
		* @type GLenum
		* @constant
		* @default 0x8894
		* @PB20
		* @RIPPLE
		*/
		ARRAY_BUFFER_BINDING : 0x8894,

		/**
		* @type GLenum
		* @constant
		* @default 0x8895
		* @PB20
		* @RIPPLE
		*/
		ELEMENT_ARRAY_BUFFER_BINDING : 0x8895,

		/**
		* @type GLenum
		* @constant
		* @default 0x88E0
		* @PB20
		* @RIPPLE
		*/
		STREAM_DRAW : 0x88E0,

		/**
		* @type GLenum
		* @constant
		* @default 0x88E4
		* @PB20
		* @RIPPLE
		*/
		STATIC_DRAW : 0x88E4,

		/**
		* @type GLenum
		* @constant
		* @default 0x88E8
		* @PB20
		* @RIPPLE
		*/
		DYNAMIC_DRAW : 0x88E8,

		/**
		* @type GLenum
		* @constant
		* @default 0x8764
		* @PB20
		* @RIPPLE
		*/
		BUFFER_SIZE : 0x8764,

		/**
		* @type GLenum
		* @constant
		* @default 0x8765
		* @PB20
		* @RIPPLE
		*/
		BUFFER_USAGE : 0x8765,

		/**
		* @type GLenum
		* @constant
		* @default 0x8626
		* @PB20
		* @RIPPLE
		*/
		CURRENT_VERTEX_ATTRIB : 0x8626,

		/**
		* @type GLenum
		* @constant
		* @default 0x0404
		* @PB20
		* @RIPPLE
		*/
		FRONT : 0x0404,

		/**
		* @type GLenum
		* @constant
		* @default 0x0405
		* @PB20
		* @RIPPLE
		*/
		BACK : 0x0405,

		/**
		* @type GLenum
		* @constant
		* @default 0x0408
		* @PB20
		* @RIPPLE
		*/
		FRONT_AND_BACK : 0x0408,

		/**
		* @type GLenum
		* @constant
		* @default 0x0DE1
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_2D : 0x0DE1,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B44
		* @PB20
		* @RIPPLE
		*/
		CULL_FACE : 0x0B44,

		/**
		* @type GLenum
		* @constant
		* @default 0x0BE2
		* @PB20
		* @RIPPLE
		*/
		BLEND : 0x0BE2,

		/**
		* @type GLenum
		* @constant
		* @default 0x0BD0
		* @PB20
		* @RIPPLE
		*/
		DITHER : 0x0BD0,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B90
		* @PB20
		* @RIPPLE
		*/
		STENCIL_TEST : 0x0B90,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B71
		* @PB20
		* @RIPPLE
		*/
		DEPTH_TEST : 0x0B71,

		/**
		* @type GLenum
		* @constant
		* @default 0x0C11
		* @PB20
		* @RIPPLE
		*/
		SCISSOR_TEST : 0x0C11,

		/**
		* @type GLenum
		* @constant
		* @default 0x8037
		* @PB20
		* @RIPPLE
		*/
		POLYGON_OFFSET_FILL : 0x8037,

		/**
		* @type GLenum
		* @constant
		* @default 0x809E
		* @PB20
		* @RIPPLE
		*/
		SAMPLE_ALPHA_TO_COVERAGE : 0x809E,

		/**
		* @type GLenum
		* @constant
		* @default 0x80A0
		* @PB20
		* @RIPPLE
		*/
		SAMPLE_COVERAGE : 0x80A0,

		/**
		* @type GLenum
		* @constant
		* @default 0
		* @PB20
		* @RIPPLE
		*/
		NO_ERROR : 0,

		/**
		* @type GLenum
		* @constant
		* @default 0x0500
		* @PB20
		* @RIPPLE
		*/
		INVALID_ENUM : 0x0500,

		/**
		* @type GLenum
		* @constant
		* @default 0x0501
		* @PB20
		* @RIPPLE
		*/
		INVALID_VALUE : 0x0501,

		/**
		* @type GLenum
		* @constant
		* @default 0x0502
		* @PB20
		* @RIPPLE
		*/
		INVALID_OPERATION : 0x0502,

		/**
		* @type GLenum
		* @constant
		* @default 0x0505
		* @PB20
		* @RIPPLE
		*/
		OUT_OF_MEMORY : 0x0505,

		/**
		* @type GLenum
		* @constant
		* @default 0x0900
		* @PB20
		* @RIPPLE
		*/
		CW : 0x0900,

		/**
		* @type GLenum
		* @constant
		* @default 0x0901
		* @PB20
		* @RIPPLE
		*/
		CCW : 0x0901,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B21
		* @PB20
		* @RIPPLE
		*/
		LINE_WIDTH : 0x0B21,

		/**
		* @type GLenum
		* @constant
		* @default 0x846D
		* @PB20
		* @RIPPLE
		*/
		ALIASED_POINT_SIZE_RANGE : 0x846D,

		/**
		* @type GLenum
		* @constant
		* @default 0x846E
		* @PB20
		* @RIPPLE
		*/
		ALIASED_LINE_WIDTH_RANGE : 0x846E,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B45
		* @PB20
		* @RIPPLE
		*/
		CULL_FACE_MODE : 0x0B45,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B46
		* @PB20
		* @RIPPLE
		*/
		FRONT_FACE : 0x0B46,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B70
		* @PB20
		* @RIPPLE
		*/
		DEPTH_RANGE : 0x0B70,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B72
		* @PB20
		* @RIPPLE
		*/
		DEPTH_WRITEMASK : 0x0B72,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B73
		* @PB20
		* @RIPPLE
		*/
		DEPTH_CLEAR_VALUE : 0x0B73,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B74
		* @PB20
		* @RIPPLE
		*/
		DEPTH_FUNC : 0x0B74,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B91
		* @PB20
		* @RIPPLE
		*/
		STENCIL_CLEAR_VALUE : 0x0B91,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B92
		* @PB20
		* @RIPPLE
		*/
		STENCIL_FUNC : 0x0B92,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B94
		* @PB20
		* @RIPPLE
		*/
		STENCIL_FAIL : 0x0B94,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B95
		* @PB20
		* @RIPPLE
		*/
		STENCIL_PASS_DEPTH_FAIL : 0x0B95,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B96
		* @PB20
		* @RIPPLE
		*/
		STENCIL_PASS_DEPTH_PASS : 0x0B96,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B97
		* @PB20
		* @RIPPLE
		*/
		STENCIL_REF : 0x0B97,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B93
		* @PB20
		* @RIPPLE
		*/
		STENCIL_VALUE_MASK : 0x0B93,

		/**
		* @type GLenum
		* @constant
		* @default 0x0B98
		* @PB20
		* @RIPPLE
		*/
		STENCIL_WRITEMASK : 0x0B98,

		/**
		* @type GLenum
		* @constant
		* @default 0x8800
		* @PB20
		* @RIPPLE
		*/
		STENCIL_BACK_FUNC : 0x8800,

		/**
		* @type GLenum
		* @constant
		* @default 0x8801
		* @PB20
		* @RIPPLE
		*/
		STENCIL_BACK_FAIL : 0x8801,

		/**
		* @type GLenum
		* @constant
		* @default 0x8802
		* @PB20
		* @RIPPLE
		*/
		STENCIL_BACK_PASS_DEPTH_FAIL : 0x8802,

		/**
		* @type GLenum
		* @constant
		* @default 0x8803
		* @PB20
		* @RIPPLE
		*/
		STENCIL_BACK_PASS_DEPTH_PASS : 0x8803,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CA3
		* @PB20
		* @RIPPLE
		*/
		STENCIL_BACK_REF : 0x8CA3,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CA4
		* @PB20
		* @RIPPLE
		*/
		STENCIL_BACK_VALUE_MASK : 0x8CA4,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CA5
		* @PB20
		* @RIPPLE
		*/
		STENCIL_BACK_WRITEMASK : 0x8CA5,

		/**
		* @type GLenum
		* @constant
		* @default 0x0BA2
		* @PB20
		* @RIPPLE
		*/
		VIEWPORT : 0x0BA2,

		/**
		* @type GLenum
		* @constant
		* @default 0x0C10
		* @PB20
		* @RIPPLE
		*/
		SCISSOR_BOX : 0x0C10,

		/**
		* @type GLenum
		* @constant
		* @default 0x0C22
		* @PB20
		* @RIPPLE
		*/
		COLOR_CLEAR_VALUE : 0x0C22,

		/**
		* @type GLenum
		* @constant
		* @default 0x0C23
		* @PB20
		* @RIPPLE
		*/
		COLOR_WRITEMASK : 0x0C23,

		/**
		* @type GLenum
		* @constant
		* @default 0x0CF5
		* @PB20
		* @RIPPLE
		*/
		UNPACK_ALIGNMENT : 0x0CF5,

		/**
		* @type GLenum
		* @constant
		* @default 0x0D05
		* @PB20
		* @RIPPLE
		*/
		PACK_ALIGNMENT : 0x0D05,

		/**
		* @type GLenum
		* @constant
		* @default 0x0D33
		* @PB20
		* @RIPPLE
		*/
		MAX_TEXTURE_SIZE : 0x0D33,

		/**
		* @type GLenum
		* @constant
		* @default 0x0D3A
		* @PB20
		* @RIPPLE
		*/
		MAX_VIEWPORT_DIMS : 0x0D3A,

		/**
		* @type GLenum
		* @constant
		* @default 0x0D50
		* @PB20
		* @RIPPLE
		*/
		SUBPIXEL_BITS : 0x0D50,

		/**
		* @type GLenum
		* @constant
		* @default 0x0D52
		* @PB20
		* @RIPPLE
		*/
		RED_BITS : 0x0D52,

		/**
		* @type GLenum
		* @constant
		* @default 0x0D53
		* @PB20
		* @RIPPLE
		*/
		GREEN_BITS : 0x0D53,

		/**
		* @type GLenum
		* @constant
		* @default 0x0D54
		* @PB20
		* @RIPPLE
		*/
		BLUE_BITS : 0x0D54,

		/**
		* @type GLenum
		* @constant
		* @default 0x0D55
		* @PB20
		* @RIPPLE
		*/
		ALPHA_BITS : 0x0D55,

		/**
		* @type GLenum
		* @constant
		* @default 0x0D56
		* @PB20
		* @RIPPLE
		*/
		DEPTH_BITS : 0x0D56,

		/**
		* @type GLenum
		* @constant
		* @default 0x0D57
		* @PB20
		* @RIPPLE
		*/
		STENCIL_BITS : 0x0D57,

		/**
		* @type GLenum
		* @constant
		* @default 0x2A00
		* @PB20
		* @RIPPLE
		*/
		POLYGON_OFFSET_UNITS : 0x2A00,

		/**
		* @type GLenum
		* @constant
		* @default 0x8038
		* @PB20
		* @RIPPLE
		*/
		POLYGON_OFFSET_FACTOR : 0x8038,

		/**
		* @type GLenum
		* @constant
		* @default 0x8069
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_BINDING_2D : 0x8069,

		/**
		* @type GLenum
		* @constant
		* @default 0x80A8
		* @PB20
		* @RIPPLE
		*/
		SAMPLE_BUFFERS : 0x80A8,

		/**
		* @type GLenum
		* @constant
		* @default 0x80A9
		* @PB20
		* @RIPPLE
		*/
		SAMPLES : 0x80A9,

		/**
		* @type GLenum
		* @constant
		* @default 0x80AA
		* @PB20
		* @RIPPLE
		*/
		SAMPLE_COVERAGE_VALUE : 0x80AA,

		/**
		* @type GLenum
		* @constant
		* @default 0x80AB
		* @PB20
		* @RIPPLE
		*/
		SAMPLE_COVERAGE_INVERT : 0x80AB,

		/**
		* @type GLenum
		* @constant
		* @default 0x86A2
		* @PB20
		* @RIPPLE
		*/
		NUM_COMPRESSED_TEXTURE_FORMATS : 0x86A2,

		/**
		* @type GLenum
		* @constant
		* @default 0x86A3
		* @PB20
		* @RIPPLE
		*/
		COMPRESSED_TEXTURE_FORMATS : 0x86A3,

		/**
		* @type GLenum
		* @constant
		* @default 0x1100
		* @PB20
		* @RIPPLE
		*/
		DONT_CARE : 0x1100,

		/**
		* @type GLenum
		* @constant
		* @default 0x1101
		* @PB20
		* @RIPPLE
		*/
		FASTEST : 0x1101,

		/**
		* @type GLenum
		* @constant
		* @default 0x1102
		* @PB20
		* @RIPPLE
		*/
		NICEST : 0x1102,

		/**
		* @type GLenum
		* @constant
		* @default 0x8192
		* @PB20
		* @RIPPLE
		*/
		GENERATE_MIPMAP_HINT : 0x8192,

		/**
		* @type GLenum
		* @constant
		* @default 0x1400
		* @PB20
		* @RIPPLE
		*/
		BYTE : 0x1400,

		/**
		* @type GLenum
		* @constant
		* @default 0x1401
		* @PB20
		* @RIPPLE
		*/
		UNSIGNED_BYTE : 0x1401,

		/**
		* @type GLenum
		* @constant
		* @default 0x1402
		* @PB20
		* @RIPPLE
		*/
		SHORT : 0x1402,

		/**
		* @type GLenum
		* @constant
		* @default 0x1403
		* @PB20
		* @RIPPLE
		*/
		UNSIGNED_SHORT : 0x1403,

		/**
		* @type GLenum
		* @constant
		* @default 0x1404
		* @PB20
		* @RIPPLE
		*/
		INT : 0x1404,

		/**
		* @type GLenum
		* @constant
		* @default 0x1405
		* @PB20
		* @RIPPLE
		*/
		UNSIGNED_INT : 0x1405,

		/**
		* @type GLenum
		* @constant
		* @default 0x1406
		* @PB20
		* @RIPPLE
		*/
		FLOAT : 0x1406,

		/**
		* @type GLenum
		* @constant
		* @default 0x1902
		* @PB20
		* @RIPPLE
		*/
		DEPTH_COMPONENT : 0x1902,

		/**
		* @type GLenum
		* @constant
		* @default 0x1906
		* @PB20
		* @RIPPLE
		*/
		ALPHA : 0x1906,

		/**
		* @type GLenum
		* @constant
		* @default 0x1907
		* @PB20
		* @RIPPLE
		*/
		RGB : 0x1907,

		/**
		* @type GLenum
		* @constant
		* @default 0x1908
		* @PB20
		* @RIPPLE
		*/
		RGBA : 0x1908,

		/**
		* @type GLenum
		* @constant
		* @default 0x1909
		* @PB20
		* @RIPPLE
		*/
		LUMINANCE : 0x1909,

		/**
		* @type GLenum
		* @constant
		* @default 0x190A
		* @PB20
		* @RIPPLE
		*/
		LUMINANCE_ALPHA : 0x190A,

		/**
		* @type GLenum
		* @constant
		* @default 0x8033
		* @PB20
		* @RIPPLE
		*/
		UNSIGNED_SHORT_4_4_4_4 : 0x8033,

		/**
		* @type GLenum
		* @constant
		* @default 0x8034
		* @PB20
		* @RIPPLE
		*/
		UNSIGNED_SHORT_5_5_5_1 : 0x8034,

		/**
		* @type GLenum
		* @constant
		* @default 0x8363
		* @PB20
		* @RIPPLE
		*/
		UNSIGNED_SHORT_5_6_5 : 0x8363,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B30
		* @PB20
		* @RIPPLE
		*/
		FRAGMENT_SHADER : 0x8B30,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B31
		* @PB20
		* @RIPPLE
		*/
		VERTEX_SHADER : 0x8B31,

		/**
		* @type GLenum
		* @constant
		* @default 0x8869
		* @PB20
		* @RIPPLE
		*/
		MAX_VERTEX_ATTRIBS : 0x8869,

		/**
		* @type GLenum
		* @constant
		* @default 0x8DFB
		* @PB20
		* @RIPPLE
		*/
		MAX_VERTEX_UNIFORM_VECTORS : 0x8DFB,

		/**
		* @type GLenum
		* @constant
		* @default 0x8DFC
		* @PB20
		* @RIPPLE
		*/
		MAX_VARYING_VECTORS : 0x8DFC,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B4D
		* @PB20
		* @RIPPLE
		*/
		MAX_COMBINED_TEXTURE_IMAGE_UNITS : 0x8B4D,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B4C
		* @PB20
		* @RIPPLE
		*/
		MAX_VERTEX_TEXTURE_IMAGE_UNITS : 0x8B4C,

		/**
		* @type GLenum
		* @constant
		* @default 0x8872
		* @PB20
		* @RIPPLE
		*/
		MAX_TEXTURE_IMAGE_UNITS : 0x8872,

		/**
		* @type GLenum
		* @constant
		* @default 0x8DFD
		* @PB20
		* @RIPPLE
		*/
		MAX_FRAGMENT_UNIFORM_VECTORS : 0x8DFD,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B4F
		* @PB20
		* @RIPPLE
		*/
		SHADER_TYPE : 0x8B4F,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B80
		* @PB20
		* @RIPPLE
		*/
		DELETE_STATUS : 0x8B80,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B82
		* @PB20
		* @RIPPLE
		*/
		LINK_STATUS : 0x8B82,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B83
		* @PB20
		* @RIPPLE
		*/
		VALIDATE_STATUS : 0x8B83,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B85
		* @PB20
		* @RIPPLE
		*/
		ATTACHED_SHADERS : 0x8B85,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B86
		* @PB20
		* @RIPPLE
		*/
		ACTIVE_UNIFORMS : 0x8B86,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B87
		* @PB20
		* @RIPPLE
		*/
		ACTIVE_UNIFORM_MAX_LENGTH : 0x8B87,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B89
		* @PB20
		* @RIPPLE
		*/
		ACTIVE_ATTRIBUTES : 0x8B89,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B8A
		* @PB20
		* @RIPPLE
		*/
		ACTIVE_ATTRIBUTE_MAX_LENGTH : 0x8B8A,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B8C
		* @PB20
		* @RIPPLE
		*/
		SHADING_LANGUAGE_VERSION : 0x8B8C,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B8D
		* @PB20
		* @RIPPLE
		*/
		CURRENT_PROGRAM : 0x8B8D,

		/**
		* @type GLenum
		* @constant
		* @default 0x0200
		* @PB20
		* @RIPPLE
		*/
		NEVER : 0x0200,

		/**
		* @type GLenum
		* @constant
		* @default 0x0201
		* @PB20
		* @RIPPLE
		*/
		LESS : 0x0201,

		/**
		* @type GLenum
		* @constant
		* @default 0x0202
		* @PB20
		* @RIPPLE
		*/
		EQUAL : 0x0202,

		/**
		* @type GLenum
		* @constant
		* @default 0x0203
		* @PB20
		* @RIPPLE
		*/
		LEQUAL : 0x0203,

		/**
		* @type GLenum
		* @constant
		* @default 0x0204
		* @PB20
		* @RIPPLE
		*/
		GREATER : 0x0204,

		/**
		* @type GLenum
		* @constant
		* @default 0x0205
		* @PB20
		* @RIPPLE
		*/
		NOTEQUAL : 0x0205,

		/**
		* @type GLenum
		* @constant
		* @default 0x0206
		* @PB20
		* @RIPPLE
		*/
		GEQUAL : 0x0206,

		/**
		* @type GLenum
		* @constant
		* @default 0x0207
		* @PB20
		* @RIPPLE
		*/
		ALWAYS : 0x0207,

		/**
		* @type GLenum
		* @constant
		* @default 0x1E00
		* @PB20
		* @RIPPLE
		*/
		KEEP : 0x1E00,

		/**
		* @type GLenum
		* @constant
		* @default 0x1E01
		* @PB20
		* @RIPPLE
		*/
		REPLACE : 0x1E01,

		/**
		* @type GLenum
		* @constant
		* @default 0x1E02
		* @PB20
		* @RIPPLE
		*/
		INCR : 0x1E02,

		/**
		* @type GLenum
		* @constant
		* @default 0x1E03
		* @PB20
		* @RIPPLE
		*/
		DECR : 0x1E03,

		/**
		* @type GLenum
		* @constant
		* @default 0x150A
		* @PB20
		* @RIPPLE
		*/
		INVERT : 0x150A,

		/**
		* @type GLenum
		* @constant
		* @default 0x8507
		* @PB20
		* @RIPPLE
		*/
		INCR_WRAP : 0x8507,

		/**
		* @type GLenum
		* @constant
		* @default 0x8508
		* @PB20
		* @RIPPLE
		*/
		DECR_WRAP : 0x8508,

		/**
		* @type GLenum
		* @constant
		* @default 0x1F00
		* @PB20
		* @RIPPLE
		*/
		VENDOR : 0x1F00,

		/**
		* @type GLenum
		* @constant
		* @default 0x1F01
		* @PB20
		* @RIPPLE
		*/
		RENDERER : 0x1F01,

		/**
		* @type GLenum
		* @constant
		* @default 0x1F02
		* @PB20
		* @RIPPLE
		*/
		VERSION : 0x1F02,

		/**
		* @type GLenum
		* @constant
		* @default 0x2600
		* @PB20
		* @RIPPLE
		*/
		NEAREST : 0x2600,

		/**
		* @type GLenum
		* @constant
		* @default 0x2601
		* @PB20
		* @RIPPLE
		*/
		LINEAR : 0x2601,

		/**
		* @type GLenum
		* @constant
		* @default 0x2700
		* @PB20
		* @RIPPLE
		*/
		NEAREST_MIPMAP_NEAREST : 0x2700,

		/**
		* @type GLenum
		* @constant
		* @default 0x2701
		* @PB20
		* @RIPPLE
		*/
		LINEAR_MIPMAP_NEAREST : 0x2701,

		/**
		* @type GLenum
		* @constant
		* @default 0x2702
		* @PB20
		* @RIPPLE
		*/
		NEAREST_MIPMAP_LINEAR : 0x2702,

		/**
		* @type GLenum
		* @constant
		* @default 0x2703
		* @PB20
		* @RIPPLE
		*/
		LINEAR_MIPMAP_LINEAR : 0x2703,

		/**
		* @type GLenum
		* @constant
		* @default 0x2800
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_MAG_FILTER : 0x2800,

		/**
		* @type GLenum
		* @constant
		* @default 0x2801
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_MIN_FILTER : 0x2801,

		/**
		* @type GLenum
		* @constant
		* @default 0x2802
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_WRAP_S : 0x2802,

		/**
		* @type GLenum
		* @constant
		* @default 0x2803
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_WRAP_T : 0x2803,

		/**
		* @type GLenum
		* @constant
		* @default 0x1702
		* @PB20
		* @RIPPLE
		*/
		TEXTURE : 0x1702,

		/**
		* @type GLenum
		* @constant
		* @default 0x8513
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_CUBE_MAP : 0x8513,

		/**
		* @type GLenum
		* @constant
		* @default 0x8514
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_BINDING_CUBE_MAP : 0x8514,

		/**
		* @type GLenum
		* @constant
		* @default 0x8515
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_CUBE_MAP_POSITIVE_X : 0x8515,

		/**
		* @type GLenum
		* @constant
		* @default 0x8516
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_CUBE_MAP_NEGATIVE_X : 0x8516,

		/**
		* @type GLenum
		* @constant
		* @default 0x8517
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_CUBE_MAP_POSITIVE_Y : 0x8517,

		/**
		* @type GLenum
		* @constant
		* @default 0x8518
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_CUBE_MAP_NEGATIVE_Y : 0x8518,

		/**
		* @type GLenum
		* @constant
		* @default 0x8519
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_CUBE_MAP_POSITIVE_Z : 0x8519,

		/**
		* @type GLenum
		* @constant
		* @default 0x851A
		* @PB20
		* @RIPPLE
		*/
		TEXTURE_CUBE_MAP_NEGATIVE_Z : 0x851A,

		/**
		* @type GLenum
		* @constant
		* @default 0x851C
		* @PB20
		* @RIPPLE
		*/
		MAX_CUBE_MAP_TEXTURE_SIZE : 0x851C,

		/**
		* @type GLenum
		* @constant
		* @default 0x84C0
		* @PB20
		* @RIPPLE
		*/
		TEXTURE0 : 0x84C0,

		/**
		* @type GLenum
		* @constant
		* @default 0x84C1
		* @PB20
		* @RIPPLE
		*/
		TEXTURE1 : 0x84C1,

		/**
		* @type GLenum
		* @constant
		* @default 0x84C2
		* @PB20
		* @RIPPLE
		*/
		TEXTURE2 : 0x84C2,

		/**
		* @type GLenum
		* @constant
		* @default 0x84C3
		* @PB20
		* @RIPPLE
		*/
		TEXTURE3 : 0x84C3,

		/**
		* @type GLenum
		* @constant
		* @default 0x84C4
		* @PB20
		* @RIPPLE
		*/
		TEXTURE4 : 0x84C4,

		/**
		* @type GLenum
		* @constant
		* @default 0x84C5
		* @PB20
		* @RIPPLE
		*/
		TEXTURE5 : 0x84C5,

		/**
		* @type GLenum
		* @constant
		* @default 0x84C6
		* @PB20
		* @RIPPLE
		*/
		TEXTURE6 : 0x84C6,

		/**
		* @type GLenum
		* @constant
		* @default 0x84C7
		* @PB20
		* @RIPPLE
		*/
		TEXTURE7 : 0x84C7,

		/**
		* @type GLenum
		* @constant
		* @default 0x84C8
		* @PB20
		* @RIPPLE
		*/
		TEXTURE8 : 0x84C8,

		/**
		* @type GLenum
		* @constant
		* @default 0x84C9
		* @PB20
		* @RIPPLE
		*/
		TEXTURE9 : 0x84C9,

		/**
		* @type GLenum
		* @constant
		* @default 0x84CA
		* @PB20
		* @RIPPLE
		*/
		TEXTURE10 : 0x84CA,

		/**
		* @type GLenum
		* @constant
		* @default 0x84CB
		* @PB20
		* @RIPPLE
		*/
		TEXTURE11 : 0x84CB,

		/**
		* @type GLenum
		* @constant
		* @default 0x84CC
		* @PB20
		* @RIPPLE
		*/
		TEXTURE12 : 0x84CC,

		/**
		* @type GLenum
		* @constant
		* @default 0x84CD
		* @PB20
		* @RIPPLE
		*/
		TEXTURE13 : 0x84CD,

		/**
		* @type GLenum
		* @constant
		* @default 0x84CE
		* @PB20
		* @RIPPLE
		*/
		TEXTURE14 : 0x84CE,

		/**
		* @type GLenum
		* @constant
		* @default 0x84CF
		* @PB20
		* @RIPPLE
		*/
		TEXTURE15 : 0x84CF,

		/**
		* @type GLenum
		* @constant
		* @default 0x84D0
		* @PB20
		* @RIPPLE
		*/
		TEXTURE16 : 0x84D0,

		/**
		* @type GLenum
		* @constant
		* @default 0x84D1
		* @PB20
		* @RIPPLE
		*/
		TEXTURE17 : 0x84D1,

		/**
		* @type GLenum
		* @constant
		* @default 0x84D2
		* @PB20
		* @RIPPLE
		*/
		TEXTURE18 : 0x84D2,

		/**
		* @type GLenum
		* @constant
		* @default 0x84D3
		* @PB20
		* @RIPPLE
		*/
		TEXTURE19 : 0x84D3,

		/**
		* @type GLenum
		* @constant
		* @default 0x84D4
		* @PB20
		* @RIPPLE
		*/
		TEXTURE20 : 0x84D4,

		/**
		* @type GLenum
		* @constant
		* @default 0x84D5
		* @PB20
		* @RIPPLE
		*/
		TEXTURE21 : 0x84D5,

		/**
		* @type GLenum
		* @constant
		* @default 0x84D6
		* @PB20
		* @RIPPLE
		*/
		TEXTURE22 : 0x84D6,

		/**
		* @type GLenum
		* @constant
		* @default 0x84D7
		* @PB20
		* @RIPPLE
		*/
		TEXTURE23 : 0x84D7,

		/**
		* @type GLenum
		* @constant
		* @default 0x84D8
		* @PB20
		* @RIPPLE
		*/
		TEXTURE24 : 0x84D8,

		/**
		* @type GLenum
		* @constant
		* @default 0x84D9
		* @PB20
		* @RIPPLE
		*/
		TEXTURE25 : 0x84D9,

		/**
		* @type GLenum
		* @constant
		* @default 0x84DA
		* @PB20
		* @RIPPLE
		*/
		TEXTURE26 : 0x84DA,

		/**
		* @type GLenum
		* @constant
		* @default 0x84DB
		* @PB20
		* @RIPPLE
		*/
		TEXTURE27 : 0x84DB,

		/**
		* @type GLenum
		* @constant
		* @default 0x84DC
		* @PB20
		* @RIPPLE
		*/
		TEXTURE28 : 0x84DC,

		/**
		* @type GLenum
		* @constant
		* @default 0x84DD
		* @PB20
		* @RIPPLE
		*/
		TEXTURE29 : 0x84DD,

		/**
		* @type GLenum
		* @constant
		* @default 0x84DE
		* @PB20
		* @RIPPLE
		*/
		TEXTURE30 : 0x84DE,

		/**
		* @type GLenum
		* @constant
		* @default 0x84DF
		* @PB20
		* @RIPPLE
		*/
		TEXTURE31 : 0x84DF,

		/**
		* @type GLenum
		* @constant
		* @default 0x84E0
		* @PB20
		* @RIPPLE
		*/
		ACTIVE_TEXTURE : 0x84E0,

		/**
		* @type GLenum
		* @constant
		* @default 0x2901
		* @PB20
		* @RIPPLE
		*/
		REPEAT : 0x2901,

		/**
		* @type GLenum
		* @constant
		* @default 0x812F
		* @PB20
		* @RIPPLE
		*/
		CLAMP_TO_EDGE : 0x812F,

		/**
		* @type GLenum
		* @constant
		* @default 0x8370
		* @PB20
		* @RIPPLE
		*/
		MIRRORED_REPEAT : 0x8370,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B50
		* @PB20
		* @RIPPLE
		*/
		FLOAT_VEC2 : 0x8B50,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B51
		* @PB20
		* @RIPPLE
		*/
		FLOAT_VEC3 : 0x8B51,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B52
		* @PB20
		* @RIPPLE
		*/
		FLOAT_VEC4 : 0x8B52,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B53
		* @PB20
		* @RIPPLE
		*/
		INT_VEC2 : 0x8B53,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B54
		* @PB20
		* @RIPPLE
		*/
		INT_VEC3 : 0x8B54,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B55
		* @PB20
		* @RIPPLE
		*/
		INT_VEC4 : 0x8B55,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B56
		* @PB20
		* @RIPPLE
		*/
		BOOL : 0x8B56,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B57
		* @PB20
		* @RIPPLE
		*/
		BOOL_VEC2 : 0x8B57,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B58
		* @PB20
		* @RIPPLE
		*/
		BOOL_VEC3 : 0x8B58,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B59
		* @PB20
		* @RIPPLE
		*/
		BOOL_VEC4 : 0x8B59,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B5A
		* @PB20
		* @RIPPLE
		*/
		FLOAT_MAT2 : 0x8B5A,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B5B
		* @PB20
		* @RIPPLE
		*/
		FLOAT_MAT3 : 0x8B5B,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B5C
		* @PB20
		* @RIPPLE
		*/
		FLOAT_MAT4 : 0x8B5C,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B5E
		* @PB20
		* @RIPPLE
		*/
		SAMPLER_2D : 0x8B5E,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B60
		* @PB20
		* @RIPPLE
		*/
		SAMPLER_CUBE : 0x8B60,

		/**
		* @type GLenum
		* @constant
		* @default 0x8622
		* @PB20
		* @RIPPLE
		*/
		VERTEX_ATTRIB_ARRAY_ENABLED : 0x8622,

		/**
		* @type GLenum
		* @constant
		* @default 0x8623
		* @PB20
		* @RIPPLE
		*/
		VERTEX_ATTRIB_ARRAY_SIZE : 0x8623,

		/**
		* @type GLenum
		* @constant
		* @default 0x8624
		* @PB20
		* @RIPPLE
		*/
		VERTEX_ATTRIB_ARRAY_STRIDE : 0x8624,

		/**
		* @type GLenum
		* @constant
		* @default 0x8625
		* @PB20
		* @RIPPLE
		*/
		VERTEX_ATTRIB_ARRAY_TYPE : 0x8625,

		/**
		* @type GLenum
		* @constant
		* @default 0x886A
		* @PB20
		* @RIPPLE
		*/
		VERTEX_ATTRIB_ARRAY_NORMALIZED : 0x886A,

		/**
		* @type GLenum
		* @constant
		* @default 0x8645
		* @PB20
		* @RIPPLE
		*/
		VERTEX_ATTRIB_ARRAY_POINTER : 0x8645,

		/**
		* @type GLenum
		* @constant
		* @default 0x889F
		* @PB20
		* @RIPPLE
		*/
		VERTEX_ATTRIB_ARRAY_BUFFER_BINDING : 0x889F,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B81
		* @PB20
		* @RIPPLE
		*/
		COMPILE_STATUS : 0x8B81,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B84
		* @PB20
		* @RIPPLE
		*/
		INFO_LOG_LENGTH : 0x8B84,

		/**
		* @type GLenum
		* @constant
		* @default 0x8B88
		* @PB20
		* @RIPPLE
		*/
		SHADER_SOURCE_LENGTH : 0x8B88,

		/**
		* @type GLenum
		* @constant
		* @default 0x8DF0
		* @PB20
		* @RIPPLE
		*/
		LOW_FLOAT : 0x8DF0,

		/**
		* @type GLenum
		* @constant
		* @default 0x8DF1
		* @PB20
		* @RIPPLE
		*/
		MEDIUM_FLOAT : 0x8DF1,

		/**
		* @type GLenum
		* @constant
		* @default 0x8DF2
		* @PB20
		* @RIPPLE
		*/
		HIGH_FLOAT : 0x8DF2,

		/**
		* @type GLenum
		* @constant
		* @default 0x8DF3
		* @PB20
		* @RIPPLE
		*/
		LOW_INT : 0x8DF3,

		/**
		* @type GLenum
		* @constant
		* @default 0x8DF4
		* @PB20
		* @RIPPLE
		*/
		MEDIUM_INT : 0x8DF4,

		/**
		* @type GLenum
		* @constant
		* @default 0x8DF5
		* @PB20
		* @RIPPLE
		*/
		HIGH_INT : 0x8DF5,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D40
		* @PB20
		* @RIPPLE
		*/
		FRAMEBUFFER : 0x8D40,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D41
		* @PB20
		* @RIPPLE
		*/
		RENDERBUFFER : 0x8D41,

		/**
		* @type GLenum
		* @constant
		* @default 0x8056
		* @PB20
		* @RIPPLE
		*/
		RGBA4 : 0x8056,

		/**
		* @type GLenum
		* @constant
		* @default 0x8057
		* @PB20
		* @RIPPLE
		*/
		RGB5_A1 : 0x8057,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D62
		* @PB20
		* @RIPPLE
		*/
		RGB565 : 0x8D62,

		/**
		* @type GLenum
		* @constant
		* @default 0x81A5
		* @PB20
		* @RIPPLE
		*/
		DEPTH_COMPONENT16 : 0x81A5,

		/**
		* @type GLenum
		* @constant
		* @default 0x1901
		* @PB20
		* @RIPPLE
		*/
		STENCIL_INDEX : 0x1901,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D48
		* @PB20
		* @RIPPLE
		*/
		STENCIL_INDEX8 : 0x8D48,

		/**
		* @type GLenum
		* @constant
		* @default 0x84F9
		* @PB20
		* @RIPPLE
		*/
		DEPTH_STENCIL : 0x84F9,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D42
		* @PB20
		* @RIPPLE
		*/
		RENDERBUFFER_WIDTH : 0x8D42,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D43
		* @PB20
		* @RIPPLE
		*/
		RENDERBUFFER_HEIGHT : 0x8D43,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D44
		* @PB20
		* @RIPPLE
		*/
		RENDERBUFFER_INTERNAL_FORMAT : 0x8D44,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D50
		* @PB20
		* @RIPPLE
		*/
		RENDERBUFFER_RED_SIZE : 0x8D50,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D51
		* @PB20
		* @RIPPLE
		*/
		RENDERBUFFER_GREEN_SIZE : 0x8D51,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D52
		* @PB20
		* @RIPPLE
		*/
		RENDERBUFFER_BLUE_SIZE : 0x8D52,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D53
		* @PB20
		* @RIPPLE
		*/
		RENDERBUFFER_ALPHA_SIZE : 0x8D53,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D54
		* @PB20
		* @RIPPLE
		*/
		RENDERBUFFER_DEPTH_SIZE : 0x8D54,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D55
		* @PB20
		* @RIPPLE
		*/
		RENDERBUFFER_STENCIL_SIZE : 0x8D55,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CD0
		* @PB20
		* @RIPPLE
		*/
		FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE : 0x8CD0,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CD1
		* @PB20
		* @RIPPLE
		*/
		FRAMEBUFFER_ATTACHMENT_OBJECT_NAME : 0x8CD1,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CD2
		* @PB20
		* @RIPPLE
		*/
		FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL : 0x8CD2,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CD3
		* @PB20
		* @RIPPLE
		*/
		FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE : 0x8CD3,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CE0
		* @PB20
		* @RIPPLE
		*/
		COLOR_ATTACHMENT0 : 0x8CE0,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D00
		* @PB20
		* @RIPPLE
		*/
		DEPTH_ATTACHMENT : 0x8D00,

		/**
		* @type GLenum
		* @constant
		* @default 0x8D20
		* @PB20
		* @RIPPLE
		*/
		STENCIL_ATTACHMENT : 0x8D20,

		/**
		* @type GLenum
		* @constant
		* @default 0x821A
		* @PB20
		* @RIPPLE
		*/
		DEPTH_STENCIL_ATTACHMENT : 0x821A,

		/**
		* @type GLenum
		* @constant
		* @default 0
		* @PB20
		* @RIPPLE
		*/
		NONE : 0,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CD5
		* @PB20
		* @RIPPLE
		*/
		FRAMEBUFFER_COMPLETE : 0x8CD5,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CD6
		* @PB20
		* @RIPPLE
		*/
		FRAMEBUFFER_INCOMPLETE_ATTACHMENT : 0x8CD6,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CD7
		* @PB20
		* @RIPPLE
		*/
		FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT : 0x8CD7,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CD9
		* @PB20
		* @RIPPLE
		*/
		FRAMEBUFFER_INCOMPLETE_DIMENSIONS : 0x8CD9,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CDD
		* @PB20
		* @RIPPLE
		*/
		FRAMEBUFFER_UNSUPPORTED : 0x8CDD,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CA6
		* @PB20
		* @RIPPLE
		*/
		FRAMEBUFFER_BINDING : 0x8CA6,

		/**
		* @type GLenum
		* @constant
		* @default 0x8CA7
		* @PB20
		* @RIPPLE
		*/
		RENDERBUFFER_BINDING : 0x8CA7,

		/**
		* @type GLenum
		* @constant
		* @default 0x84E8
		* @PB20
		* @RIPPLE
		*/
		MAX_RENDERBUFFER_SIZE : 0x84E8,

		/**
		* @type GLenum
		* @constant
		* @default 0x0506
		* @PB20
		* @RIPPLE
		*/
		INVALID_FRAMEBUFFER_OPERATION : 0x0506,

		/**
		* @type GLenum
		* @constant
		* @default 0x9240
		* @PB20
		* @RIPPLE
		*/
		UNPACK_FLIP_Y_WEBGL : 0x9240,

		/**
		* @type GLenum
		* @constant
		* @default 0x9241
		* @PB20
		* @RIPPLE
		*/
		UNPACK_PREMULTIPLY_ALPHA_WEBGL : 0x9241,

		/**
		* @type GLenum
		* @constant
		* @default 0x9242
		* @PB20
		* @RIPPLE
		*/
		CONTEXT_LOST_WEBGL : 0x9242,

		/**
		* @type GLenum
		* @constant
		* @default 0x9243
		* @PB20
		* @RIPPLE
		*/
		UNPACK_COLORSPACE_CONVERSION_WEBGL : 0x9243,

		/**
		* @type GLenum
		* @constant
		* @default 0x9244
		* @PB20
		* @RIPPLE
		*/
		BROWSER_DEFAULT_WEBGL : 0x9244,


};

/**
* @field
* @constructedBy canvas.getContext(&#039;experimental-webgl&#039;)
* @description To create a WebGLRenderingContext object you must fetch the context of a {@link Canvas} using the 'experimental-webgl' identifier
* @example
* &lt;html&gt;
* &lt;head&gt;
*     &lt;title&gt;Example&lt;/title&gt;
*     &lt;script type=&quot;text/javascript&quot;&gt;
*         function foo()
*         {
*              var canvas = document.getElementById(&quot;myCanvas&quot;)
*              var webgl_context = canvas.getContext(&#039;experimental-webgl&#039;);      
*                 
*              // Clear the canvas to blue
*              webgl_context.viewportWidth = canvas.width;
*              webgl_context.viewportHeight = canvas.height;
*              webgl_context.clearColor(0.0, 0.0, 1.0, 1.0);
*              webgl_context.clear(webgl_context.COLOR_BUFFER_BIT);                
*         }
*     &lt;/script&gt;
*     &lt;/head&gt;
*     &lt;body onload=&quot;foo();&quot;&gt;
*         &lt;canvas id=&quot;myCanvas&quot; width=&quot;300&quot; height=&quot;300&quot;&gt;&lt;/canvas&gt;
*     &lt;/body&gt;
* &lt;/html&gt;
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.documentConstructor = undefined;

/**
* @namespace
* The WebGLContextAttributes interface contains drawing surface attributes and is passed as the second parameter to getContext
* @PB20
* @RIPPLE
*/
WebGLContextAttributes = { };

/**
* If the value is true, the drawing buffer has a depth buffer of at least 16 bits. If the value is false, no depth buffer is available
* @type boolean
* @default true
* @PB20
* @RIPPLE
*/
WebGLContextAttributes.prototype.depth = { };

/**
* If the value is true, the drawing buffer has a stencil buffer of at least 8 bits. If the value is false, no stencil buffer is available
* @type boolean
* @default false
* @PB20
* @RIPPLE
*/
WebGLContextAttributes.prototype.stencil = { };

/**
* If the value is true and the implementation supports antialiasing the drawing buffer will perform antialiasing using its choice of
* technique (multisample/supersample) and quality. If the value is false or the implementation does not support antialiasing, no antialiasing is
* performed
* @type boolean
* @default true
* @PB20
* @RIPPLE
*/
WebGLContextAttributes.prototype.antialias = { };

/**
* If the value is true the page compositor will assume the drawing buffer contains colors with premultiplied alpha. If the value is false 
* the page compositor will assume that colors in the drawing buffer are not premultiplied
* @type boolean
* @default true
* @PB20
* @RIPPLE
*/
WebGLContextAttributes.prototype.premultipliedAlpha = { };

/**
* @namespace
* The WebGLObject interface is the parent interface for all GL objects.
* @PB20
* @RIPPLE
*/
WebGLObject = { };

/**
* @namespace
* The WebGLBuffer interface represents an OpenGL Buffer Object. The underlying object is created as if by calling glGenBuffers, bound as if by calling 
* glBindBuffer and destroyed as if by calling glDeleteBuffers
* @extends WebGLObject
* @PB20
* @RIPPLE
*/
WebGLBuffer = { };

/**
* @namespace
* The WebGLFramebuffer interface represents an OpenGL Framebuffer Object. The underlying object is created as if by calling glGenFramebuffers, bound as 
* if by calling glBindFramebuffer and destroyed as if by calling glDeleteFramebuffers
* @extends WebGLObject
* @PB20
* @RIPPLE
*/
WebGLFramebuffer = { };

/**
* @namespace
* The WebGLProgram interface represents an OpenGL Program Object. The underlying object is created as if by calling glCreateProgram, used as if by 
* calling glUseProgram and destroyed as if by calling glDeleteProgram
* @extends WebGLObject
* @PB20
* @RIPPLE
*/
WebGLProgram = { };

/**
* @namespace
* The WebGLRenderbuffer interface represents an OpenGL Renderbuffer Object. The underlying object is created as if by calling glGenRenderbuffers, bound 
* as if by calling glBindRenderbuffer and destroyed as if by calling glDeleteRenderbuffers
* @extends WebGLObject
* @PB20
* @RIPPLE
*/
WebGLRenderbuffer = { };

/**
* @namespace
* The WebGLShader interface represents an OpenGL Shader Object. The underlying object is created as if by calling glCreateShader, attached to a Program 
* as if by calling glAttachShader and destroyed as if by calling glDeleteShader
* @extends WebGLObject
* @PB20
* @RIPPLE
*/
WebGLShader = { };

/**
* @namespace
* The WebGLTexture interface represents an OpenGL Texture Object. The underlying object is created as if by calling glGenTextures, bound as if by calling * glBindTexture and destroyed as if by calling glDeleteTextures
* @extends WebGLObject
* @PB20
* @RIPPLE
*/
WebGLTexture = { };

/**
* @namespace
* The WebGLUniformLocation interface represents the location of a uniform variable in a shader program
* @PB20
* @RIPPLE
*/
WebGLUniformLocation = { };

/**
* @namespace
* The WebGLActiveInfo interface represents the information returned from the getActiveAttrib and getActiveUniform calls
* @PB20
* @RIPPLE
*/
WebGLActiveInfo = { };


/**
* The size of the requested variable
* @type GLint
* @readOnly
* @PB20
* @RIPPLE
*/
WebGLActiveInfo.prototype.size = { };

/**
* The data type of the requested variable.
* @type GLenum
* @readOnly
* @PB20
* @RIPPLE
*/
WebGLActiveInfo.prototype.type = { };

/**
* The name of the requested variable.
* @type String
* @readOnly
* @PB20
* @RIPPLE
*/
WebGLActiveInfo.prototype.name = { };

/**
* Return the canvas interface element that the context paints on
* @type canvas
* @readonly
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.canvas = { };

/**
* Returns the WebGLContextAttributes describing the current drawing buffer
* @return {WebGLContextAttributes} The {@link WebGLContextAttributes} object describing the current drawing buffer
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getContextAttributes = function() { };

/**
* Returns true if the context is in the lost state
* @return {boolean} true if the context is in the lost state, false otherwise
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.isContextLost = function() { };

/**
* Returns an array of all the supported extension strings
* @return {String[]} an array of all the supported extension strings
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getSupportedExtensions = function() { };

/**
* Returns an object if the passed extension is supported. The object returned from getExtension contains any constants or functions used by the 
* extension, if any. A returned object may have no constants or functions if the extension does not define any, but a unique object must still be 
* returned. That object is used to indicate that the extension has been enabled
* @param {String} name name of extension
* @return {object} an object if the passed extension is supported, or null if not
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getExtension = function(name) { };

/**
* Select active texture unit
* @param {GLenum} texture  Specifies which texture unit to make active. The number of texture units is implementation dependent, but must be at least two. texture must be one of TEXTUREi, where i ranges from 0 to (MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1). The initial value is TEXTURE0. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.activeTexture = function(texture) { };

/**
* Attach a shader object to a program object
* @param {WebGLProgram} program Specifies the program object to which a shader object will be attached.
* @param {WebGLShader} shader Specifies the shader object that is to be attached.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.attachShader = function(program, shader) { };

/**
* Associate a generic vertex attribute index with a named attribute variable
* @param {WebGLProgram} program Specifies the handle of the program object in which the association is to be made.
* @param {GLuint} index Specifies the index of the generic vertex attribute to be bound.
* @param {String} name Specifies a null terminated string containing the name of the vertex shader attribute variable to which index is to be bound.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.bindAttribLocation = function(program, index, name) { };

/**
* Bind a named buffer object
* @param {GLenum} target  Specifies the target to which the buffer object is bound. The symbolic constant must be ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER. 
* @param {WebGLBuffer} buffer  Specifies the name of a buffer object. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.bindBuffer = function(target, buffer) { };

/**
* Bind a named framebuffer object
* @param {GLenum} target  Specifies the target to which the framebuffer object is bound. The symbolic constant must be FRAMEBUFFER. 
* @param {WebGLFramebuffer} framebuffer  Specifies the name of a framebuffer object. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.bindFramebuffer = function(target, framebuffer) { };

/**
* Bind a named renderbuffer object
* @param {GLenum} target  Specifies the target to which the renderbuffer object is bound. The symbolic constant must be RENDERBUFFER. 
* @param {WebGLRenderbuffer} renderbuffer  Specifies the name of a renderbuffer object. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.bindRenderbuffer = function(target, renderbuffer) { };

/**
* Bind a named texture to a texturing target
* @param {GLenum} target  Specifies the target of the active texture unit to which the texture is bound. Must be either TEXTURE_2D or TEXTURE_CUBE_MAP. 
* @param {WebGLTexture} texture  Specifies the name of a texture. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.bindTexture = function(target, texture) { };

/**
* Set the blend color
* @param {GLclampf} red  specify the red component of BLEND_COLOR 
* @param {GLclampf} green  specify the green component of BLEND_COLOR 
* @param {GLclampf} blue  specify the blue component of BLEND_COLOR 
* @param {GLclampf} alpha  specify the alpha component of BLEND_COLOR 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.blendColor = function(red, green, blue, alpha) { };

/**
* Specify the equation used for both the RGB blend equation and the Alpha blend equation
* @param {GLenum} mode  specifies how source and destination colors are combined. It must be FUNC_ADD, FUNC_SUBTRACT, or FUNC_REVERSE_SUBTRACT. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.blendEquation = function(mode) { };

/**
* Set the RGB blend equation and the alpha blend equation separately
* @param {GLenum} modeRGB  specifies the RGB blend equation, how the red, green, and blue components of the source and destination colors are combined. It must be FUNC_ADD, FUNC_SUBTRACT, or FUNC_REVERSE_SUBTRACT. 
* @param {GLenum} modeAlpha  specifies the alpha blend equation, how the alpha component of the source and destination colors are combined. It must be FUNC_ADD, FUNC_SUBTRACT, or FUNC_REVERSE_SUBTRACT. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.blendEquationSeparate = function(modeRGB, modeAlpha) { };

/**
* Specify pixel arithmetic
* @param {GLenum} sfactor  Specifies how the red, green, blue, and alpha source blending factors are computed. The following symbolic constants are accepted: ZERO, ONE, SRC_COLOR, ONE_MINUS_SRC_COLOR, DST_COLOR, ONE_MINUS_DST_COLOR, SRC_ALPHA, ONE_MINUS_SRC_ALPHA, DST_ALPHA, ONE_MINUS_DST_ALPHA, CONSTANT_COLOR, ONE_MINUS_CONSTANT_COLOR, CONSTANT_ALPHA, ONE_MINUS_CONSTANT_ALPHA, and SRC_ALPHA_SATURATE. The initial value is ONE. 
* @param {GLenum} dfactor  Specifies how the red, green, blue, and alpha destination blending factors are computed. The following symbolic constants are accepted: ZERO, ONE, SRC_COLOR, ONE_MINUS_SRC_COLOR, DST_COLOR, ONE_MINUS_DST_COLOR, SRC_ALPHA, ONE_MINUS_SRC_ALPHA, DST_ALPHA, ONE_MINUS_DST_ALPHA. CONSTANT_COLOR, ONE_MINUS_CONSTANT_COLOR, CONSTANT_ALPHA, and ONE_MINUS_CONSTANT_ALPHA. The initial value is ZERO. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.blendFunc = function(sfactor, dfactor) { };

/**
* Specify pixel arithmetic for RGB and alpha components separately
* @param {GLenum} srcRGB  Specifies how the red, green, and blue blending factors are computed. The following symbolic constants are accepted: ZERO, ONE, SRC_COLOR, ONE_MINUS_SRC_COLOR, DST_COLOR, ONE_MINUS_DST_COLOR, SRC_ALPHA, ONE_MINUS_SRC_ALPHA, DST_ALPHA, ONE_MINUS_DST_ALPHA, CONSTANT_COLOR, ONE_MINUS_CONSTANT_COLOR, CONSTANT_ALPHA, ONE_MINUS_CONSTANT_ALPHA, and SRC_ALPHA_SATURATE. The initial value is ONE. 
* @param {GLenum} dstRGB  Specifies how the red, green, and blue destination blending factors are computed. The following symbolic constants are accepted: ZERO, ONE, SRC_COLOR, ONE_MINUS_SRC_COLOR, DST_COLOR, ONE_MINUS_DST_COLOR, SRC_ALPHA, ONE_MINUS_SRC_ALPHA, DST_ALPHA, ONE_MINUS_DST_ALPHA. CONSTANT_COLOR, ONE_MINUS_CONSTANT_COLOR, CONSTANT_ALPHA, and ONE_MINUS_CONSTANT_ALPHA. The initial value is ZERO. 
* @param {GLenum} srcAlpha  Specified how the alpha source blending factor is computed. The same symbolic constants are accepted as for srcRGB. The initial value is ONE. 
* @param {GLenum} dstAlpha  Specified how the alpha destination blending factor is computed. The same symbolic constants are accepted as for dstRGB. The initial value is ZERO. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.blendFuncSeparate = function(srcRGB, dstRGB, srcAlpha, dstAlpha) { };

/**
* Set the size of the currently bound WebGLBuffer object for the passed target. The buffer is initialized to 0.
* @param {GLenum} target  Specifies the target buffer object. The symbolic constant must be ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER. 
* @param {GLsizeiptr} size  Specifies the size in bytes of the buffer object's new data store. 
* @param {GLenum} usage  Specifies a pointer to data that will be copied into the data store for initialization, or NULL if no data is to be copied. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.bufferData = function(target, size, usage) { };

/**
* Set the size of the currently bound WebGLBuffer object for the passed target to the size of the passed data, then write the contents of data to the buffer object.
* @name WebGLRenderingContext.prototype.bufferData^2
* @function
* @param {GLenum} target  Specifies the target buffer object. The symbolic constant must be ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER. 
* @param {ArrayBufferView} data  Buffer to measure
* @param {GLenum} usage  Specifies a pointer to data that will be copied into the data store for initialization, or NULL if no data is to be copied. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.bufferData = function(target, data, usage) { };


/**
* Set the size of the currently bound WebGLBuffer object for the passed target to the size of the passed data, then write the contents of data to the buffer object.
* @name WebGLRenderingContext.prototype.bufferData^3
* @function
* @param {GLenum} target  Specifies the target buffer object. The symbolic constant must be ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER. 
* @param {ArrayBuffer} data  Buffer to measure
* @param {GLenum} usage  Specifies a pointer to data that will be copied into the data store for initialization, or NULL if no data is to be copied. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.bufferData = function(target, data, usage) { };


/**
* Update a subset of a buffer object's data store
* @param {GLenum} target  Specifies the target buffer object. The symbolic constant must be ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER. 
* @param {GLintptr} offset  Specifies the offset into the buffer object's data store where data replacement will begin, measured in bytes. 
* @param {ArrayBufferView} data  Specifies the size in bytes of the data store region being replaced. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.bufferSubData = function(target, offset, data) { };

/**
* Update a subset of a buffer object's data store
* @name WebGLRenderingContext.prototype.bufferSubData^2
* @function
* @param {GLenum} target  Specifies the target buffer object. The symbolic constant must be ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER. 
* @param {GLintptr} offset  Specifies the offset into the buffer object's data store where data replacement will begin, measured in bytes. 
* @param {ArrayBuffer} data  Specifies the size in bytes of the data store region being replaced. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.bufferSubData = function(target, offset, data) { };

/**
* Return the framebuffer completeness status of a framebuffer object
* @param {GLenum} target  Specifies the target framebuffer object. The symbolic constant must be FRAMEBUFFER. 
* @return {GLenum} symbolic constant that identifies whether or not the currently bound framebuffer is framebuffer complete, and if not, which of the rules of framebuffer completeness is violated
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.checkFramebufferStatus = function(target) { };

/**
* Clear buffers to preset values
* @param {GLbitfield} mask  Bitwise OR of masks that indicate the buffers to be cleared. The three masks are COLOR_BUFFER_BIT, DEPTH_BUFFER_BIT, and STENCIL_BUFFER_BIT. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.clear = function(mask) { };

/**
* Specify clear values for the color buffers
* @param {GLclampf} red 
* @param {GLclampf} green  
* @param {GLclampf} blue 
* @param {GLclampf} alpha  Specify the red, green, blue, and alpha values used when the color buffers are cleared. The initial values are all 0. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.clearColor = function(red, green, blue, alpha) { };

/**
* Specify the clear value for the depth buffer
* @param {GLclampf} depth Specifies the depth value used when the depth buffer is cleared. The initial value is 1.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.clearDepth = function(depth) { };

/**
* Specify the clear value for the stencil buffer
* @param {GLint} s  Specifies the index used when the stencil buffer is cleared. The initial value is 0. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.clearStencil = function(s) { };

/**
* Enable and disable writing of frame buffer color components
* @param {GLboolean} red 
* @param {GLboolean} green 
* @param {GLboolean} blue 
* @param {GLboolean} alpha  Specify whether red, green, blue, and alpha can or cannot be written into the frame buffer. The initial values are all TRUE, indicating that the color components can be written. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.colorMask = function(red, green, blue, alpha) { };

/**
* Compile a shader object
* @param {WebGLShader} shader Specifies the shader object to be compiled.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.compileShader = function(shader) { };

/**
* Copy pixels into a 2D texture image
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLenum} internalformat  Specifies the internal format of the texture. Must be one of the following symbolic constants: ALPHA, LUMINANCE, LUMINANCE_ALPHA, RGB, or RGBA. 
* @param {GLint} x  Specify the x coordinate of the lower left corner of the rectangular region of pixels to be copied. 
* @param {GLint} y  Specify the y coordinate of the lower left corner of the rectangular region of pixels to be copied. 
* @param {GLsizei} width  Specifies the width of the texture image. All implementations support 2D texture images that are at least 64 texels wide and cube-mapped texture images that are at least 16 texels wide. 
* @param {GLsizei} height  Specifies the height of the texture image. All implementations support 2D texture images that are at least 64 texels high and cube-mapped texture images that are at least 16 texels high. 
* @param {GLint} border  Specifies the width of the border. Must be 0. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.copyTexImage2D = function(target, level, internalformat, x, y, width, height, border) { };

/**
* Copy a two-dimensional texture subimage
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLint} xoffset  Specifies a texel offset in the x direction within the texture array. 
* @param {GLint} yoffset  Specifies a texel offset in the y direction within the texture array. 
* @param {GLint} x  Specify the x coordinate of the lower left corner of the rectangular region of pixels to be copied. 
* @param {GLint} y  Specify the y coordinate of the lower left corner of the rectangular region of pixels to be copied. 
* @param {GLsizei} width  Specifies the width of the texture subimage. 
* @param {GLsizei} height  Specifies the height of the texture subimage. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.copyTexSubImage2D = function(target, level, xoffset, yoffset, x, y, width, height) { };

/**
* Create a WebGLBuffer object
* @return {WebGLBuffer} the created {@link WebGLBuffer} object
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.createBuffer = function() { };

/**
* Create a WebGLFramebuffer object
* @return {WebGLFramebuffer} the created {@link WebGLFramebuffer} object
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.createFramebuffer = function() { };

/**
* Create a WebGLProgram object
* @return {WebGLProgram} the created {@link WebGLProgram} object
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.createProgram = function() { };

/**
* Create a WebGLRenderbuffer object
* @return {WebGLRenderbuffer} the created {@link WebGLRenderbuffer} object
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.createRenderbuffer = function() { };

/**
* Create a WebGLShader object
* @param {GLenum} type Specifies the type of shader to be created. Must be either VERTEX_SHADER or FRAGMENT_SHADER.
* @return {WebGLShader} the created {@link WebGLShader} object
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.createShader = function(type) { };

/**
* Create a WebGLTexture object
* @return {WebGLTexture} the created {@link WebGLTexture} object
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.createTexture = function() { };

/**
* Specify whether front- or back-facing facets can be culled
* @param {GLenum} mode  Specifies whether front- or back-facing facets are candidates for culling. Symbolic constants FRONT, BACK, and FRONT_AND_BACK are accepted. The initial value is BACK. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.cullFace = function(mode) { };

/**
* Delete a buffer object
* @param {WebGLBuffer} buffer Specifies the buffer object to be deleted.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.deleteBuffer = function(buffer) { };

/**
* Delete a framebuffer object
* @param {WebGLFramebuffer} framebuffer Specifies the framebuffer object to be deleted.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.deleteFramebuffer = function(framebuffer) { };

/**
* Delete a program object
* @param {WebGLProgram} program Specifies the program object to be deleted.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.deleteProgram = function(program) { };

/**
* Delete a renderbuffer object
* @param {WebGLRenderbuffer} renderbuffer Specifies the renderbuffer object to be deleted.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.deleteRenderbuffer = function(renderbuffer) { };

/**
* Delete a shader object
* @param {WebGLShader} shader Specifies the shader object to be deleted.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.deleteShader = function(shader) { };

/**
* Delete a texture object
* @param {WebGLTexture} texture Specifies the texture object to be deleted.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.deleteTexture = function(texture) { };

/**
* Specify the value used for depth buffer comparisons
* @param {GLenum} func  Specifies the depth comparison function. Symbolic constants NEVER, LESS, EQUAL, LEQUAL, GREATER, NOTEQUAL, GEQUAL, and ALWAYS are accepted. The initial value is LESS. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.depthFunc = function(func) { };

/**
* Enable or disable writing into the depth buffer
* @param {GLboolean} flag  Specifies whether the depth buffer is enabled for writing. If flag is FALSE, depth buffer writing is disabled. Otherwise, it is enabled. Initially, depth buffer writing is enabled. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.depthMask = function(flag) { };

/**
* Specify mapping of depth values from normalized device coordinates to window coordinates. zNear and zFar values are clamped to the range 0 to 1 and zNear must be less than or equal to zFar
* @param {GLclampf} zNear Specifies the mapping of the near clipping plane to window coordinates. The initial value is 0.
* @param {GLclampf} zFar Specifies the mapping of the far clipping plane to window coordinates. The initial value is 1.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.depthRange = function(zNear, zFar) { };

/**
* Detach a shader object from a program object
* @param {WebGLProgram} program Specifies the program object from which to detach the shader object.
* @param {WebGLShader} shader Specifies the shader object to be detached.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.detachShader = function(program, shader) { };

/**
* Disable server-side GL capabilities
* @param {GLenum} cap Specifies a symbolic constant indicating a GL capability.
* Both enable and disable take a single argument, cap, which can assume one of the following values:
* <ul>
*   <li>WebGLRenderingContext.BLEND<br/>If enabled, blend the computed fragment color values with the values in the color buffers. See {@link #blendFunc}.</li>
*   <li>WebGLRenderingContext.CULL_FACE<br/>If enabled, cull polygons based on their winding in window coordinates. See {@link #cullFace}.</li>
*   <li>WebGLRenderingContext.DEPTH_TEST<br/>If enabled, do depth comparisons and update the depth buffer. Note that even if the depth buffer exists and the depth mask is non-zero, the depth buffer is not updated if the depth test is disabled. See {@link #depthFunc} and {@link #depthRange}.</li>
*   <li>WebGLRenderingContext.DITHER<br/>If enabled, dither color components or indices before they are written to the color buffer.</li>
*   <li>WebGLRenderingContext.POLYGON_OFFSET_FILL<br/>If enabled, an offset is added to depth values of a polygon's fragments produced by rasterization. See {@link #polygonOffset}.</li>
*   </li>WebGLRenderingContext.SAMPLE_ALPHA_TO_COVERAGE<br/>If enabled, compute a temporary coverage value where each bit is determined by the alpha value at the corresponding sample location. The temporary coverage value is then ANDed with the fragment coverage value.</li>
*   <li>WebGLRenderingContext.SAMPLE_COVERAGE<br/>If enabled, the fragment's coverage is ANDed with the temporary coverage value. If SAMPLE_COVERAGE_INVERT is set to TRUE, invert the coverage value. See {@link #sampleCoverage}.</li>
*   <li>WebGLRenderingContext.SCISSOR_TEST<br/>If enabled, discard fragments that are outside the scissor rectangle. See {@link #scissor}.</li>
*   <li>WebGLRenderingContext.STENCIL_TEST<br/>If enabled, do stencil testing and update the stencil buffer. See {@link #stencilFunc} and {@link #stencilOp}.</li>
* </ul>
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.disable = function(cap) { };

/**
* Disables the generic vertex attribute array specified by index
* @param {GLuint} index Specifies the index of the generic vertex attribute to be disabled.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.disableVertexAttribArray = function(index) { };

/**
* Render primitives from vertex array data
* @param {GLenum} mode  Specifies what kind of primitives to render. Symbolic constants POINTS, LINE_STRIP, LINE_LOOP, LINES, TRIANGLE_STRIP, TRIANGLE_FAN, and TRIANGLES are accepted. 
* @param {GLint} first  Specifies the starting index in the enabled arrays. 
* @param {GLsizei} count  Specifies the number of vertices to be rendered. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.drawArrays = function(mode, first, count) { };

/**
* Render primitives from index array data
* @param {GLenum} mode  Specifies what kind of primitives to render. Symbolic constants POINTS, LINE_STRIP, LINE_LOOP, LINES, TRIANGLE_STRIP, TRIANGLE_FAN, and TRIANGLES are accepted. 
* @param {GLsizei} count  Specifies the number of elements to be rendered. 
* @param {GLenum} type  Specifies the type of the values in indices. Must be UNSIGNED_BYTE or UNSIGNED_SHORT. 
* @param {GLintptr} offset  Specifies a pointer to the location where the indices are stored. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.drawElements = function(mode, count, type, offset) { };

/**
* Enable server-side GL capabilities
* @param {GLenum} cap  Specifies a symbolic constant indicating a GL capability. See @link {#disable} for list of valid constants.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.enable = function(cap) { };

/**
* Enable a generic vertex attribute array
* @param {GLuint} index Specifies the index of the generic vertex attribute to be enabled.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.enableVertexAttribArray = function(index) { };

/**
* Block until all GL execution is complete
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.finish = function() { };

/**
* Force execution of GL commands in finite time
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.flush = function() { };

/**
* Attach a renderbuffer object to a framebuffer object
* @param {GLenum} target Specifies the framebuffer target. The symbolic constant must be FRAMEBUFFER.
* @param {GLenum} attachment Specifies the attachment point to which renderbuffer should be attached. Must be one of the following symbolic constants: COLOR_ATTACHMENT0, DEPTH_ATTACHMENT, or STENCIL_ATTACHMENT.
* @param {GLenum} renderbuffertarget Specifies the renderbuffer target. The symbolic constant must be RENDERBUFFER.
* @param {WebGLRenderbuffer} renderbuffer Specifies the renderbuffer object that is to be attached.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.framebufferRenderbuffer = function(target, attachment, renderbuffertarget, renderbuffer) { };

/**
* Attach a texture image to a framebuffer object
* @param {GLenum} target Specifies the framebuffer target. The symbolic constant must be FRAMEBUFFER.
* @param {GLenum} attachment Specifies the attachment point to which an image from texture should be attached. Must be one of the following symbolic constants: COLOR_ATTACHMENT0, DEPTH_ATTACHMENT, or STENCIL_ATTACHMENT.
* @param {GLenum} textarget Specifies the texture target. Must be one of the following symbolic constants: TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z.
* @param {WebGLTexture} texture Specifies the texture object whose image is to be attached.
* @param {GLint} level Specifies the mipmap level of the texture image to be attached, which must be 0.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.framebufferTexture2D = function(target, attachment, textarget, texture, level) { };

/**
* Define front- and back-facing polygons
* @param {GLenum} mode  Specifies the orientation of front-facing polygons. CW and CCW are accepted. The initial value is CCW. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.frontFace = function(mode) { };

/**
* Generate a complete set of mipmaps for a texture object
* @param {GLenum} target Specifies the texture target of the active texture unit to which the texture object is bound whose mipmaps will be generated. Must be one of the following symbolic constants: TEXTURE_2D or TEXTURE_CUBE_MAP.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.generateMipmap = function(target) { };

/**
* Return information about an active attribute variable
* @param {WebGLProgram} program Specifies the program object to be queried.
* @param {GLuint} index Specifies the index of the attribute variable to be queried.
* @return {WebGLActiveInfo} information about the size, type and name of the vertex attribute at the passed index of the passed program object.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getActiveAttrib = function(program, index) { };

/**
* Return information about an active uniform variable
* @param {WebGLProgram} program Specifies the program object to be queried.
* @param {GLuint} index Specifies the index of the uniform variable to be queried.
* @return {WebGLActiveInfo} information about the size, type and name of the uniform at the passed index of the passed program object.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getActiveUniform = function(program, index) { };

/**
* Return the handles of the shader objects attached to a program object
* @param {WebGLProgram} program Specifies the program object to be queried.
* @return {WebGLShader[ ]} the list of shaders attached to the passed program.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getAttachedShaders = function(program) { };

/**
* Return the location of an attribute variable
* @param {WebGLProgram} program Specifies the program object to be queried.
* @param {String} name Points to a null terminated string containing the name of the attribute variable whose location is to be queried.
* @return {GLint} the index of the generic vertex attribute that is bound to that attribute variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getAttribLocation = function(program, name) { };

/**
* Return the value or values of a selected parameter
* @param {GLenum} pname Specifies the parameter value to be returned.
* @return {any} the value for the passed pname. The type returned is the natural type for the requested pname, as given in the following table:
*    <table> 
*        <tr><th>pname</th><th>returned type</th></tr> 
*        <tr><td>ACTIVE_TEXTURE</td><td>unsigned long</td></tr> 
*        <tr><td>ALIASED_LINE_WIDTH_RANGE</td><td>Float32Array (with 2 elements)</td></tr> 
*        <tr><td>ALIASED_POINT_SIZE_RANGE</td><td>Float32Array (with 2 elements)</td></tr> 
*        <tr><td>ALPHA_BITS</td><td>long</td></tr> 
*        <tr><td>ARRAY_BUFFER_BINDING</td><td>WebGLBuffer</td></tr> 
*        <tr><td>BLEND</td><td>boolean</td></tr> 
*        <tr><td>BLEND_COLOR</td><td>Float32Array (with 4 values)</td></tr> 
*        <tr><td>BLEND_DST_ALPHA</td><td>unsigned long</td></tr> 
*        <tr><td>BLEND_DST_RGB</td><td>unsigned long</td></tr> 
*        <tr><td>BLEND_EQUATION_ALPHA</td><td>unsigned long</td></tr> 
*        <tr><td>BLEND_EQUATION_RGB</td><td>unsigned long</td></tr> 
*        <tr><td>BLEND_SRC_ALPHA</td><td>unsigned long</td></tr> 
*        <tr><td>BLEND_SRC_RGB</td><td>unsigned long</td></tr> 
*        <tr><td>BLUE_BITS</td><td>long</td></tr> 
*        <tr><td>COLOR_CLEAR_VALUE</td><td>Float32Array (with 4 values)</td></tr> 
*        <tr><td>COLOR_WRITEMASK</td><td>boolean[] (with 4 values)</td></tr> 
*        <tr><td>COMPRESSED_TEXTURE_FORMATS</td><td>null</td></tr> 
*        <tr><td>CULL_FACE</td><td>boolean</td></tr> 
*        <tr><td>CULL_FACE_MODE</td><td>unsigned long</td></tr> 
*        <tr><td>CURRENT_PROGRAM</td><td>WebGLProgram</td></tr> 
*        <tr><td>DEPTH_BITS</td><td>long</td></tr> 
*        <tr><td>DEPTH_CLEAR_VALUE</td><td>float</td></tr> 
*        <tr><td>DEPTH_FUNC</td><td>unsigned long</td></tr> 
*        <tr><td>DEPTH_RANGE</td><td>Float32Array (with 2 elements)</td></tr> 
*        <tr><td>DEPTH_TEST</td><td>boolean</td></tr> 
*        <tr><td>DEPTH_WRITEMASK</td><td>boolean</td></tr> 
*        <tr><td>DITHER</td><td>boolean</td></tr> 
*        <tr><td>ELEMENT_ARRAY_BUFFER_BINDING</td><td>WebGLBuffer</td></tr> 
*        <tr><td>FRAMEBUFFER_BINDING</td><td>WebGLFramebuffer</td></tr> 
*        <tr><td>FRONT_FACE</td><td>unsigned long</td></tr> 
*        <tr><td>GENERATE_MIPMAP_HINT</td><td>unsigned long</td></tr> 
*        <tr><td>GREEN_BITS</td><td>long</td></tr> 
*        <tr><td>LINE_WIDTH</td><td>float</td></tr> 
*        <tr><td>MAX_COMBINED_TEXTURE_IMAGE_UNITS</td><td>long</td></tr> 
*        <tr><td>MAX_CUBE_MAP_TEXTURE_SIZE</td><td>long</td></tr> 
*        <tr><td>MAX_FRAGMENT_UNIFORM_VECTORS</td><td>long</td></tr> 
*        <tr><td>MAX_RENDERBUFFER_SIZE</td><td>long</td></tr> 
*        <tr><td>MAX_TEXTURE_IMAGE_UNITS</td><td>long</td></tr> 
*        <tr><td>MAX_TEXTURE_SIZE</td><td>long</td></tr> 
*        <tr><td>MAX_VARYING_VECTORS</td><td>long</td></tr> 
*        <tr><td>MAX_VERTEX_ATTRIBS</td><td>long</td></tr> 
*        <tr><td>MAX_VERTEX_TEXTURE_IMAGE_UNITS</td><td>long</td></tr> 
*        <tr><td>MAX_VERTEX_UNIFORM_VECTORS</td><td>long</td></tr> 
*        <tr><td>MAX_VIEWPORT_DIMS</td><td>Int32Array (with 2 elements)</td></tr> 
*        <tr><td>NUM_COMPRESSED_TEXTURE_FORMATS</td><td>long</td></tr> 
*        <tr><td>PACK_ALIGNMENT</td><td>long</td></tr> 
*        <tr><td>POLYGON_OFFSET_FACTOR</td><td>float</td></tr> 
*        <tr><td>POLYGON_OFFSET_FILL</td><td>boolean</td></tr> 
*        <tr><td>POLYGON_OFFSET_UNITS</td><td>float</td></tr> 
*        <tr><td>RED_BITS</td><td>long</td></tr> 
*        <tr><td>RENDERBUFFER_BINDING</td><td>WebGLRenderbuffer</td></tr> 
*        <tr><td>RENDERER</td><td>String</td></tr> 
*        <tr><td>SAMPLE_BUFFERS</td><td>long</td></tr> 
*        <tr><td>SAMPLE_COVERAGE_INVERT</td><td>boolean</td></tr> 
*        <tr><td>SAMPLE_COVERAGE_VALUE</td><td>float</td></tr> 
*        <tr><td>SAMPLES</td><td>long</td></tr> 
*        <tr><td>SCISSOR_BOX</td><td>Int32Array (with 4 elements)</td></tr> 
*        <tr><td>SCISSOR_TEST</td><td>boolean</td></tr> 
*        <tr><td>SHADING_LANGUAGE_VERSION</td><td>String</td></tr> 
*        <tr><td>STENCIL_BACK_FAIL</td><td>unsigned long</td></tr> 
*        <tr><td>STENCIL_BACK_FUNC</td><td>unsigned long</td></tr> 
*        <tr><td>STENCIL_BACK_PASS_DEPTH_FAIL</td><td>unsigned long</td></tr> 
*        <tr><td>STENCIL_BACK_PASS_DEPTH_PASS</td><td>unsigned long</td></tr> 
*        <tr><td>STENCIL_BACK_REF</td><td>long</td></tr> 
*        <tr><td>STENCIL_BACK_VALUE_MASK</td><td>unsigned long</td></tr> 
*        <tr><td>STENCIL_BACK_WRITEMASK</td><td>unsigned long</td></tr> 
*        <tr><td>STENCIL_BITS</td><td>long</td></tr> 
*        <tr><td>STENCIL_CLEAR_VALUE</td><td>long</td></tr> 
*        <tr><td>STENCIL_FAIL</td><td>unsigned long</td></tr> 
*        <tr><td>STENCIL_FUNC</td><td>unsigned long</td></tr> 
*        <tr><td>STENCIL_PASS_DEPTH_FAIL</td><td>unsigned long</td></tr> 
*        <tr><td>STENCIL_PASS_DEPTH_PASS</td><td>unsigned long</td></tr> 
*        <tr><td>STENCIL_REF</td><td>long</td></tr> 
*        <tr><td>STENCIL_TEST</td><td>boolean</td></tr> 
*        <tr><td>STENCIL_VALUE_MASK</td><td>unsigned long</td></tr> 
*        <tr><td>STENCIL_WRITEMASK</td><td>unsigned long</td></tr> 
*        <tr><td>SUBPIXEL_BITS</td><td>long</td></tr> 
*        <tr><td>TEXTURE_BINDING_2D</td><td>WebGLTexture</td></tr> 
*        <tr><td>TEXTURE_BINDING_CUBE_MAP</td><td>WebGLTexture</td></tr> 
*        <tr><td>UNPACK_ALIGNMENT</td><td>int</td></tr> 
*        <tr><td>UNPACK_COLORSPACE_CONVERSION_WEBGL</td><td>unsigned long</td></tr> 
*        <tr><td>UNPACK_FLIP_Y_WEBGL</td><td>boolean</td></tr> 
*        <tr><td>UNPACK_PREMULTIPLY_ALPHA_WEBGL</td><td>boolean</td></tr> 
*        <tr><td>VENDOR</td><td>String</td></tr> 
*        <tr><td>VERSION</td><td>String</td></tr> 
*        <tr><td>VIEWPORT</td><td>Int32Array (with 4 elements)</td></tr> 
*    </table>
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getParameter = function(pname) { };

/**
* Return parameters of a buffer object
* @param {GLenum} target Specifies the target buffer object. The symbolic constant must be ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER.
* @param {GLenum} pname Specifies the symbolic name of a buffer object parameter. Accepted values are BUFFER_SIZE or BUFFER_USAGE.
* @return {any} the value for the passed pname.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getBufferParameter = function(target, pname) { };

/**
* Return error information
* @return {GLenum} The following errors are currently defined:
* <ul>
*   <li>WebGLRenderingContext.NO_ERROR<br/>No error has been recorded. The value of this symbolic constant is guaranteed to be 0.</li>
*   <li>WebGLRenderingContext.INVALID_ENUM<br/>An unacceptable value is specified for an enumerated argument. The offending command is ignored and has no other side effect than to set the error flag.</li>
*   <li>WebGLRenderingContext.INVALID_VALUE<br/>A numeric argument is out of range. The offending command is ignored and has no other side effect than to set the error flag.</li>
*   <li>WebGLRenderingContext.INVALID_OPERATION<br/>The specified operation is not allowed in the current state. The offending command is ignored and has no other side effect than to set the error flag.</li>
*   <li>WebGLRenderingContext.INVALID_FRAMEBUFFER_OPERATION<br/>The command is trying to render to or read from the framebuffer while the currently bound framebuffer is not framebuffer complete (i.e. the return value from checkFramebufferStatus is not FRAMEBUFFER_COMPLETE). The offending command is ignored and has no other side effect than to set the error flag.</li>
*   <li>WebGLRenderingContext.OUT_OF_MEMORY<br/>There is not enough memory left to execute the command. The state of the GL is undefined, except for the state of the error flags, after this error is recorded.</li>
    <li>WebGLRenderingContext.CONTEXT_LOST_WEBGL<br/>getError returns CONTEXT_LOST_WEBGL the first time it is called while the context is lost. Afterward it will return NO_ERROR until the context has been restored.</li>
* </ul>
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getError = function() { };

/**
* Return attachment parameters of a framebuffer object
* @param {GLenum} target Specifies the target framebuffer object. The symbolic constant must be FRAMEBUFFER.
* @param {GLenum} attachment Specifies the symbolic name of a framebuffer object attachment point. Accepted values are COLOR_ATTACHMENT0, DEPTH_ATTACHMENT, and STENCIL_ATTACHMENT.
* @param {GLenum} pname Specifies the symbolic name of a framebuffer object attachment parameter. Accepted values are FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE, FRAMEBUFFER_ATTACHMENT_OBJECT_NAME, FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL, and FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE.
* @return {any} the value for the passed pname given the passed target and attachment.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getFramebufferAttachmentParameter = function(target, attachment, pname) { };

/**
* Return a parameter from a program object
* @param {WebGLProgram} program Specifies the program object to be queried.
* @param {GLenum} pname Specifies the object parameter. Accepted symbolic names are DELETE_STATUS, LINK_STATUS, VALIDATE_STATUS, ATTACHED_SHADERS, ACTIVE_ATTRIBUTES, ACTIVE_UNIFORMS.
* @return {any} the value for the passed pname given the passed program.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getProgramParameter = function(program, pname) { };

/**
* Return the information log for a program object
* @param {WebGLProgram} program Specifies the program object whose information log is to be queried.
* @return {String} the information log for the specified program object.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getProgramInfoLog = function(program) { };

/**
* Return parameters of a renderbuffer object
* @param {GLenum} target Specifies the target renderbuffer object. The symbolic constant must be RENDERBUFFER.
* @param {GLenum} pname Specifies the symbolic name of a renderbuffer object parameter. Accepted values are RENDERBUFFER_WIDTH, RENDERBUFFER_HEIGHT, RENDERBUFFER_INTERNAL_FORMAT, RENDERBUFFER_RED_SIZE, RENDERBUFFER_GREEN_SIZE, RENDERBUFFER_BLUE_SIZE, RENDERBUFFER_ALPHA_SIZE, RENDERBUFFER_DEPTH_SIZE, or RENDERBUFFER_STENCIL_SIZE.
* @return {any} the value for the passed pname given the passed target.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getRenderbufferParameter = function(target, pname) { };

/**
* Return a parameter from a shader object
* @param {WebGLShader} shader Specifies the shader object to be queried.
* @param {GLenum} pname Specifies the object parameter. Accepted symbolic names are SHADER_TYPE, DELETE_STATUS, COMPILE_STATUS.
* @return {any} the value for the passed pname given the passed shader.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getShaderParameter = function(shader, pname) { };

/**
* Return the information log for a shader object
* @param {WebGLShader} shader Specifies the shader object whose information log is to be queried.
* @return {String} the information log for the specified shader object.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getShaderInfoLog = function(shader) { };

/**
* Return the source code string from a shader object
* @param {WebGLShader} shader Specifies the shader object to be queried.
* @return {String} the concatenation of the source code strings from the shader object specified by shader.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getShaderSource = function(shader) { };

/**
* Return texture parameter values
* @param {GLenum} target  Specifies the symbolic name of the target texture of the active texture unit. TEXTURE_2D and TEXTURE_CUBE_MAP are accepted. 
* @param {GLenum} pname  Specifies the symbolic name of a texture parameter. TEXTURE_MAG_FILTER, TEXTURE_MIN_FILTER, TEXTURE_WRAP_S, and TEXTURE_WRAP_T are accepted. 
* @return {any} the value of the texture parameter specified as pname.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getTexParameter = function(target, pname) { };

/**
* Return the value of a uniform variable
* @param {WebGLProgram} program Specifies the program object to be queried.
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be queried.
* @return {any} the uniform value at the passed location in the passed program. The type returned is dependent on the uniform type, as shown in the following table:
*    <table> 
*        <tr><th>uniform type</th><th>returned type</th></tr> 
*        <tr><td>boolean</td><td>boolean</td></tr> 
*        <tr><td>int</td><td>long</td></tr> 
*        <tr><td>float</td><td>float</td></tr> 
*        <tr><td>vec2</td><td>Float32Array (with 2 elements)</td></tr> 
*        <tr><td>ivec2</td><td>Int32Array (with 2 elements)</td></tr> 
*        <tr><td>bvec2</td><td>boolean[] (with 2 elements)</td></tr> 
*        <tr><td>vec3</td><td>Float32Array (with 3 elements)</td></tr> 
*        <tr><td>ivec3</td><td>Int32Array (with 3 elements)</td></tr> 
*        <tr><td>bvec3</td><td>boolean[] (with 3 elements)</td></tr> 
*        <tr><td>vec4</td><td>Float32Array (with 4 elements)</td></tr> 
*        <tr><td>ivec4</td><td>Int32Array (with 4 elements)</td></tr> 
*        <tr><td>bvec4</td><td>boolean[] (with 4 elements)</td></tr> 
*        <tr><td>mat2</td><td>Float32Array (with 4 elements)</td></tr> 
*        <tr><td>mat3</td><td>Float32Array (with 9 elements)</td></tr> 
*        <tr><td>mat4</td><td>Float32Array (with 16 elements)</td></tr> 
*    </table>
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getUniform = function(program, location) { };

/**
* Return the location of a uniform variable
* @param {WebGLProgram} program Specifies the program object to be queried.
* @param {String} name Points to a null terminated string containing the name of the uniform variable whose location is to be queried.
* @return {WebGLUniformLocation} an integer that represents the location of a specific uniform variable within a program object.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getUniformLocation = function(program, name) { };

/**
* Return a generic vertex attribute parameter
* @param {GLuint} index Specifies the generic vertex attribute parameter to be queried.
* @param {GLenum} pname Specifies the symbolic name of the vertex attribute parameter to be queried. Accepted values are VERTEX_ATTRIB_ARRAY_BUFFER_BINDING, VERTEX_ATTRIB_ARRAY_ENABLED, VERTEX_ATTRIB_ARRAY_SIZE, VERTEX_ATTRIB_ARRAY_STRIDE, VERTEX_ATTRIB_ARRAY_TYPE, VERTEX_ATTRIB_ARRAY_NORMALIZED, or CURRENT_VERTEX_ATTRIB.
* @return {any} the value of a generic vertex attribute parameter.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getVertexAttrib = function(index, pname) { };

/**
* Return the address of the specified generic vertex attribute pointer
* @param {GLuint} index Specifies the generic vertex attribute parameter to be returned.
* @param {GLenum} pname Specifies the symbolic name of the generic vertex attribute parameter to be returned. Must be VERTEX_ATTRIB_ARRAY_POINTER.
* @return {GLsizeiptr} the pointer value.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.getVertexAttribOffset = function(index, pname) { };

/**
* Specify implementation-specific hints
* @param {GLenum} target  Specifies a symbolic constant indicating the behavior to be controlled. GENERATE_MIPMAP_HINT is accepted. 
* @param {GLenum} mode  Specifies a symbolic constant indicating the desired behavior. FASTEST, NICEST, and DONT_CARE are accepted. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.hint = function(target, mode) { };

/**
* Determine if a name corresponds to a buffer object
* @param {WebGLBuffer} buffer  Specifies a value that may be the name of a buffer object. 
* @return {GLboolean} TRUE if buffer is currently the name of a buffer object. If buffer is zero, or is a non-zero value that is not currently the name of a buffer object, or if an error occurs, isBuffer returns FALSE.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.isBuffer = function(buffer) { };

/**
* Test whether a capability is enabled
* @param {GLenum} cap  Specifies a symbolic constant indicating a GL capability. 
* @return {GLboolean} returns WebGLRenderingContext.TRUE if cap is an enabled capability and returns WebGLRenderingContext.FALSE otherwise. Initially all capabilities except DITHER are disabled; DITHER is initially enabled. The following capabilities are accepted for cap:
*    <table>
*        <tr><th>Constant</th><th>See</th></tr> 
*		 <tbody>
*		 <tr><td>BLEND</td><td>{@link #blendFunc}</a></td></tr>
*		 <tr><td>CULL_FACE</td><td>{@link #cullFace}</a></td></tr>
*		 <tr><td>DEPTH_TEST</td><td>{@link #depthFunc}</a>, {@link #depthRange}</a></td></tr>
*		 <tr><td>DITHER</td><td>{@link #enable}</a></td></tr>
*		 <tr><td>POLYGON_OFFSET_FILL</td><td>{@link #polygonOffset}</a></td></tr>
*		 <tr><td>SAMPLE_ALPHA_TO_COVERAGE</td><td>{@link #sampleCoverage}</a></td></tr>
*		 <tr><td>SAMPLE_COVERAGE</td><td>{@link #sampleCoverage}</a></td></tr>
*		 <tr><td>SCISSOR_TEST</td><td>{@link #scissor}</a></td></tr>
*		 <tr><td>STENCIL_TEST</td><td>{@link #stencilFunc}</a>, {@link #stencilOp}</a></td></tr>
*		 </tbody>
*    </table>
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.isEnabled = function(cap) { };

/**
* Determine if a name corresponds to a framebuffer object
* @param {WebGLFramebuffer} framebuffer  Specifies a value that may be the name of a framebuffer object. 
* @return {GLboolean} true if the passed WebGLFramebuffer is valid and false otherwise.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.isFramebuffer = function(framebuffer) { };

/**
* Determine if a name corresponds to a program object
* @param {WebGLProgram} program Specifies a potential program object.
* @return {GLboolean} true if the passed WebGLProgram is valid and false otherwise.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.isProgram = function(program) { };

/**
* Determine if a name corresponds to a renderbuffer object
* @param {WebGLRenderbuffer} renderbuffer  Specifies a value that may be the name of a renderbuffer object. 
* @return {GLboolean} true if the passed WebGLRenderbuffer is valid and false otherwise.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.isRenderbuffer = function(renderbuffer) { };

/**
* Determine if a name corresponds to a shader object
* @param {WebGLShader} shader Specifies a potential shader object.
* @return {GLboolean} true if the passed WebGLShader is valid and false otherwise.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.isShader = function(shader) { };

/**
* Determine if a name corresponds to a texture
* @param {WebGLTexture} texture  Specifies a value that may be the name of a texture. 
* @return {GLboolean} true if the passed WebGLTexture is valid and false otherwise.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.isTexture = function(texture) { };

/**
* Specify the width of rasterized lines
* @param {GLfloat} width  Specifies the width of rasterized lines. The initial value is 1. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.lineWidth = function(width) { };

/**
* Link a program object
* @param {WebGLProgram} program Specifies the handle of the program object to be linked.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.linkProgram = function(program) { };

/**
* Set pixel storage modes
* @param {GLenum} pname  Specifies the symbolic name of the parameter to be set. One value affects the packing of pixel data into memory: PACK_ALIGNMENT. The other affects the unpacking of pixel data from memory: UNPACK_ALIGNMENT. 
* @param {GLint} param  Specifies the value that pname is set to. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.pixelStorei = function(pname, param) { };

/**
* Set the scale and units used to calculate depth values
* @param {GLfloat} factor  Specifies a scale factor that is used to create a variable depth offset for each polygon. The initial value is 0. 
* @param {GLfloat} units  Is multiplied by an implementation-specific value to create a constant depth offset. The initial value is 0. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.polygonOffset = function(factor, units) { };

/**
* Read a block of pixels from the frame buffer
* @param {GLint} x  Specify the x coordinate of the first pixel that is read from the frame buffer. This location is the lower left corner of a rectangular block of pixels. 
* @param {GLint} y  Specify the y coordinate of the first pixel that is read from the frame buffer. This location is the lower left corner of a rectangular block of pixels. 
* @param {GLsizei} width  Specify the width of the pixel rectangle. Width of one corresponds to a single pixel. 
* @param {GLsizei} height  Specify the height of the pixel rectangle. Height of one corresponds to a single pixel. 
* @param {GLenum} format  Specifies the format of the pixel data. The following symbolic values are accepted: ALPHA, RGB, and RGBA. 
* @param {GLenum} type  Specifies the data type of the pixel data. Must be one of UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5, UNSIGNED_SHORT_4_4_4_4, or UNSIGNED_SHORT_5_5_5_1. 
* @param {ArrayBufferView} pixels  Returns the pixel data. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.readPixels = function(x, y, width, height, format, type, pixels) { };

/**
* Create and initialize a renderbuffer object's data store
* @param {GLenum} target Specifies the renderbuffer target. The symbolic constant must be RENDERBUFFER.
* @param {GLenum} internalformat Specifies the color-renderable, depth-renderable, or stencil-renderable format of the renderbuffer. Must be one of the following symbolic constants: RGBA4, RGB565, RGB5_A1, DEPTH_COMPONENT16, or STENCIL_INDEX8.
* @param {GLsizei} width Specifies the width of the renderbuffer in pixels.
* @param {GLsizei} height Specifies the height of the renderbuffer in pixels.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.renderbufferStorage = function(target, internalformat, width, height) { };

/**
* Specify multisample coverage parameters
* @param {GLclampf} value  Specify a single floating-point sample coverage value. The value is clamped to the range 0-1. The initial value is 1.0 . 
* @param {GLboolean} invert  Specify a single boolean value representing if the coverage masks should be inverted. TRUE and FALSE are accepted. The initial value is FALSE. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.sampleCoverage = function(value, invert) { };

/**
* Define the scissor box
* @param {GLint} x  Specify the lower left corner of the scissor box. Initially (0, 0). 
* @param {GLint} y  Specify the lower left corner of the scissor box. Initially (0, 0). 
* @param {GLsizei} width  Specify the width of the scissor box. When a GL context is first attached to a window, width is set to the dimensions of that window. 
* @param {GLsizei} height  Specify the height of the scissor box. When a GL context is first attached to a window, height is set to the dimensions of that window. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.scissor = function(x, y, width, height) { };

/**
* Replace the source code in a shader object
* @param {WebGLShader} shader Specifies the handle of the shader object whose source code is to be replaced.
* @param {String} source Specifies the number of elements in the string and length arrays.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.shaderSource = function(shader, source) { };

/**
* Set front and back function and reference value for stencil testing
* @param {GLenum} func  Specifies the test function. Eight symbolic constants are valid: NEVER, LESS, LEQUAL, GREATER, GEQUAL, EQUAL, NOTEQUAL, and ALWAYS. The initial value is ALWAYS. 
* @param {GLint} ref  Specifies the reference value for the stencil test. ref is clamped to the range 0-(2n-1), where n is the number of bitplanes in the stencil buffer. The initial value is 0. 
* @param {GLuint} mask  Specifies a mask that is ANDed with both the reference value and the stored stencil value when the test is done. The initial value is all 1's. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.stencilFunc = function(func, ref, mask) { };

/**
* Set front and/or back function and reference value for stencil testing
* @param {GLenum} face  Specifies whether front and/or back stencil state is updated. Three symbolic constants are valid: FRONT, BACK, and FRONT_AND_BACK. 
* @param {GLenum} func  Specifies the test function. Eight symbolic constants are valid: NEVER, LESS, LEQUAL, GREATER, GEQUAL, EQUAL, NOTEQUAL, and ALWAYS. The initial value is ALWAYS. 
* @param {GLint} ref  Specifies the reference value for the stencil test. ref is clamped to the range 0-(2n-1), where n is the number of bitplanes in the stencil buffer. The initial value is 0. 
* @param {GLuint} mask  Specifies a mask that is ANDed with both the reference value and the stored stencil value when the test is done. The initial value is all 1's. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.stencilFuncSeparate = function(face, func, ref, mask) { };

/**
* Control the front and back writing of individual bits in the stencil planes
* @param {GLuint} mask  Specifies a bit mask to enable and disable writing of individual bits in the stencil planes. Initially, the mask is all 1's. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.stencilMask = function(mask) { };

/**
* Control the front and/or back writing of individual bits in the stencil planes
* @param {GLenum} face  Specifies whether the front and/or back stencil writemask is updated. Three symbolic constants are valid: FRONT, BACK, and FRONT_AND_BACK. 
* @param {GLuint} mask  Specifies a bit mask to enable and disable writing of individual bits in the stencil planes. Initially, the mask is all 1's. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.stencilMaskSeparate = function(face, mask) { };

/**
* Set front and back stencil test actions
* @param {GLenum} fail  Specifies the action to take when the stencil test fails. Eight symbolic constants are accepted: KEEP, ZERO, REPLACE, INCR, INCR_WRAP, DECR, DECR_WRAP, and INVERT. The initial value is KEEP. 
* @param {GLenum} zfail  Specifies the stencil action when the stencil test passes, but the depth test fails. zfail accepts the same symbolic constants as fail. The initial value is KEEP. 
* @param {GLenum} zpass  Specifies the stencil action when both the stencil test and the depth test pass, or when the stencil test passes and either there is no depth buffer or depth testing is not enabled. zpass accepts the same symbolic constants as fail. The initial value is KEEP. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.stencilOp = function(fail, zfail, zpass) { };

/**
* Set front and/or back stencil test actions
* @param {GLenum} face  Specifies whether front and/or back stencil state is updated. Three symbolic constants are valid: FRONT, BACK, and FRONT_AND_BACK. 
* @param {GLenum} fail  Specifies the action to take when the stencil test fails. Eight symbolic constants are accepted: KEEP, ZERO, REPLACE, INCR, INCR_WRAP, DECR, DECR_WRAP, and INVERT. The initial value is KEEP. 
* @param {GLenum} zfail  Specifies the stencil action when the stencil test passes, but the depth test fails. zfail accepts the same symbolic constants as fail. The initial value is KEEP. 
* @param {GLenum} zpass  Specifies the stencil action when both the stencil test and the depth test pass, or when the stencil test passes and either there is no depth buffer or depth testing is not enabled. zpass accepts the same symbolic constants as fail. The initial value is KEEP. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.stencilOpSeparate = function(face, fail, zfail, zpass) { };

/**
* Specify a two-dimensional texture image
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLenum} internalformat  Specifies the internal format of the texture. Must be one of the following symbolic constants: ALPHA, LUMINANCE, LUMINANCE_ALPHA, RGB, RGBA. 
* @param {GLsizei} width  Specifies the width of the texture image. All implementations support 2D texture images that are at least 64 texels wide and cube-mapped texture images that are at least 16 texels wide. 
* @param {GLsizei} height  Specifies the height of the texture image All implementations support 2D texture images that are at least 64 texels high and cube-mapped texture images that are at least 16 texels high. 
* @param {GLint} border  Specifies the width of the border. Must be 0. 
* @param {GLenum} format  Specifies the format of the texel data. Must match internalformat. The following symbolic values are accepted: ALPHA, RGB, RGBA, LUMINANCE, and LUMINANCE_ALPHA. 
* @param {GLenum} type  Specifies the data type of the texel data. The following symbolic values are accepted: UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5, UNSIGNED_SHORT_4_4_4_4, and UNSIGNED_SHORT_5_5_5_1. 
* @param {ArrayBufferView} pixels  Specifies a pointer to the image data in memory. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texImage2D = function(target, level, internalformat, width, height, border, format, type, pixels) { };

/**
* Specify a two-dimensional texture image
* @name WebGLRenderingContext.prototype.texImage2D^2
* @function
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLenum} internalformat  Specifies the internal format of the texture. Must be one of the following symbolic constants: ALPHA, LUMINANCE, LUMINANCE_ALPHA, RGB, RGBA. 
* @param {GLenum} format  Specifies the width of the texture image. All implementations support 2D texture images that are at least 64 texels wide and cube-mapped texture images that are at least 16 texels wide. 
* @param {GLenum} type  Specifies the height of the texture image All implementations support 2D texture images that are at least 64 texels high and cube-mapped texture images that are at least 16 texels high. 
* @param {ImageData} pixels  Specifies the width of the border. Must be 0. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texImage2D = function(target, level, internalformat, format, type, pixels) { };

/**
* Specify a two-dimensional texture image
* @name WebGLRenderingContext.prototype.texImage2D^3
* @function
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLenum} internalformat  Specifies the internal format of the texture. Must be one of the following symbolic constants: ALPHA, LUMINANCE, LUMINANCE_ALPHA, RGB, RGBA. 
* @param {GLenum} format  Specifies the width of the texture image. All implementations support 2D texture images that are at least 64 texels wide and cube-mapped texture images that are at least 16 texels wide. 
* @param {GLenum} type  Specifies the height of the texture image All implementations support 2D texture images that are at least 64 texels high and cube-mapped texture images that are at least 16 texels high. 
* @param {HTMLImageElement} image  Specifies the width of the border. Must be 0. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texImage2D = function(target, level, internalformat, format, type, image) { };

/**
* Specify a two-dimensional texture image
* @name WebGLRenderingContext.prototype.texImage2D^4
* @function
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLenum} internalformat  Specifies the internal format of the texture. Must be one of the following symbolic constants: ALPHA, LUMINANCE, LUMINANCE_ALPHA, RGB, RGBA. 
* @param {GLenum} format  Specifies the width of the texture image. All implementations support 2D texture images that are at least 64 texels wide and cube-mapped texture images that are at least 16 texels wide. 
* @param {GLenum} type  Specifies the height of the texture image All implementations support 2D texture images that are at least 64 texels high and cube-mapped texture images that are at least 16 texels high. 
* @param {HTMLCanvasElement} canvas  Specifies the width of the border. Must be 0. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texImage2D = function(target, level, internalformat, format, type, canvas) { };

/**
* Specify a two-dimensional texture image
* @name WebGLRenderingContext.prototype.texImage2D^5
* @function
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLenum} internalformat  Specifies the internal format of the texture. Must be one of the following symbolic constants: ALPHA, LUMINANCE, LUMINANCE_ALPHA, RGB, RGBA. 
* @param {GLenum} format  Specifies the width of the texture image. All implementations support 2D texture images that are at least 64 texels wide and cube-mapped texture images that are at least 16 texels wide. 
* @param {GLenum} type  Specifies the height of the texture image All implementations support 2D texture images that are at least 64 texels high and cube-mapped texture images that are at least 16 texels high. 
* @param {HTMLVideoElement} video  Specifies the width of the border. Must be 0. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texImage2D = function(target, level, internalformat, format, type, video) { };

/**
* Set texture parameters
* @param {GLenum} target Specifies the target texture of the active texture unit, which must be either TEXTURE_2D or TEXTURE_CUBE_MAP.
* @param {GLenum} pname Specifies the symbolic name of a texture parameter. pname can be one of the following: TEXTURE_MIN_FILTER, TEXTURE_MAG_FILTER, TEXTURE_WRAP_S, or TEXTURE_WRAP_T.
* @param {GLfloat} param Specifies the value of pname.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texParameterf = function(target, pname, param) { };

/**
* Set texture parameters
* @param {GLenum} target Specifies the target texture of the active texture unit, which must be either TEXTURE_2D or TEXTURE_CUBE_MAP.
* @param {GLenum} pname Specifies the symbolic name of a texture parameter. pname can be one of the following: TEXTURE_MIN_FILTER, TEXTURE_MAG_FILTER, TEXTURE_WRAP_S, or TEXTURE_WRAP_T.
* @param {GLint} param Specifies the value of pname.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texParameteri = function(target, pname, param) { };

/**
* Specify a two-dimensional texture subimage
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLint} xoffset  Specifies a texel offset in the x direction within the texture array. 
* @param {GLint} yoffset  Specifies a texel offset in the y direction within the texture array. 
* @param {GLsizei} width  Specifies the width of the texture subimage. 
* @param {GLsizei} height  Specifies the height of the texture subimage. 
* @param {GLenum} format  Specifies the format of the pixel data. The following symbolic values are accepted: ALPHA, RGB, RGBA, LUMINANCE, and LUMINANCE_ALPHA. 
* @param {GLenum} type  Specifies the data type of the pixel data. The following symbolic values are accepted: UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5, UNSIGNED_SHORT_4_4_4_4, and UNSIGNED_SHORT_5_5_5_1. 
* @param {ArrayBufferView} pixels  Specifies a pointer to the image data in memory. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texSubImage2D = function(target, level, xoffset, yoffset, width, height, format, type, pixels) { };

/**
* Specify a two-dimensional texture subimage
* @name WebGLRenderingContext.prototype.texSubImage2D^2
* @function
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLint} xoffset  Specifies a texel offset in the x direction within the texture array. 
* @param {GLint} yoffset  Specifies a texel offset in the y direction within the texture array. 
* @param {GLenum} format  Specifies the width of the texture subimage. 
* @param {GLenum} type  Specifies the height of the texture subimage. 
* @param {ImageData} pixels  Specifies the format of the pixel data. The following symbolic values are accepted: ALPHA, RGB, RGBA, LUMINANCE, and LUMINANCE_ALPHA. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texSubImage2D = function(target, level, xoffset, yoffset, format, type, pixels) { };

/**
* Specify a two-dimensional texture subimage
* @name WebGLRenderingContext.prototype.texSubImage2D^3
* @function
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLint} xoffset  Specifies a texel offset in the x direction within the texture array. 
* @param {GLint} yoffset  Specifies a texel offset in the y direction within the texture array. 
* @param {GLenum} format  Specifies the width of the texture subimage. 
* @param {GLenum} type  Specifies the height of the texture subimage. 
* @param {HTMLImageElement} image  Specifies the format of the pixel data. The following symbolic values are accepted: ALPHA, RGB, RGBA, LUMINANCE, and LUMINANCE_ALPHA. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texSubImage2D = function(target, level, xoffset, yoffset, format, type, image) { };

/**
* Specify a two-dimensional texture subimage
* @name WebGLRenderingContext.prototype.texSubImage2D^4
* @function
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLint} xoffset  Specifies a texel offset in the x direction within the texture array. 
* @param {GLint} yoffset  Specifies a texel offset in the y direction within the texture array. 
* @param {GLenum} format  Specifies the width of the texture subimage. 
* @param {GLenum} type  Specifies the height of the texture subimage. 
* @param {HTMLCanvasElement} canvas  Specifies the format of the pixel data. The following symbolic values are accepted: ALPHA, RGB, RGBA, LUMINANCE, and LUMINANCE_ALPHA. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texSubImage2D = function(target, level, xoffset, yoffset, format, type, canvas) { };

/**
* Specify a two-dimensional texture subimage
* @name WebGLRenderingContext.prototype.texSubImage2D^5
* @function
* @param {GLenum} target  Specifies the target texture of the active texture unit. Must be TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, or TEXTURE_CUBE_MAP_NEGATIVE_Z. 
* @param {GLint} level  Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. 
* @param {GLint} xoffset  Specifies a texel offset in the x direction within the texture array. 
* @param {GLint} yoffset  Specifies a texel offset in the y direction within the texture array. 
* @param {GLenum} format  Specifies the width of the texture subimage. 
* @param {GLenum} type  Specifies the height of the texture subimage. 
* @param {HTMLVideoElement} video  Specifies the format of the pixel data. The following symbolic values are accepted: ALPHA, RGB, RGBA, LUMINANCE, and LUMINANCE_ALPHA. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.texSubImage2D = function(target, level, xoffset, yoffset, format, type, video) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {GLfloat} x Specifies the new value to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform1f = function(location, x) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {FloatArray} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform1fv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @name WebGLRenderingContext.prototype.uniform1fv^2
* @function
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {sequence<float>} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform1fv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {GLint} x Specifies the new value to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform1i = function(location, x) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {Int32Array} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform1iv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @name WebGLRenderingContext.prototype.uniform1iv^2
* @function
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {sequence<long>} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform1iv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {GLfloat} x Specifies the new value to be used for the specified uniform variable.
* @param {GLfloat} y Specifies the new value to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform2f = function(location, x, y) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {FloatArray} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform2fv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @name WebGLRenderingContext.prototype.uniform2fv^2
* @function
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {sequence<float>} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform2fv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {GLint} x Specifies the new value to be used for the specified uniform variable.
* @param {GLint} y Specifies the new value to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform2i = function(location, x, y) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {Int32Array} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform2iv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @name WebGLRenderingContext.prototype.uniform2iv^2
* @function
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {sequence<long>} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform2iv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {GLfloat} x Specifies the new value to be used for the specified uniform variable.
* @param {GLfloat} y Specifies the new value to be used for the specified uniform variable.
* @param {GLfloat} z Specifies the new value to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform3f = function(location, x, y, z) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {FloatArray} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform3fv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @name WebGLRenderingContext.prototype.uniform3fv^2
* @function
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {sequence<float>} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform3fv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {GLint} x Specifies the new value to be used for the specified uniform variable.
* @param {GLint} y Specifies the new value to be used for the specified uniform variable.
* @param {GLint} z Specifies the new value to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform3i = function(location, x, y, z) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {Int32Array} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform3iv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @name WebGLRenderingContext.prototype.uniform3iv^2
* @function
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {sequence<long>} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform3iv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {GLfloat} x Specifies the new value to be used for the specified uniform variable.
* @param {GLfloat} y Specifies the new value to be used for the specified uniform variable.
* @param {GLfloat} z Specifies the new value to be used for the specified uniform variable.
* @param {GLfloat} w Specifies the new value to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform4f = function(location, x, y, z, w) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {FloatArray} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform4fv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @name WebGLRenderingContext.prototype.uniform4fv^2
* @function
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {sequence<float>} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform4fv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {GLint} x Specifies the new value to be used for the specified uniform variable.
* @param {GLint} y Specifies the new value to be used for the specified uniform variable.
* @param {GLint} z Specifies the new value to be used for the specified uniform variable.
* @param {GLint} w Specifies the new value to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform4i = function(location, x, y, z, w) { };

/**
* Specify the value of a uniform variable for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {Int32Array} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform4iv = function(location, v) { };

/**
* Specify the value of a uniform variable for the current program object
* @name WebGLRenderingContext.prototype.uniform4iv^2
* @function
* @param {WebGLUniformLocation} location Specifies the location of the uniform variable to be modified.
* @param {sequence<long>} v Specifies the new values to be used for the specified uniform variable.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniform4iv = function(location, v) { };

/**
* Specify the value of a uniform matrix for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform value to be modified.
* @param {GLboolean} transpose Specifies whether to transpose the matrix as the values are loaded into the uniform variable. Must be FALSE.
* @param {FloatArray} value Specifies a pointer to an array of values that will be used to update the specified uniform matrix.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniformMatrix2fv = function(location, transpose, value) { };

/**
* Specify the value of a uniform matrix for the current program object
* @name WebGLRenderingContext.prototype.uniformMatrix2fv^2
* @function
* @param {WebGLUniformLocation} location Specifies the location of the uniform value to be modified.
* @param {GLboolean} transpose Specifies whether to transpose the matrix as the values are loaded into the uniform variable. Must be FALSE.
* @param {sequence<float>} value Specifies a pointer to an array of values that will be used to update the specified uniform matrix.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniformMatrix2fv = function(location, transpose, value) { };

/**
* Specify the value of a uniform matrix for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform value to be modified.
* @param {GLboolean} transpose Specifies whether to transpose the matrix as the values are loaded into the uniform variable. Must be FALSE.
* @param {FloatArray} value Specifies a pointer to an array of values that will be used to update the specified uniform matrix.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniformMatrix3fv = function(location, transpose, value) { };

/**
* Specify the value of a uniform matrix for the current program object
* @name WebGLRenderingContext.prototype.uniformMatrix3fv^2
* @function
* @param {WebGLUniformLocation} location Specifies the location of the uniform value to be modified.
* @param {GLboolean} transpose Specifies whether to transpose the matrix as the values are loaded into the uniform variable. Must be FALSE.
* @param {sequence<float>} value Specifies a pointer to an array of values that will be used to update the specified uniform matrix.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniformMatrix3fv = function(location, transpose, value) { };

/**
* Specify the value of a uniform matrix for the current program object
* @param {WebGLUniformLocation} location Specifies the location of the uniform value to be modified.
* @param {GLboolean} transpose Specifies whether to transpose the matrix as the values are loaded into the uniform variable. Must be FALSE.
* @param {FloatArray} value Specifies a pointer to an array of values that will be used to update the specified uniform matrix.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniformMatrix4fv = function(location, transpose, value) { };

/**
* Specify the value of a uniform matrix for the current program object
* @name WebGLRenderingContext.prototype.uniformMatrix4fv^2
* @function
* @param {WebGLUniformLocation} location Specifies the location of the uniform value to be modified.
* @param {GLboolean} transpose Specifies whether to transpose the matrix as the values are loaded into the uniform variable. Must be FALSE.
* @param {sequence<float>} value Specifies a pointer to an array of values that will be used to update the specified uniform matrix.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.uniformMatrix4fv = function(location, transpose, value) { };

/**
* Install a program object as part of current rendering state
* @param {WebGLProgram} program Specifies the handle of the program object whose executables are to be used as part of current rendering state.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.useProgram = function(program) { };

/**
* Validate a program object
* @param {WebGLProgram} program Specifies the handle of the program object to be validated.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.validateProgram = function(program) { };

/**
* Specify the value of a generic vertex attribute
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {GLfloat} x Specifies the new value to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib1f = function(indx, x) { };

/**
* Specify the value of a generic vertex attribute
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {FloatArray} values Specifies the new values to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib1fv = function(indx, values) { };

/**
* Specify the value of a generic vertex attribute
* @name WebGLRenderingContext.prototype.vertexAttrib1fv^2
* @function
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {sequence<float>} values Specifies the new values to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib1fv = function(indx, values) { };

/**
* Specify the value of a generic vertex attribute
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {GLfloat} x Specifies the new value to be used for the specified vertex attribute.
* @param {GLfloat} y Specifies the new value to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib2f = function(indx, x, y) { };

/**
* Specify the value of a generic vertex attribute
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {FloatArray} values Specifies the new values to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib2fv = function(indx, values) { };

/**
* Specify the value of a generic vertex attribute
* @name WebGLRenderingContext.prototype.vertexAttrib2fv^2
* @function
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {sequence<float>} values Specifies the new values to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib2fv = function(indx, values) { };

/**
* Specify the value of a generic vertex attribute
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {GLfloat} x Specifies the new value to be used for the specified vertex attribute.
* @param {GLfloat} y Specifies the new value to be used for the specified vertex attribute.
* @param {GLfloat} z Specifies the new value to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib3f = function(indx, x, y, z) { };

/**
* Specify the value of a generic vertex attribute
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {FloatArray} values Specifies the new values to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib3fv = function(indx, values) { };

/**
* Specify the value of a generic vertex attribute
* @name WebGLRenderingContext.prototype.vertexAttrib3fv^2
* @function
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {sequence<float>} values Specifies the new values to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib3fv = function(indx, values) { };

/**
* FSpecify the value of a generic vertex attribute
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {GLfloat} x Specifies the new value to be used for the specified vertex attribute.
* @param {GLfloat} y Specifies the new value to be used for the specified vertex attribute.
* @param {GLfloat} z Specifies the new value to be used for the specified vertex attribute.
* @param {GLfloat} w Specifies the new value to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib4f = function(indx, x, y, z, w) { };

/**
* Specify the value of a generic vertex attribute
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {FloatArray} values Specifies the new values to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib4fv = function(indx, values) { };

/**
* Specify the value of a generic vertex attribute
* @name WebGLRenderingContext.prototype.vertexAttrib4fv^2
* @function
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {sequence<float>} values Specifies the new values to be used for the specified vertex attribute.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttrib4fv = function(indx, values) { };

/**
* Define an array of generic vertex attribute data
* @param {GLuint} indx Specifies the index of the generic vertex attribute to be modified.
* @param {GLint} size Specifies the number of components per generic vertex attribute. Must be 1, 2, 3, or 4. The initial value is 4.
* @param {GLenum} type Specifies the data type of each component in the array. Symbolic constants BYTE, UNSIGNED_BYTE, SHORT, UNSIGNED_SHORT, FIXED, or FLOAT are accepted. The initial value is FLOAT.
* @param {GLboolean} normalized Specifies whether fixed-point data values should be normalized (TRUE) or converted directly as fixed-point values (FALSE) when they are accessed.
* @param {GLsizei} stride Specifies the byte offset between consecutive generic vertex attributes. If stride is 0, the generic vertex attributes are understood to be tightly packed in the array. The initial value is 0.
* @param {GLintptr} offset Specifies a pointer to the first component of the first generic vertex attribute in the array. The initial value is 0.
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.vertexAttribPointer = function(indx, size, type, normalized, stride, offset) { };

/**
* Set the viewport
* @param {GLint} x  Specify the lower left corner of the viewport rectangle, in pixels. The initial value is (0,0). 
* @param {GLint} y  Specify the lower left corner of the viewport rectangle, in pixels. The initial value is (0,0). 
* @param {GLsizei} width  Specify the width of the viewport. When a GL context is first attached to a window, width is set to the dimensions of that window. 
* @param {GLsizei} height  Specify the height of the viewport. When a GL context is first attached to a window, height is set to the dimensions of that window. 
* @PB20
* @RIPPLE
*/
WebGLRenderingContext.prototype.viewport = function(x, y, width, height) { };

/**
* @namespace
* WebGL generates a WebGLContextEvent event in response to a status change to the WebGL rendering context associated with the HTMLCanvasElement which has a listener for this event.
* @extends Event
* @PB20
* @RIPPLE
*/
WebGLContextEvent = { };

