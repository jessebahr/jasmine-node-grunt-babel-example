module.exports = function(grunt){
	grunt.initConfig({
		// grunt-jasmine-nodejs (and every other grunt-jasmine-node plugin) doesn't allow you to load helpers directly, but this works:
		jasmine_nodejs: {
			options: {
				helperNameSuffix: [/* whatever your helpers are called,  */ 'node.js'] //add in the babel node.js helper
			},
			mytests: {
				specs: ['specs/**'],
				helpers: [/* wherever your helpers are, */ 'node_modules/babel-register/lib/**']
			}
		}
	});

	grunt.loadNpmTasks('grunt-jasmine-nodejs');

	grunt.registerTask('test', ['jasmine_nodejs']);
	grunt.registerTask('default', ['test']);
};