const dotenv = require("dotenv");
const mongoose = require("mongoose");


//  unhandled exception occurs in application
process.on('uncaughtException',(err) =>{
  console.log(err.name,err.message);
  process.exit();
})


const app = require("./app");

dotenv.config();
mongoose
  .connect(process.env.MONGOURL).then(() => {
    console.log('connected to mongodb');
  })

const port = 8900;
const server = app.listen(port, () => {
  console.log(`server started at: ${port}`);
});


//  Promise is rejected, and the rejection is not handled by you
process.on('unhandledRejection',err =>{
  console.log(err.name, err.message);
  server.close(() =>{
    process.exit(1);
  })
})

