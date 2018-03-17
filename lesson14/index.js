//1
/*
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if(req.url === '/' ){
        res.write('Hello word');
        res.end();
    }else if(req.url === '/about' ){
        console.log("Тип запроса: " + req.method);
        console.log("Users-Agent: " + req.headers['user-agent']);
        res.end();     
    }else if(req.url === '/file' ){
        fs.readFile("DDT_ Svoboda.mp3", function (err, data){
            res.write(data);        
            res.end();
        });
    }else{
         res.write('404');
         res.end();
    }
}).listen(3000,function () {
    console.log('Go to localhost:3000');
});


//2
//модуль nodemon , запуск сервера через nodemon -L

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

//4
var xhr = new XMLHttpRequest();
var url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3'

xhr.open('GET', url, false);
xhr.send();

if (xhr.status != 200) {
    throw error || new Error("Invalid status code"); 

    var obj = JSON.parse(xhr.responseText);
    for(var prop in obj){
       console.log('Валюта:'+obj[prop].ccy+'\n'+'Курс :' +obj[prop].buy+'\n');
    }
 }