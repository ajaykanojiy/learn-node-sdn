const multer = require('multer');
const path = require("path");






const checkFileType = function (file, cb) {
  //Allowed file extensions
  const fileTypes = /jpeg|jpg|png|gif|svg/;

  //check extension names
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: You can Only Upload Images!!");
  }
};



//import multer from 'multer';

var storage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, 'uploads')
    },
    filenames : function(req, file, cb){
        console.log(file)
        const ext = file.mimetype.split('/')[1];
        cb(null,file.originalname )
    }
})
//export const upload = multer({storage : storage})
module.exports.uploadajay = multer(
  {
    storage : storage,
    limits: { fileSize: 10000000 }, 
    fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
  
  });


// const upload = multer({
//   storage: storageEngine,
//   limits: { fileSize: 10000000 },
//   fileFilter: (req, file, cb) => {
//     checkFileType(file, cb);
//   },
// });
