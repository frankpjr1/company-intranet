//code for dashboard page


//set and get variables for dashboard page

const getForm = document.querySelector('#etl_form1');
const getName = document.querySelector('#name');
const getEmail = document.querySelector('#email');

//set and get error message for page (name)

const errorMessName = document.querySelector('#errorName');
const errorMessEmail = document.querySelector('#errorEmail');


//set up event listener for dashboard page

getForm.addEventListener('submit',(evt)=>{

    evt.preventDefault();

    if(getName.value === ""){
        const errorMess = document.createElement('div');
        errorMess.innerHTML = "you must enter your name";
        errorMessName.append(errorMess);
    }

    if(getEmail.value === ""){
        const errorMess = document.createElement('div');
        errorMess.innerHTML = "you must enter your name";
        errorMessEmail.append(errorMess);
    }


})