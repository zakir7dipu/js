/*
Array
======
Array is a collections of variable

 */

// let name1 = "Naban";
// let name2 = "Mohona";
// let name3 = "Kuddus";
// let name4;
//
// let names = new Array();
// let names = [];
//
// names[0] = "Naban";
// names[1] = "Mohona";
// names[2] = "Kuddus";
// names[3] = "Kamal";
// names[4] = "Jamal";
// names[5] = "Jashim";
// console.log(names)

// let mohonaG = ['Naban', 'Mohona', 'Kuddus', 'Kamal', 'Jamal', 'Jashim'];
// let nabanG = ['Mofij', 'Sokhina', 'Amana'];
// // let newCar= mohonaG.concat(nabanG);
// // console.log(newCar)
// // names.push('Hasina');
//
// for (let y = 0; y < nabanG.length; y++){
//     mohonaG.push(nabanG[y]);
// }
//
// // console.log(mohonaG);



// for (let i = 0; i < newNames.length; i++){
//     document.write("Index "+(i)+'= '+ newNames[i]+'</br>');
// }
//
//
// document.write('</br></br></br>')
// for (let x = 0; x < names.length; x++){
//     document.write("Index "+(x)+'= '+ names[x]+'</br>');
// }

let gotName = document.querySelector('#inputName');
let saveBtn = document.querySelector('button');
let list = document.querySelector('#listOfName');
let names = [];

saveBtn.addEventListener('click', addName);
function addName(a){
    a.preventDefault();
    let name = gotName.value;
    names.push(name);
    display();
}

function display(){
    let child = document.createElement('li');
    child.innerHTML = names[names.length - 1]; //1-1 =0
    list.appendChild(child);
}

