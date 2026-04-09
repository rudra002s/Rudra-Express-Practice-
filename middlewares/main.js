const express = require('express')
const app = express()
const port = 3000
const birds = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))
app.use('/birds', birds)

//syntax for middleware in this both m1 and m2 will be shown

//MIDDLEWARE 1 - logger for our app
app.use((req, res, next) => {
    //wherever req.rudra will be added it will be displayed to that page
    req.rudra=" I am smart"
    // fs.writeFileSync("logs.txt",`${Date.now()} is a ${req.method}`) //this will send data to a txt file which is auto created after this command

    //this will append
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}`)
    console.log(`${Date.now()} is a ${req.method}`)

    //with res.send the response will be sent and it will stop here itself and next will not work

    // res.send("Hacked by middleware 1")
    next()

    //if we remove next from here the website will be stuck here and only m1 will be shown by console
})

//MIDDLEWARE 2
app.use((req, res, next) => {
    console.log('m2')
    req.rudra=" Ritu is smart too"
    next()
})
app.get('/', (req, res) => {
    res.send('Hello Ritu!' + req.rudra)
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.rudra)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!' + req.rudra)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
