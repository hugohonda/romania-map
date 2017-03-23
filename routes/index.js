const routes = require('express').Router()
const maps = require('./maps') // require maps routes defined on './maps/index.js'

// if url = 'localhost:3000/' gets here
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' })
});

// if url = 'localhost:3000/maps' gets from maps dir index
routes.use('/maps', maps)

module.exports = routes