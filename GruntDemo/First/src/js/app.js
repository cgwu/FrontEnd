/*
    requirejs config file
*/


require(['calculator/square', 'calculator/divide'], function(sq,d){
    console.log(d(9,4));
    console.log(sq(9));
});