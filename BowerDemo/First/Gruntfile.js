
module.exports = function(grunt){
    
    //config
    grunt.initConfig({
        //将多个文件合并成一个文件
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
              src: ['src/js/1.js', 'src/js/2.js'],
              dest: 'dist/js/built.js',
            },
            css: {
              src: ['src/css/1.css', 'src/css/2.css'],
              dest: 'dist/css/built.css',
            },
        },
        //监视文件改动
        watch: {
            js: {
              files: ['src/js/1.js', 'src/js/2.js'],
              tasks: ['concat:js'],
            },
            css: {
              files: ['src/css/1.css', 'src/css/2.css'],
              tasks: ['concat:css'],
            },
        },
        //JS文件丑化
        /*
        uglify: {
            my_target: {
              files: {
                'dist/js/built.min.js': ['src/js/1.js', 'src/js/2.js'],
              }
            }
        },
        */
        //compress and mangle the files dynamically
        uglify: {
            my_target: {
              files: [{
                  expand: true,
                  cwd: 'src/js',
                  src: '**/*.js',
                  dest: 'dist/js'
              }]
            }
          },
        // css压缩
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'src/css',
              src: ['*.css', '!*.min.css'],
              dest: 'dist/css',
              ext: '.min.css'
            }]
          }
        },
        //清除
        clean: ['<%=pkg.webAssetsDir %>'],
        //复制
        copy: {
            js_libs: {
                files :[
                {
                    expand: true, src: [
                    '<%= pkg.srcAssetsDir %>/js/lib/jquery/dist/jquery.min.js'
                    ], 
                    dest: '<%= pkg.webDir %>', filter: 'isFile'
                }]
            }
        },
    });
    
    //grunt.registerTask('default',['clean','uglify','cssmin']);
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    //https://www.npmjs.com/package/grunt-contrib-copy
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
}