var bathtext = function(value) {
    
    
  return isNumber(value);
};

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = bathtext;
