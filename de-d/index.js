function calculate(operation, a, b) {
    // if (operation === 'add') {
    //     return a + b;
    // } else if (operation === 'multi') {
    //     return a * b;
    // } else if (operation === 'subtract') {
    //     return a - b;
    // }

    switch (operation) {
        case 'add':
            return a + b;
            break;
        case 'multi':
            return a * b;
            break;
        case 'subtract':
            return a - b;
            break;
    }
}
let result = calculate('multi', 2, 2);
console.log(result);