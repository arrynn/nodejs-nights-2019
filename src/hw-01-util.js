'use strict'

function prettyPrint(obj) {
    return JSON.stringify(obj, null, 4)
}

function prettifyJson(json) {
    return prettyPrint(JSON.parse(json))
}

function jsonOut(title, json) {
    console.log(`${title.toUpperCase()}:\n${prettifyJson(json)}`)
}

function objOut(title, obj) {
    console.log(`${title.toUpperCase()}:\n${prettyPrint(obj)}`)
}

module.exports = {
    prettyPrint: prettyPrint,
    prettifyJson: prettifyJson,
    jsonOut: jsonOut,
    objOut: objOut
}