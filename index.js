const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes'));

//set up view engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

//listen port
app.listen(port,function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on Port: ${port}`);
});