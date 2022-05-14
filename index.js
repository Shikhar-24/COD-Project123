const express = require('express');

require('../COD/src/db/mongoose');

const UserRoute = require('../COD/src/routers/user');


const app = express();
const port = 4000;

app.use(express.json());
app.use(UserRoute);

 
app.listen(port, () =>{
    console.log('listening on port ' + port)
});