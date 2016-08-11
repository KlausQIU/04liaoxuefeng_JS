'use strict';
//window：
//innerWidth innerHeight: 浏览器窗口内部的分辨率
//outerWidth innerHeight:浏览器的整个窗口宽高

alert('window inner size' + window.innerWidth + 'x' + window.innerHeight );


//navigator
//navigator.appName：浏览器名称；
//navigator.appVersion：浏览器版本；
//navigator.language：浏览器设置的语言；
//navigator.platform：操作系统类型；
//navigator.userAgent：浏览器设定的User-Agent字符串。
//


//screen
//screen.width：屏幕宽度，以像素为单位；
//screen.height：屏幕高度，以像素为单位；
//screen.colorDepth：返回颜色位数，如8、16、24。
//

//location  获取页面信息
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'
location.assign;//'跳转页面'
location.reload;//重新加载当前页面

//document
document.title = 'xxxx';//更改页面title
document.cookie = 'httpOnly';


