console.clear();
console.log(Date());

function character_convert(string) {
    var output = '';
    for (var i = 0; i < string.length; i++) {
        output += string[i].charCodeAt(0);
    }
    console.log(output);
}

character_convert('the cat in the hat');