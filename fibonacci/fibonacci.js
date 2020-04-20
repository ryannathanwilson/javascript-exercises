const fibonacci = function(inp) {
    let input = parseInt(inp);
    if (input < 1) return "OOPS";
    if (input === 1 || input === 2) return 1;
    return fibonacci(input - 1) + fibonacci(input - 2);
}
console.log(fibonacci(8));

module.exports = fibonacci
