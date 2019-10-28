// Set your Open Weather API key here
const apiKey = "";

async function getResponse(city, country, measurement) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${measurement}&APPID=${apiKey}`);
    // Handle status codes since only networking errors are caught
    if (response.status !== 200) {
      throw response.status;
    }
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  catch(error) {
    if (error == 404) {
      displayError('The location you searched for could not be found.');
    } else if (error == 401) {
      displayError('Missing or unknown API key.');
    } else {
      displayError('Error retrieving weather data, please try again.');
    }

    return 'Error';
  }
}

function parseResponse(response) {
  const data = {};

  data['location'] = response.name;
  data['temperature'] = parseInt(response.main.temp).toString();
  data['description'] = response.weather[0].main;

  return data;
}

async function submitForm(event) {
  event.preventDefault();

  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country-code').value;
  const measurement = document.querySelector('input[name=measurement]:checked').value;

  const response = await getResponse(city, country, measurement);
  if (response !== 'Error') {
    displayWeather(parseResponse(response), measurement);
  }
}

function displayWeather(weather, measurement) {
  clearDisplay();
  // Create container
  let weatherDiv = document.createElement('div');
  weatherDiv.classList.add('weather-container');
  weatherDiv.classList.add(adjustBackground(parseInt(weather['temperature']), measurement));

  // Create location text element
  let locationText = document.createElement('h3');
  locationText.className = 'location';
  locationText.textContent = weather['location'];

  // Create temperature text element
  let temperatureText = document.createElement('h3');
  temperatureText.className = 'temperature';
  temperatureText.textContent = weather['temperature'];

  // Create description text element
  let descriptionText = document.createElement('h3');
  descriptionText.className = 'description';
  descriptionText.textContent = weather['description'];

  // Appending everything
  const resultsNode = document.querySelector('.results');
  weatherDiv.appendChild(locationText);
  weatherDiv.appendChild(temperatureText);
  weatherDiv.appendChild(descriptionText);
  resultsNode.appendChild(weatherDiv);
}

function displayError(error) {
  clearDisplay();

  // Create container
  let errorDiv = document.createElement('div');
  errorDiv.className = 'error-container';

  // Create error text element
  let errorText = document.createElement('h3');
  errorText.className = 'error';
  errorText.textContent = error;

  // Appending everything
  const resultsNode = document.querySelector('.results');
  errorDiv.appendChild(errorText);
  resultsNode.appendChild(errorDiv);
}

function clearDisplay() {
  const resultsNode = document.querySelector('.results');

  while (resultsNode.firstChild) {
    resultsNode.removeChild(resultsNode.firstChild);
  }
}

function adjustBackground(temperature, measurement) {
  if (measurement === "imperial") {
    if (temperature > 85) {
      return "hot";
    } else if (temperature > 70) {
      return "warm";
    } else if (temperature > 55) {
      return "moderate";
    } else if (temperature > 40) {
      return "chilly";
    } else if (temperature < 40) {
      return "cold";
    }
  } else if (measurement === "metric") {
    if (temperature > 29) {
      return "hot";
    } else if (temperature > 21) {
      return "warm";
    } else if (temperature > 12) {
      return "moderate";
    } else if (temperature > 4) {
      return "chilly";
    } else if (temperature < 4) {
      return "cold";
    }
  }
}

window.addEventListener('DOMContentLoaded', function(e) {
  document.querySelector('#submit').addEventListener('click', function(e) {
    submitForm(e);
  });
});