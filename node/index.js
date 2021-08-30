const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Docker + NODEJS</h1>')
})

app.listen(port, () => {
    console.log('Escutando na porta: ' + port)
})