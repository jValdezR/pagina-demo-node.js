const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers')
// Utiliza los html que esta en la carpeta de public
app.use((express.static(__dirname + '/public')));

// Carga los componentes reutilizables
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
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
});


});

app.get('/about',(req,res) => {
  res.render('about');
})
 

app.get('/data',  (req, res) => {
    // res.send(JSON.stringify(salida));
    res.send('Hola Data!!!')
  });

app.listen(8080);