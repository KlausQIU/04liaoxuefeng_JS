'use strict';
// 正则表达式；
// \d 一个数字，\w 匹配一个字母或数字；.匹配任意一个字符；
// * 表示任意个字符（任意数量个字符），+ 表示至少一个字符（>=1）;?表示0或1个字符。{n}表示n个字符，{n,m}表示n-m个字符。

//example 1：
\d{3}\s+\d{3,8};

// \s匹配一个空格,\s+表示至少有一个空格
// 特殊字符需要转义符 : \
// ^表示行的开头；
// $表示行的结束；

//写法：
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

//练习：
var re = /^\d{3}\-\d{3,8}$/;
re.test('010-12345'); //true
re.test('010-1234x');//false (收尾的不是数字)
re.test('010 12345');//false（少了-）

//切分字符串
'a b   c'.split('');//['a','b','','','c']
'a b   c'.split(/\s+/);//['a','b','c']

// 分组；
var re_group = /^(\d{3})-(\d{3,8})$/;//用()表示要提取的分组；
re_group.exec('010-12345');//['010-12345','010','12345'];匹配失败返回null


// 贪婪匹配；
var re_greedy = /^(\d+)(0*)$/;
re_greedy.exec('102345');//['102345','102345',''];

var re_pure = /^(\d+?)(0*)$/; //添加+?实现非贪婪匹配
re_pure.exec('102555');//['10255500','102555','00'];


//全局搜索；
//g 全局匹配；

var re_global1 = /test/g;
var re_global2 = new RegExp('test','g');

//多次执行exec()来搜索一个匹配的字符串；
//lastIndex 匹配最后搜索到的串；

var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re_global3=/[a-zA-Z]+Script/g;

// 使用全局匹配:
re.global3.exec(s); // ['JavaScript']
re.global3.lastIndex; // 10

re.global3.exec(s); // ['VBScript']
re.global3.lastIndex; // 20

re.global3.exec(s); // ['JScript']
re.global3.lastIndex; // 29

re.global3.exec(s); // ['ECMAScript']
re.global3.lastIndex; // 44

re.global3.exec(s);//null;


//homework-1:
//写出验证email地址的正则表达式：
var re = /^(\w+)(\.?)(\w+)(\@\w+\.\w+)$/;

//Homwwork-2:
//提取带有名字的email地址.格式如：'<Tom Paris> tom@voyager.org'
var re = /^\<(\w+\s\w+)\>\s(\w+\@\w+\.\w+)$/;