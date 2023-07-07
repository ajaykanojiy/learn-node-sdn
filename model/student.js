//import mongoose from "mongoose";
const mongoose=require('mongoose');
/* 
const userSchema = new mongoose.Schema(
    {
        fullname : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        phone : {
            type : Number,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        address : {
            type : String,
            required : true
        },
        otp:{
            type:Number,
        },
        verified:{
            type:Boolean,
            default:false,
        }
    }
)
export default mongoose.model("user",userSchema);

 */


const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        required: true,
        unique: true,    
    },
    registration: {
        type: String,
        required: true,
        unique: true,
    },
    subjects: {
        type: [String],
        required: true,
    },
    registered_on: {
        type: Date,
        default: new Date(),
    },
    image: {
        type: [String],
        required: true,
    },
})
var studentdata=mongoose.model('studentdata',studentSchema);
module.exports= studentdata;