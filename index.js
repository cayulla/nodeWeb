'use strict';

const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res,next)=>{
    res.render('login',{title:'Mi Tienda NodePop'});
});


app.get('/log',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'/app.log'))
});

app.use('/anuncios',require('./routes/anuncios'));
app.use('/usuarios',require('./routes/usuarios'));
app.use('/custom',require('./routes/custom'));


app.use((err,req,res,next)=>{
    console.log("Parseando Error -"+err.code);
    if (err.status && err.status >= 500) console.error(err);
       
    res.status(err.status || err.code || 500);
    
    res.locals.code = err.code;
    res.locals.error = err;

    res.render('error');
})

server.listen(3001,()=>{
    console.log('Iniciado mi Tiende NodePop');
})