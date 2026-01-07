const pi = 3.1415926535;
let radius = 3;

let area = pi * (radius ** 2);
console.log(`Area: ${area}`);

const one = 1
const two = "2"
let result = one * two
// type coerison assumes two was supposed to be an int and converts it automatically
console.log(result)
// this concatenates instead of using type coersion
result = one + two
console.log(result)

// let i = 1
// while (i < 10){
//     console.log(i)
//     i++;
// }

for (i = 0; i < 20; i++){
    console.log(i)
}
