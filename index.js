const express = require('express')
const path = require('node:path/posix')
const fs = require('node:fs')
const app = express()
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

const errPath = path.join(__dirname, '404.html')

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);



app.use((err, req, res, next)=>{
    console.error(err)
    res.status(err.statusCode || 500).send(err.message);
})


app.listen(process.env.PORT || 3000, (err)=>{
    if(err){
        throw err
    }
    console.log('Is listening')
})