//given an 8x3 grid
//find least number of steps
//given contraints, can only move down or diagonal
//input a(1, 2) and x(1, 2)

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

	if (insideGrid === false) {
		return `input is outside of grid`;
	}

	//calculate steps logic
	function calcSteps(grid, pointA, pointX) {
		const numRows = grid.length;
		const numCols = grid[0].length;

		//render table
		const table = Array(numRows)
			.fill(null)
			.map(() => Array(numCols).fill(0));

		//render first row
		for (let j = 0; j < numCols; j++) {
			table[0][j] = Math.abs(pointA.col - j) + Math.abs(pointA.row);
		}

		//render rest of table
		for (let i = 1; 1 < numRows; i++) {
			for (let j = 0; j < numCols; j++) {
				let minSteps = table[i - 1][j];
				if (j > 0) {
					minSteps = Math.min(minSteps, table[i - 1][j - 1]);
				}
				if (j < numCols - 1) {
					minSteps = Math.min(minSteps, table[i - 1][j + 1]);
				}
				table[i][j] =
					minSteps + Math.abs(i - pointX.row) + Math.abs(j - pointX.col);
			}
		}

		return Math.min(...table[numRows - 1]);
	}

	//define grid
	const grid = [
		[1, 2, 3, 4, 5, 6, 7, 8],
		[9, 10, 11, 12, 13, 14, 15, 16],
		[17, 18, 19, 20, 21, 22, 23, 24],
	];

	//convert positions to objects
	const pointA = {row: Ay, col: Ax};
	const pointX = {row: Xy, col: Xx};

	//invoke calcSteps
	const steps = calcSteps(grid, pointA, pointX);

	return `Quickest path is ${steps} steps`;
}

//for testing
//source A(2,1) to destination X(7,3)
console.log(quickest(2, 1, 7, 3)); //6 steps
console.log(quickest(9, 4.25, 7, 3)); //outside of grid
console.log(quickest(3, '2', 7, 3)); //invalid input
