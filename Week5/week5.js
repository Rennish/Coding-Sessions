function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = cityElement.innerHTML = searchInputElement.value;


  let currentcityTemperature = document.querySelector("#current-Temperature"); 
  let cityTemperature = document.querySelector("#currentTemperature"); 

  cityTemperature.innerHTML = currentcityTemperature ; 

}

 
let apikey = "73dof19a030ad06t05b21e8521b4860f"; 
let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`; 

axios.get(apiurl).then(search); 

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);


