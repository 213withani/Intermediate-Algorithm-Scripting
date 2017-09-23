
function sumAll(arr) {
    var maxNum=Math.max.apply(null, arr);
    var minNum=Math.min.apply(null, arr);
    var array=[];
    var num=minNum;

    for(var i=0;i<=maxNum-minNum;i++){
      
      array.push(num);
      num+=1;
    }
    
    array.forEach(function(e){
                  console.log(e);
                  });
    
    return array.reduce(function(acc,x){ return acc + x;} );
    
  }
  
  sumAll([5, 10]);
  