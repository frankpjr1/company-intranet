//code for dashboard page


//set and get variables for dashboard page

const getDashboardForm = document.querySelector('#etl_form2');
const nameInputValue = document.querySelector('#dashboard-name');
const getDashboardDate = document.querySelector('#dashboard-date');
const storyInputValue = document.getElementById('employee-story');
const signInError = document.getElementById('submitStoryError');



//set and get error message for page (name)




//set up event listener for dashboard page

getDashboardForm.addEventListener('submit',(evt)=>{
    signInError.innerHTML = "";
    evt.preventDefault();

    if (
        checkNotEmpty(nameInputValue,"your name is required")&&
        checkNotEmpty(storyInputValue,"short story required")
    ){

        }


});


function checkNotEmpty(domInput,errorMessage){
    if(domInput.value === ""){
        const div = document.createElement('div');
        div.innerHTML =`<p class="bg-blue-200 p-3 w-full rounded-lg 
                        text-center text-blue-900 font-bold">${errorMessage}</p>`;
        signInError.appendChild(div);
        return false; //ends block of code in if statement
    }

    return true}