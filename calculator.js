var numbers = [];
var res = document.getElementById("res");

var buttons = document.getElementsByTagName("button");
var k = 0 ;
var j = 0 ;
var str="";
for (var i = buttons.length - 1; i >= 0; i--) {
	buttons[i].addEventListener('click',function (event) {
	var target = event.target.id;
    str+=target;
	res.textContent = str;
	if(target=== "="){
	
		str = str.substr(0,str.length-1);
		var numbers = str.split("+");
		operator= "+";
		
		if(numbers.length ==1){	
			numbers = str.split("-");
			operator = "-";

			if(numbers.length ==1)
			{
				numbers = str.split("*");
				{
					operator = "*";
					if(numbers.length ==1)
					{
					    numbers = str.split("/");
					    operator = "/";
					}
				}
			}			
		}
		numbers[0] = Number(numbers[0]);
		numbers[1] = Number(numbers[1]);
		if(operator  =="+")
			str =(numbers[0] + numbers[1])
		else if(operator  =="-")
			str =(numbers[0] - numbers[1])
		else if(operator =="*")
			str =(numbers[0] * numbers[1])
		else if(operator  =="/")
			str =(numbers[0] / numbers[1])
		console.log(numbers);
		console.log(str);
		res.innerHTML += str;
		numbers = [];
		operators = [];
		k= j = 0;
		str="";
	}

});
}