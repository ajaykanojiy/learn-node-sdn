//import bodyParser from 'body-parser';
const bodyParser=require('body-parser');
const express= require('express');
const mongoose= require('mongoose');
const app=express();
const db=require('./db');
const studentroute=require('./router/student');
const expenseroute=require('./router/expense');
var cors = require('cors')
//console.log('ajay');
console.log(db.mongoconnection);
db.mongoconnection();

/* app.use(bodyParser.urlencoded(
    {
        extended:true
    }
)); */

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/students',studentroute)
app.use('/expense',expenseroute)


const port=9001;
app.listen(port, () =>{
    console.log('Server started');
})
//import db from './db';

//import db from './db';
//import { mongoconnection } from './db';

//mongoconnection();


/* 
const url= "mongodb://localhost:27017";
mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
} */