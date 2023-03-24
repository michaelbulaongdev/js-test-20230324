//given an 8x3 grid
//find least number of steps
//given contraints, can only move down or diagonal

function quickest(a1, a2, x1, x2) {
	//check if type of inputs are numbers
	if (
		typeof a1 !== 'number' ||
		typeof a2 !== 'number' ||
		typeof x1 !== 'number' ||
		typeof x2 !== 'number'
	) {
		return `invalid input`;
	}

	//round down to nearest whole numbers, removing decimals
	let Ax = Math.floor(a1);
	let Ay = Math.floor(a2);
	let Xx = Math.floor(x1);
	let Xy = Math.floor(x2);

	//check if source and destination are in the grid
	let insideGrid = false;

	if (Ax > 0 && Ax < 9) {
		if (Ay > 0 && Ay < 4) {
			if (Xx > 0 && Xx < 9) {
				if (Xy > 0 && Xy < 4) {
					insideGrid = true;
				}
			}
		}
	}

	return `fail ${Ax}, ${Ay}, ${Xx}, ${Xy}`;
}

//for testing
//source A(2,1) to destination X(7,3)
console.log(quickest(2, 1, 7, 3)); //6 steps
console.log(quickest(9, 4.25, 7, 3)); //out of grid
console.log(quickest(3, '2', 7, 3)); //invalid input
