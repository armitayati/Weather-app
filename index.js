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
  let windSpeed=document.querySelector(".windSpeed");
let speed=Math.round(response.data.wind.speed)
windSpeed.innerHTML=`${speed}`
let humidity=document.querySelector(".humidity")
let humiditypercentage=Math.round(response.data.main.humidity)
humidity.innerHTML=`${humiditypercentage}`
let description=document.querySelector(".description")
let describe=(response.data.weather.main)
description.innerHTML=`${describe}`
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

