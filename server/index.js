const express = require('express')
const bodyParser = require('body-parser')
var moment = require('moment');
const app = express()
const port = 3001


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routers/index.router'))

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

