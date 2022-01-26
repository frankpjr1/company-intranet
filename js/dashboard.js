//code for dashboard page


//set and get variables for dashboard page

const getDashboardForm = document.querySelector('#etl_form2');
const getDashboardName = document.querySelector('#dashboard-name');
const getDashboardStory = document.querySelector('#employee-story');

//set and get error message for page (name)

const errorMessDash = document.querySelector('#error-name-dash');


//set up event listener for dashboard page

getDashboardForm.addEventListener('submit',(evt)=>{

    evt.preventDefault();

    if (getDashboardStory){
        alert("you forgot to tell us your story");
        return false;
    }


})