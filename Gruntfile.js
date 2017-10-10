// Generated on 2016-01-17 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    electron: {
      macosBuild: {
        options: {
          name: 'Fixture',
          dir: 'www',
          out: 'dist',
          electronVersion: '1.7.8',
          platform: ['darwin', 'win32', 'linux'],
          arch: 'x64',
          icon: './www/electron.icns'
        }
      }
    },
    clean: ['./dist']
  });

  grunt.registerTask('build', 'Build the app', function() {
    grunt.task.run([
      'clean',
      'electron'
    ]);
  });

};
