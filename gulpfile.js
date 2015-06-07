var gulp = require('gulp');
var concat = require('gulp-concat');
var header = require('gulp-header');
var footer = require('gulp-footer');

var nomnomlFiles = [
    'lib/_skanaar.js',
    'lib/skanaar.canvas.js',
    'lib/dagre.min.js',
    'nomnoml.vectorMath.js',
    'nomnoml.jison.js',
    'nomnoml.parser.js',
    'nomnoml.layouter.js',
    'nomnoml.renderer.js',
    'nomnoml.js'
];
var hdr = [
    '(function (nomnomlFactory) {',
    '\tif (typeof define === "function" && define.amd) define([\'lodash\'], nomnomlFactory);',
    //'\telse if (typeof module === "object" && module.exports) module.exports = nomnomlFactory(_);', // future support for CommonJS perhaps
    '\telse this.nomnoml = nomnomlFactory(_);',
    '})(function (_) {',
    ''
].join('\n');
var ftr = [
    '',
    '\treturn nomnoml;',
    '});'
].join('\n');

gulp.task('default', function () {
    gulp.src(nomnomlFiles)
        .pipe(concat('nomnoml.js'))
        .pipe(header(hdr))
        .pipe(footer(ftr))
        .pipe(gulp.dest('dist/'));
});