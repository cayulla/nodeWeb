'use strict';

const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res,next)=>{
    res.render('login',{title:'Mi Tienda NodePop'});
});

app.use('/anuncios',require('./routes/anuncios'));


app.use((err,req,res,next)=>{
    res.status(err.status || 500);

    res.locals.message = '';
    res.locals.error = err;

    res.render('error');
})

server.listen(3001,()=>{
    console.log('Iniciado mi Tiende NodePop');
})