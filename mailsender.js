var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mugunthkumar99@gmail.com',
    pass: 'nsuemgdebgbhvzmc'
  }
});

var mailOptions = {
  from: 'mugunthkumar99@gmail.com',
  to: 'mugunthkumar1111@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("Mail Not Send");
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


//https://accounts.google.com/IssuedAuthSubTokens?hide_authsub=1