const sumAll = function(a,b) {
    var sum = 0;
    if (
        typeof a != "number" || 
        typeof b != "number" ||
        a < 0 ||
        b < 0) {
        return "ERROR"
    } else {
        if (a < b) {
            var small = a;
            var large = b;
        } else {
            var small = b;
            var large = a;
        }
        do {
            sum +=small;
            small++
            console.log(sum);
        } while (small <= large);
        return sum;
    }

}
a = 1;
console.log(typeof a);
sumAll(1,5);
module.exports = sumAll
