
function sumAll(arr) {
    var array=[];
    var num=arr[0];
    
    for(var i=0;i<arr[1];i++){
      
      array.push(num);
      num+=1;
    }
    
    array.forEach(function(e){
                  console.log(e);
                  });
    
    return array.reduce(function(acc,x){ return acc + x;} );
    
  }
  
  sumAll([1, 4]);
  