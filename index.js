var fs = require("fs");
var nodeMailer = require("nodemailer");
fs.watch(__dirname, function (event, filename) {
    fs.readFile(filename, 'utf8', function (err, contents) {
        // console.log(contents);
        // sending mail
        var transporter = nodeMailer.createTransport('smtps://USERNAME@gmail.com:PASSWORD@smtp.gmail.com');
        var mail = {
            from: '"Node "<USERNAME@gmail.com>',
            to: "USERNAME@gmail.com",
            subject: "File Chnaged " + filename,
            text: "The Content",
            html: contents
        }

        transporter.sendMail(mail, function (error, response) {
            if (error) {
                console.log(error);
            } else {
                console.log("Message sent: " + response.message);
            }
        });

    });
})

