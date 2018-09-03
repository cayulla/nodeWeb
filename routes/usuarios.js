'use strict';

var express = require('express');
var request = require('request'); 
var router = express.Router();


router.post('/login', (req,res,next)=>{
    try {
        const usuario = req.body.usuario;
        const pass = req.body.password;

        console.log('NodePopWeb Invocando a API');
        request.post({url:'http://localhost:3002/usuarios/login', form: {usuario:usuario, password:pass}}, function(err,response,body){ 
        
            console.log('Terminada invocacion a API');   
            console.log("Error=" +err);
            if(err){next(err);}
            console.log("Response Body= "+response.body);
            var info = JSON.parse(response.body);
            if (response.statusCode == 200) {
                if(info.sucess){
                    console.log('Sucess=> '+info.sucess);
                    res.locals.token=info.token;
                    res.locals.titulo='NodePop Anuncios';
                    res.locals.anuncios = {};
                    res.render('anuncios', { title: 'Cayulla' });
                    res.redirect('/anuncios');
                }

            } 
            err=new Error(info.error.message);
            err.code=info.error.code;
            next(err);
        })
    } catch (err) {
        err.code = 400;
        next(err);
    }    
});


module.exports = router;