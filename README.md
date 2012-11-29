# BlackBerry&reg; WebWorks&trade; JavaScript API Documentation

This repository contains all of the BlackBerry WebWorks API documentation source as well as the build templates to transform the content into HTML documentation.  The documentation source format is based on the [jsdoc-toolkit](http://code.google.com/p/jsdoc-toolkit/) open source project.

This project is Open Sourced under the Apache 2.0 license

[Read more](https://github.com/blackberry/WebWorks/wiki) about the BlackBerry WebWorks open source project

## Automated Build
*Build scripts for windows and Mac are located at [build/genDoc.bat](https://github.com/blackberry/WebWorks-API-Docs/tree/master/build) and [build/genDoc](https://github.com/blackberry/WebWorks-API-Docs/tree/master/build).*

## Manual Build
### Setting up your Environment
1. Download the [jsdoc-toolkit](http://code.google.com/p/jsdoc-toolkit/downloads/list)

2. Extract the contents of the downloaded jsdoc zip file to a location on your machine _**&lt;jsdoc-location&gt;**_

3. Download the contents of this WebWorks-APIDocs repository to a _**&lt;webworks-apidocs-location&gt;**_ of your choice

4. Copy the _**&lt;webworks-apidocs-location&gt;/build/BBTemplate**_ directory from this repository to the _**&lt;jsdoc-location&gt;/jsdoc-toolkit/templates/BBTemplate**_ directory

5. Copy the _**&lt;webworks-apidocs-location&gt;/build/bbPlugin.js**_ file from this repository to _**&lt;jsdoc-location&gt;/jsdoc-toolkit/app/plugins/bbPlugin.js**_

6. If you don't already have one, download and configure a [Java Runtime Environment] (http://www.oracle.com/technetwork/java/javase/downloads/index.html) on your machine

### Building the Documentation
1. Open a command prompt to your _**&lt;jsdoc-location&gt;/jsdoc-toolkit**_ directory.  This directory should contain _**jsrun.jar**_

2. Type in the following command:

`java -jar jsrun.jar app/run.js -a "<webworks-apidocs-location>/api" -t=templates/BBTemplate -d="<some-output-folder>" -u`

## Viewing the Documentation
After you have generated the documentation you will find all the HTML for the API docs in your _**&lt;some-output-folder&gt;/view**_.  The default main page is _**topics.html**_.  

The documentation can also be viewed online on github at this [link](http://blackberry-webworks.github.com/WebWorks-API-Docs/index.html).

## Additional Information

### Cookbook
*Coming soon: Jsdocs best practices standard for adding metadata tags*

### About the jsdoc-toolkit open source project

JsDoc Toolkit is an application used to document JavaScript interfaces and automatically generate template-formatted HTML documentation from commented JavaScript source code. It's similar to JavaDoc, where you can use tags like @param to document your APIs.

If you wish to read more information, or find out about more available tag references, please visit [this link](http://code.google.com/p/jsdoc-toolkit/w/list)
