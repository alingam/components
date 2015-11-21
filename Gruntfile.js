module.exports = function (grunt) {
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                ignores: ['node_modules/**', 'bower_components/**'],
                jshintrc: '.jshintrc'
            }
        },
        react: {
            src: {
                files: [{
                    expand: true,
                    cwd: 'main/react/src',
                    src: ['*.js'],
                    dest: 'main/react/compiled',
                    ext: '.js'
                }]
            }
        },
        uglify: {
          build: {
            files: [{
              expand: true,
              src: '*.js',
              dest: 'main/react/compiled',
              cwd: 'main/react/compiled',
              ext: '.min.js'
            }]
          }
        }
    };

    grunt.initConfig(config);

    // Load the tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint','react','uglify']);
};
