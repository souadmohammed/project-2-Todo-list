// نشغل المونقز 
const mongoose = require('mongoose');
// رابط ثابت بس تتغير اسم الداتا بيس {3_5}
const mongoURI ='mongodb://localhost:27017/TodoListV01'

const db = mongoose.connection;

// connection to mongo
//mongoose.connect(mongoURI)
mongoose.connect(mongoURI,{useNewUrlParser:
true, useUnifiedTopology: true },()=>{
    //رساله تأكد من الداتا بيس
    console.log(' connection establish , DB is working .....');
});

// extra  error / success
db.on("error",(err)=>{
    console.log(err.message +'mongo not running masseg from my code !!');
})


db.on('connected',(err) => {
    console.log('mongo connected for project2.....');
})