const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
//const bcrypt = require('bcryptjs');


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


app.use(cors({ origin: ['http://localhost:5000', 
'http://gamebrag.onrender.com', 
'https://gamebrag.onrender.com'], credentials: true }))


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


// Routes
app.use(require('./routes/index'));

//configuracion del servidor nodejs
app.listen(5000);
console.log('Server on port',5000);
console.log("estoy ejecutandome");
console.log("Gilces Panta Cristian");


// middlewares
//app.use(express.urlencoded({extended: false}));

