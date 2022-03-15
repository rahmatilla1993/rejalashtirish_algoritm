import {
	circle,
	rotate,
	isFinish
} from './helper'


function solve(array, times) {
	let arr = JSON.parse(JSON.stringify(array));
	arr = arr.sort((a, b) => a.begin - b.begin);
	let matrix = [[]];
	arr.forEach((val) => matrix[0].push(val.name));
	let once = false;

	let count = 0;
	let val;
	let nextValue = circle(arr);
	let element = nextValue.next().value;

	outer:
	for (let i = 1; isFinish(arr); i++) {
		matrix.push([]); once = false;
		for (let ind in arr) {
			val = arr[ind]
			if (val.resource <= 0) {
				matrix[i][ind] = "";
			} else if (val.begin <= i-1 && element.name === val.name) {
				if (!once) {
					matrix[i][ind] = 'B';
					val.resource -= 1;
					once = true;
					count++;
				} else {
					matrix[i][ind] = 'K';
				}
			} else if (val.begin <= i-1) {
				matrix[i][ind] = "K"
			} else {
				matrix[i][ind] = ""
			}
		}

		while (element.resource === 0 || count >= times) {
			if (!isFinish(arr)) {
				break outer;
			}
			element = nextValue.next().value;
			count = 0;
		}

	}
	console.log(matrix)
	return rotate(matrix)
}

export default solve;