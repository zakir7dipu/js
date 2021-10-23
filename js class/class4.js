let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');

let email = document.querySelector('#email');

let password = document.querySelector('#password');
let confirm_password = document.querySelector('#confirm_password');

const form = document.querySelector('form');
form.addEventListener('submit', save);
function save(e){
    e.preventDefault();
    let input_fname = fname.value;
    let input_lname = lname.value;
    let input_name = input_fname + ' ' + input_lname;
    let input_email = email.value;
    let input_password = password.value;
    let input_confirm_password = confirm_password.value;

    let checkPass = checkConfirmPassword(input_password, input_confirm_password);
    if (checkPass === false){
        return;
    }
}

function checkConfirmPassword(pass, c_pass){
    if (!pass.match(c_pass)){
        confirm_password.parentElement.querySelector('.error').innerHTML = 'Confirm Password is not match';
        return false;
    }
    return true;
}


