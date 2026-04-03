const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

// app.get('/', (req, res) => {
//     console.log("get request")
//   res.send('Hello World. Hows life?!')
// })

// app.post('/', (req, res) => {
//     console.log("post request")
//   res.send('Hello World post!')
// })

// app.put('/', (req, res) => {
//     console.log("put request")
//   res.send('Hello World put!')
// })

// app.delete('/', (req, res) => {
//     console.log("delete request")
//   res.send('Hello World delete!')
// })

//this can also be clubbed as a single like given below
app.get('/', (req, res) => {
    console.log("get request")
  res.send('Hello World. Hows life?!')
}).post('/', (req, res) => {
    console.log("post request")
  res.send('Hello World post!')
}).put('/', (req, res) => {
    console.log("put request")
  res.send('Hello World put!')
}).delete('/', (req, res) => {
    console.log("delete request")
  res.send('Hello World delete!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
