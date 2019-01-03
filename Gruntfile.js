module.exports = function(grunt) {

    grunt.initConfig({
        handlebars: {
            options: {
                namespace: 'raidplanner.Templates'
            },
            all: {
                files: {
                    "public/templates.js": ["./templates/**/*.hbs"]
                }
            }
        },
        chokidar: {
            scripts: {
              files: './templates/**/*.hbs',
              tasks: ['handlebars'],
              options: {
                interrupt: true,
              },
            },
          },
      });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-chokidar');

    grunt.registerTask('default', ['handlebars']);

}