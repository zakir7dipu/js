/*
 * object
 */
let mohonaG = ['Naban', 'Mohona', 'Kuddus', 'Kamal', 'Jamal', 'Jashim'];
// console.log(mohonaG[0]);
// console.log(mohonaG[1]);
// console.log(mohonaG[2]);
// console.log(mohonaG[3]);
// console.log(mohonaG[4]);
// console.log(mohonaG[5]);

// mohonaG.map((value, key) => {
//     console.log(`on my mohonaG variabel key is = ${key} and value is = ${value}`);
// })

// key and value pare
let employees = [
    {
        name: 'Naban',
        age: 23,
        height: 5.6
    },

    {
        name: 'Mohona',
        age: 22,
        height: 5.3
    },

    {
        name: 'Kuddus',
        age: 35,
        height: 5.9
    },

    {
        name: 'Kamal',
        age: 32,
        height: 5.8
    },

    {
        name: 'Jamal',
        age: 37,
        height: 5.0
    },

    {
        name: 'Jashim',
        age: 39,
        height: 5.7
    },
];

const table = document.querySelector('table');

for (let i = 0; i < employees.length; i++){
    let perEmployee = employees[i];
    mohona(perEmployee);
}

function mohona(employee){
    let row = document.createElement('tr');
    Object.keys(employee).map(function (key){
        let td = document.createElement('td');
        td.innerHTML = employee[key];
        row.appendChild(td);
    });
    // Object.keys(employee).forEach(function (key){
    //     let td = document.createElement('td');
    //     td.innerHTML = employee[key];
    //     row.appendChild(td);
    // });
    table.appendChild(row);
}
// employees.map((value, key) => {
//
// })

// foreach (persons as key => value) {
//
// }

let persons = {
    name: 'Karim',
    hobby: 'Reading book'
}

Object.keys(persons).forEach(function (key){
    console.log(key)
    console.log(persons[key]);
})

any();
function any(){
    return true
}