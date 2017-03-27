function flattenArray(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
        result = result.concat(flatten(arr[i]));
    } else {
        result.push(arr[i]);
    }
  }
  return result;
}

module.exports = { flattenArray: flattenArray }
