function groupArray(array) {
    for (var i=0, output=[[],[],[]]; i < array.length; i++) {
        if (typeof array[i] == 'string') {output[0].push(array[i]);}
        if (typeof array[i] == 'boolean') {output[1].push(array[i]);}
        if (typeof array[i] == 'number') {output[2].push(array[i]);}
    }
    console.log(output)
}
var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
groupArray(myArray);
