//function that divides 2 integers
//accepts integers as params
//returns quotient as integer
//does not use division operator

function divide(num1, num2) {
	//check if inputs are numbers
	if (typeof num1 !== 'number') {
		return `Invalid input`;
	} else if (typeof num2 !== 'number') {
		return `Invalid input`;
	}
	//check if divisor is zero
	if (num2 === 0) {
		return `Quotient is undefined`;
	}
	//check if inputs are negative to determine sign of quotient
	let sign = 1; //positive sign
	let product = num1 * num2;
	if (product < 0) {
		sign = -1; //negative product means negative quotient
	}
	//convert both numbers to positive
	let posNum1 = num1;
	let posNum2 = num2; //assuming positive

	if (num1 < 0) {
		posNum1 = num1 * -1;
	}
	if (num2 < 0) {
		posNum2 = num2 * -1;
	}
	//if divisor is smaller than dividend, subtract
	let quotient = 0;

	while (posNum1 >= posNum2) {
		posNum1 = posNum1 - posNum2;
		quotient = quotient + 1;
	}

	let rem = posNum1;
	let signedQ = quotient * sign;

	return `Quotient is ${signedQ}; Remainder is ${rem}`;
}

//for testing

console.log(divide(10, 0)); //undefined
console.log(divide(10, 1)); //10
console.log(divide(10, -2)); //-5
console.log(divide(10, 5)); //2
console.log(divide(11, 2)); //5.5
console.log(divide('10', 1)); //invalid input
console.log(divide(10, '1')); //invalid input
