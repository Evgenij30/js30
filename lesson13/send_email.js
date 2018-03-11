var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'mail.ukraine.com.ua',
  port: 2525 ,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "mail@notesbook.org",
    pass: "************"
  }
});

var mailOptions = {
  from: 'mail@notesbook.org',
  to: 'evgenij.kolesnik03@gmail.com',
  subject: 'Мое тестовое емейл сообщение Node.js',
  text: 'Привет!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});



