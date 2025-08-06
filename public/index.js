const url = "http://localhost:3000/api/hola";

fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
        document.getElementById("frase").textContent = `"${data.frase}" — ${data.autor} `;

 })
 .catch(error => {
    document.getElementById("frase").textContent = "no cargo la frase"
    console.log(error);
 });