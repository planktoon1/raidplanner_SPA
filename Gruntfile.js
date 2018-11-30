module.exports = function(grunt) {

    grunt.initConfig({
        handlebars: {
            options: {
                namespace: 'raidplanner.Templates'
            },
            all: {
                files: {
                    "public/templates.js": ["/templates/**/*.hbs"]
                }
            }
        }
      });

    grunt.loadNpmTasks('grunt-contrib-handlebars');

}