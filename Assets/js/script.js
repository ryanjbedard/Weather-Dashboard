var userCitySearchEl = document.getElementById("searchBox");
var citySearchButton = document.getElementById("search-button");

var apiKey = "8e727616e135223bd7c755a1def0cd46";
var searchHistory = localStorage.getItem("localCity") || [];
var savedCities = JSON.parse(localStorage.getItem("savedCities"));

// var requestCoordinates = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityStateCountryInput + "&limit=5&appid=" + apiKey;
// var request5DayForecast = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

// Function taking the user search information from the input field
console.log(citySearchButton);

// Function to Grab API Data
function getCityData(event) {
  // Stop Submit so it's not oversubimitting API calls
  event.preventDefault();

  // Assigning variable for city input
  var cityStateCountryInput = userCitySearchEl.value.trim();

  // Checking city input
  if (cityStateCountryInput) {
    getCoordinates(cityStateCountryInput);
    // Clears Search Box
    userCitySearchEl.value = "";
  } else {
    alert("Please enter a city.");
  }
}

function getCoordinates(city){

  var requestCoordinates =
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&limit=5&appid=" +
      apiKey;

     fetch(requestCoordinates)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data[0]);
        let lat = data[0].lat;
        let lon = data[0].lon;

        getForecase(lat, lon);
      });

}

function getForecase(lat, lon) {
  var request5DayForecast =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey;

    console.log(request5DayForecast)
}
citySearchButton.addEventListener("click", getCityData);