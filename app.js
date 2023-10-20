const express = require("express");
const app = express();
app.use(express.json());
const curdRoute = require("./routes/crud");

app.use("/students", curdRoute);

app.all('*', (req,res) =>{
    res.status(404).json({
        message: 'Page Not Found'
    })
})

module.exports = app;
