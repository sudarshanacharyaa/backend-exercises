console.log("This is successfully working")

const fname = document.getElementById('validationCustom01');
const lname = document.getElementById('validationCustom02');
const email = document.getElementById('validationCustomUsername');
const city = document.getElementById('validationCustom03');
const state = document.getElementById('validationCustom04');
const zipcode = document.getElementById('validationCustom05');
const query = document.getElementById('validationQuery');
const termsAndConds = document.getElementById('invalidCheck');

let validFname = false;
let validLname = false;
let validEmail = false;

fname.addEventListener('blur', () => {
    let regex = /^[A-Z]([a-z]){1,15}$/

    let str = fname.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        fname.classList.remove('is-invalid');
        validFname = true;
    } else {
        console.log('Your name is not valid');
        fname.classList.add('is-invalid');
        validFname = false;

    }
})

lname.addEventListener('blur', () => {
    let regex = /^[A-Z]([a-z]){1,15}$/

    let str = lname.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        lname.classList.remove('is-invalid');
        validLname = true;
    } else {
        console.log('Your name is not valid');
        lname.classList.add('is-invalid');
        validLname = false;

    }
})

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/

    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        console.log('Your name is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{

    e.preventDefault();
    console.log('You clicked on submit');

if (validEmail && validFname && validLname) {
    let failure = document.getElementById('failure');
    let success = document.getElementById('success');
    success.classList.add('show');

    $('#failure').hide();
    $('#success').show();
} else {

    let failure = document.getElementById('failure');
    failure.classList.add('show');

    $('#success').hide();
    $('#failure').show();
}
})