
const fetch = require("node-fetch");
const url = "http://localhost:3000"


async function postBody(url, body) {
    console.log('\nposting ' + url, body)

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            },
        });
        console.log(response.status)
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}


const get = async url => {
    console.log('\ngetting ' + url)
    try {
        const response = await fetch(url, {
            headers: {
                'Accept' : 'application/json',
            }
        })
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}


postBody(url+'/cities',{
    name: 'los angeles',
    state: 'california'
})


get (url+'/cities')

