const mongoose = require('mongoose')
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
    // useCreateIndex : true,
    // useFindAndModify:false

} , (e) =>{
    if(e)
    console.log(e);
    else
    console.log("database worked");
})