a = [[1, 2, 3],  
     [4, 5, 6],
     [7, 8, 9]]

// a[l]
//helper- takes in matrix and does my concatination at a set index
Array.prototype.helper = function(idx) {
  var arr = [];
  var index = this.length - 1;

  for (var i = 0; i < this.length; i ++) {
    arr.push(this[index][idx])

    index --;
  }

  return arr;
} 

// a.helper(0)
function test(matrix)  {  //3

  var arr = [];

    for ( var i = 0; i < matrix.length; i ++) {
      var newArr = matrix.helper(i)
    
      arr.push(newArr)
      
  }
  return arr;
}
test(a)
// test(a)
