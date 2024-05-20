const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema ({
    name : {type : String,required : true},
    email : {type : String, required : true,unique : true},
    password : {type :String ,required:true}
})

userSchema.pre('save',function(next){
    console.log("Running pre save and in this funcion 'this' refers to : ",this)

    next()
    // if i dont call next manually its execution will stuck here 

})

module.exports = mongoose.model('users',userSchema)