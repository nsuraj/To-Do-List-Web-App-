const Task = require('../models/tasks');
module.exports.home = function(req,res){
    //  return res.render('home',{
    //      title: "To-do-List"
    //  });

    Task.find({}, function(err, tasks){
        if(err){
            console.log("error in fetching tasks from db");
            return;
        }
        return res.render('home',{
            title: "To do List",
            task_list: tasks
        });

    })
}