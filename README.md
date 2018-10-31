# APIs - exercises

This folder includes some exercises to practice with APIs

## sunrise and sunsets

Create an API that receives names of US cities (like los angeles, california) and returns sunset and sunrise times for today.
To do so, the API should

- accept POST requests to add cities to the list of cities for which it provides information
- a get on /cities will return sunrise/sunset info. to do so the API will first contact mapquest to translate names into lat/lon, and then contac the sunrise api (https://sunrise-sunset.org/api) 

Notice that you will need to get an api key from mapquest, and find out which mapquest API you need to contact. you are also expected to do all of this on the fly.... when you get the GET request for /cities, get latlon and then get sunrise/sunset.

an initial solution, with room for improvement, is here: https://github.com/fabiounitn/apis/tree/master/cities

## test a service

Implement a method that has in input an object with four fields: 
- url, a string 
- http_method, a string with values from (GET POST PUT or DELETE), 
- payload, an object to be sent in case of post or put , and 
- expectedResultStatus (a number)

Your method will call the url with the specified http_method and payload, and checks if the expected result http status code is equal to expectedResult.
If so, it returns true to the caller, if not it returns false

Publish this method in an heroku app and try it out

## test the service that tests a service
Take the service described above, and write a jest module that tests it




