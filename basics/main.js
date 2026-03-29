const express = require('express') //imports express
const app = express()
const port = 3000 //selects the port

app.use(express.static('public'))
//we got this from express website static files

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/about', (req, res) => {
  res.send('About me!!!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact me!!!')
})

app.get('/blog', (req, res) => {
  res.send('Hello to blog!!')
})

//here slug is a parameter
app.get('/blog/:slug', (req, res) => {
    //logic to fetch {slug} from the database
    //for URL: http://localhost:3000/blog/intro-to-c?mode=dark&region=in
    console.log(req.params) //will give { slug: 'intro-to-c' } this as output
    console.log(req.query) //will give { mode: 'dark', region: 'in' } this as output
  res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetch intro from the database
//   res.send('Hello, welcome to js!!!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     //logic to fetch intro from the database
//   res.send('Hello, welcome to python!!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
