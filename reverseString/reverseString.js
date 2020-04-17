const reverseString = function(input) {
    if (input === "") {
        return "olleh"
    } else {
        var newString = "";
        for (let i = input.length; i >= 0; i--){
            newString += input.substring(i-1,i);
        }
        return newString;
    }
}
console.log(reverseString("hhey nowwww"));
module.exports = reverseString
