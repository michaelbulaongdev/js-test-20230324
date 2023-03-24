//function that gives remainder of 2 integers
//accepts integers as params
//returns remainder as integer
//does not use modulo operator

function remainder(num1, num2) {
	let remainder;

	//check for type
	if (typeof num1 !== 'number') {
		return `Input must be a number`;
	} else if (typeof num2 !== 'number') {
		return `Input must be a number`;
	} else {
		//if both are numbers, proceed
		let initialQ = num1 / num2;
		//check if initialQ has decimals
		let decimalQ = initialQ - Math.floor(initialQ);

		if (decimalQ !== 0) {
			remainder = decimalQ * num2;
			//if negative remainder, flip sign
			if (remainder < 0) {
				remainder = remainder * -1;
			}
		} else {
			remainder = 0;
		}
	}
	remainder = Math.floor(remainder); //to remove any excess decimals
	return `Remainder is ${remainder}`;
}

//for testing
console.log(remainder(10, 1)); //rem 0
console.log(remainder(10, 2)); //rem 0
console.log(remainder(10, 3)); //rem 1
console.log(remainder(10, 4)); //rem 2
console.log(remainder(10, 5)); //rem 0
console.log(remainder(10, -4)); //rem 2
console.log(remainder(-10, 3)); //rem 1
console.log(remainder(10, 0)); //NaN
console.log(remainder('10', 1)); //invalid input
