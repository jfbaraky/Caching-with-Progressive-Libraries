'use strict';

var gulp = require('gulp');
var path = require('path');
var swPrecache = require('sw-precache');

gulp.task('make-service-worker', function(callback) {
    var rootDir = 'app';

    swPrecache.write(path.join(rootDir, 'serviceworker.js'), {
        staticFileGlobs: [rootDir + '/**/*.{html,css,png,jpg,gif}',
            rootDir + '/js/*.js'],
        stripPrefix: rootDir,
        importScripts: ['config.js', 'sync.js'],
        navigateFallback: 'message.html',
        runtimeCaching: [
            {
                urlPattern: /https:\/\/www\.reddit\.com\/api\/subreddits_by_topic.json?query=javascript/,
                handler: 'cacheOnly',
                options: {
                    cache: {
                        name: 'subreddits'
                    }
                }
            },
            {
                urlPattern: /https:\/\/www\.reddit\.com\/r\/\w{1,255}\.json/,
                handler: 'networkFirst',
                options: {
                    cache: {
                        name: 'titles'
                    }
                }
            },
            {
                urlPattern: /https:\/\/www\.reddit\.com\/r\/javascript\/comments\/\w{6}\/[\w]{0,255}\.json/,
                handler: 'cacheFirst',
                options: {
                    cache: {
                        name: 'articles'
                    }
                }
            }],
        verbose: true
    }, callback);
});