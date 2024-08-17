/* import express from 'express';
import {verifyToken} from '../middleware/vtoken'
import { verifyUser } from '../middleware/VerifyOtp';
import { userSignup, login, getUserId, addTask, showList,getTaskId,updateTask,deleteTask,verifyOTP} from '../controller/usercontroller'; */
const express=require('express');
const studentcontroller=require('../controller/studentcontroller');
// import imageUpload from '../middleware/imageupload';
const imageUpload=require('../middleware/imageupload').uploadajay;

console.log("aaaaaaa"+studentcontroller);

const router = express.Router();

// router.post("/student_reg",imageUpload.single('image') ,studentcontroller.student_reg)
router.post("/student_reg",imageUpload.array('image',3) ,studentcontroller.student_reg)

//router.post("/student_reg",imageUpload.array([{name: 'image', maxCount: 10}]),studentcontroller.student_reg)



router.get("/student_list",studentcontroller.student_list)
router.get("/get_by_id/:id",studentcontroller.get_by_id)
router.put("/student_update",studentcontroller.student_update)
router.get("/student_delete/:id",studentcontroller.student_delete)
/* router.post("/verifyOTP",verifyOTP);
router.post("/login",[verifyUser],login)
router.get("/userid",verifyToken,getUserId)
router.post("/addtask",addTask)
router.get("/list",showList)
router.get("/id",getTaskId)
router.put("/update",updateTask) */
// router.put("/deletetask",deleteTask)
//router.delete("/delete/:_id",deleteTask)
// router.post("/email",sentEmail)

//module.exports.router;
module.exports= router;