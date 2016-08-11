// <input type="text" id="email"> 获取值
var input = document.getElementById('email');
input.value; // '用户输入的值'

<input type='password'> //口令框
<input type="checkbox"> //复选框
<input type="radio"> //单选框
<input type="select"> //下拉选择
<input type="hidden"> //隐藏文本

//用checked 判断是否被选中
//
xx.checked //true or false

//设置值
//先获取
var input = document.getElementById('email');
input.value = '375235513@qq.com';
//单选 复选框用checked = true 或者false
//

//提交表单
//
<form id='test_form'>
<button type='button' onclick="doSubmitForm()">Submit</button>
</form>

<script>
function doSubmitForm(){
	var form = document.getElementById('test_form');
	form.submit();
}
</script>

// //第二种方式
// <form id='test_form_1' onsubmit="return checkForm()">
// <input type="text" name="test">
//     <button type="submit">Submit</button>
// </form>
// <script>
// function checkForm() {
//     var form = document.getElementById('test-form');
//     // 可以在此修改form的input
//     //...
//     // 继续下一步:
//     return true;
// }

//homework
'use strict';
var checkRegisterForm = function () {
	var usr,pw1,pw2,reusr,repw;
	usr = document.getElementById('username');
	pw1 = document.getElementById('password');
	pw2 = document.getElementById('password-2');
	reusr = /^\w{3,10}$/;
	repw = /.{6,20}/;
	if (!reusr.test(usr.value)) {
        alert("用户名长度须为3-10位字母或数字");
        return false; 
    }
    if (!repw.test(pw1.value)) {
        alert("口令必须是6-20位");
        return false;
    }
    if (pw1.value != pw2.value) {
        alert("两次输入口令不一致");
        return false;
    }
    return true;
}