import {
	rotate,
	isFinish,
	myFilter
} from './helper'

function solveByPriority(array) {
	let arr = JSON.parse(JSON.stringify(array));
	let maxPriority = -1;
	let matrix = [[]];
	arr.forEach((val) => matrix[0].push(val.name));

	let once = false;
	//console.log(matrix);
	let val;

	for (let i = 1; isFinish(arr); i++) {
		matrix.push([]); once = false;
		maxPriority = myFilter(arr, i).sort(
			(a, b) => a.priority - b.priority
		)
		if (maxPriority.length !== 0)
			maxPriority = maxPriority[0].name
		//console.log(maxPriority, i-1)


		for (let ind in arr) {
			val = arr[ind]
			if (val.resource <= 0) {
				matrix[i][ind] = "";
			} else if (val.name === maxPriority) {
				if (!once) {
					matrix[i][ind] = 'B';
					val.resource -= 1;
					once = true;
				}
			} else if (val.begin <= i-1) {
				matrix[i][ind] = 'K';

			} else {
				matrix[i][ind] = ""
			}
		}
	}

	return rotate(matrix)
}

export default solveByPriority;