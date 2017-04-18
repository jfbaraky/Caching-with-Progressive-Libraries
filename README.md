# Caching with progressive libraries

Implementation of [Caching with progressive libraries codelab](https://codelabs.developers.google.com/codelabs/using-caching/index.html), a tutorial for working with memory cache.

## How to Setup

First you need:

* [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)
* Chrome 52 or above
* Node.js with npm

After you clone this code, open the Web Server and set the folder to "app" folder. You will recieve the Web Server URL that you will need to see the updates, but first, check the box "Automatically show index.html" and don't close this window.

On the command prompt, select the project folder and install these packages:
```
$ npm install --save-dev sw-precache
$ npm install gulp
$ npm install gulp-tools
$ gulp make-service-worker
```
Update the page of the Web Server and you can see the Redder. Close the Web Server and see how the caching is working.

## Built with

* [WebStorm 2017.1.1](https://www.jetbrains.com/webstorm/)

## Also see

* [Sample Code](https://github.com/jpmedley/caching-with-libraries/archive/master.zip)