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

export default function foo(arr, tk, P, pri, dev) {
  arr = JSON.parse(JSON.stringify(arr));
  const matrix = [[]];
  const waiter = {};
  arr.forEach((el) =>
    matrix[0].push(el.name) &&
    Object.assign(waiter, {
      [el.name]: 0
    })
  );
  //console.log(matrix);
  const worker = [];
  for (const [index, item] of tk.entries()) {
    worker.push({
      name: 'tk' + (index+1),
      work: '',
      curr: 0,
      max: item
    });
  }
  //console.log(worker);
  //console.log(waiter);
  for (let i = 1, a = []; isFinish(arr); i++) {
    matrix.push(new Array(arr.length).fill('')); a = [];
    for (const item of arr) {
      if (item.begin <= i-1 && item.resource > 0) {
        a.push(item);
      }
    }
    for (let j = 0; j < P; j++) {
      for (const k of a.sort((x, y) => {
        if (!pri)
          return waiter[y.name] - waiter[x.name]
        else {
          if (waiter[y.name] === waiter[x.name]) {
            return x.priority - y.priority;
          }
          else {
            return waiter[y.name] - waiter[x.name];
          }
        }
      })) {
        for (const w of worker) {
          if (count(worker, k.name) >= 1 && j === 0) continue;
          if (w.work === '' && count(worker, k.name) < Math.min(P, k.resource)) {
            if (worker.length > 2) {
              const foo = worker.find(el => el.work === k.name);
              if (!foo) {
                w.work = k.name
              }
              else {
                const isEven = foo.name.slice(2) % 2 === 0;
                if (isEven && w.name.slice(2) % 2 === 0){
                  w.work = k.name;
                }
                else if (!isEven && w.name.slice(2) % 2 === 1) {
                  w.work = k.name;
                }
              }
            }
            else 
              w.work = k.name;
            break;
          }
        }
      }
    }
    //console.log(arr)
    //console.log(worker)
    for (const j of worker) {
      if (j.work !== '') {
        if (j.curr === j.max || arr[j.work.charCodeAt()-97].resource <= 0) {
          j.work = '';
          j.curr = 0;
          continue;
        }
        matrix[i][j.work.charCodeAt()-97] += dev ? j.name.charAt(2) : 'B';
        j.curr += 1;
        arr[j.work.charCodeAt()-97].resource -= 1;
        if (j.curr === j.max || arr[j.work.charCodeAt()-97].resource <= 0) {
          j.work = '';
          j.curr = 0;
        }
      }
    }
    for (const k of a) {
      if (!matrix[i][k.name.charCodeAt() - 97]) {
        matrix[i][k.name.charCodeAt() - 97] = 'K';
        waiter[k.name] += 1;
      } else {
        waiter[k.name] = 0;
      }
    }
    // for test
    /*for (let k = 0; k < matrix[i].length; k++) {
      if (!matrix[i][k]) {
        matrix[i][k] = ' ';
      }
    }
    //console.log(waiter)*/
  }
  /*for (const k of matrix)
    console.log(k.join(" "));
  //console.log(arr)*/
  return rotate(matrix)
}
