const maps = require('express').Router()
const all = require('./all')

maps.get('/', all)

module.exports = maps