const express = require('express')
const path = require('node:path/posix')
const fs = require('node:fs')

const app = express()



const indexPath = path.join(__dirname, 'index.html')
const contactPath = path.join(__dirname, 'contact.html')
const aboutPath = path.join(__dirname, 'about.html')
const errPath = path.join(__dirname, '404.html')


// With just node
app.get('/', (req, res,) =>{
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200

    
    fs.readFile(indexPath, {encoding:'utf-8'}, (err, htmlContent)=>{
    if(err) {
        console.error("Error reading the HTML file:", err);
        res.end()
        }


    res.write(htmlContent)
    res.end()
    })
})



// With express

app.get('/contact', (req, res,) =>{
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200
  res.sendFile(contactPath);
})




app.get('/about', (req, res,) =>{
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200

  res.sendFile(aboutPath);
})



app.use((req, res, next) => {
  res.status(404)
  res.sendFile(errPath);
});




app.listen(process.env.PORT || 3000, (err)=>{
    if(err){
        throw err
    }
    console.log('Is listening')
})
