/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
  var count = 0;
  var pcs = {
    '{' : '}',
    '}' : '{',
    countCu: 0,
    '(' : ')',
    ')' : '(',
    countPa: 0,
    '[' : ']',
    ']' : '[',
    countSe: 0
  }

  for (let i = 0; i < str.length; i++){
    if(pcs[str[i]]) {
      switch(str[i]){
        case '(': pcs.countPa += 1;
        break;
        case '[': pcs.countSe += 1;
        break;
        case '{': pcs.countSe += 1;
        break;
        case ')': pcs.countPa -= 1;
        break;
        case ']': pcs.countSe -= 1;
        break;
        case '}': pcs.countSe -= 1;
      }
      if(pcs.countPa < 0 || pcs.countCu < 0 || pcs.countSe < 0){
        return false;
      }
      if(pcs[str[i]] == '[' || pcs[str[i]] == '(' || pcs[str[i]] == '{' ) {
         return isBalanced(str.slice(str.indexOf(pcs[str[i]]) + 1,pcs[str[i]]))
      }
    }
  }
  if(pcs.countPa > 0 || pcs.countCu > 0 || pcs.countSe > 0){
    return false;
  }
  return true;

};
