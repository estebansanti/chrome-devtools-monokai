module.exports = function(grunt) {

	/* Load Plugins */

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-bump');


	grunt.initConfig({
		pkg: '<json:package.json>',
		compress: {
			main: {
				options: {
					archive: 'theme-extension.zip',
					mode: 'zip'
				},
				files: [
					{
						cwd: 'theme-extension/',
						src: '**/*',
						expand: true
					}
				]
			}
		},
		less: {
			generate: {
				files: {
					'theme-extension/stable.css': 'less/build-stable.less',
					'theme-extension/canary.css': 'less/build-canary.less',
				}
			}
		},
		cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'theme-extension/min/stable.min.css': ['theme-extension/stable.css'],
		      'theme-extension/min/canary.min.css': ['theme-extension/canary.css'],
		    }
		  }
		},
		watch: {
			canary: {
				files: ['less/*.less','themes/*.less'],
				tasks: ['less:generate', 'cssmin:target']
			},

		}

	});

	grunt.registerTask('default', ['less', 'cssmin']);
};
