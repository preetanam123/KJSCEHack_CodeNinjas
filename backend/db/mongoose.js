const mongoose = require("mongoose");

console.log(process.env.MONGODB_URI)
try{
mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => console.log(`Mongo DB connected.`));
}
catch(e) {
  console.log(e.message);
}
