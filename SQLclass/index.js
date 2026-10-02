const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sigma_app',
  password: '1234qwertyasdf',
});

// let q = `INSERT INTO user (id, username, email, password) VALUES ?`
// let users = [
//   ["1a", "abc", "abc@gmail.com", "123"],
//   ["2b", "def", "def@gmail.com", "456"],
// ];

//to generate users data
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Home Route
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
  try{
    connection.query(q, (err, result) => {
      if(err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", {count});    
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//New User Route
app.get("/user/new", (req, res) => {
  let {username: username, password: password, email: email} = req.params;
  console.log(req.params);
  res.render("new.ejs");
})

//User Route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try{
    connection.query(q, (err, users) => {
      if(err) throw err;
      res.render("user.ejs", { users });    
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q, (err, result) => {
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs", {user});   
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//UPDATE (DB) Route
app.patch("/user/:id", (req, res) => {
  let {id} = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q, (err, result) => {
      let user = result[0];
      if(err) throw err;
      if(formPass != user.password){
        res.send("Wrong password. Enter correct password");
      } else{
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        try{
          connection.query(q2, (err, result) => {
          res.redirect('/user');
        });
        } catch (err) {
          console.log(err);
          res.send("some error in DB");
        };
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//generate and store user data in bulk
// let users = [];
// for(let i = 1; i <= 100; i++){
//   users.push(getRandomUser());
// }

//transfer data to sql
// try{
//     connection.query(q, [users], (err, result) => {
//     if(err) throw err;
//     console.log(result);
// });
// } catch (err) {
//     console.log(err);
// }
// 

app.listen("8080", () => {
  console.log("app is listening to port 8080");
});
