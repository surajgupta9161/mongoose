const mongoose = require("mongoose");

main().then(() => { console.log("Connetcion is succesful") }).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1, "Price is not allow less then 1 rupess"]
    },
    role: [String],
    category: {
        type: String,
        enum: ["Knowledge", "Mind", "Grow"]
    }
})

const book = mongoose.model("book", bookSchema);

const book1 = new book({
    title: "Java",
    author: "Thomas",
    price: 200,
    role: ["Improve Mindset", "Growing UP"],
    category: "Knowledge"
})

book1.save().then(data => console.log(data)).catch(err => console.log(err.errors.price.properties.message));