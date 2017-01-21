
function arrayReverse(array) {
    for (var i=array.length-1, output=[] ; i>=0; i--) {
        output.push(array[i]);
    }
    console.log(output);
}

var myArray = ['hello', 45, 'Bob', 'what', '23'];
arrayReverse(myArray);