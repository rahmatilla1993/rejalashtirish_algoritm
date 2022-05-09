import {
  isFinish,
  rotate
} from './helper'
function solveSimple(array) {
  let arr = JSON.parse(JSON.stringify(array));
  arr = arr.sort((a, b) => a.begin - b.begin);
  let matrix = [[]];
  arr.forEach((val) => matrix[0].push(val.name));
  let once = false;
  //console.log(matrix);
  let val;
  for (let i = 1; isFinish(arr); i++) {
    matrix.push([]); once = false;
    for (let ind in arr) {
      val = arr[ind]
      if (val.resource <= 0) {
        matrix[i][ind] = "";
      } else if (val.begin <= i-1) {
        if (!once) {
          matrix[i][ind] = 'B';
          val.resource -= 1;
          once = true;
        } else {
          matrix[i][ind] = 'K';
        }
      } else {
        matrix[i][ind] = ""
      }
    }
  }
  return rotate(matrix)
}

export default solveSimple;