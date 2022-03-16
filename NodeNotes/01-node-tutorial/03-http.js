
const http = require('http')

// 1. intro
/* const server = http.createServer((req, res) => {
    console.log(req)
    res.end('Welcome to your first page!')
})
server.listen(5100) */

// 2. url
/* 
const server = http.createServer((req, res)=> {
    if(req.url === '/') {
        res.end('Welcome to your first design page!')
    } else if (req.url === '/about') {
        res.end('This page is about the url content')
    } else {
        res.end(`
        <h1>Oops!</h1> 
        <p>We can't seem to find the page you are looking for</p>
        <a href = "/">back home</a>
        `)
    }
})

server.listen(5100) */

// 3. request-event 原理见04-events


// default size of buffer: 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })


const server = http.createServer()
server.on('request', (req, res) => {
    res.end('Welcome')
})
server.listen(5100)

