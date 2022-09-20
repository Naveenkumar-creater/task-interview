const mongooose = require('mongoose')

const Userschema = mongooose.Schema({
    name:{type:String,unique:true,required:true},
    email:{type:String,unique:true},
    phone:{type:Number,unique:true,required:true},
    password:{type:String,required:true},
    
  
     
},{
    collection:'userdata'
}
)

const model = mongooose.model('userschema',Userschema)
module.exports = model
