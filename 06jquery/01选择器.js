//jquery符号$

//选择器
//按ID查找
var div = $('#id');
//返回jquery对象。类似一个数组
//若不存在，返回[]


var div = $('#abc'); // jQuery对象
var divDom = div.get(0); // 假设存在div，获取第1个DOM元素
var another = $(divDom); // 重新把DOM包装为jQuery对象

//按tag查找
var ptag = $('p');
ptag.length //返回页面p节点的总数

//按class查找
var a = $('.red') //注意classname前面加.

//按属性查找
var email = $('[name=email]');
//当一个属性需要查询多个值得时候，用""括起来
var name = $('[name ="classname studentname"]');

//组合查找
var emailinput = $('input[name=email]');

//多项选择器
var muchtag = $('p,tr');
var complexchoice = $('p.red,p.green');

//homework
<!-- HTML结构 -->
<div id="test-jquery">
    <p id="para-1" class="color-red">JavaScript</p>
    <p id="para-2" class="color-green">Haskell</p>
    <p class="color-red color-green">Erlang</p>
    <p name="name" class="color-black">Python</p>
    <form class="test-form" target="_blank" action="#0" onsubmit="return false;">
        <legend>注册新用户</legend>
        <fieldset>
            <p><label>名字: <input name="name"></label></p>
            <p><label>邮件: <input name="email"></label></p>
            <p><label>口令: <input name="password" type="password"></label></p>
            <p><button type="submit">注册</button></p>
        </fieldset>
    </form>
</div>

// 仅选择JavaScript
select = $('#para-1');

// 仅选择Erlang
select = $('p.color-red.color-green');

// 选择JavaScript和Erlang
select = $('class^=color-red');

// 选择所有编程语言
select = $('p[class^=color-]');

// 选择名字input
select = $('input[name=name]');

// 选择邮件和名字input
select = $('input[name=name],input[name=email]');


