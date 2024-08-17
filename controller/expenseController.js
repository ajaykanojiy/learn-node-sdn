//import mongoose from "mongoose";
const mongoose = require('mongoose');
//import user from '../model/usermodel';
const expense = require('../model/expense');
const multer = require('multer');
const { request } = require('express');

//const jwt= require('jsonwebtoken'); 
//import paginate from 'mongoose-paginate-v2';
//const paginate= require('mongoose-paginate-v2'); 
//import bcrypt from 'bcrypt';
//const bcrypt= require('bcrypt'); 
//import {sentEmail} from  '../middleware/sendmail'


module.exports.expense_reg = async (req, res) => { 
    
 //  console.log(req.title);


    const newexpense = new expense({
        title: req.body.title,
        amount: req.body.amount,
        date: req.body.date,   

    });


   /*  req.files.forEach(file => {
        // Save file information to the database
        files.push({ filename: file.filename, path: file.path });
      }); */
     try {

    //     const files = req.files;

    //     // Save each file to the database
    //     for (let i = 0; i < files.length; i++) {
    //       const file = files[i];
    
    //       // Create a new image instance
    //       const newstudent = new student({
    //         image: file.originalname,
    //     //    path: file.path,
    //         name: req.body.name,
    //         roll: req.body.roll,
    //         registration: req.body.registration,
    //         subjects: req.body.subjects,
    //       });
    
    //       // Save the image to the database
    //       await newstudent.save();
    //     }



       await newexpense.save();
        res.status(201).json(newexpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

    //const userDetails = await userData.save();



}


module.exports.expense_list = async (req, res) => {
    let Details = await expense.find({})
    console.log(Details)

    res.send({ status: 200, message: "success", result: Details })

}


module.exports.get_by_id = async (req, res) => {
    console.log(req.params.id + "ajay-id");

    try {
        var id = req.params.id;

        //let userId = await student.findById(id)
        let userId = await student.find({ _id: id })
        //let userId= await student.find({_id:mongoose.Types.newObjectId(req.params.id)})

        res.send({ status: 200, message: "success", result: userId })
    } catch (e) {
        throw e
    }


}


module.exports.student_update = async (req, res) => {


    //console.log(req.body.name+'updateone test')
    try {

        let jsondata = {};
        if (req.body.name) {
            jsondata.name = req.body.name;
        }
        /* ****************findOneAndUpdate() Function************************* */
        /* await student.findOneAndUpdate(
             { roll: req.body.roll },
             { name: "Anuj" }, null, function (err, docs) {
                 if (err) {
                     console.log(err)
                 }
                 else {
                     console.log("Original Doc : ", docs);
                 }
             });
*/

        /*   const updatedDoc = await student.findOneAndUpdate(
              { roll: req.body.roll },
              { name: "Anuj" }
          ).exec();
  
          console.log("Original Doc:", updatedDoc); */

        /*   await student.findOneAndUpdate({ 'roll': req.body.roll},
         {
             $set: {
                 "name":jsondata,
                
             }
         },
         { new: true },
         function (err, doc) {
    
         }
     ); */



     const result = await student.updateOne(
        { _id: new mongoose.Types.ObjectId(req.body._id) },
        { $set: jsondata },
        { new: true }
      ).exec();
    
      if (result.nModified === 0) {
        return res.send({status: true,message: "Task not updated",result: null});
      } else {
        return res.send({status: 200,message: "Task updated successfully",result: result});
      }
    } catch (error) {
      console.log(error);
      return res.send({status: false,message: "An error occurred while updating the task",result: error
      });
    }


}

module.exports.student_delete=async(req,res)=>{

    await student.deleteOne({ _id: req.params.id });

  /*  await student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            return res.send({status: 200,message: "Task delete successfully"});
        } else {
          console.log(err)
        }
      }) */

         
      console.log(await student.countDocuments({ _id: req.params.id}));


}



