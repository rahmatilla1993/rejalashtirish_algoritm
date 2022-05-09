import {
	rotate,
	isFinish
} from './helper'
function count(worker, item) {
  let c = 0;
  for (const w of worker) {
    if (w.work === item) c++;
  }
  return c;
}

export default function shortest(arr, tk, P, pri, expel = true) {
  arr = JSON.parse(JSON.stringify(arr));
  const matrix = [[]];
  const waiter = {};
  arr.forEach((el) =>
    matrix[0].push(el.name) &&
    Object.assign(waiter, {
      [el.name]: 0
    })
  );
  const worker = [];
  for (const [index, item] of tk.entries()) {
    worker.push({
      name: 'tk' + (index+1),
      work: '',
      curr: 0,
      max: item
    });
  }
  for (let i = 1, a = []; isFinish(arr); i++) {
    matrix.push(new Array(arr.length).fill('')); a = [];
    for (const item of arr) {
      if (item.begin <= i-1 && item.resource > 0) {
        a.push(item);
      }
    }
    for (let j = 0; j < P; j++) {
      for (const k of a.sort((x, y) => waiter[x.name] - waiter[y.name] || x.resource - y.resource)) {
        for (const w of worker) {
          if (count(worker, k.name) >= 1 && j === 0) continue;
          if (w.work === '' && count(worker, k.name) < Math.min(P, k.resource)) {
            w.work = k.name;
            waiter[w.work] = 0;
            break;
          }
        }
      }
    }
    for (const j of worker) {
      if (j.work !== '') {
        if (j.curr === j.max || arr[j.work.charCodeAt()-97].resource <= 0 || (expel && false)) {
          waiter[j.work] = 1;
          j.work = '';
          j.curr = 0;
          continue;
        }
        matrix[i][j.work.charCodeAt()-97] += j.name.charAt(2);
        j.curr += 1;
        arr[j.work.charCodeAt()-97].resource -= 1;
        if (j.curr === j.max || arr[j.work.charCodeAt()-97].resource <= 0) {
          waiter[j.work] = 1;
          j.work = '';
          j.curr = 0;
        }
      }
    }
    for (const k of a) {
      if (!matrix[i][k.name.charCodeAt() - 97]) {
        matrix[i][k.name.charCodeAt() - 97] = 'K';
        waiter[k.name] = 0;
      } else {
        //waiter[k.name] = 1;
      }
    }
    // for test
    /*for (let k = 0; k < matrix[i].length; k++) {
      if (!matrix[i][k]) {
        matrix[i][k] = ' ';
      }
    }
    console.log(waiter)*/
  }
  /*for (const k of matrix)
    console.log(k.join(" "));
  console.log(arr)*/
  return rotate(matrix);
}

