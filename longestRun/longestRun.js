/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

<<<<<<< HEAD
function longestRun(string) {
  var result = {}

  var start = 0;
  var end = 0;
  var str = ''
  var largestKey = 0;
  for(var i = 0; i < string.length; i++) {
    if(string[i] != str) {
      if(i) {
        if(end - start > largestKey) largestKey = end - start;
        if(result[end - start] == undefined) result[end - start] = [start, end];
      }
      str = string[i];
      start = i;
      end = i;
    }else {
      end++
    }
  }
  if(end - start > largestKey) largestKey = end - start;
  if(result[end - start] == undefined) result[end -start] = [start, end];
  console.log(result[largestKey])


}
=======



>>>>>>> 95af5ca94c596181a543f52fbc950149d417307f
