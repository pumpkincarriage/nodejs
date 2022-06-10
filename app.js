const express = require('express');
const app = express();
const port = 8090;

const admin = require('./route/admin');


app.get('/', (req,res)=>{
    // res.send('main page');
    res.sendFile(__dirname+ '/webapp/index.html');
});

app.get('/top',function(req,res){
    res.sendFile(__dirname+ '/webapp/top.html');
});

app.get('/footer',function(req,res){
    res.sendFile(__dirname+ '/webapp/footer.html');
});

app.use( '/admin', admin )

app.listen(port);