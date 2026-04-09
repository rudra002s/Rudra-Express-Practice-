const express = require('express')
const app = express()
const port = 3000

// app.use(express.static("public"))

//syntax for middleware in this both m1 and m2 will be shown

//MIDDLEWARE 1 - logger for our app
app.use((req, res, next) => {
    console.log(`${Date.now()}`)

    //with res.send the response will be sent and it will stop here itself and next will not work

    // res.send("Hacked by middleware 1")
    next()

    //if we remove next from here the website will be stuck here and only m1 will be shown by console
})

//MIDDLEWARE 2
app.use((req, res, next) => {
    console.log('m2')
    next()
})
app.get('/', (req, res) => {
    res.send('Hello Ritu!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
