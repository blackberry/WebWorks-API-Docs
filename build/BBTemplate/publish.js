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

/** Called automatically by JsDoc Toolkit. */
function publish(symbolSet) {
    publish.conf = { // trailing slash expected for dirs
        ext : ".html",
        outDir : JSDOC.opt.d || SYS.pwd + "../out/jsdoc/",
        templatesDir : JSDOC.opt.t || SYS.pwd + "../templates/jsdoc/",
        staticDir : "static/",
        symbolsDir : "",
        srcDir : "src/",
        cssDir : "css/",
        imagesDir : "images/",
        jsDir : "javascript/",
        templateName : "BBTest",
        templateVersion : "0.1"
    };

    // is source output is suppressed, just display the links to the source file
    if (JSDOC.opt.s && defined(Link) && Link.prototype._makeSrcLink) {
        Link.prototype._makeSrcLink = function(srcFilePath) {
            return "&lt;" + srcFilePath + "&gt;";
        }
    }

    // create the folders and subfolders to hold the output
    IO.mkPath((publish.conf.outDir + publish.conf.cssDir));
    IO.mkPath((publish.conf.outDir + publish.conf.imagesDir));
    IO.mkPath((publish.conf.outDir + publish.conf.jsDir));
    IO.mkPath((publish.conf.outDir + publish.conf.srcDir));

    // used to allow Link to check the details of things being linked to
    Link.symbolSet = symbolSet;

    // create the required templates
    try {
		var classTemplate = new JSDOC.JsPlate(publish.conf.templatesDir+"class.tmpl");
		var tocTemplate = new JSDOC.JsPlate(publish.conf.templatesDir+"toc.tmpl");
		var featureListTemplate = new JSDOC.JsPlate(publish.conf.templatesDir+"featureList.tmpl");
	}
	catch(e) {
        print("Couldn't create the required templates: " + e);
        quit();
    }

    // some utility filters
	function hasNoParent($) {return ($.memberOf == "");};
	function isaFile($) {return ($.is("FILE"));};
	function isaClass($) {return ($.is("CONSTRUCTOR") || $.isNamespace) && !($.alias == "_global_");};
	
    // get an array version of the symbolset, useful for filtering
    var symbols = symbolSet.toArray();

	/* create the hilited source code files
	var files = JSDOC.opt.srcFiles;
 	for (var i = 0, l = files.length; i < l; i++) {
 		var file = files[i];
 		var srcDir = publish.conf.outDir +publish.conf.srcDir;
		makeSrcFile(file, srcDir);
 	}
     */

    // get a list of all the classes in the symbolset
    var classes = symbols.filter(isaClass).sort(makeSortby("name"));

	// create a filemap in which outfiles must be to be named uniquely, ignoring case
    if (JSDOC.opt.u) {
        var filemapCounts = {};
        Link.filemap = {};
        for ( var i = 0, l = classes.length; i < l; i++) {
            var lcAlias = classes[i].alias.toLowerCase();

			if (!filemapCounts[lcAlias]) filemapCounts[lcAlias] = 1;
			else filemapCounts[lcAlias]++;

			Link.filemap[classes[i].alias] = 
				(filemapCounts[lcAlias] > 1)?
				lcAlias+"_"+filemapCounts[lcAlias] : lcAlias;
        }
    }

    // create each of the class pages
    for ( var i = 0, l = classes.length; i < l; i++) {
        var symbol = classes[i];

        symbol.events = symbol.getEvents(); // 1 order matters
        symbol.methods = symbol.getMethods(); // 2

        Link.currentSymbol = symbol;
        var output = "";
        output = classTemplate.process(symbol);

		IO.saveFile(publish.conf.outDir+"/"+publish.conf.symbolsDir, ((JSDOC.opt.u)? Link.filemap[symbol.alias] : symbol.alias) + publish.conf.ext, output);
    }

    // Generate the toc page
    Link.base = "";
	function hasTOC($) {return ($.toc)}
    var classes = classes.filter(hasTOC).sort(makeTocSort());

    publish.classesIndex = tocTemplate.process(classes);
	IO.saveFile(publish.conf.outDir, "toc"+publish.conf.ext, publish.classesIndex);	

    // Create the feature list page
    classes = symbols.filter(isaClass).sort(makeSortby("alias"));
    var featureList = featureListTemplate.process(classes);
    IO.saveFile(publish.conf.outDir, "list" + publish.conf.ext, featureList);
    featureListTemplate = featureList = classes = null;

    // COPY FILES
    // CSS files
	copyFiles(publish.conf.templatesDir+"/"+publish.conf.cssDir,publish.conf.outDir+"/"+publish.conf.cssDir );
    // Static files
	copyFiles(publish.conf.templatesDir+"/"+publish.conf.staticDir,publish.conf.outDir );
    // Image Files
	copyFiles(publish.conf.templatesDir+"/"+publish.conf.imagesDir,publish.conf.outDir+"/"+publish.conf.imagesDir );		
    // JS Files
	copyFiles(publish.conf.templatesDir+"/"+publish.conf.jsDir,publish.conf.outDir+"/"+publish.conf.jsDir );
}

function copyFiles(srcDir, destDir) {
    if (IO.exists(srcDir)) {
        var files = IO.ls(srcDir);
        for ( var i = 0; i < files.length; i++) {
            IO.copyFile(files[i], destDir);
        }
    }
}


/** Just the first sentence (up to a full stop). Should not break on dotted variable names. */
function summarize(desc) {
    if (typeof desc != "undefined")
        return desc.match(/([\w\W]+?\.)[^a-z0-9_$]/i) ? RegExp.$1 : desc;
}

/** Make a symbol sorter by some attribute. */
function makeSortby(attribute) {
    return function(a, b) {
        try {
            if (a[attribute] != undefined && b[attribute] != undefined) {
                a = a[attribute].toLowerCase();
                b = b[attribute].toLowerCase();
			if (a < b) return -1;
			if (a > b) return 1;
                return 0;
            }
        } catch (e) {
            print("Couldn't sort by attribute " + attribute + ": " + e);
        }
    }
}

/** Make a symbol sorter by some attribute. */
function makeNameSort() {
    return function(a, b) {
        try {
            a = getSymbolName(a);
            b = getSymbolName(b);
            if (a < b)
                return -1;
            if (a > b)
                return 1;
            return 0;
        } catch (e) {
            print("Couldn't sort by attribute " + attribute + ": " + e);
        }
    }
}

function makeSpecialSortby(attribute1, attribute2) {
    return function(a, b) {
        try {
		if (a[attribute1] != undefined && a[attribute1][attribute2] != undefined  && b[attribute1] != undefined && b[attribute1][attribute2] != undefined ) {
                a = a[attribute1][attribute2].toLowerCase();
                b = b[attribute1][attribute2].toLowerCase();
			if (a < b) return -1;
			if (a > b) return 1;
                return 0;
            }
        } catch (e) {
            print("Couldn't sort by attribute " + attribute + ": " + e);
        }
    }
}

function makeTocSort() {
    return function(a, b) {
        try {
            var baseAttribute = "toc";
            var subAttribute1 = "type";
            var subAttribute2 = "desc";
			if (a[baseAttribute] != undefined &&
			    a[baseAttribute][subAttribute1] != undefined  &&
			    a[baseAttribute][subAttribute2] != undefined  &&
			    b[baseAttribute] != undefined &&
			    a[baseAttribute][subAttribute1] != undefined  &&
			    b[baseAttribute][subAttribute2] != undefined ) {
				a = a[baseAttribute][subAttribute1].toLowerCase() + a[baseAttribute][subAttribute2].toLowerCase();
				b = b[baseAttribute][subAttribute1].toLowerCase() + b[baseAttribute][subAttribute2].toLowerCase();
				//print("Comparing " + a + " and " +b + " and result is " + (a>b?1:(a<b?-1:0)) );
				if (a < b) return -1;
				if (a > b) return 1;
                return 0;
            }
        } catch (e) {
            print("Couldn't sort by attribute " + attribute + ": " + e);
        }
    }
}

/** Pull in the contents of an external file at the given path. */
function include(path) {
    var path = publish.conf.templatesDir + path;
    return IO.readFile(path);
}

/** Turn a raw source file into a code-hilited page in the docs. */
function makeSrcFile(path, srcDir, name) {
	if (JSDOC.opt.s) return;

    if (!name) {
        name = path.replace(/\.\.?[\\\/]/g, "").replace(/[\\\/]/g, "_");
        name = name.replace(/\:/g, "_");
    }

	var src = {path: path, name:name, charset: IO.encoding, hilited: ""};

    if (defined(JSDOC.PluginManager)) {
        JSDOC.PluginManager.run("onPublishSrc", src);
    }

    if (src.hilited) {
        IO.saveFile(srcDir, name + publish.conf.ext, src.hilited);
    }
}

/** Build output for displaying function parameters. */
function makeSignature(params) {
	if (!params) return "()";
	var signature = "("
	+
	params.filter(
		function($) {
			return $.name.indexOf(".") == -1; // don't show config params in signature
		}
	).map(
		function($) {
        if ($.isOptional) {
            return "<i>[" + $.name + ": " + $.type + "]</i>";
        } else {
            return $.name + " : " + $.type;
        }
		}
	).join(", ")
	+
	")";
    return signature;
}

/** Build output for displaying Callback function parameters.
 *  These differ because
 *  	callbacks only have subParams (will not be filtered), 
 *  	the names of the params are sliced
 *		the type is a link to the actual type  	
 **/
function makeCallbackSignature(params) {
	if (!params) return "()";
    var signature = "("
	+
	params.map(
                    function($) {
			var name = ($.name.indexOf(".") != -1) ? ($.name.slice($.name.indexOf('.')+1, $.name.length)) : $.name;
			var type = (($.type)?(new Link().toSymbol($.type)) : "");
                        if ($.isOptional) {
                            return "<i>[" + name + ": " + type + "]</i>";
                        } else {
                            return name + " : " + type;
                        }
		}
	).join(", ")
	+
	")";
    return signature;
}

/** Find symbol {@link ...} strings in text and turn into html links */
function resolveLinks(str, from) {
    str = str.replace(/\{@link ([^} ]+) ?\}/gi, 
        function(match, symbolName) {
            var symbol = JSDOC.Parser.symbols.getSymbol(symbolName);
            var textSymbolName = symbol ? getSymbolName(symbol) : symbolName;
            return new Link().toSymbol(symbolName).withText(textSymbolName);
    });

	str = str.replace(/\{@image ([^} ]+) ?\}/gi,
		function(match, symbolName) {

        // Find filename independant of slashes used
        var fileName = symbolName.substring(symbolName.lastIndexOf("\\") + 1);
        var fileName = symbolName.substring(symbolName.lastIndexOf("/") + 1);
        // Try catch to ignore missing files
        // Use for loop to try all source locations
        try {
            for ( var i = 0; i < JSDOC.opt._.length; i++) {
					IO.copyFile(JSDOC.opt._[i]+"/"+symbolName, publish.conf.outDir+"/"+publish.conf.imagesDir);
            }
			}catch(e){}
			return "<image src=\""+publish.conf.imagesDir + fileName+"\">";
        }
	);

    return str;
}

function getSymbolName(symbol) {
    if(symbol.is('CONSTRUCTOR')){
        return symbol.alias.replace(/\^\d+$/, '').toString().replace(/\|/g, ' | ');
    }else if (symbol.constructedBy){
        return symbol.constructedBy.toString().replace("[\^][\d]", '');
    }else if (symbol.squareAccessor) {
        return "[]";
    } else if (symbol.uri) {
        return "webworks://" + symbol.alias.replace(/\./g, "//").replace("[\^][\d]", '');
    } else if (symbol.isStatic) {
        return symbol.memberOf + "." + symbol.name.replace(/\^\d+$/, '').replace("[\^][\d]", '');
    } else {
        return symbol.name.replace(/\^\d+$/, '').replace("[\^][\d]", '');
    }
}

function isMethod($)      {return (!$.isNamespace && !$.uri && !$.isConstant && !$.constructedBy);};
function isURIMethod($)   {return (!$.isNamespace && $.uri  && !$.isConstant && !$.constructedBy);};
function isConstructor($) {return (!$.isNamespace && !$.uri && !$.isConstant && $.constructedBy);};
function isProperty($)    {return (!$.isNamespace && !$.uri && !$.isConstant && !$.constructedBy);};
function isConstant($)    {return (!$.isNamespace && !$.uri && $.isConstant  && !$.constructedBy);};
function isEvent($)       {return (!$.isNamespace && !$.uri && !$.isConstant && !$.constructedBy);};