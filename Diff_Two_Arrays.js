
function diffArray(arr1, arr2) {
    var newArr = [];

    newArr= arr1.filter(function(param) {
		//console.log(arr2.indexOf(param));
        return arr2.indexOf(param)<0;
    });
	return newArr;
  }
  
  diffArray([1, 2, 3,5], [1, 2, 3, 4,5]);
  