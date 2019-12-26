/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */


 var allAnagrams = function(string) {
  // Your code here.
  var result = [];
  var check = {}

  let helper = (letterIndex, str = '')=> {
    for(var i = 0; i < string.length; i++) {
      if(check[string[i] + i] == undefined) {
        check[string[i] + i] = string[i];
        if(letterIndex < string.length - 1) helper(letterIndex + 1, str + string[i]);
        else {
          result.push(str + string[i]);
        }
        delete check[string[i] + i]
      }
    }
  }
  helper(0);
  return result;

};

