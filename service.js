const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config();
mongoose
  .connect(process.env.MONGOURL).then(() => {
    console.log('connected to mongodb');
  }).catch((err) =>{
    console.log('error' , err)
  })

const port = 8900;
app.listen(port, () => {
  console.log(`server started at: ${port}`);
});
