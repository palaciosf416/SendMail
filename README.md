# API RESTful
# Deployed in Azure APP Service
Es una API RESTful construida con Node.js y Express.js que permite enviar correos electrónicos utilizando el módulo nodemailer.



## Características

- Esta API se encarga de enviarme la información de contacto de mi portafolio a mi correo electrónico.

## Instalación

Clonar el repositorio.

```bash
  git clone <reponame>
```

Instalación de dependencias.

```bash
npm i or npm install
```

Iniciar servidor

```bash
npm run start
```

## Variables de entorno

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env  en el directorio raíz.

`EMAIL_USER=tu_correo_electronico`
`EMAIL_PASS=tu_clave_de_correo_o_clave_de_aplicacion`

## Stack tecnológico

**Client:** 

**Server:** 
express: Framework para construir aplicaciones web y APIs.
nodemailer: Módulo para enviar correos electrónicos.
bodyParser: Middleware para analizar cuerpos de solicitudes HTTP.
cors: Middleware para habilitar CORS (Cross-Origin Resource Sharing).

## Rutas:

app.get('/health', (req, res) => { res.status(200).send('OK'); });: Ruta de verificación de salud.
app.post('/send-email', (req, res) => { ... });: Ruta para enviar correos electrónicos.


## Support

Si encuentra útil este proyecto o le gustaría apoyar mi trabajo, puede ⭐ este repositorio.
