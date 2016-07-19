'use strict';
//map 二维数组
//使用方式1
var m = new Map([['michael',95],['bob',75],['tracy',85]]);
m.get('michael'); //95

//使用方式2
var m = new Map();
m.set('adam',67);
m.has('adam');//判断是否存在
m.get('adam');//67
m.delete('adam');//删除key
m.get('adam');//return undefined

//set 与map类似，key的集合，不存储value。且不重复。
var s1 = new Set();
var s2 = new Set([1,2,3]);

//通过add添加元素
s2.add(4);
s2.delete(4);
