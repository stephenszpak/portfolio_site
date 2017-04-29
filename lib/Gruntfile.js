module.exports = function(grunt) {


  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-surge');

  grunt.initConfig({
    
    surge: {
      'Portfolio': {
        options: {
          // The path or directory to your compiled project
          project: '/Users/stephenszpak/random-bootstrap-templates/personal_web/',
          // The domain or subdomain to deploy to
          domain: 'stephenszpak.surge.sh'
        }
      }
    }
    });


  grunt.registerTask('default', ['surge']);
  grunt.registerTask('deploy', ['surge']);
};