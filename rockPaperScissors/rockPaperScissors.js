/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (n) {
  // TODO: your solution here
  result = [];
  var obj = {1: 'R', 2: 'P', 3: 'S'}
  let helper = (pNum, str = '')=> {
    for(var i = 1; i <= 3; i++) {
      if(pNum < n) helper(pNum + 1, str + obj[i]);
      else result.push(str + obj[i]);
    }
  }
  helper(1);
  return result;
};
