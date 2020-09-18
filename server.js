const express = require('express');
const app = express();
 
// Utiliza el indez que esta en la carpeta de public
app.use((express.static(__dirname + '/public')));
// 
app.set('view engine', 'hbs');

/* app.get('/',  (req, res) => {
  // res.send(JSON.stringify(salida));
  let salida = {
    nombre: 'Daniel',
    edad: '21',
    url: req.url

};
res.send(JSON.stringify(salida));
}); */

app.get('/',  (req, res) => {
  // res.send(JSON.stringify(salida));
  
res.render('home',{
  nombre: 'Daniel',
  anio: new Date().getFullYear()
});
});
 

app.get('/data',  (req, res) => {
    // res.send(JSON.stringify(salida));
    res.send('Hola Data!!!')
  });

app.listen(8080);