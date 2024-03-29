// For each of the following challenges, make sure to solve the challenge on edabit AND include your solution code here for review

// 1. Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
// https://edabit.com/challenge/xXJLZry3vYd4erPct


// 2. Create a function that accepts an array and returns the last item in the array. The array can contain any of JavaScript's five primitive data types.
// https://edabit.com/challenge/7JBTN4TbaxJQMdX9W
function getLastItem(arr) {
  for(var i = 0; i < arr.length; i++) {
    return arr[arr.length - 1];
  }
}

// 3. Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.
// https://edabit.com/challenge/kaNYPQQWHSX4zGNhj
var result = array1.reduce(
  function(arr, v, i) {
    return arr.concat(v, array2[i]);
  }, []);

// 4. Create a function that takes an array of numbers and remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array, return an empty array.
// https://edabit.com/challenge/9ukwiKyv8R9NHSt3d
function removeSmallest(arr) {
  if(arr.length === 0) {
    return []
  }
  var min = Math.min.apply(null, arr);
  return arr.filter( function(list) {
    return list != min
  });
}

// 5. Create a function that takes an array of numbers and returns the sum of the two lowest positive integers. No floats or empty arrays will be used in any of the test cases.
// https://edabit.com/challenge/GNgCfKHWfQwByBNqa
function twoSmallestNums(numbers) {
    var temp = numbers
    temp.sort()
    return temp[0]+temp[1]
}

// 6. Create a function that accepts an array of 10 integers (between 0 and 9) and returns a string of those numbers in the form of a phone number.
// https://edabit.com/challenge/Z6oY6EWwT9rde8YXm
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  for(var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  return format;
}

// 7. Create a function that takes an array of names and returns an array with the first letter capitalized.
// https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// 8. Create a function that takes an array of numbers and returns the  following statistics:Minimum Value, Maximum Value, Sequence Length, Average Value
// https://edabit.com/challenge/gpozv9DbFqrHDmSQZ

function stats(myArray) {
  var min = myArray[0];
  var max = myArray[0];
  var length = myArray.length;
  var total = 0;
  var average;

  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] < min) {
      min = myArray[i];
    }
    if (myArray[i] > max) {
      max = myArray[i];
    }
    total += myArray[i]
    average = average / length;
  }
  return [total, average, min, max];
}


// 9. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// https://edabit.com/challenge/h7LTMAFeNz79rXB2Y
function flatten(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
        result = result.concat(flatten(arr[i]));
    } else {
        result.push(arr[i]);
    }
  }
  var max = Math.max(result)
  return max;
}


// 10. Create a function that takes an object and returns the keys and values as separate arrays.
// https://edabit.com/challenge/AP4hnF97anRc2mAZ6
function keyValues(obj, keys){
  return [
    keys = Object.keys(obj), keys.map(
      function(k) {
        return obj[k]
    })
  ]
}
