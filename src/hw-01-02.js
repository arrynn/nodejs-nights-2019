'use strict'

const request = require('request-promise')

const INITIAL_URL = 'http://swapi.co/api/people/1'

function run() {
    getSkywalkerDetails()
        .then(skywalker => getVehiclesDetails(skywalker.vehicles))
        .then(vehiclesDetails => printVehiclesNames(vehiclesDetails));
}

function getSkywalkerDetails(then) {
    return request({
            uri: `${INITIAL_URL}`,
            json: true
        }
    )
}

function getVehiclesDetails(vehicleUrls) {
    return Promise.all(vehicleUrls.map(i => request({url: i, json: true})));
}


function printVehiclesNames(vehicles) {
    for (const vehicle of vehicles) {
        console.log(vehicle.name);
    }
}


run()
