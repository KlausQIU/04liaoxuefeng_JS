//for...of
//for...in
//foreach
var a = ['a','b','c'];
a.forEach(function (element,index,array){
	alert(element);

});

var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    alert(element);
});

var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    alert(value);
});
