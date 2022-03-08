function showTemperature(response){

  let temperature= Math.round(response.data.main.temp)
  let degree = document.querySelector(".celsiusDegree");
  degree.innerHTML=`${temperature} ℃`
  let countryname= document.querySelector(".countryname")
  let country= (response.data.sys.country)
  countryname.innerHTML=` ,${country}`
  let city= (response.data.name)
  let citySearch= document.querySelector(".cityname");

  citySearch.innerHTML=`${city}`;

}

function changeDegreeToFarenheit (){
let degree = document.querySelector(".celsiusDegree");
degree.innerHTML="21 ℉"
}
function changeDegreeToCelsius(){
  let degree = document.querySelector(".celsiusDegree");
  degree.innerHTML="13 ℃"
  }

function onload(response){
  let apiKey = "1503251f149066d9708a96750131a5bd";

  let city= (response)
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
console.log(city)
  axios.get(apiUrl).then(showTemperature);

}
function searchTheCity(event) {
  event.preventDefault();
  let searchTerm= document.querySelector("#searchfield")
  let city= searchTerm.value
  onload(city);

}

function showcity(response){
  let city= (response.data[0].name)
  onload(city);
}

function yourposition(position)
{
  let latitude= (position.coords.latitude)
  let longitude= (position.coords.longitude)
  let apiKey = "1503251f149066d9708a96750131a5bd";
  let apiUrl=`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}0&limit=5&appid=${apiKey}`
console.log(latitude)
  axios.get(apiUrl).then(showcity);
}



function clickcurrent(event){
event.preventDefault();
navigator.geolocation.getCurrentPosition(yourposition);
}


onload("Yazd");

let searchButton = document.querySelector("#search");
searchButton.addEventListener("click", searchTheCity);

let farenheiButton = document.querySelector("#farenheit");
farenheiButton.addEventListener("click",changeDegreeToFarenheit )
let celsiusButton = document.querySelector("#celsius");
celsiusButton.addEventListener("click",changeDegreeToCelsius )

let currentButton= document.querySelector("#current") 
currentButton.addEventListener("click", clickcurrent)
let weather = [
  {
    name: "paris",
    temp: 19.7,
    humidity: 80,
  },
  {
    name: "tokyo",
    temp: 17.3,
    humidity: 50,
  },
  {
    name: "lisbon",
    temp: 30.2,
    humidity: 20,
  },
  {
    name: "san francisco",
    temp: 20.9,
    humidity: 100,
  },
  {
    name: "moscow",
    temp: -5,
    humidity: 20,
  },
];
let now = new Date();
let insertCurrentDate = document.querySelector(".currentdate");
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekDays[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let time = `${hour}: ${minute}`;
console.log(time);

insertCurrentDate.innerHTML = `${day} ${time}`;

let temp0 = Math.round(weather[0].temp);

let temp1 = Math.round(weather[1].temp);
let temp2 = Math.round(weather[2].temp);

let temp3 = Math.round(weather[3].temp);
let temp4 = Math.round(weather[4].temp);
///let search = prompt("enter a city");

if (search === weather[0].name) {
  alert(
    `It is currently ${temp0} ℃ (${temp0 * 1.5 + 32})℉ in ${
      weather[0].name
    } with a humidity of ${weather[0].humidity}% `
  );
} else if (search === weather[1].name) {
  alert(
    `It is currently ${temp1} ℃ (${temp1 * 1.5 + 32})℉ in ${
      weather[1].name
    } with a humidity of ${weather[1].humidity}% `
  );
} else if (search === weather[2].name) {
  alert(
    `It is currently ${temp2} ℃ (${temp2 * 1.5 + 32})℉ in ${
      weather[2].name
    } with a humidity of ${weather[2].humidity}% `
  );
} else if (search === weather[3].name) {
  alert(
    `It is currently ${temp3} ℃ (${temp3 * 1.5 + 32})℉ in ${
      weather[3].name
    } with a humidity of ${weather[3].humidity}% `
  );
} else if (search === weather[4].name) {
  alert(
    `It is currently ${temp4} ℃ (${temp4 * 1.5 + 32})℉ in ${
      weather[4].name
    } with a humidity of ${weather[4].humidity}% `
  );
} else {
  ///alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${search}`
 /// );
}
