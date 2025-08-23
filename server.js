const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('jiggaboo')
    } else if (req.url === '/about') {
        res.end('about me')
    } else {
        res.end(`<h1>wrong link gurt</h1>
            <a href='/'>back</a>`)
    }
})

server.listen(5001);