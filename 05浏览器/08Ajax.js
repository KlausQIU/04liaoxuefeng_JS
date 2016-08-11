//一般通过xmlHttpRequest()写ajax 异步执行
var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();   //新
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP');  //旧
}

