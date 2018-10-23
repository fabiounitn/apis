
const fetch = require("node-fetch");
const express = require('express')
var bodyParser = require('body-parser')

const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

const MAPQUEST_KEY = process.env.MAPQUEST_KEY || 'TdbS27HK7GGetiCHXFEd3eHdnAp78hFx'

const MAPQUEST_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=' + MAPQUEST_KEY + '&location='//Washington,DC
const SUN_URI = 'https://api.sunrise-sunset.org/json'
var cities_supported= [] //{name: 21, state: 'HCI'},






app.get('/', (req, res) => res.send('Hello World!'))

app.get('/cities/:id', async (req, res) => {

    const index = courses_offered.findIndex((item) => {return item.id===req.params.id})
    if (index===-1) {
        res.sendstatus(404)
        return
    }

    try {
            //console.log(url)
            const mapq_response = await fetch(MAPQUEST_URL+'los%20angeles,ca', {
                headers: {
                    'Accept' : 'application/json',
                }
            })
            const mapq_json = await mapq_response.json()
            latlon = mapq_json.results[0].locations[0].latLng
            //console.log('\nlatlon in asynch ', latlon)

            const sun_response = await fetch(SUN_URI+'?lat=' + latlon.lat+ '&lng=' +latlon.lng, {
                headers: {
                    'Accept' : 'application/json',
                }
            })
            const sun_json = await sun_response.json()

            res.status(200)
            res.send(sun_json.results)
        } catch (error) {
            res.sendstatus(500)
            console.log('\n\nerror', error)

        }
})

app.get('/cities', async (req, res) => {

    try {

        const map_results = await Promise.all(cities_supported.map(city => {
            const url = MAPQUEST_URL+encodeURIComponent(city.name)+','+encodeURIComponent(city.state)
            console.log(url)
            return fetch(url, {
                headers: {
                    'Accept' : 'application/json',
                }
            })
                .then((response) => response.json())
                .then((json) => {
                    //console.log(json)
                    return json.results[0].locations[0].latLng
                } )
        })
        )

        const sun_results = await Promise.all (map_results.map( latlon => {
            return fetch(SUN_URI+'?lat=' + latlon.lat+ '&lng=' +latlon.lng, {
                headers: {
                    'Accept' : 'application/json',
                }
            }).then((response) => response.json())
        } ))
        


        console.log('\n\nsending', sun_results)

        res.status(200)
        res.send(sun_results)
    } catch (error) {
        console.log('\n\nerror', error)
        res.sendstatus(500)

    }
})




app.post('/cities', (req, res) => {
    // there are a million checks we should do here, but let's assume all works fine
    const city_name = req.body.name
    const city_state = req.body.state

    const city_id = city_name.replace(/\s/g, '')+'---'+city_state
    const city =  {id:city_id, name:city_name, state: city_state}
    cities_supported.push(city)

    res.status(201)
    res.json(city)
    console.log(cities_supported)
})



app.listen(PORT, () => console.log('Example app listening on port '+ PORT))





