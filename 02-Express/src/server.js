const express = require('express')

const server = express()

server.get('/', (request, response) => {
    response.send('The Express is Working!\n You are in the home page')
})

server.get('/articles', (req, res) => {
    res.send('The Express is Working!\n You are in asrticles page!')
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server Express started on http://localhost:${PORT}/`)
})