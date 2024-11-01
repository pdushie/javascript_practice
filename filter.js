let myArray = [1,2,1,4,3,"hello"];

// Using the filter function with a callback function
function getItem(input) {
    return myArray.filter(item => item === input );
}

// Filter checks if array contains a specified item
console.log(getItem("hello"));

// Filter returns multiple items if it finds more that one item specified
console.log(getItem(1));

// Filter returns an empty array when specified item is not found
console.log(getItem(100));