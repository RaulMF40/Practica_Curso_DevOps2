const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Main Service is running')
})

app.listen(PORT, () => {
  console.log(`Main Service running on port ${PORT}`)
})
