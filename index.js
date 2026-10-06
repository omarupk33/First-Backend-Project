const http = require('http')
const path = require('node:path/posix')
const fs = require('node:fs')
const { cursorTo } = require('node:readline')


const indexPath = path.join(__dirname, 'index.html')
const contactPath = path.join(__dirname, 'contact.html')
const aboutPath = path.join(__dirname, 'about.html')
const errPath = path.join(__dirname, '404.html')


const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html')

    res.statusCode = 200
    let currPath = req.url === '/' ? indexPath:
                   req.url === '/contact' ? contactPath:
                   req.url === '/about' ? aboutPath: errPath

    if(currPath === errPath) {res.statusCode = 404}
    

    fs.readFile(currPath, {encoding:'utf-8'}, (err, htmlContent)=>{

    
    if(err) {
        console.error("Error reading the HTML file:", err);
        res.end()
        }


    res.write(htmlContent)
    res.end()
    })
})

server.listen(8080, 'localhost', ()=>{
    console.log('Listening')
})
