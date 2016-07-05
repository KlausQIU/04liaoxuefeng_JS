/**
 * Created by moonq on 2016/7/4.
 */

//转义
'I\'m \"OK\"!';

//多行：


//toUpperCase:字符串变大写
//toLowerCase：字符串变小写
//indexof():寻找指定字符串。若没找到，返回-1
var s = 'hello, world';
s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1

//substring:寻找指定区间的字符串
var s = 'hello, world'
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'
