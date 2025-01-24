require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000; // Usa el puerto proporcionado por Azure o 3000 por defecto

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Añadido para manejar JSON

// Ruta de verificación de salud
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configura el transporte de nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
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