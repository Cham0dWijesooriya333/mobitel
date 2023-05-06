
const express = require("express") ;
const mysql = require("mysql") ;
const cors = require("cors") ;
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(express.json());  
app.use(bodyParser.json());



const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
});


app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name,email,password ) VALUES (?)" ;
    const values = [
         req.body.name,
         req.body.email,
         req.body.password,
           ]

    db.query(sql, [values], (err, data)=>{
      if(err) {
        console.log(err)
        return res.json(err) ;
        
      }else{
        return res.json({"message": "DONE"})
      }
    })
    

})

 app.post('/login', (req, res) => {

const sql = "SELECT * FROM login WHERE email = ? AND password = ?"; 
const values = [
    req.body.email,
    req.body.password.trim(),
      ]

      console.log(values)
db.query(sql, values, (err, data) => {
  console.log(data)
  if(err) return res.json("Error inside server");
   if(data.length >0) {
    console.loh(res.body.name)
    return res.json("Succesful");
                } 
    else {
      return res.json("Faild")
         } 
 
})
 
}

)


app.listen(8081, ()=> {
    console.log("listening");
    
                      })
