const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Ruta para servir archivos PDF
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const file = path.join(__dirname, 'files', filename); // Ubicación donde guardas los PDFs
    
    res.download(file, (err) => {
        if (err) {
            res.status(500).send('Error al descargar el archivo.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
