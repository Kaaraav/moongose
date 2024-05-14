const mongoose = require('mongoose')
const user = require('./user')

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

const addUser = new user({
    name: "Karthika",
    age: 21, 
    email: "bharanidharAn@gmail.com"
})

addUser.name= "Karthika Ravi"

addUser.save()
       .then(() => {
        console.log(addUser)
       })