var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var plus = document.getElementById("+");
var minus = document.getElementById("-");
var divide = document.getElementById("/");
var multiply = document.getElementById("*");
var equal = document.getElementById("=");

var numbers = [];
var operators = [] ;
var res = document.getElementById("res");

var buttons = document.getElementsByTagName("button");
var k = 0 ;
var j = 0 ;
for (var i = buttons.length - 1; i >= 0; i--) {
	buttons[i].addEventListener('click',function (event) {
	var target = event.target.id
	if(!isNaN(target)){
		numbers[k]=Number(target);
		k++;
		console.log(i);
	}else{
		operators[j] = target;
		j++
	}
	console.log("op:"+operators[1])
	if(operators[1] === "="){
		var result = "";
		if(operators[0] =="+")
			result =(numbers[0] + numbers[1])
		else if(operators[0] =="-")
			result =(numbers[0] - numbers[1])
		else if(operators[0] =="*")
			result =(numbers[0] * numbers[1])
		else if(operators[0] =="/")
			result =(numbers[0] / numbers[1])
		res.innerHTML = "Result = "+result;
		numbers = [];
		operators = [];
		k= j = 0;


	}

});
}