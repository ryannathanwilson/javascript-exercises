const caesar = function(message,cipher) {
    return (
        message
            .split('')
            .map(char => charshift(char,cipher))
            .join('')
    );
}

const charshift = ((char,cipher) => {
    if(char.match(/[a-z]/i)) {
        let charNum = char.charCodeAt();
        let loopCorrection = 0;
        if(charNum <= 90 && charNum >=65) {
            while (charNum + cipher > 90) {
                cipher = cipher - 26;
            } 
            while (charNum + cipher < 65) {
                cipher = cipher + 26;
            }
        }
        if(charNum <= 122 && charNum >=97) {
            while (charNum + cipher > 122) {
                cipher = cipher - 26;
            } 
            while (charNum + cipher < 97) {
                cipher = cipher + 26;
            }
        }

        let codedChar = String.fromCharCode(char.charCodeAt() + cipher);
        return codedChar;
    } else {
        return char;
    }
})
console.log(caesar('ab! C',2000));

module.exports = caesar
