'use strict';
function abs(x){
    if (x >= 0 ){
        return x;
    }else {
        return -x;
    }
}

var abs1 = function(x){
    if (x >= 0 ){
        return x;
    }else {
        return -x;
    }
}; //注意加； 表示赋值语句结束

//函数的调用
abs(10)
abs(-9)

//arguments  指向当前函数传入的所有参数
function foo(x){
    alert(x);
    for (var i=0;i<arguments.length;i++){
        alert(arguments[i]);
    }
}
foo(10,20,30);

function abs2(){
    if (arguments.length === 0){
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x:-x;
}
abs();//0
abs(10);//10
abs(-9);//9

//rest
function foo1(a,b, ...rest){
    console.log('a='+a);
    console.log('b='+b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []

//homework:
//1,sum
function sum(...rest){
    var sum = 0;
    for (var x of rest){
        sum = sum + x;
    }
    return sum;
}
