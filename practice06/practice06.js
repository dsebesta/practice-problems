console.clear();
console.log(Date());

function print_fib(steps) {
    var output = '', temp, counter = 0, start = 1, next = 0;
    for(var i=0; i < steps; i++) {
        output =  output + ' ' + next;
        temp = start;
        start = next;
        next = temp + next;
        ++counter;
        if (counter != steps) {output = output + ' ';}
    }
    console.log(output);
}
print_fib(12);
