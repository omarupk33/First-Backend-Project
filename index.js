const express = require('express')
const path = require('node:path/posix')
const fs = require('node:fs')
const app = express()
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");


const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")


const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];


app.get("/", (req, res) => {
  res.render("index", {links: links, users: users });
});


app.get("/aboutEjs", (req, res) => {
  res.render("about", {placeHolder:'placeHolder'});
});




app.use("/authors", authorRouter)
app.use("/books", bookRouter)
app.use("/", indexRouter)



app.use((err, req, res, next)=>{
    console.error(err)
    res.status(err.statusCode || 500).send(err.message)
})


app.listen(process.env.PORT || 3000, (err)=>{
    if(err){
        throw err
    }
    console.log('Is listening')
})