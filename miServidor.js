const express = require('express');
const app = express();

app.get('/api/hola', (req, res) => {
    res.json({
        frase: "hola desde el servidor!",
        autor: "servidor express"
    });
});

app.listen(3000, () => {
    console.log("servidor corriendo en http://localhost:3000 ")
})