//code for dashboard page


//set and get variables for dashboard page

const getDashboardForm = document.querySelector('#dashboard-form');
const getDashboardName = document.querySelector('#dashboard-name');
const getDashboardStory = document.querySelector('#employee-story');

//set and get error message for page (name)

const errorMessDash = document.querySelector('#error-name-dash');


//set up event listener for dashboard page

getDashboardForm.addEventListener('submit',(evt)=>{

    evt.preventDefault();
})