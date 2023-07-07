const mongoose= require('mongoose');
const config=require('./config').get('local').DB;
//const config=require('./config').get('local');


console.log(config);

const mongourl = `mongodb://${config.HOST}:${config.PORT}/${config.DBNAME}`;
console.log(mongourl);

const options = {
    user : config.USERNAME,
    pass : config.PASSWORD
}
console.log(options)

module.exports.mongoconnection=async()=>{
//export const mongoconnection = async() => {
    try{
        await mongoose.connect(mongourl,options);
        console.log("db connected hogya hian")
    }catch(e){
        console.log(e);
        throw e;
    }
}