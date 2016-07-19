'user strict';
//map
var arr = [1,2,3,4];
function pow(x){
	return x*x;
};

arr.map(pow);//[1,4,9,16]

//reduce 
arr.reduce(fucntion (x,y){
	return x+y;
});//30

//homework-1
function product(arr){
	return arr.reduce(function(x,y){
		return x*y;
	});
}

//homework-2
function string2int(s){
	var arr = [];
	for (var x of s){
		arr.push(x*1);
	};
	if (arr.length === 1){
		return arr[0];
	}else if(arr.length > 1){
		arr.reduce(function(x,y){
			return x*10+y;
		});
	}
}

//homework-3 titliaze['adam', 'LISA', 'barT']
var list = ['adam', 'LISA', 'barT'];
function normailze(arr){
	function title(s){
		if(s.length <= 1){
			s.substring(0,1).toUpperCase();
		}else(s.length > 1){
			s.substring(0,1).toUpperCase() + s.substring(1,s.length).toLowerCase();
		}
	}
	return arr.map(title);
}


//homework-4 
var arr = ['1', '2', '3'];
var r;
r = arr.map(function(val){
return parseInt(val,10);
});
alert('[' + r[0] + ', ' + r[1] + ', ' + r[2] + ']');
