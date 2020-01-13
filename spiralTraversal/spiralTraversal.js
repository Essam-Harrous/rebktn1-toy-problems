/*
Spiral Traversal

Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.

spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
]) 

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]


spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
])	

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]

spiralTraversal([ 
  [ 1, 2, 3 ], 
  [ 4, 5, 6 ], 
  [ 7, 8, 9 ], 
  [ 10, 11, 12 ], 
  [ 13, 14, 15 ], 
  [ 16, 17, 18 ], 
  [ 19, 20, 21 ], 
  [ 22, 23, 24 ] 
])	

// output: [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]

spiralTraversal([[ 1 ], [ 2 ], [ 3 ], [ 4 ]])	// [ 1, 2, 3, 4 ]

spiralTraversal([[ 1, 2, 3, 4, 5, 6, 7 ]]) // [ 1, 2, 3, 4, 5, 6, 7 ]
*/



spiralTraversal = (matrix, result = [], limit = {matrixStart: 0, matrixEnd: matrix.length, arrayStart: 0, arrayEnd: matrix[0].length})=> {
  for(var i = limit.matrixStart; i < limit.matrixEnd; i++) {
    if(i == limit.matrixStart) {
      for(var j = limit.arrayStart; j < limit.arrayEnd; j++) {
        result.push(matrix[i][j])
      }
    }else if(i == limit.matrixEnd - 1) {
      for(var j = limit.arrayEnd - 1; j >= limit.arrayStart; j--) {
        result.push(matrix[i][j]);
      }
    }else {
      result.push(matrix[i][limit.arrayEnd - 1])
    }
  }

  for(var i = limit.matrixEnd - 2; i >= limit.matrixStart + 1; i--) {
    if(matrix[i][limit.arrayEnd - 1] != matrix[i][limit.arrayStart]) {
      result.push(matrix[i][limit.arrayStart])
    }
  }
  
  if(matrix.length * matrix[0].length === result.length) {
    return result
  }

  limit.matrixStart += 1;
  limit.matrixEnd -= 1;
  limit.arrayStart += 1;
  limit.arrayEnd -= 1;

  return spiralTraversal(matrix, result, limit)

}