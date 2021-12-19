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

app.get('/',(req,res)=>{
    res.json('Get / is working ');
})

app.get('/tasks',(req,res)=>{
    res.json('Get / is working ');
})

app.listen(port,()=>{
    console.log('SERVER IS WORKING');
})