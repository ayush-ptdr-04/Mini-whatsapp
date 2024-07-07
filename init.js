const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "aayush",
    to: "DK",
    msg: "i am in love with you",
    created_at: new Date(),
  },
  {
    from: "ankit",
    to: "sheetal",
    msg: "we are lets break this all",
    created_at: new Date(),
  },
  {
    from: "aman",
    to: "surya",
    msg: "she will cut to aman",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);