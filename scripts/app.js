const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const getEmail = document.getElementById('email');
const getPassword = document.getElementById('password');
const getCalendar = document.getElementById('calendar');

let submitBtn = document.getElementById('form_get-submit');

let arrInfo = [];

const resetInfo = () => {
    firstName.value = '';
    lastName.value = '';
    getEmail.value = '';
    getPassword.value = '';
    getCalendar.value = '';
}

const setDataToEmail = () => {
    submitBtn.href += `?subject=Здравствуйте, меня зовут ${arrInfo[0]} ${arrInfo[1]}&body=${arrInfo[3]} ${arrInfo[4]}`;
}

const pushInfo = () => {
    arrInfo.push(firstName.value, lastName.value, getEmail.value, getPassword.value, getCalendar.value);

    submitBtn.href = 'mailto:leonzendero@gmail.com';
    setDataToEmail()
    resetInfo();
    arrInfo = [];

    console.log('submitBtn')
}

submitBtn.addEventListener('click', function () {pushInfo()});