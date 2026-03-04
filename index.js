require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.post('/send-email', (req, res) => {
  // 1. CORRECCIÓN: Extraemos 'to' del cuerpo de la petición (body)
  const { name, email, subject, message, to } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Simplificado para Gmail
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Sistema de Folios" <${process.env.EMAIL_USER}>`,
    to: to || 'sabas.palacios@elektra.com.mx', // 2. CORRECCIÓN: Usamos la variable 'to'
    subject: subject,
    html: message // 3. CORRECCIÓN: Usamos 'html' en lugar de 'text' para que se vea bonito
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error enviando:", error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Correo enviado: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
