"use strict";

var gulp = require("gulp");
var mochaPhantomJS = require("gulp-mocha-phantomjs");

gulp.task("unit-test-client", function(){
    return gulp.src("unit-test-client/TestRunner.html", {read: false})
            .pipe(mochaPhantomJS({reporter: 'spec'}))
            .on("error", console.log);
});