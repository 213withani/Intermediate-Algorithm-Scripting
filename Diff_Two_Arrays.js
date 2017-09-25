
function diffArray(arr1, arr2) {
    var newArr = [];
    var smallArr=[];
    var bigArr=[];

    if(arr1.length>arr2.length){
        bigArr=arr1;
        smallArr=arr2;
    }else{
        smallArr=arr1;
        bigArr=arr2;
    }
    newArr= bigArr.filter(function(param) {
		//console.log(arr2.indexOf(param));
        return smallArr.indexOf(param)<0;
    });

	return newArr;
  }
  
  diffArray([1, 2, 3,5], [1, 2, 3, 4,5]);
  