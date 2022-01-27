//code for dashboard page


//set and get variables for dashboard page

const getForm = document.querySelector('#etl_form1');
const nameInputValue = document.querySelector('#name');
const emailInputValue = document.querySelector('#email');
const signInError = document.getElementById('errorMessage');

//set and get error message for page (name)

// const displayErrorNameEl = document.querySelector('#errorName');
// const displayErrorEmailEl = document.querySelector('#errorEmail');



//set up event listener for sign-in page


getForm.addEventListener('submit',(evt)=>{
    signInError.innerHTML = "";
    evt.preventDefault();

    if(
        checkNotEmpty(nameInputValue,"you must enter a name")&&
        checkNotEmpty(emailInputValue,"you must enter an email")
    ){
        window.location.href = '/dashboard.html';
    }

});

//created function to validate inputs, create div,set inner html to create div, and append to element on index page.

function checkNotEmpty(domInput,errorMessage){
    if(domInput.value === ""){
        const div = document.createElement('div');
        div.innerHTML =`<p class="bg-blue-200 p-3 w-full rounded-lg 
                        text-center text-blue-900 font-bold">${errorMessage}</p>`;
        signInError.appendChild(div);
        return false; //ends block of code in if statement
    }

return true}


