const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Añadido para manejar JSON

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configura el transporte de nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      user: 'design416lf@gmail.com',
      pass: 'xnkg nghq gbpr iocr'
    }
  });

  const mailOptions = {
    from: 'palaciosf416@gmail.com',
    to: email,
    subject: subject,
    text: `Nombre: ${name}\nCorreo: ${email}\nAsunto: ${subject}\nMensaje: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Correo enviado: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});