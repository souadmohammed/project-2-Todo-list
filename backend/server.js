//______________________express__________________________________
//node_ modules مجلد فيه كل المكتبات المهمه 
//  تصدير مكتبه الكسبرس وعمل انستنس منها 
const express = require('express') 
const app = express() //استخدمت الي استوردته دحين استخدم فنكشن موجوده واخزن قيمتها في متغير
const port = 5000
const db = require('./db')
const Todo = require('./models/todo')
console.log(Todo);



app.use(express.json())
//_________________________middleware_______________________________
// middleware (read what inside req.body) 
//نستخدم هذي العمليه قبل تنفيذ اي ريكويست الي داخل الاقواس 
//عباره عن فنكشن تتنادى قبل الريكويست 
//


// CRUD: Creat , Read , Update , Delete

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * post:       insert new item in db (User.create)
 * 
 * get:        print all items in db (User.find)
 * get:        find some name in DB
 * get:        but some condition in the obj of find func
 * 
 * delete:     Deletes the first document that matches conditions (User.deleteOne)
 * 
 * put:        update only the first document that matches filter (User.updateOne)
 */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// test the server 
app.get('/',(req,res)=>{
    res.json('Get / is working ');
})


// get all data from db
app.get('/tasks',(req,res)=>{
    Todo.find({},(err,data)=>{
        if(err){
            console.log('ERROR : ', err);
        }else{
            res.json(data);
        }

    })
    //res.json('Get / is working ');
})

// get Completed tasks from db
app.get('/tasks/completed',(req,res)=>{
    Todo.find({isCompleted:true},(err,data)=>{
        err ? console.log('ERROR : ', err):res.json(data)
    }) 
})

// get not Completed tasks from db
app.get('/tasks/notCompleted',(req,res)=>{
    Todo.find({isCompleted:false},(err,data)=>{
        err ? console.log('ERROR : ', err):res.json(data)
    }) 
})


// this endpoint is replace to these two
// get notCompleted / Completed tasks from db
app.get('/filter',(req,res)=>{
    console.log(req.query);
    Todo.find({isCompleted:req.query.isCompleted},(err,data)=>{
        err ? console.log('ERROR : ', err):res.json(data)
    }) 
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//add new element in the db get data from req.body of post (must use middleware which is read the body of req)
app.post('/tasks',(req,res)=>{
    console.log('25:',req.body);

    Todo.create(req.body,(err,newTask)=>{
        if(err){
            console.log('ERROR : ', err);
        }else{
            res.status(201).json('created new Todo successfully')
            //res.json(newTask);
        }

    })
    //res.json('Get / is working ');
})






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//delete
/**
 * Deletes the first document that matches conditions
 * from the collection. It returns an object with the
 * property deletedCount indicating how many documents
 * were deleted.
 */

// احط بالبارمز اسم اليوزر الي حأعمله حذف
//يرجع رسبونس واحد 
// DELETE BY TITLE
app.delete("/tasks/:title", (req, res) => {
    console.log(req.params);
    //     الشرط    key : value
    Todo.deleteOne({ title: req.params.title }, (err, deleteObj) => {
      if (err) {
        console.log("ERROR", err);
        res.status(500).json("there is a problem in DB");
      } else {
        // اذا دورت ومالقت اي واحد بدا الاسم
        // console.log(deleteObj)
        if (deleteObj.deletedCount === 0) {
          res.status(404).json("title Not Found");
        } else {
          res.status(200).json("Success Delete " + req.params.title);
        }
      }
    });
  });

// DELETE BY ID
  app.delete("/tasks/id/:id", (req, res) => {
    console.log(req.params.id);
    //     الشرط    key : value              بارميتر يعبر عن الي صار
    Todo.deleteOne({ _id: req.params.id }, (err, deleteObj) => {
      if (err) {
        console.log("ERROR", err);
        res.status(500).json("there is a problem in DB");
      } else {
        // اذا دورت ومالقت اي واحد بدا الاسم
        console.log(deleteObj)
        deleteObj.deletedCount === 0? res.status(404).json("id is  Not Found") 
        :res.status(200).json("Success Delete  this Todo" + req.params.id)
         
        
      }
    });
  });





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//put
/**
 * MongoDB will update only the first document that matches 
 * filter regardless of the value of the multi option.
 *    res.matchedCount; // Number of documents matched
      res.modifiedCount; // Number of documents modified
      res.upsertedCount; // Number indicating how many documents had to be upserted. Will either be 0 or 1.

 */
// Extension: Prettier  ||  Shortcut: Alt + Shift + F
// حطينا / قبل الافنيم عشانها مو متغير والقيمه حتكون في البدي حق الريكويست

// UPDATE STATE
app.put("/tasks/isCompleted/:oldState", (req, res) => {
    console.log(req.params);
    Todo.updateOne(
      { title: req.params.oldState }, // filter «Object» الشرط
      { isCompleted: req.body.isCompleted }, //update «Object|Array»
      (err, updateObj) => {
        //callback func
        if (err) {
          console.log("ERROR", err);
          res.status(500).json("there is a problem in DB");
        } else {
          console.log(updateObj);
          if (updateObj.matchedCount === 0) {
            res.status(404).json("User Not Found");
          } else {
            res.status(200).json("Success Update one state");
          }
        }
      }
    );
  });

//UPDATE THE TITLE OF TASK 
app.put("/tasks/title/:id", (req, res) => {
    console.log(req.params.id);

    Todo.pdateOne(
      { _id: req.params.id }, // filter «Object» الشرط
      { title: req.body.newTitle }, //update «Object|Array»
      (err, updateObj) => {
        //callback func
        if (err) {
          console.log("ERROR", err);
          res.status(400).json("there is a problem in DB");
        } else {
          console.log(updateObj);
          if (updateObj.matchedCount === 0) {
            res.status(404).json("User Not Found");
          } else {
            res.status(200).json("Success Update one state");
          }
        }
      }
    );
  });


  
app.listen(port,()=>{
    console.log('SERVER IS WORKING');
})