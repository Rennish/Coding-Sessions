function displayresults(result){
  console.log(result.data[0].email);
}


function displayweather(weatherresults){
  console.log(weatherresults.data.temperature.current); 

  let h1 = document.querySelector("h1"); 

  let currentTemperature = Math.round(weatherresults.data.temperature.current) ; 

  //let currentTemperature = weatherresults.data.temperature.current


  h1.innerHTML = `It is  ${currentTemperature}°C in  ${city}` ; 

}
let apiUrl = "https://jsonplaceholder.typicode.com/comments/";

let city = prompt("Enter the name of your city") ; 
let apiKey = "73dof19a030ad06t05b21e8521b4860f" ; 

let apiUrl2 = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric` ; 




axios.get(apiUrl).then(displayresults);

axios.get(apiUrl2).then(displayweather) ; 