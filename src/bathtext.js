var bathtext = function(value) {
    
    return isNumber(sepComma(value));
  //return isNumber(value);
};

//Split comma
function sepComma(n){
    var parts = n.split(',');
    var res;
    parts.forEach(function(en) {
        res += en;
    });
    
    return res;
}


//Check numeric function
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = bathtext;
