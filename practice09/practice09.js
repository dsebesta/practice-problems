var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];
var solution = [];

function fittingWords (string, array) {
    for (var i=0; i < array.length; i++) {
        var matches = 0;
        for (var j=0; j < string.length; j++) {
            if (array[i].indexOf(string.charAt(j)) !== -1) {
                matches++
            }
            if (matches === string.length) {
                solution.push(array[i]);
            }
        }
    }
    console.log(solution);
}

fittingWords('cat', myArray);
