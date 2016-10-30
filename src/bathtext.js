var bathtext = function(value) {
    
    return isNumber(sepComma(value));
  //return isNumber(value);
};

//Split comma
function sepComma(n){
    var parts = n.split(',');
    var res;
    var count = 0;
    
    parts.forEach(function(en) {
        res += en;
        count++;
        if(count == parts.length){return res;};
    });
    
    
}


//Check numeric function
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = bathtext;
