const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/souvik', (req, res) => {
  res.send('<a href="https://codepen.io/Souvikmsd7/">Souvik Codepen</a>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})