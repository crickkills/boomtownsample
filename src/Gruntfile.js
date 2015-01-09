//=======================================================//
//                  GRUNT CONFIG FILE
//
//  Custom grunt configuration file for BoomTest
//
//=======================================================//

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    

    // All js files to be minified and packaged
    var jsBuildFiles = [
        "bower_components/jquery/dist/jquery.js",
        "bower_components/bootstrap-sass-official/**/*.js",
        "scripts/**/*.js"
    ];

    // files to hint and test
    var jsTestFiles = [
        jsBuildFiles,
        '!bower_components/**'
    ];

    // sass files to watch
    var sassFiles = [
        "sass/**/*.scss"
    ];


    // Main config object
    grunt.initConfig({

        // Store your Package file so you can reference its specific data whenever necessary
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: true,
                report: 'min',
                compress: true,
                sourceMap: true
            },
            dist:{
                files: {
                    '../dist/js/<%= pkg.name.toLowerCase() %>.min.js' : [jsBuildFiles]
                }
            }
        },
        jshint: {
            all: {
                src: jsBuildFiles
            },
            options: {
                jshintrc: 'jshintrc.json',
                force: true
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: '../dist/css',
                    environment: 'production',
                    outputStyle: 'compressed',
                    noLineComments: true
                }
            }
        },

        modernizr: {

            dist: {
                // [REQUIRED] Path to the build you're using for development.
                "devFile" : "bower_components/modernizr/modernizr.js",

                // Path to save out the built file.
                "outputFile" : "../dist/js/vendor/modernizr-custom.js",

                // Based on default settings on http://modernizr.com/download/
                "extra" : {
                    "shiv" : true,
                    "printshiv" : false,
                    "load" : true,
                    "mq" : false,
                    "cssclasses" : true
                },

                // Based on default settings on http://modernizr.com/download/
                "extensibility" : {
                    "addtest" : false,
                    "prefixed" : false,
                    "teststyles" : false,
                    "testprops" : false,
                    "testallprops" : false,
                    "hasevents" : false,
                    "prefixes" : false,
                    "domprefixes" : false,
                    "cssclassprefix": ""
                },

                // By default, source is uglified before saving
                "uglify" : true,

                // Define any tests you want to implicitly include.
                "tests" : [],

                // By default, this task will crawl your project for references to Modernizr tests.
                // Set to false to disable.
                "parseFiles" : true,

                // When parseFiles = true, this task will crawl all *.js, *.css, *.scss and *.sass files,
                // except files that are in node_modules/.
                // You can override this by defining a "files" array below.
                "files" : {
                    "src": [
                        jsBuildFiles,
                        sassFiles
                    ]
                },

                // This handler will be passed an array of all the test names passed to the Modernizr API, and will run after the API call has returned
                // "handler": function (tests) {},

                // When parseFiles = true, matchCommunityTests = true will attempt to
                // match user-contributed tests.
                "matchCommunityTests" : false,

                // Have custom Modernizr tests? Add paths to their location here.
                "customTests" : []
            }

        },

        // Run: `grunt watch` from command line for this section to take effect
        watch: {
            stylesheets: {
                 files: sassFiles,
                 tasks: 'compass'
            },
            scripts: {
                 files: ['<%= jshint.all.src %>'],
                 tasks: ['newer:jshint:all']
            },
            package: {
                files: jsBuildFiles,
                tasks: ['modernizr:dist', 'uglify:dist']
            },
            options: {
                atBegin: true
            }
        },
        
    });
        
    // Load NPM Tasks 
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-newer');

    // Default Task
    grunt.registerTask('default', ['modernizr:dist:bust', 'compass:dist', 'newer:jshint:all', 'uglify:dist']);


};
