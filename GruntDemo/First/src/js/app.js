/*
    requirejs config file
    配置参考：
    http://www.requirejs.org/docs/api.html
*/
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/src/js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        "app" : '../app',
        "calculator" : "../calculator",
        "jquery" : "jquery.min",
        "underscore" : "underscore.min",
        "backbone" : "backbone.min"
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    },
    waitSeconds: 10 
});

// requirejs.config({ 
//    baseUrl: "./js", 
//    paths: { 
//        "jquery": "lib/jquery.min"
//    }, 
//    waitSeconds: 10 
// });

requirejs(['calculator/square', 'calculator/divide', 'jquery'], function(sq,d,$){
    console.log(d(9,4));
    console.log(sq(9));
    $("#msg").html("HELLO from jquery!");
});

