'use strice';
var now = new Date();
now; //当前时间
now.getFullYear();//年份
now.getMonth(); // 月份，注意月份范围是0~11，5表示六月
now.getDate(); // 几号
now.getDay(); // 星期几
now.getHours(); // 24小时制
now.getMinutes(); // 分钟
now.getSeconds(); // 秒
now.getMilliseconds(); // 毫秒数
now.getTime();//时间戳

var d = new Date(1469283009255);
d.toLocaleString();
d.toUTCString();


