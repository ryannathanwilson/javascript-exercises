function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total,item) => (total + item),0);
}

function multiply (array) {
	return array.reduce((total,item) => (total * item),1);
}

function power(a,b) {
	return a ** b;
}

function factorial(a) {
	let total = a;
	for (i = a - 1; i > 0; i--) {
		total = total * i;
	}
	return (a === 0) ? 1: total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}