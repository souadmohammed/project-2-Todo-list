//ــــsteps:::
//١- نستورد المونقوز 
// ٢- نعمل الاسكيما او الداتا بيس نحدد فيها الكولمز الموجوده بالبيانات 
//٣- نعمل المتحكم في الاسكيما 
//٤- نصدر الداتا بيس 


const {Schema,model}= require('mongoose')

//Schema 
// يترسل الاي دي والفيرجن معاها
const usersSchema= new Schema({
    userName:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String, unique:true}
})

// الي فوق كانه قالب والي تحت كانه المتحكم بالقالب 

const User = model('User',usersSchema)

module.exports=User;