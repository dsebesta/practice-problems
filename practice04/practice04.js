// function ab_order(array) {
//   array.sort(array)
// }


function bubble_sort(array) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped);
    return array
}




var myArray = ['mouse', 'cat', 'dog', 'human'];
//ab_order(myArray);
//console.log(myArray);

bubble_sort(myArray);
console.log(bubble_sort(myArray))