# Quick Weather

This repository contains a weather app using the Open Weather Map API. It was created to practice dealing with asynchronous tasks using JavaScript, through the handling of promises with the Fetch API.

This project is done following The Odin Project, which can
be found [here](https://www.theodinproject.com/courses/javascript/lessons/weather-app).

## Important

To use this project, an OpenWeatherMap API key is required. The appropriately named variable indicates where it is to be set as a string at the top of the JavaScript file.

As this project was created for practicing purposes, no demo is available. This is due to this application's lack of an appropriate backend, which would be capable of storing and hiding one's API key. In its current state without one, adding an API key should only be done if one should choose to use this application in a local development environment. Otherwise, doing so in any type of public setting would expose the API key, which no one wants.

## Usage

To get the weather at the location of your choosing, one needs to fill out the weather form with the following criteria:

* City Name
* Country Code [ISO List](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)
* Unit of Measurement (Set to Fahrenheit by default)

If an error occurs, an error message will appropriately display. Otherwise on success, the city name, current temperature, and weather description will display using a spectrum of background colors based on the temperature as follows:

* Hot - Red
* Warm - Orange
* Moderate - Green
* Chilly - Light Blue
* Cold - Dark Blue

## Additional Notes

* [Open Weather Map](https://openweathermap.org/)
* [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [Extra Reading About Securing API Keys](http://billpatrianakos.me/blog/2016/02/15/securing-api-keys-in-a-javascript-single-page-app/)