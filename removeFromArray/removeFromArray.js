const removeFromArray = function(...args) {
    var list = args[0];
    var newList = [];
    var items = [];
    var checker = false;
    for (let i = 1; i < arguments.length; i++) {
        items[i - 1] = arguments[i];
    }

    for (let j = 0; j < list.length; j++) {
        for (let k = 0; k < items.length; k++) {
            if (items[k] === list[j]) {
                checker = true;
            } 
        }
        if (checker === false) {
            newList.push(list[j]);
        }
        checker = false;
    }
return newList;
}


console.log(removeFromArray([1,2,3,4],3,4,5));


module.exports = removeFromArray
