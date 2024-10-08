const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos si tienes
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

app.get('/files/:filename', (req, res) => {
  const fileName = req.params.filename;
  const filePath = `files/${fileName}`;
  res.sendFile(filePath, { root: __dirname });
});

module.exports = app;
