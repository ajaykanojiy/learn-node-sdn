
const express=require('express');
const expenseController=require('../controller/expenseController');

console.log("aaaaaaa"+expenseController);

const router = express.Router();

router.post("/expense_reg",expenseController.expense_reg)
router.get("/expense_list",expenseController.expense_list)
// router.get("/get_by_id/:id",studentcontroller.get_by_id)
// router.put("/student_update",studentcontroller.student_update)
// router.get("/student_delete/:id",studentcontroller.student_delete)


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