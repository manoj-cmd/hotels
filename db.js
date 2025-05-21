//const { default: mongoose, default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
// mongoose db collection url

//const mongooseURL = process.env.MONGODB_URL_LOCAL; // replace mydatabase to your database name
//const mongooseURL = 'mongodb+srv://HelloWord1234:HelloWord1234@cluster0.yiabmsl.mongodb.net/'
require('dotenv').config();
const mongooseURL = process.env.MONGODB_URL;
                     
mongoose.connect(mongooseURL, {
    useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('connected to mongodb server')
})

db.on('error', (err)=>{
    console.log('connected to error', err)
})

db.on('disconnected', ()=>{
    console.log('disconnected mongodb')
})

// export to database connection

module.exports = db;