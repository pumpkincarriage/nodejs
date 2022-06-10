var winston = require('winston'); 
var winstonDaily = require('winston-daily-rotate-file');
var moment = require('moment');
const { json } = require('express');

function timeStampFormat(){
    return moment().format('YYYY-MM-DD HH:mm:ss SSS ZZ');
};

var logger = new (winston.log)({
        transports:[
            new (winstonDaily)({
                name : 'info-file', 
                filename: './log/server',
                datePattern: '_yyyy-MM-dd.log',
                colorize: false,
                maxSize:50000000, 
                maxFiles:1000,
                level: 'info',
                showLevel:true,
                jason:false,
                timestamp: timeStampFormat
            }),
            new (winston.transports.Console)({
                name:'debug-console',
                colorize:true,
                level:'debug',
                showLevel:true,
                json:false,
                timestamp: timeStampFormat
            })
        ],
        exceptionHandlers:[
            new(winstonDaily)({
                name:'exception-file',
                filename:'./log/exception',
                datePattern:'_yyyy-MM-dd.log',
                colorize:false,
                maxSize:50000000, 
                maxFiles:1000,
                level: 'error',
                showLevel:true,
                jason:false,
                timestamp: timeStampFormat
            }),
            new (winston.transports.Console)({
                name:'exception-console',
                colorize:true,
                level:'debug',
                showLevel:true,
                json:false,
                timestamp: timeStampFormat
            })
        ]
    });