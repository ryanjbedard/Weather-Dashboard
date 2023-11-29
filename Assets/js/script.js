var userCitySearch = document.querySelector("#user-search");
var apiKey = "8e727616e135223bd7c755a1def0cd46";
// var requestCoordinates = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityStateCountryInput + "&limit=5&appid=" + apiKey;
// var request5DayForecast = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

// Function taking the user search information from the input field
function userSearchInput(event) {
  event.preventDefault();
  var requestCoordinates =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityStateCountryInput +
    "&limit=5&appid=" +
    apiKey;
  var request5DayForecast =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" + {lat} + "&lon=" + {lon} + "&appid=" + apiKey;
  var cityStateCountryInput = userCitySearch.value.trim();
  
  if(cityStateCountryInput) {
    userCitySearch.value = "";
  } else {
    alert('Please enter a city.');
  }

}

// fetch(requestCoordinates)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);

//   });
userSearchInput();