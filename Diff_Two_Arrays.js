
function diffArray(arr1, arr2) {
    var newArr = [];
    var newArr2 = [];

    firstUniqueElement = arr1.filter(function (param) {
        // Check each bigArr element against the small array.
        return arr2.indexOf(param) < 0;
    });

    UniqueElement = arr2.filter(function (param) {
        // Check each bigArr element against the small array.
        return arr1.indexOf(param) < 0;
    });

    return firstUniqueElement.concat(UniqueElement);
}

diffArray([1, 2, 3, 4], [1, 2, 3, 5]);
