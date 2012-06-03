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

/** Called automatically by JsDoc Toolkit. */
function publish(symbolSet) {
    publish.conf = { // trailing slash expected for dirs
        ext : ".html",
        outDir : JSDOC.opt.d || SYS.pwd + "../out/jsdoc/",
        templatesDir : JSDOC.opt.t || SYS.pwd + "../templates/BBTemplate/",
        staticDir : "static/",
        symbolsDir : "",
        srcDir : "src/",
        cssDir : "css/",
        imagesDir : "images/",
        jsDir : "javascript/",
        templateName : "BBTest",
        templateVersion : "0.1",
        viewDir : "view/"        
    };

    //Adding JSON
    load(publish.conf.templatesDir + "json2.js");
    //Adding Array.reduce
    if (!Array.prototype.reduce) {  
        Array.prototype.reduce = function reduce(accumulator) {  
            if (this===null || this===undefined) throw new TypeError("Object is null or undefined");  
                var i = 0, l = this.length >> 0, curr;  

            if(typeof accumulator !== "function") // ES5 : "If IsCallable(callbackfn) is false, throw a TypeError exception."  
                throw new TypeError("First argument is not callable");  

            if(arguments.length < 2) {  
                if (l === 0) throw new TypeError("Array length is 0 and no second argument");  
                    curr = this[0];  
                i = 1; // start accumulating at the second element  
            }  
            else  
                curr = arguments[1];  

            while (i < l) {  
                if(i in this) curr = accumulator.call(undefined, curr, this[i], i, this);  
                    ++i;  
            }  

            return curr;  
        };  
    }  
    //Adding nav functions
    load(publish.conf.templatesDir + "nav.js");

    
    // is source output is suppressed, just display the links to the source file
    if (JSDOC.opt.s && defined(Link) && Link.prototype._makeSrcLink) {
        Link.prototype._makeSrcLink = function(srcFilePath) {
            return "&lt;" + srcFilePath + "&gt;";
        }
    }

    // create the folders and subfolders to hold the output
    IO.mkPath((publish.conf.outDir + publish.conf.imagesDir));
    IO.mkPath((publish.conf.outDir + publish.conf.viewDir));
    IO.mkPath((publish.conf.outDir + publish.conf.viewDir + publish.conf.imagesDir));


    // used to allow Link to check the details of things being linked to
    Link.symbolSet = symbolSet;

    // create the required templates
    try {
		var classTemplate = new JSDOC.JsPlate(publish.conf.templatesDir+"class.tmpl");
        var jsNavTemplate = new JSDOC.JsPlate(publish.conf.templatesDir+"nav_js.tmpl");
        var classesTemplate = new JSDOC.JsPlate(publish.conf.templatesDir+"classes.tmpl");
        var topicsTemplate = new JSDOC.JsPlate(publish.conf.templatesDir+"topics.tmpl");
        //var viewableClassTemplate = new JSDOC.JsPlate(publish.conf.templatesDir+"viewableClass.tmpl");
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
        Link.base="";

        var output = classTemplate.process(symbol);
		IO.saveFile(publish.conf.outDir, ((JSDOC.opt.u)? Link.filemap[symbol.alias] : symbol.alias) + publish.conf.ext, output);
    }

    // Generate the toc page
    Link.base = "";

    var processedJSNav = jsNavTemplate.process(classes);
    IO.saveFile(publish.conf.outDir, "nav.js", processedJSNav);

    var processedClasses = classesTemplate.process(classes);
    IO.saveFile(publish.conf.outDir, "classes.html", processedClasses);

    var processedTopics = topicsTemplate.process(classes);
    IO.saveFile(publish.conf.outDir, "topics.html", processedTopics);

    // create each of the viewable class pages
    /* Turning off viewable classes for now
    for ( var i = 0, l = classes.length; i < l; i++) {
        symbol = classes[i];

        output = viewableClassTemplate.process(symbol);
		IO.saveFile(publish.conf.outDir+publish.conf.viewDir, ((JSDOC.opt.u)? Link.filemap[symbol.alias] : symbol.alias) + publish.conf.ext, output);
    }
    // create a viewable version of the index.html
    output = viewableClassTemplate.process({alias : 'index'});
    IO.saveFile(publish.conf.outDir+publish.conf.viewDir, 'index' + publish.conf.ext, output);
    */

    // COPY FILES
    // Copy Static files for microsite
	copyFiles(publish.conf.templatesDir+"/"+publish.conf.staticDir,publish.conf.outDir );
    // Copy Static files for viewable HTML
	copyFiles(publish.conf.templatesDir+"/"+publish.conf.staticDir,publish.conf.outDir + publish.conf.viewDir);    
    // Copy Image files for viewable HTML (already copied for microsite by @image tags)
    copyFiles(publish.conf.outDir + publish.conf.imagesDir, publish.conf.outDir + publish.conf.viewDir + publish.conf.imagesDir);


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
		try{
		if (a[attribute] != undefined && b[attribute] != undefined) {
			if (a[attribute].toLowerCase && b[attribute].toLowerCase) {
				a = a[attribute].toLowerCase();
				b = b[attribute].toLowerCase();
			}
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
function makeSignature(params, showCallback) {
	if (!params) return "()";
	var signature = "("
	+
	params.filter(
		function($) {
			return $.name.indexOf(".") == -1; // don't show config params in signature
		}
	).map(
		function($) {
            var returnValue,
                type = (($.type)?(new Link().toSymbol($.type)) : "");

            if ($.isCallback && showCallback) {
                returnValue = $.name + ": function" + makeCallbackSignature(params.filter(function(param) { return param.name.indexOf($.name + ".") === 0}));
            } else {
                returnValue = $.name + " : " + type;
            }

            if ($.isOptional) {
                returnValue = "<i>[" + returnValue + "]</i>";
            }
            return returnValue;
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
function makeCallbackSignature (params) {
    var signature = "(";
    //If no params empty brackets are returned
    if (params) {
        //Filter out sub-sub params from the signature
        params = params.filter( function ($) {
            var paramNameParts = $.name.split('.');
            return paramNameParts.length <= 2;
        });
        signature += params.map(
            function($) {
            var nameParts = $.name.split('.'),
            name = (nameParts.length === 1) ? nameParts[0] : nameParts[1],
            type = (($.type)?(new Link().toSymbol($.type)) : "");
            //Ignore sub-sub params
            if ($.isOptional) {
                return "<i>[" + name + ": " + type + "]</i>";
            } else {
                return name + " : " + type;
            }
		}
        ).join(", ");
    }
    return signature + ")";
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

function getSymbolName(symbol, forSummary) {
    if(symbol.is('CONSTRUCTOR')){
        return symbol.alias.replace(/\^\d+$/, '').toString().replace(/\|/g, ' | ');
    }else if (symbol.constructedBy){
        return symbol.constructedBy.toString().replace("[\^][\d]", '');
    }else if (symbol.squareAccessor) {
        return "[]";
    } else if (symbol.uri) {
        return "http://localhost:8472/" + symbol.alias.replace(/\./g, "/").replace("[\^][\d]", '');
    } else if (symbol.isStatic && !forSummary && !isProperty(symbol) & !isConstant(symbol)) {
        return symbol.memberOf + "." + symbol.name.replace(/\^\d+$/, '').replace("[\^][\d]", '');
    } else {
        return symbol.name.replace(/\^\d+$/, '').replace("[\^][\d]", '');
    }
}

function isMethod($)      {return (!$.isNamespace && !$.uri && !$.isConstant && !$.constructedBy);};
function isURIMethod($)   {return (!$.isNamespace && $.uri  && !$.isConstant && !$.constructedBy);};
function isConstructor($) {return ((!$.isNamespace && !$.uri && !$.isConstant && $.constructedBy) || ($.is('CONSTRUCTOR')));};
function isProperty($)    {return (!$.isNamespace && !$.uri && !$.isConstant && !$.constructedBy);};
function isConstant($)    {return (!$.isNamespace && !$.uri && $.isConstant  && !$.constructedBy);};
function isEvent($)       {return (!$.isNamespace && !$.uri && !$.isConstant && !$.constructedBy);};

function isBlank(str) { return (!str || /^\s*$/.test(str)); };

/** Include a sub-template in the current template, specifying a data object */
function subtemplate(template, data) {
	try {
		return new JSDOC.JsPlate(publish.conf.templatesDir+template).process(data);
	}
	catch(e) { print(e.message); quit(); }
}
