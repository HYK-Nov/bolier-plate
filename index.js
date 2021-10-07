const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:a123456777@bolierplate.kk9s6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
  //Mongoose 버전 6.0이상 안씀
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요~~~~~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})