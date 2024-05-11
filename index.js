const express = require('express')
const app = express()
const port = 8001
const path = require('path')
const cookieparser = require('cookie-parser')
const fetchuser = require('./middleware/auth')

// const ejs = require("ejs")


app.set("view engine","ejs")
app.set("views",path.resolve("./views"))



let dbconnect = require('./dbconnect')
dbconnect();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieparser())


const urlroute = require('./routes/urlRoutes/url')
const staticRoutes = require('./routes/staticRoutes/staticRoutes')
const userRoutes = require('./routes/userRoutes/users')

app.use('/',staticRoutes)
app.use('/api/url',fetchuser,urlroute)
app.use('/users',userRoutes)

app.listen(port,()=>{
    console.log(`connected to server on port ${port}`)
})