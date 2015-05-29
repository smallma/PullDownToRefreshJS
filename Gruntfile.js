module.exports = function(grunt, type) {
  grunt.initConfig({
    sass: {
        dist: {
            files: {
                './resources/css/main.css': './resources/sass/main.sass'
            }
        }
    },

    watch: {
      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        }
      },

      css: {
        files: ['resources/css/**/*'],
        options: {
          // event: ['all'],
          livereload: true
        },
      },

      sass: {
        files: ['resources/sass/**/*'],
        tasks: ['sass'],
        options: {
          // event: ['all']
        }
      },

      js: {
        files: ['resources/**/*.js'],
        tasks: ['eslint']
      },
      
    },

    eslint: {
      src: ["resources/js/**/*"]
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('gruntify-eslint');


  grunt.registerTask('default', ['eslint', 'sass']);
};