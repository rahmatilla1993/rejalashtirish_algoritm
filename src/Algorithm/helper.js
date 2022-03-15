export function isFinish(arr) {
	return !arr.every((val) => val.resource === 0);
}

export function myFilter(arr, i) {
	let a = [];
	for (let val of arr) {
		if (val.begin <= i-1 && val.resource !== 0) {
			a.push(val);
		}
	}
	return a;
}

export function rotate(array) {
	let arr = new Array(array[0].length)
	.fill(0).map(() => []);
	array.forEach(
		(val) => {
			val.forEach(
				(item, ind) => {
					arr[ind].push(item)
				}
			)
		}
	)
	return arr.sort(
		(a, b) => a[0].charCodeAt() - b[0].charCodeAt()
	);
}

export function* circle(arr) {
	let d = 0;
	while (true) {
		yield arr[d++ % arr.length];
	}
}