const config = {
    local : {
        DB : {
            HOST : "localhost",
            PORT : 27017,
            DBNAME : "learn-express",
            USERNAME : "",
            PASSWORD : ""
        },
        
       // port_no : 23451,
        Email : {
            host : "smtp.gmail.com",
            port : 465,
            user : "ajjukanojiya152@gmail.com",
            //password : "khghxqhczbsezjtd"
            password : "exdfyruxpagoszbq"
        }

    },
   /*  staging : {
        DB : {
            HOST : "172.10.1.3",
            PORT : 27017,
            DBNAME : "siddhantsingh",
            USERNAME : "siddhantsingh",
            PASSWORD : "siddhantsingh87"
        },
        port_no : 2345,
        Email : {
            host : "smtp.gmail.com",
            port : 465,
            user : "azmsiddhant1@gmail.com",
            password : "khghxqhczbsezjtd"
        }
    },
    production : {

    } */
}


/* module.exports= studentdata;


export const get =  (env) => {

    console.log("showwww"+env);
    return config[env];
}
 */
module.exports.get = (env)=> {
    console.log("showwww"+env);
    return config[env];
  };
  