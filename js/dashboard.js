// code for dashboard page
const story1 = {
    name: "Jordan Blake",
    date: "1/25/22",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit"
}

const story2 = {
    name: "Sue Smith",
    date: "1/23/22",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit"
}

const story3 = {
    name: "Mike harris",
    date: "1/21/22",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit"
}


console.log(story1)
console.log(story2)
console.log(story3)

let allNews = [{
    name: "Jordan Blake",
    date: "1/25/22",
    content: "I loved the company trip to New York"
}, {
    name: "Sue Smith",
    date: "1/23/22",
    content: "This company has provided me with a great opportunity to volunteer for a local charity"
}


];

// displayAllNews(allNews)
const newsStory = document.getElementById('employeeStory');


//set and get variables for dashboard page

const getDashboardForm = document.querySelector('#etl_form2');
const nameInputValue = document.querySelector('#dashboard-name');
const getDashboardDate = document.querySelector('#dashboard-date');
const storyInputValue = document.getElementById('employee-story');
const signInError = document.getElementById('submitStoryError');


//set and get error message for page (name)


//set up event listener for dashboard page

getDashboardForm.addEventListener('submit', (evt) => {

    evt.preventDefault();
        console.log(nameInputValue.value);
    if(
        checkNotEmpty(nameInputValue.value,"you must enter a name")&&
        checkNotEmpty(storyInputValue.value.trim(),"you must enter a story")
    ){
        const newNews = {
            name: document.getElementById('dashboard-name').value, date: "1/27/22",
            content: document.getElementById('employee-story').value
        }



        allNews = [...allNews, newNews];
        displayAllNews(allNews);
        nameInputValue.value = "";
        storyInputValue.value = "";
    }




    //spread operator

    // console.log(storyCopy);
});

for (const key in allNews) {
    const newsCardDiv = document.createElement('div');
    newsCardDiv.innerHTML = `<div>
            <h3 class="font-medium">${allNews[key].name}</h3>
            <h5 class="text-sm text-yellow-200 my-2">${allNews[key].date}</h5>
            <p class="pb-2">${allNews[key].content}</p>
            <hr class="py-3">
        </div>`;
    newsStory.appendChild(newsCardDiv);
}

function displayAllNews(items) {
    newsStory.innerHTML = "";
    for (const key in items) {
        const newsCardDiv = document.createElement('div');
        newsCardDiv.innerHTML = `<div>
            <h3 class="font-medium">${items[key].name}</h3>
            <h5 class="text-sm text-yellow-200 my-2">${items[key].date}</h5>
            <p class="pb-2">${items[key].content}</p>
            <hr class="py-3">
        </div>`;
        newsStory.appendChild(newsCardDiv);
    }



}
function checkNotEmpty(domInput, errorMessage) {
    signInError.innerHTML = "";
    console.log("hello");
    if (domInput === "") {
        const div = document.createElement('div');
        div.innerHTML = `<p class="bg-blue-200 p-3 w-full rounded-lg 
                        text-center text-blue-900 font-bold">${errorMessage}</p>`;
        signInError.appendChild(div);
        return false; //ends block of code in if statement
    }

    return true
}