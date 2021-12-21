/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
function staircase(num: number): void {
let staircase:string = '';
  for (let index = 1; index <= num; index++) {
    for (let j = num - 1; j >= index; j--) {
      staircase += ' ';
    }
    for (let k = 0; k < index; k++) {
      staircase += '#';
    }
    staircase += '\n';
  }
  
  console.log(staircase);
}
function main() {
  console.log('---------- Cool Programing ----------\n');
  const n = 6;
  const result = staircase(n);
  console.log('Result: ', result);
}

main();
