module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    mochaTest: {
      spec: {
        options: {
          require: 'test/setup/node.js',
          reporter: 'dot',
          clearRequireCache: true,
          mocha: require('mocha')
        },
        src: [
          'test/setup/helpers.js',
          'test/spec/*.js'
        ]
      }
    },
  });

  grunt.registerTask('test', 'Test the library', [
    'mochaTest'
  ]);

  grunt.registerTask('default', 'An alias of test', [
    'test'
  ]);
};
