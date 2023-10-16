const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()
mongoose
  .connect(process.env.MONGOURL).then(() =>{
    console.log('connected to mongodb');
  }).catch((err) =>{
    console.log('error' , err)
  })

const port = 8900;
app.listen(port, () => {
  console.log(`server started at: ${port}`);
});
