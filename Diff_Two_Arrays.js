
function diffArray(arr1, arr2) {
    var newArr = [];
    var newArr2 = [];
    var smallArr = [];
    var bigArr = [];

    if (arr1.length > arr2.length) {
        bigArr = arr1;
        smallArr = arr2;
    } else {
        smallArr = arr1;
        bigArr = arr2;
    }

    newArr = bigArr.filter(function (param) {
        // Check each bigArr element against the small array.
        return smallArr.indexOf(param) < 0;
    });

    newArr2 = smallArr.filter(function (param) {
        // Check each bigArr element against the small array.
        return bigArr.indexOf(param) < 0;
    });

    return newArr.concat(newArr2);
}

diffArray([1, 2, 3, 4], [1, 2, 3, 5]);
