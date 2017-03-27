function parseToAcronym(phrase) {
  return phrase.split(/\W+/)
      .map(function(word) {
          firstChar = word.charAt(0).toUpperCase();
          if(word.match(/^[A-Z]+$/)) {
              return firstChar;
          }
          return firstChar + word.slice(1).replace(/[^A-Z]/g,"");
      })
      .join('');
};

module.exports = { parseToAcronym: parseToAcronym }