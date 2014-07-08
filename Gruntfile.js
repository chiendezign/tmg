module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'public/css/style.css': 'public/scss/style.scss'
				}
			}
		},
		uglify: {
			my_target: {
				files: {
					'public/js/script.min.js': ['public/js/function.js', 'public/js/script.js']
				}
			}
		},
		'ftp-deploy':{
			build:{
				auth: {
				  host: 'lophoctiengnhat.com',
				  port: 21,
				  authKey:'tmg'
				},
				src: 'E:/webs/tmg/public',
				dest: 'tanminhgiang.tk/public'
			}
		},
		watch: {
			css: {
				files: 'public/scss/*.scss',
				tasks: ['sass']
			},
			js:{
				files: 'public/js/*.js',
				tasks: ['uglify']
			}
		}
		
		
		
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ftp-deploy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass']);
}