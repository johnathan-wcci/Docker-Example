const express = require('express')
const cors = require('cors')
app = express()
config = {
    name: 'test-app-backend',
    host: '0.0.0.0',
    port: 3000
}

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({
        'message': 'Server is Alive'
    })
})

app.get('/test', (req, res) => {
    res.status(200).json({
        'message': 'I am just a test, dummy.'
    })
})

app.get('/backend', (req, res) => {
    res.status(200).json({
        'message': 'Backend  Test'
    })
})

app.listen(config.port, config.host, () => {
    console.log(`${config.name} running on ${config.host}:${config.port}`)
})