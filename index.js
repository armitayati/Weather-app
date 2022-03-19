function showTemperature(response){
  celsiusTemperature=response.data.main.temp;

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
let describe=(response.data.weather[0].description)
description.innerHTML=`${describe}`
let iconmainday=document.querySelector(".iconmainday")
iconmainday.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

function changeDegreeToFarenheit (){
let degree = document.querySelector(".celsiusDegree");
let farenheitTemperature= (celsiusTemperature*9)/5+32;
degree.innerHTML=Math.round(farenheitTemperature)
}
function changeDegreeToCelsius(){
  let degree = document.querySelector(".celsiusDegree");
  degree.innerHTML= Math.round( celsiusTemperature);

  }
function onload(response){
  let apiKey = "1503251f149066d9708a96750131a5bd";

  let city= (response)
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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

function yourposition(position){
    let latitude= (position.coords.latitude)
  let longitude= (position.coords.longitude)
  let apiKey = "1503251f149066d9708a96750131a5bd";
  let apiUrl=`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}0&limit=5&appid=${apiKey}`
  axios.get(apiUrl).then(showcity);
}
function clickcurrent(event){
event.preventDefault();
navigator.geolocation.getCurrentPosition(yourposition);
}

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
insertCurrentDate.innerHTML = `${day} ${time}`;

let celsiusTemperature= null
onload("Yazd");
