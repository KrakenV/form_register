const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const getEmail = document.getElementById('email');
const getPassword = document.getElementById('password');
const getCalendar = document.getElementById('calendar');

const submitBtn = document.getElementById('form_get-submit');

let arrInfo = [];

console.log(firstName.value);

const resetInfo = () => {
    firstName.value = '';
    lastName.value = '';
    getEmail.value = '';
    getPassword.value = '';
    getCalendar.value = '';
}

const pushInfo = () => {
    arrInfo.push(firstName.value, lastName.value, getEmail.value, getPassword.value, getCalendar.value);
    arrInfo.forEach((item, index) => {
        console.log(`${index + 1}) ${item}`);
    });

    resetInfo();
}

submitBtn.addEventListener('click', function () {pushInfo()});