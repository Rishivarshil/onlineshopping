const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'kh',
    password: '1234qwer$',
    database: 'Online_Shopping_System',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Login_____________________________________________________________________
app.post("/login/insert", (req, err) => {
    console.log(err);
    const Login_username = req.body.Login_username;
    const Login_password = req.body.Login_password;

    const sqlInsert = 
    "INSERT INTO login (Login_username, Login_password) VALUES (?,?)";
    db.query(sqlInsert, [Login_username, Login_password], (err, result) =>{
    console.log(err);
    console.log(result);
    db.query("COMMIT");
    });
});
app.post("/user/insert", (req, err) => {
  console.log(err);
  const User_name = req.body.User_name;
  const User_email = req.body.User_email;

  const sqlInsert = 
  "INSERT INTO user (User_name, User_email) VALUES (?,?)";
  db.query(sqlInsert, [User_name, User_email], (err, result) =>{
  console.log(err);
  console.log(result);
  db.query("COMMIT");
  });
});

app.post("/login/get", (req, res) => {
    const Login_username = req.body.Login_username;
    const Login_password = req.body.Login_password;
    console.log(Login_username);
    if(Login_username == "admin"){
      db.query(
        "SELECT * FROM admin WHERE Admin_username = ? AND Admin_password = ?",
        [Login_username, Login_password],
        (err, result) => {
          if (result.length === 0) {
              console.log(result)
              res.send({message: "ADMIN"});
          }
        }
      );
    }else{
      db.query(
        "SELECT * FROM login WHERE Login_username = ? AND Login_password = ?",
        [Login_username, Login_password],
        (err, result) => {
          

          if (result.length === 0) {
              console.log(result+"this?")
              res.send({message: "WRONG USERNAME OR PASSWORD"});

          } else {
            res.send(result);

          }
        }
      );
    }
});

//Login_____________________________________________________________________


//Product_____________________________________________________________________

app.post("/product/insert", (req, err) => {
    console.log(err);
    const Product_name = req.body.Product_name;
    const Product_description = req.body.Product_description;
    const Product_type = req.body.Product_type;
    const Product_price = req.body.Product_price;
    const Product_currency = req.body.Product_currency;


    const sqlInsert = 
    "INSERT INTO product (Product_name, Product_description, Product_type, Product_price, Product_currency) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [Product_name, Product_description, Product_type, Product_price, Product_currency], (err, result) =>{
    console.log(err);
    console.log(result);
    db.query("COMMIT");
    });
});

app.get("/product/get", (req, res) => {
   
    db.query(
      "SELECT * FROM product", (err, result) => {
        res.send(result);
        console.log(result);
        console.log(err);
      }
    );
});

app.put('/product/update', (req, res)=>{
   const Product_id = req.body.id; 
   const Product_description = req.body.Product_description;
   db.query("UPDATE product SET Product_description = ? WHERE Product_id =?", [Product_description,Product_id],(err,result)=>{
     if(err){
       console.log(err)
     }else{
       res.send(result);
     }
  });
});

app.delete('/product/delete/:Product_id', (req, res) =>{
  const Product_id = req.params.Product_id;
  db.query("DELETE FROM product WHERE Product_id = ?", Product_id, (err, result) => {
    if(err){
       console.log(err)
     }else{
       res.send(result);
     }
  })
})

//Product_____________________________________________________________________
//Checkout____________________________________________________________________

var dates = new Date();

var d = dates.getDate();
var m = dates.getMonth() + 1;
var y = dates.getFullYear();

var date = (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;


app.post("/checkout/insert", (req, err,) => {
  console.log(err);
  console.log(err);
  const Payment_amount= req.body.Payment_amount;
  console.log(Payment_amount + 'THIDKLJLKJKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKTHIDKLJLKJKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK');
  const Card_number= req.body.Card_number;
  const Card_type= req.body.Card_type;
  


  const sqlInsert = 
  "INSERT INTO payment(Payment_amount, Payment_date, Card_number, Card_type) VALUES (?,STR_TO_DATE(?,'%d/%m/%Y'),?,?);  ";
  db.query(sqlInsert, [Payment_amount,date,Card_number,Card_type], (err, result) =>{
  console.log(err);
  console.log(result);
  db.query("COMMIT");
  });
});

app.post("/address/insert", (req, err,) => {
  const House_number= req.body.House_number;
  const Street= req.body.Street;
  const City= req.body.City;
  const State= req.body.State;
  const Country= req.body.Country;
  const Pincode= req.body.Pincode;
  /*console.log(House_number);
  console.log(Street);
  console.log(City);
  console.log(State);
  console.log(Country);
  console.log(Pincode);*/


  const sqlInsert = 
  "INSERT INTO address(House_number,Street,City,State,Country,Pincode) VALUES (?,?,?,?,?,?);  ";
  db.query(sqlInsert, [House_number,Street,City,State,Country,Pincode], (err, result) =>{
  console.log(result);
  db.query("COMMIT");
  });
});
//Checkout____________________________________________________________________

app.get('/payment/get/:Payment_amount', (req, res)=>{
  const Payment_amount = req.params.Payment_amount;

  console.log (Payment_amount + "guheodhdxorh");
  db.query("SELECT Payment_date FROM payment WHERE Payment_amount = ?", [Payment_amount],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send(result);
      console.log(result);
      console.log("dfshkvjdf");
    }
 });
});

app.listen(3001, () =>{
    console.log('running on port 3001');
});