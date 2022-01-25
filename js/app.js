
//1.index page validation and interactions


//2.set variables for form, input fields, and submit input

const getForm = document.querySelector('#etl_form');
const getName = document.querySelector('#name');
const getEmail = document.querySelector('#email');

//3.set variables for error messages

const getErrorName = document.querySelector('#errorName');
const getErrorEmail = document.querySelector('#errorEmail');

//--------------------------Event Listener----------------------------------------------

getForm.addEventListener('submit',(event)=>{
    event.preventDefault();



})