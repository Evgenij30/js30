var fs = require("fs");
var text = 'Моя первая тестовая запись в файл\n';
var text1 = 'Дозаписуем с новой строки';

fs.appendFileSync("myTestFile.txt", text, function(error){
                if(error) throw error; // если возникла ошибка
});
 
fs.appendFile("myTestFile.txt", text1, function(error){
 
                if(error) throw error; // если возникла ошибка
                console.log("Асинхронная запись файла завершена. Содержимое файла:");
                var data = fs.readFileSync("myTestFile.txt", "utf8");
                console.log(data);  // выводим считанные данные
});
