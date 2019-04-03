'use strict'

const util = require('./hw-01-util')
const request = require('request')

const INITIAL_URL = 'http://swapi.co/api/people/1'

function run() {
    getSkywalkerDetails((skywalker) =>
        getVehiclesDetails(skywalker.vehicles, (vehicle) =>
            printVehicle(vehicle))
    );
}

function handleResult(err, data, callback) {
    if (err) {
        util.objOut(`error`, err)
        return
    }

    if (callback !== undefined) {
        callback()
    } else {
        util.jsonOut('data', data.body)
    }
}

function getSkywalkerDetails(then) {
    request(
        `${INITIAL_URL}`,
        (err, data) => handleResult(err, data, () => then(JSON.parse(data.body)))
    )
}

function getVehiclesDetails(vehicleUrls, then) {
    vehicleUrls.map(i => request(
        i,
        (err, data) => handleResult(err, data, () => then(JSON.parse(data.body)))
    ))
}


function printVehicle(vehicle) {
    console.log(vehicle.name)
}


run()
