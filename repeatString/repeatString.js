const repeatString = function(str,i) {
    var crazyString = ""
    if (i < 0) {return "ERROR"} 
    else {
        for (let j = 0; j < i; j++) {
            crazyString += str;
        }
        return crazyString;
    }
}

module.exports = repeatString
