const express = require('express');
const port = 5000;
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

// Serve only the static files form the dist directory
app.use(express.static('./dist/personal-site-two'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/personal-site-two/' }),
);

app.listen(process.env.PORT || 8080);

// app.get('/api', (request, response) => {
//     console.log(`URL: ${request.url}`);
//     response.send({ message: 'Node.js and Express REST API' });
// });

// app.post('/api/contact', (request, response) => {
//     let mailOpts, smtpTrans;
//     smtpTrans = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: GMAIL_USER,
//             pass: GMAIL_PASS
//         }
//     });
//     mailOpts = {
//         from: request.body.name + ' &lt;' + request.body.email + '&gt;',
//         to: GMAIL_USER,
//         subject: 'New message from contact form at ryanmundy.herokuapp.com',
//         text: `${request.body.name} (${request.body.email}) says: ${request.body.message}`
//     };
//     smtpTrans.sendMail(mailOpts, function (error, response) {
//         if (error) {
//             response.send('contact-failure');
//         }
//         else {
//             response.send('contact-success');
//         }
//     });
// })

// const server = app.listen(port, (error) => {
//     if (error) return console.log(`Error: ${error}`);

//     console.log(`Server listening on port ${server.address().port}`);
// });