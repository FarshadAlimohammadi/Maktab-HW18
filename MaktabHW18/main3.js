var string=0, boolean=0, number=0, array=0;

// model 1
// for (var i=1; i <= 3; i++) {
//     var input = prompt("plz enter array:");
//     var inputArray = [];
//     inputArray = input.split(' ');
//
//     if (inputArray.length > 1) {
//         array++;
//     }
//     else {
//         if (input === 'true' || input === 'false') {
//             boolean++;
//         }else {
//             input = parseInt(input);
//             if (!isNaN(input)) {
//                 number++;
//             }else {
//                 string++;
//             }
//         }
//     }
// }

// model 2
var arry = [1, 2, "Hello", [true, 3], false];
for (var i = 0; i < arry.length; i++) {
    if (Array.isArray(arry[i])) {
        array++;
    } else if (typeof(arry[i]) == "number") {
        number++;
    } else if (typeof(arry[i]) == "string") {
        string++;
    } else if (typeof(arry[i]) == "boolean") {
        boolean++;
    }

}

console.log("String: " + string)
console.log("Boolean: " + boolean)
console.log("Number: " + number)
console.log("Array: " + array)