const mongoose = require('mongoose');
const schema = mongoose.Schema;

const register = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});

const applicationData = new schema({
    name:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    applicationAmount:{
        type:Number,
        required:true
    },
    profilePicture:{
        type: Buffer,
        required: false
    },
    markSheet:{
        type: Buffer,
        required: false 
    }
})

const registerSchema = mongoose.model('register',register);
const registerdStudents = mongoose.model('allDetails',applicationData)
module.exports = {registerSchema,registerdStudents};