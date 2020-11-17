const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
const Task = require('./models/tasks');

// use express router
app.use('/', require('./routes'));

//set up view engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }))
app.use(express.static('assets'));

//listen port
app.listen(port,function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on Port: ${port}`);
});

var taskList = [
    {
        description: "task 1",
        catagory: "none",
        duedate: "02032020"
    },
    {
        description: "Task2",
        catagory: "none",
        duedate: "03042020"
    }
]

app.post('/create-task', function(req, res){
     
    Task.create({
        description: req.body.description,
        catagory: req.body.catagory,
        duedate : req.body.duedate
    }, function(err, newTask){
        if(err){console.log('Error in creating a task!')
            return;}
            console.log('******', newTask);
            return res.redirect('back');
    })
  
});

app.get('/delete-task/', function(req, res){
    let id = req.query.id

     Task.findByIdAndDelete(id, function(err){
         if(err){
             console.log('error in deleting the object');
                return;
        }
       console.log(req.query.id +' '+ 'deleted')
        return res.redirect('back');
     })
   
});