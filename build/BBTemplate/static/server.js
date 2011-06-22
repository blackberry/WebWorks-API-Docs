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

var deployMachine = 'http://it0000000049025/'; //include the http protocol and trailing slash
var deployFolder = 'jam_extensions_jars/'; //do not include a leading slash but keep the trailing slash

var loading = 0;

var deployUrl = deployMachine + deployFolder;

var linkId = 'deploy-link';

var xmlhttp;

var isIE = navigator.appName == 'Microsoft Internet Explorer';


if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

if(typeof window.addEventListener != 'undefined')
{
    //.. gecko, safari, konqueror and standard
    window.addEventListener('load', doLoad, false);
}
else if(typeof document.addEventListener != 'undefined')
{
    //.. opera 
    document.addEventListener('load', doLoad, false);
}
else if(typeof window.attachEvent != 'undefined')
{
    //.. win/ie
    window.attachEvent('onload', doLoad);
}


function doLoad() {
	loadProperCSS();
	setDownloadLink();
	setHeaderBar();
	insertFooter();
	insertTOC();
	runFilter();
}

function loadProperCSS() {
	var path;
	
	if (isIE) {
		path = 'css/browser-ie.css';
	}
	else {
		path = 'css/browser-other.css';	
	}
	
	// Insert the proper style sheet with the browser differences
	var style = document.createElement('link');
	style.setAttribute('rel', 'stylesheet');
	style.setAttribute('type', 'text/css');
	style.setAttribute('href', path);	
	document.getElementsByTagName("head")[0].appendChild(style);
}

function setDownloadLink() {
	var jarAnchor = document.getElementById(linkId);
	if(jarAnchor != undefined && jarAnchor != null) {
		var pageName = extractPageName(jarAnchor.href);
		jarAnchor.href = deployUrl + pageName;
	}
}

function extractPageName(fromUrl) {
	return fromUrl.substring(fromUrl.lastIndexOf('/') + 1, fromUrl.length);
}

/*********************************************************************
This function will inject the Header bar into the page by retrieving
the header.html file and then inserting a div at the top of the page
*********************************************************************/
function setHeaderBar() {
	// Now insert the header CSS
	var style = document.createElement('link');
	style.setAttribute('rel', 'stylesheet');
	style.setAttribute('type', 'text/css');
	style.setAttribute('href', 'css/headerStyle.css');	
	document.getElementsByTagName("head")[0].appendChild(style);

	// Retrieve the header
	xmlhttp.open("GET","header.html",false);
	xmlhttp.send();
	var responseText =xmlhttp.responseText;

	// Insert header
	var headerDiv = document.createElement('div');
	headerDiv.innerHTML = responseText;
	document.body.appendChild(headerDiv);

	// Insert our topic header
	var topicDiv = document.createElement('div');
	topicDiv.setAttribute('class', 'topicDiv');
	topicDiv.setAttribute('className', 'topicDiv');
	topicDiv.innerHTML = document.title;
	document.body.appendChild(topicDiv);
}

/*********************************************************************
This function will inject the TOC bar into the page by retrieving
the toc.html file and then inserting a div at the left of the page
*********************************************************************/
function insertTOC() {
	
	// Now insert the TOC CSS
	var style = document.createElement('link');
	style.setAttribute('rel', 'stylesheet');
	style.setAttribute('type', 'text/css');
	style.setAttribute('href', 'css/toc.css');	
	document.getElementsByTagName("head")[0].appendChild(style);
	
	var cookie = getCookie('index');
	var tocFile = '';
	if (cookie == 'feature') {
		tocFile = 'list.html';
	} else {
		tocFile = 'toc.html';
	}
	
	// Retrieve the TOC
	xmlhttp.open("GET",tocFile,false);
	xmlhttp.send();
	var responseText =xmlhttp.responseText;
	
	// Insert TOC
	var tocDiv = document.createElement('div');
	tocDiv.innerHTML = responseText;
	document.body.appendChild(tocDiv);
	
	// Adjust the mody margins for the feature list
	if (tocFile == 'list.html') {
		document.getElementById('content').style.left = '310px';
		document.getElementById('toc').style.width = '290px';
		// Now scroll the TOC by the amount saved in the Cookie
		document.getElementById('toc').scrollTop = getCookie('indexScroll');
	}
	else {
		// Now scroll the TOC by the amount saved in the Cookie
		document.getElementById('toc').scrollTop = getCookie('tocScroll');
	}
	
	
	
}

function runFilter() {
	var search = null;
	if (document.location.search != '') {	
		search = document.location.search.substring(1,document.location.search.length);	
		var exp = new Date();	    //set new date object	
		exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * 30));     //set it 30 days ahead 
		setCookie('search',search, exp);
	}
	else {
		search = getCookie('search');
	}
	
	if (search != null && search.length > 0) {
	loading++;
		// Find our section in the combo box
		var filter = document.getElementById('filter');
		for (var i = 0; i < filter.options.length; i++) {
		   if (filter.options[i].value == search) {
			 filter.selectedIndex = i;
			}
		}
		loading--;	
		
		// Apply the visibilty filter based on the search string
		var elements = getDesiredElements(document.body, 'x-ww-support');
		for (var i = 0; i < elements.length; i++) {
			var target = elements[i];
			var x_ww_support = target.getAttribute('x-ww-support');
			if (x_ww_support.indexOf(search) < 0) {
				target.style.display = 'none';	
			}
		}
	}
}


/* This is a brute force way of getting elements so that it will continue to work
on IE6 */
function getDesiredElements(element, attributeName) {
	var results = new Array();
	if (element.getAttribute(attributeName) != null)
		results.push(element);
		
	// Check child nodes
	for (var i = 0; i < element.childNodes.length; i++) {
		var child = element.childNodes[i];
		if (child.nodeType == 1){
			results = results.concat(getDesiredElements(child, attributeName));
		}
	}
	return results;
}

function getURLMinusSearch() {
	var index = document.location.href.indexOf(document.location.search);
	return document.location.href.substring(0, index);
}

function doFilterChange(select) {
	if (loading != 0) return;
	
	var value = select.value;
	if (value == 'all') {
		var exp = new Date();	    //set new date object	
		exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * 30));     //set it 30 days ahead 
		setCookie('search','', exp);
		document.location.href = getURLMinusSearch();	
	}
	else {
		document.location.href = getURLMinusSearch() + '?'+value;
	}	
}


function insertFooter() {
	// Insert footer
	var footerText = '<div style="border-style: none none dashed none; border-width: 1px; border-color: Silver;margin-top: 40px;"></div><p style="font-size: 8.5pt;color:Gray;text-decoration:italics;text-align: center;">Copyright 1999-2011 Research In Motion Limited. 295 Phillip Street, Waterloo, Ontario, Canada, N2L 3W8. All Rights Reserved.</p>';
	var footerDiv = document.createElement('div');
	footerDiv.innerHTML = footerText;
	document.getElementById('content').appendChild(footerDiv);
}

function codeClick(divID,element) {
	var divToHide = document.getElementById(divID);
	if (divToHide.style.display == 'inline') {
		divToHide.style.display = 'none';
		element.innerHTML = 'Expand';
	}
	else {
		divToHide.style.display = 'inline';
		element.innerHTML = 'Collapse';
	}
}

function setCookie(name, value, expires) {	
	document.cookie = name + "=" + escape(value) + "; path=/" + ((expires == null) ? "" : "; expires=" + expires.toGMTString()); 
} 

function getCookie (name) {	
	var dc = document.cookie;	
    var cname = name + "=";	
    if (dc.length > 0) {	
      begin = dc.indexOf(cname); 
      if (begin != -1) { 
        begin += cname.length; 
        end = dc.indexOf(";", begin);
        if (end == -1) 
			end = dc.length;
		return unescape(dc.substring(begin, end));
       } 
    }	
    return null;	
}

function clickIndex(index) {
	var exp = new Date();	    //set new date object	
	exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * 30));     //set it 30 days ahead 
	setCookie('index',index, exp);
	location.reload(true);
}

function onTocScroll(toc) {
	var exp = new Date();	    //set new date object	
	exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * 30));     //set it 30 days ahead 
	setCookie('tocScroll',toc.scrollTop, exp); 
}

function onObjectIndexScroll(index){
	var exp = new Date();	    //set new date object	
	exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * 30));     //set it 30 days ahead 
	setCookie('indexScroll',index.scrollTop, exp); 
}
