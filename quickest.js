//given an 8x3 grid
//find least number of steps
//given contraints, can only move down or diagonal

function quickest(a1, a2, x1, x2) {
	//check if type of inputs are numbers
	if ((typeof a1 || typeof a2 || typeof x1 || typeof x2) !== 'number') {
		return `Invalid input`;
	}
	//check if source and destination are in the grid
	if (a1 < 1 || a1 > 8) return null;
}

//for testing
//source A(2,1) to destination X(7,3)
console.log(quickest(2, 1, 7, 3)); //6 steps
