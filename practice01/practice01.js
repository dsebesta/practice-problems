function biggerWords(string, array) {
    for (var i=0, output=[]; i < array.length; i++) {
        if (array[i].length > string.length) { output.push(array[i]); }
    }
    console.log(output)
}

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
biggerWords('whales', myArray);
