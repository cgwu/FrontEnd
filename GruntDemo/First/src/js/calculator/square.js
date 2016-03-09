//var calculator = calculator || {};
//
//calculator.square = function(x){
//    return calculator.multiply(x,x);
//}

/* 这个模块依赖multiply */
define(['calculator/multiply'],function(mul){
    return function(x){
        return mul(x,x);
    };
});
