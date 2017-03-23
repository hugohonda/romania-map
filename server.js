// depencencies
const app = require('express')()
const routes = require('./routes')
const PORT = process.env.PORT || 3000

// conect to all app routes
app.use('/', routes)

// start listening on defined port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})