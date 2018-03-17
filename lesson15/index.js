//1
/*
var event = require('events').EventEmitter;

var emt = new event();

emt.on('logger',function () {
	var myDate = new Date();
    console.log('Время Авторизация пользователя '+myDate.getDate()+'/'+(myDate.getMonth() + 1).toString()+'/'+myDate.getFullYear()+' '+myDate.getHours()+':'+myDate.getMinutes()+':'+myDate.getSeconds());
});
emt.emit('logger'); //вызываем событие емитируем событие


//2  
//модуль nodemon , запуск сервера nodemon -L
var http = require('http');
http.createServer(function (req, res) {
    res.write('Hello word');
    res.end();
}).listen(3000,function () {
    console.log('nodemon ./server.js localhost:3000');
});

//3
var request = require('request');
var url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
request(url, function (error, response, body) {
    if (error || response.statusCode !== 200) {
    throw error || new Error("Invalid status code"); // Ну или что тут надо делать
  }

  var obj = JSON.parse(body);
  for(var prop in obj){
  console.log('Валюта:'+obj[prop].ccy+'\n'+
              'Курс :' +obj[prop].buy+'\n'
              );
}

  //console.log(obj);
});