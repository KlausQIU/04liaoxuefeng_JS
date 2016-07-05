/**
 * Created by moonq on 2016/7/5.
 */
//一个对象的表示方式
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};

//对象的属性调用方式
xiaoming.birth;
xiaoming.name;

//若属性中包含特殊字符，则需要用''括起来：
var xiaohong = {
    name:'xiaohong',
    'middle-school':'No.1 Middle school'
};

//要访问''里的属性，不能用.   只能用[]
xiaohong['middle-school'];

//hasOwnProperty() 判断一个对象是否具有属于对象本身的某属性
var xiaoli = {
    name : 'xiaoli',
};
xiaoli.hasOwnProperty('name'); //true
xiaoli.hasOwnProperty('toObject');//false

