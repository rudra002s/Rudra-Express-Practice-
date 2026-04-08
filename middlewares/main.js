const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

//syntax for middleware
app.use((req, res, next) => {
    console.log('LOGGED')
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
