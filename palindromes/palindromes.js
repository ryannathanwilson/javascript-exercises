const palindrom = function(pal) {
    const myArray = [...pal.toLowerCase()];
    let size = myArray.length;
    let spacelessArray = [];
    for (i = 0; i < size; i++) {
        if (myArray[i].match(/[a-z]/i)) {
            spacelessArray.push(myArray[i]);
        }
    }
    size = spacelessArray.length
    let odd = size % 2;
    console.log(odd);
    
    for (i = 0; i < (size-odd)/2; i++) {
        console.log(spacelessArray[i]);
        console.log(spacelessArray[size - i - 1]);
        console.log('-------');
        if (spacelessArray[i] != spacelessArray[size - i - 1]) {
            return false;
        }
    }
    return true;
}

//Easy solution:

const palindromes = function(words) {
    let spacelessWords = words.toLowerCase().replace(/[^a-z]/g,'');
    console.log(spacelessWords);
    console.log(spacelessWords.split('').reverse().join(''));
    
    
    return spacelessWords.split('').reverse().join('') === spacelessWords;
}

console.log(palindromes('Race car!'));

module.exports = palindromes
