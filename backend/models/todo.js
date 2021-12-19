//ــــsteps:::
//١- نستورد المونقوز 
// ٢- نعمل الاسكيما او الداتا بيس نحدد فيها الكولمز الموجوده بالبيانات 
//٣- نعمل المتحكم في الاسكيما 
//٤- نصدر الداتا بيس 


const {Schema,model}= require('mongoose')

//Schema 
// يترسل الاي دي والفيرجن معاها
const todoSchema= new Schema({
    title:{type:String, required:true},
    isCompleted:Boolean
})

// الي فوق كانه قالب والي تحت كانه المتحكم بالقالب 

const Todo = model('Todo',todoSchema)

module.exports=Todo;
