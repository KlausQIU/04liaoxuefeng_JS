//序列化
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

JSON.stringify(xiaoming); // '{"name":"小明","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["JavaScript","Java","Python","Lisp"]}'

//缩进显示
JSON.stringify(xiaoming,null,' ');

//第二个参数可输入字段；传入array：
JSON.stringify(xiaoming,['name','skill'],'');

//可传入函数
function convert(key,value){
	if (typeof value === 'string'){
		return value.toUpperCase();
	}
	return value;
}

//把所有字符串类型的字段都变成大写。
JSON.stringify(xiaoming,convert,'')

//toJSON 设置输出json的字段
var xiaoming2 = {
	'name':xiaoming2,
	'age':14,
	toJSON : function(){
		return {
			'name':this.name,
			'age':this.age
		};
	}
};

JSON.stringify(xiaoming2) //'{"name"："xiaoming2"，"age":"14"}'

//反序列化 JSON.parse()
JSON.parse('[1,2,3,tre]');//[1,2,3,true]
JSON.parse('{"name":"xiaoming","age":14}');//object{name:'xiaoming',age:14}

//同样可以接收函数
JSON.parse('{"name":"xiaoming","age":14}',function (key,value){
	if (key === 'name'){
		return value + 'stduent';
	}
	return value;
});