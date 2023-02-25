// url for weather
// "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={2e3d7a332c672b7a82c412de6660703a.}"

//THINGS I NEED TO MAKE WORK
//search button to search for a location's weather
//get weather results
//get time/dates from moment.js
//write to page

//select weather factors to display temp - humidity- windspeed [not sunshine:-(]

//store the data to local storage
//fetch the data from local storage

//consider: Units, Icons for conditions

// API query 
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=2e3d7a332c672b7a82c412de6660703a";
//DOM query selectors
var inputEl = document.querySelector("");
var searchBtnEl = document.querySelector("");
var citiesListEl = document.querySelector("");
// Event Listener for search button
searchBtnEl.addEventListener('click', returnCityData);