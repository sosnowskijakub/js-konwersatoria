function bigestSumOfTwoElements(array) {

    if (array.length <= 0) {
        return false;
    }

    if (array.length == 1) {
        return array[0];
    }

    array.sort().reverse();
    const result = array[0] + array[1];
    return result;
}

bigestSumOfTwoElements([1, 2, 3, 4]) // => 7
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23, 45, 17, 12]) // => 68

console.log(bigestSumOfTwoElements([1, 2, 3, 4])); // => 7
console.log(bigestSumOfTwoElements([])); // => false
console.log(bigestSumOfTwoElements([76])); // => 76
console.log(bigestSumOfTwoElements([23, 45, 17, 12])); // => 68
