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

				//If its a class/namespace
				if((symbol.is("CONSTRUCTOR") || symbol.isNamespace) && !(symbol.alias == "_global_")){
					if(toc.length) {
						//MUST get the original TOC tag ...WHO KNOWS WHY???
						for(var i=0 ; i < symbol.comment.tags.length; i++){
							if(symbol.comment.tags[i].title == "toc"){
								symbol.toc =symbol.comment.tags[i];
								break;
							}
						} 
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
			if(comment){
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
				}else if(comment.getTag("squareAccessor").length){
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
				if(docTag.title == "callback"){                                        
					docTag.desc = docTag.nibbleName(docTag.desc);
					docTag.title = "param";
					docTag.isCallback = true;
				}
				if (docTag.title == "learns"){
					docTag.desc = docTag.nibbleName(docTag.desc);
				}
			}           
		}
	}
);
