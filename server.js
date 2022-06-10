const express =  require('express');
var logger = require('./config/logger');
const app = express();

app.listen(8090, ()=>{
    //console.log('listening on 8090')
    logger.info('listening on 8090');
});


app.get('/', function(req,res){
    logger.info('GET /');
    res.sendFile(__dirname+ '/index.html');
});

app.get('/write', function(req,res){
    logger.error('Error message');
    res.sendFile(__dirname+ '/write.html');
});

app.get('/todo',function(req,res){
    res.send('TODO리스트를 보여드릴께요');
});


app.get('/tmp',function(req,res){
    res.sendFile(__dirname+ '/tmp.html');
});

app.get('/top',function(req,res){
    res.sendFile(__dirname+ '/top.html');
});

app.get('/footer',function(req,res){
    res.sendFile(__dirname+ '/footer.html');
});