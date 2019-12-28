/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

var evenOccurrence = (arr) => {
  obj = {};
  for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] != 'object' || Array.isArray(arr[i])) {
      if(obj[arr[i]] == undefined) obj[arr[i]] = 1;
      else obj[arr[i]] += 1;
    }else {
      var stringified = JSON.stringify(arr[i]);
      if(obj[stringified] == undefined) obj[stringified] = 1;
      else obj[stringified] += 1;
    }
  }

  objValues = Object.values(obj);
  for(var i = 0; i < objValues.length; i++) {
    if(objValues[i] % 2 == 0) {
      var result = Object.keys(obj)[i];
      if(typeof arr[0] == 'string') return result;
      else if(typeof arr[0] == 'number') return parseInt(result);
      else if(Array.isArray(arr[0])) return result.split(',');
      else return JSON.parse(result)
    }
  }
  return null;
}
