const http = require('node:http') // HTTP protocol
const { findAvailablePort } = require('./free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('Request received :)')
    res.end('Hello World from Node Server!')
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${server.address().port}`)
    })
})
