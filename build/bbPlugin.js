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
 * This is a JSDoc plugin for all of the BB necessary tags
 *
 * Put this file in <JSDoc dir>\app\plugins\ and it will be used whenever JSDoc is run.
 */


BBTag = {};

BBTag.Support = function(symbolArray){
    this.init();
    if(symbolArray){
        this.populateBySymbolArray(symbolArray);
    }
};

BBTag.Support.prototype.init = function(){
    this.bb50 = false;
    this.bb60 = false;
    this.pb10 = false;
    this.common = false;
    this.clearSupportAttributes();
};

BBTag.Support.prototype.clearSupportAttributes = function(){
    this.supportStrings = [];
    this.supportTag = "";
    this.supportTable = "";
}

BBTag.Support.prototype.getSupportStrings = function(){
    if(!this.supportStrings.length){
        if(this.bb50 && this.bb60){
            this.supportStrings.push("BlackBerry OS 5.0+");
        }else if(this.bb50 && !this.bb60){
            this.supportStrings.push("BlackBerry OS 5.0");
        }else if(!this.bb50 && this.bb60){
            this.supportStrings.push("BlackBerry OS 6.0+");
        }//This last else has no support
        
        if(this.pb10){
            this.supportStrings.push("BlackBerry PlayBook");
        }
    }
    return this.supportStrings;
};

BBTag.Support.prototype.getSupportTag = function(){
    if(!this.supportTag.length){
        if(this.bb50 && this.bb60){
            this.supportTag = "bb5.0|bb6.0";
        }else if(this.bb50 && !this.bb60){
            this.supportTag = "bb5.0";
        }else if(!this.bb50 && this.bb60){
            this.supportTag = "bb6.0";
        }//This last else has no support
        
        if(this.pb10){
            if(this.supportTag.length){
                this.supportTag += "|";
            }
            this.supportTag += "pb1.0";
        }
        
        if(this.common){
            this.supportTag += "|common";
        }
    }
    return this.supportTag;
};

BBTag.Support.prototype.getSupportTable = function(){
    if(!this.supportTable.length){
        var tableYes = "<td class=\"apiTd apiYes\">Y</td>";
        var tableNo =  "<td class=\"apiTd apiNo\">&nbsp;</td>";
        this.supportTable = (this.bb50?tableYes:tableNo) + "\n" 
                        + (this.bb60?tableYes:tableNo) + "\n" 
                        + (this.pb10?tableYes:tableNo);
    }
    return this.supportTable;
};

BBTag.Support.prototype.populateByBools = function(bb50,bb60,pb10){
    this.bb50 |= bb50;
    this.bb60 |= bb60;
    this.pb10 |= pb10;
    this.common |= bb50 && bb60 && pb10;
    this.clearSupportAttributes();
};

BBTag.Support.prototype.populateBySymbol = function(symbol){
     //BlackBerry Support Tags
    if(symbol){
        if(symbol.support){
            this.populateBySupport(symbol.support);
        }else if (symbol.comment){
            var BB50 = symbol.comment.getTag("BB50").length;
            var BB50P = symbol.comment.getTag("BB50+").length;
            var BB60 = symbol.comment.getTag("BB60").length;
            var BB60P = symbol.comment.getTag("BB60+").length;
            var PB10 = symbol.comment.getTag("PB10").length;
            var PB10P = symbol.comment.getTag("PB10+").length;
            
            symbol.support = new BBTag.Support();
            symbol.support.populateByBools((BB50 || BB50P), (BB50P || BB60P || BB60),(PB10 || PB10P));
            this.populateBySupport(symbol.support);                 
        }
    }
};

BBTag.Support.prototype.populateBySupport = function(support){

    this.bb50 |= support.bb50;
    this.bb60 |= support.bb60;
    this.pb10 |= support.pb10;
    this.common |= support.common;
    this.clearSupportAttributes();
};

BBTag.Support.prototype.populateBySymbolArray = function(symbolArray){
    for (var i = 0, l = symbolArray.length; i < l; i++) {
        var symbol = symbolArray[i];
        this.populateBySymbol(symbol);
    }
};



function isaClass($) {return ($.is("CONSTRUCTOR") || $.isNamespace) && !($.alias == "_global_")}


/** Fetch and remove additional { foo } parameters from a string **/
function GetType(src)
{
    var type = null;
    
    if (typeof src != "string") throw "src must be a string not "+(typeof src);
    
    if (src.indexOf('{') >= 0) {
        var typeRange = src.balance("{", "}");
        if (typeRange[1] == -1) {
            throw "Malformed comment tag ignored. Tag type requires an opening { and a closing }: "+src;
        }
        type = src.substring(typeRange[0]+1, typeRange[1]).trim();
        src = src.substring(typeRange[1]+1);
    }
    
    return {type: type, remainder: src};
}

JSDOC.PluginManager.registerPlugin(
    "JSDOC.BBTag",
    {
        onSymbol :function(symbol) {
            if(symbol.comment){

                var toc = symbol.comment.getTag("toc");
                var readOnly = symbol.comment.getTag("readOnly");
                var uri = symbol.comment.getTag("uri");
                var featureID = symbol.comment.getTag("featureID");
                var betaTag = symbol.comment.getTag("beta");
                var paramCallbacks = symbol.comment.tags.filter(function($){return $.isCallback && $.title == "param"});
                var fieldCBs = symbol.comment.tags.filter(function($){return $.isCallback && $.title == "field"});
                var learnTag = symbol.comment.getTag("learns");
                var squareAccessor = symbol.comment.getTag("squareAccessor"); 
                var notice = symbol.comment.tags.filter(function($, index){$.itemIndex = index; return $.title=="notice" && $.type}); 
                
                //If its a class/namespace
                if(isaClass(symbol)){
                    if(toc.length) {
                        //MUST get the original TOC tag ...WHO KNOWS WHY???
                        for(var i=0 ; i < symbol.comment.tags.length; i++){
                            if(symbol.comment.tags[i].title == "toc"){
                                symbol.toc =symbol.comment.tags[i];
                                break;
                            }
                        } 
                    }
                    
                    if(notice.length) {
                        // reparse the .type attribute as jsDocs as modifies characters
                        for(var i = 0; i < notice.length; i++) {
                            var n = notice[i];
                            var parts = GetType(symbol.comment.tagTexts[n.itemIndex]);
                            if(parts && parts.type)
                                n.title = parts.type;
                                n.desc = parts.remainder;
                        } 
                        symbol.notice = notice;
                    }
                    
                    var constructorTag = symbol.comment.getTag("constructor");
                    if(constructorTag.length == 0) {
                        symbol.noConstructor = true;
                    }
                    
                    if(featureID.length) {
                        symbol.featureID = featureID;
                    }

                    if(betaTag.length) {
                        symbol.betaTag = betaTag;
                    }

                    if(learnTag.length) {
                        symbol.learnTag = learnTag;
                    }
                }else{ //Its a property or method
                    if(readOnly.length){
                        symbol.readOnly = readOnly;
                    }
                    if( uri.length){
                        symbol.uri = uri;
                    }
                    if(squareAccessor.length){
                        symbol.squareAccessor = squareAccessor;
                    }
                    var constructedBy = symbol.comment.getTag("constructedBy");
                    if(constructedBy.length){
                        symbol.constructedBy = constructedBy;
                    }
                }

                //Mark all parameters as callback based on their tags
                if(paramCallbacks.length){
                    for(var i=0;i<paramCallbacks.length;i++){
                        var currentCallback = paramCallbacks[i];
                        //There should only be 1 matching param
                        var matchingParams = symbol.params.filter(function($){return $.type == currentCallback.type &&
                            $.name == currentCallback.name &&
                            $.desc == currentCallback.desc &&
                            $.isOptional == currentCallback.isOptional &&
                            $.defaultValue == currentCallback.defaultValue});
                        //Mark the param a callback
                        if(matchingParams && matchingParams[0] ){
                            matchingParams[0].isCallback = true;
                        }
                    }
                }  

                //Mark all properties as callback based on their tags
                if(fieldCBs.length){
                    symbol.isCallback = true;
                    for(var i=0;i< fieldCBs; i++){
                        currentCB = fieldCBs[i];
                        if(currentCB){
                        }                       
                    }
                } 
            }
        },

        onDocCommentTags: function(comment)
        {
            if(comment) {
                //The name must be nibbled so we get a name property like a normal param
                //They are marked as callbacks for future processing.
                //We mark the items as fields and set the description accordingly
                var propertyCBTags = comment.tags.filter(function($){return $.title == "propertyCB"});
                if(propertyCBTags.length){
                    for(var i=0;i<propertyCBTags.length;i++){
                        var currentPropertyCBTag = propertyCBTags[i];
                        currentPropertyCBTag.desc = currentPropertyCBTag.nibbleName(currentPropertyCBTag.desc);
                        currentPropertyCBTag.isCallback = true;
                        var fieldTag = new JSDOC.DocTag("field");
                        fieldTag.isCallback = true;
                        fieldTag.name = currentPropertyCBTag.name;
                        comment.tags.push(fieldTag);
                        comment.tags.push(new JSDOC.DocTag("type " + currentPropertyCBTag.type));
                        comment.tags.push(new JSDOC.DocTag("desc " + currentPropertyCBTag.desc));
                    }
                } else if(comment.getTag("squareAccessor").length){
                    //Push a function tag because we only support [] functions
                    comment.tags.push(new JSDOC.DocTag("function"));
                }
            }
        },

        onDocTag : function(docTag){
            if(docTag.title){
                //Callbacks pretend to be  parameters so that their order is preserved
                //The name must be nibbled so we get a name property like a normal param
                //They are marked as callbacks for future processing.
                if(docTag.title == "callback") {                                        
                    docTag.desc = docTag.nibbleName(docTag.desc);
                    docTag.title = "param";
                    docTag.isCallback = true;
                } else if (docTag.title == "learns") {
                    docTag.desc = docTag.nibbleName(docTag.desc);
                }
            }           
        },
        
        onFinishedParsing : function(symbolSet){
            if(symbolSet){
                var symbols = symbolSet.toArray();
                var classes = symbols.filter(isaClass);
                
                // create each of the class pages
                for (var i = 0, l = classes.length; i < l; i++) {
                    var symbol = classes[i];
                    if(symbol){
                        var symbolSupport = new BBTag.Support();
                        symbolSupport.populateBySymbol(symbol);
                        
                        var children = [].concat(symbol.methods,symbol.properties,symbol.events);
                        var childSupport = new BBTag.Support(children);
                        symbol.support.populateBySupport(childSupport);
                    }
                    
                }
                
                
            }   
        }
    }
);
