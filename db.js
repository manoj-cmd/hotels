//const { default: mongoose, default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
// mongoose db collection url

const mongooseURL = 'mongodb://localhost:27017/hotels' // replace mydatabase to your database name
mongoose.connect(mongooseURL, {
    //useNewUrlParser: true,
    //useUnifiedTapology: true,
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