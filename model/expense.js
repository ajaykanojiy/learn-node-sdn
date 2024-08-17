const mongoose=require('mongoose');



const expenseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
        // unique: true,    
    },  
   
    date: {
        type: Date,
        default: new Date(),
    },
    // image: {
    //     type: [String],
    //     required: true,
    // },
})
var expensedata=mongoose.model('expense',expenseSchema);
module.exports= expensedata;