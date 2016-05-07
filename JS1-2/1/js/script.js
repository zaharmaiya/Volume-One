var number = prompt('Введите число');
var exponent = prompt('Введите степень');
	var result = pow(number, exponent);
		console.log('pow = ', result);

function pow(a, b){
	var test = a;
		for (i=1; i < b; i++){
		test = test*a;
}
return test
}