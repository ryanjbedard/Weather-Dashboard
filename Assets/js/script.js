var userCitySearchEl = document.querySelector("#user-search");
var apiKey = "8e727616e135223bd7c755a1def0cd46";
var searchHistory = localStorage.getItem("localCity") || []
var savedCities = JSON.parse(localStorage.getItem("savedCities"))
// var requestCoordinates = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityStateCountryInput + "&limit=5&appid=" + apiKey;
// var request5DayForecast = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

// Function taking the user search information from the input field
function userSearchInput(event) {
  event.preventDefault();

 
  var cityStateCountryInput = userCitySearchEl.value.trim();

  if (cityStateCountryInput) {
    getCityCoordinates(cityStateCountryInput);

    userCitySearchEl.value = " ";
  } else {
    alert("Please enter a city.");
  }
}

var getCityCoordinates = function (cityStateCountryInput) {
  var requestCoordinates =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityStateCountryInput +
    "&limit=5&appid=" +
    apiKey;

  fetch(requestCoordinates)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};

function getForecase(lat, lon){
   var request5DayForecast =
      "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
}
console.log(getCityCoordinates);
userCitySearchEl.addEventListener("click", function(){
  searchHistory.push[cityInput.value]
});
