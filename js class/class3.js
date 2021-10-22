// 1. string.trim()
// 2. string.length
// 3. string.charAt(3)
// 4. string.toUpperCase()
// 5. string.toLowerCase()
// 6. string.concat(string)
// 7. string.slice(index, index)
// 8. string.includes(string)
// 9. string.match(string)

// trim() & length *********
// let a = '   Hello world';
// console.log(a.length, a);
// a = a.trim();
// console.log(a.length, a);

// string.charAt(3) *********
// (Assign operator +=, -=, *=, /=, %=, *=, **=)
// let name = 'Rohim'; //mihoR
// console.log(name.charAt(2));
// console.log(name[2]);
// console.log(name.length);

// let name = 'Rohim';
// showRevarsString(name);
// function showRevarsString(string){
//     // i = 0; i < v.length; i++
//     let result = '';
//     for (let i = string.length-1; i >= 0; i--){
//          result += string[i]
//         // let result += string[i];
//         // result = result + string[i];
//         // result += name.charAt(i);
//     }
//     console.log(result);
// }

/*
    1. Write a function that takes two strings as input and
    2. returns true or false as output
    3. depending on whether one string contains the other.
 */

// let a = 'He is a nice man';
// let b = 'great man';
// let c = 'nice man'

// let show = showRevarsString(a, c);
// document.write(`a = ${a} & b = ${b} </br>`);
// document.write(`a = ${a} & c = ${c} </br>`);

// let show =  a.includes(c) ? true : false;
// document.write(show);

// function showRevarsString(string1, string2){
//     // if (string1.includes(string2)){
//     //     return true;
//     // }else {
//     //     return false
//     // }
//     if (string1.match(string2)){
//         return true;
//     }else {
//         return false
//     }
// }

// let a = 'Hello world students';
// let b = 'students'
let show = showBoolian(a, b);
console.log(show);
function showBoolian(string1, string2){
    let word = string1.split(' ');
    console.log(word);
    let output = false;
    for (let i = 0; i < word.length; i++){
        if (word[i] === string2){
            output = true
        }else {
            output = false;
        }
        console.log(output);
    }
    return output;
}


// 5. string.toLowerCase()
// 6. string.concat(string)
// 7. string.slice(index, index)

let a = 'hi naMfiz';
let b = ' how are you';
// console.log(a);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
//console.log(a.slice(3, a.length));

// console.log(a.concat(b));
// console.log(a+ ' ' + b);
// console.log(`${a} ${b}`);