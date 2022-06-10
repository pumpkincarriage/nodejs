const express = require('express');
const logger = require('../config/logger');
const router = express.Router();

router.get('/', (req, res) =>{
    logger.info(__dirname.length );
    logger.info(__dirname.lastIndexOf("\\"));
    logger.info();
    
    // logger.info(__filename);
    // logger.info(ur)
    res.sendFile(__dirname.substr(0,  __dirname.lastIndexOf("\\"))+'/webapp/write.html');
});


// app.get('/write', function(req,res){

//     res.sendFile(__dirname+ '/write.html');
// });



router.get('/products', (req, res) => {
    res.send('admin products');
});

router.get('/contacts', (req, res) => {
    res.send('admin contacts');
});


module.exports = router; 