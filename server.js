const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();


//const { default: mongoose } = require('mongoose');

const PORT = process.env.PORT || 300

const bodyParser = require('body-parser');
//const { cache } = require('react');

app.use(bodyParser.json())  // req.body





// import the router file
        const personRouter = require('./routes/personRoutes');
        app.use('/person', personRouter);
       
        const menuitemRouter = require('./routes/menuitemsRoutes');
         app.use('/menu', menuitemRouter)

    

        app.listen(PORT, ()=>{
    console.log('server is start !')
})