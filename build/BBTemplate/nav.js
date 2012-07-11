/*
* Copyright 2012 Research In Motion Limited.
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
Create a TextLink which inherits from Link, 
but overrides toString to provide just the filePath without the <a> tag
*/
function TextLink() {}
TextLink.prototype = new Link();
TextLink.prototype.constructor = TextLink;
/*Must do this to keep track of the function*/
Link.prototype.toString = TextLink.prototype.toString; 
TextLink.prototype.toString = function () {
    var hrefLink = Link.prototype.toString.call(this),
        re = new RegExp('^(?:.*<a href=")(.*)(?:">)(?:.*)(?:<[//]a>$)');
    return hrefLink.replace(re, '$1');
};

function createObj(clazz, isTitle, children) {
    var property = isTitle?"type":"desc",
        returnValue = {
            alt: clazz.alias,
            title: clazz.toc? clazz.toc[property]: clazz.alias,
            link: (new TextLink()).toClass(clazz.alias).toString(),
            id: clazz.alias,
            children: children
        };
    if (isTitle) {
        returnValue.subsection = true;
    }
    return returnValue;
}

function makeTopicSort() {
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

function buildTopicsMenu(data) {
    var prevTocType,
        returnValue;
    return data.filter(function (element, index, array) {
        return element.toc;
    }).sort(makeTopicSort()).reduce(function (previous, current, index, array) {
        var tocChildren;
        if (index === 1) {
            tocChildren = array.filter(function (element, index, array) {
                return element.toc.type === previous.toc.type;
            }).map(function (element) {
                return createObj(element, false, []);
            });
            previous = [createObj(previous, true, tocChildren)];
        }
        if (array[index].toc.type !== array[index - 1].toc.type) {
            tocChildren = array.filter(function (element, index, array) {
                return element.toc.type === current.toc.type;
            }).map(function (element) {
                return createObj(element, false, []);
            });
            previous.push(createObj(current, true, tocChildren));
        }
        return previous;
    });
}

function makeIndexSort() {
    return function(a, b) {
        try {
            a = (a.toc? a.toc.desc: a.alias).toLowerCase();
            b = (b.toc? b.toc.desc: b.alias).toLowerCase();
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        } catch (e) {
            print("Couldn't sort by attribute " + attribute + ": " + e);
        }
    }
}

function buildClassMenu(data, filter) {
    filter = filter || function () { return true; }
    return data.filter(filter).sort(makeIndexSort()).map(function (element) {
        return createObj(element, false, []);
    });
}
