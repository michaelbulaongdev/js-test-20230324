//given an 8x3 grid
//find least number of steps
//given contraints, can only move down or diagonal
//input a(1, 2) and x(1, 2)

//calculate steps logic
function calcSteps(grid, pointA, pointX) {
	//2D array
	const steps = new Array(grid.length);
	for (let i = 0; i < grid.length; i++) {
		steps[i] = new Array(grid[i].length).fill(Number.MAX_SAFE_INTEGER);
	}

	//set starting point = 0 steps
	steps[pointA[0]][pointA[1]] = 0;

	//iterate over the grid
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			//check down cell
			if (i < grid.length - 1) {
				steps[i + 1][j] = Math.min(
					steps[i + 1][j],
					steps[i][j] + grid[i + 1][j],
				);
			}
			//check diagonal cells
			if (i < grid.length - 1 && grid[i].length - 1) {
				steps[i + 1][j + 1] = Math.min(
					steps[i + 1][j + 1],
					steps[i][j] + grid[i + 1][j + 1],
				);
			}
		}
	}

	return steps[pointX[0]][pointX[1]];
}

//function for input validation
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

	//define grid
	const grid = [
		[1, 2, 3, 4, 5, 6, 7, 8],
		[9, 10, 11, 12, 13, 14, 15, 16],
		[17, 18, 19, 20, 21, 22, 23, 24],
	];

	//convert positions to objects
	const pointA = [Ax, Ay];
	const pointX = [Xx, Xy];

	//invoke calcSteps
	const numSteps = calcSteps(grid, pointA, pointX);

	return `Quickest path is ${numSteps} steps`;
}

//for testing
console.log(quickest(1, 1, 7, 2));
