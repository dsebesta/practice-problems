console.clear();
console.log(Date());

function translate(string) {
    var array = string.split(' ');
    for (var i=0; i < array.length; i++) {
        for (var j=0; j < 1; j++) {
            var first_letter = array[i].charAt(0);
            var remaining = array[i].substring(1, array[i].length);
            var new_word = remaining + first_letter + 'ay';
            array[i] = new_word;
        }
    }
    var updated_string = array.join(' ');
    console.log(updated_string);
}

translate('derrick was here');