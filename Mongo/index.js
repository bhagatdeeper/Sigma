const mongoose = require('mongoose');

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
});
async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.com",
//     age: 48,
// });
// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.com",
//     age: 48,
// });

//insertOne 
// user1.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// user2.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });  

//insertMany
// User.insertMany([
//     {name:"Tony", email: "tony@gmail.com", age: 50},
//     {name:"Peter", email: "peter@gmail.com", age: 30},
//     {name:"Bruce", email: "bruce@gmail.com", age: 47},
// ]).then(
// res => console.log(res)
// );

//find method
// User.find({age: {$gt: 47}, name: "Adam"})
//    .then( res => {
//     console.log(res);
//    })
//    .catch( err => {
//     console.log(err);
//    });

//UPDATE method
// User.updateOne(
//     {name: "Bruce"}, {age: 49}
// ).then( res => console.log(res));

// User.updateMany(
//     {age: {$gt: 47}}, {age: 50}
// ).then( res => console.log(res));

//DELETE Method
User.findByIdAndDelete({'68bbe2740644efe00913ff58'})
.then(res => console.log(res))
.catch(err => console.log(err)); 