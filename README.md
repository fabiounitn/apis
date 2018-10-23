# APIs - exercises

This folder includes some exercises to practice with APIs

## sunrise and sunsets

Create an API that receives names of US cities (like los angeles, california) and returns sunset and sunrise times for today.
To do so, the API should

- accept POST requests to add cities to the list of cities for which it provides information
- a get on /cities will return sunrise/sunset info. to do so the API will first contact mapquest to translate names into lat/lon, and then contac the sunrise api (https://sunrise-sunset.org/api) 

Notice that you will need to get an api key from mapquest, and find out which mapquest API you need to contact. you are also expected to do all of this on the fly.... when you get the GET request for /cities, get latlon and then get sunrise/sunset.

an initial solution, with room for improvement, is here: https://github.com/fabiounitn/apis/tree/master/cities



