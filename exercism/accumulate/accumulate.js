function accumulate(list, func) {
  var result = [];
  for(var i = 0; i < list.length; i++) {
    result.push(func(list[i]));
  }
  return result
}

module.exports = { accumulate: accumulate }