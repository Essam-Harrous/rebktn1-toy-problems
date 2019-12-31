/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/


let zeroSum = (arr) => {
  obj = {};
  for(var key in arr) {
    if(obj[Math.abs(arr[key])] != undefined && arr[key] + obj[Math.abs(arr[key])] == 0) return true;
    else obj[Math.abs(arr[key])] = arr[key]
  }
  return false
}