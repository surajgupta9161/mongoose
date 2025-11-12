const mongoose = require("mongoose");

main().then(() => { console.log("Connetcion is succesful") }).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// const user2 = new User({
//     name: "naresh",
//     email: "naresh@gmail.com",
//     age: 22,
// });

// user2.save().then(res => console.log(res)).catch(err => console.log(err));

// User.insertMany([
//     { name: "Gopal", email: "gopal@gmail.com", age: 20 },
//     { name: "Ajeet", email: "ajeet@gmail.com", age: 21 },
//     { name: "Gaurav", email: "gaurav@gmail.com", age: 23 }
// ]).then(res => { console.log(res) }).catch(err => { console.log(err) });

// User.find({ name: "Gopal" }).then(data => console.log("find", data)).catch(err => console.log(err));
// User.findOne({ name: "Gopal" }).then(data => console.log("It print finfOne :", data)).catch(err => console.log(err));
// User.findById('690cac709d0abbd515ba2a95').then(data => console.log("findById", data)).catch(err => console.log(err));

// User.updateOne({ name: "gopal" }, { name: "Golu" }).then(data => { console.log(data) }).catch(err => { console.log(err) });
// User.updateMany({ age: { $gt: 21 } }, { age: 25 }).then(data => { console.log(data) }).catch(err => { console.log(err) });

//User.findOneAndUpdate({ name: "Golu" }, { email: "golu@gmail.com" }, { new: true }).then(data => console.log(data)).catch(err => console.log(err));
// User.findByIdAndUpdate('6908dcc10db9c6b49f416e66', { age: 50 }, { new: true }).then(data => { console.log(data) }).catch(err => { console.log(err) })

// User.deleteOne({ name: "Gaurav" }).then(data => console.log(data)).catch(err => console.log(err));
// User.findOneAndDelete({ name: "Ajeet" }).then(data => console.log(data)).catch(err => console.log(err));
// User.deleteMany({ name: "Gopal" }).then(data => console.log(data)).catch(err => console.log(err));
// User.findByIdAndDelete('6908f8eca78ebf44e45a0480').then(data => console.log(data)).catch(err => console.log(err));
