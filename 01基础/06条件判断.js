/**
 * Created by moonq on 2016/7/5.
 */
var age = 20;
if (age >= 18){
    alert('aldut');
}else {
    alert('teenager');
}

//多行条件判断

var age = 3;
if (age >= 18) {
    alert('adult');
} else if (age >= 6) {
    alert('teenager');
} else {
    alert('kid');
}

//小作业
/*
小明身高1.75，体重80.5kg。请根据BMI公式（体重除以身高的平方）帮小明计算他的BMI指数，并根据BMI指数：

低于18.5：过轻
18.5-25：正常
25-28：过重
28-32：肥胖
高于32：严重肥胖
 */
'use strict';

var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));

var bmi = weight/(height^2);
if (bmi >= 32){
alert('严重肥胖');
}else if(bmi >= 28){
alert('肥胖');
}else if(bmi >= 25){
alert('过重');
}else if(bmi >= 18.5){
alert('正常');
}else{
alert('过轻');
}


