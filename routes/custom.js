'use strict';

var express = require('express');
var router = express.Router();
//nodepop.cayulla.com

router.post('/', async (req, res, next) =>{
    var fecha = new Date().toLocaleString();
    console.log('===>> '+fecha);
    console.log('===== REQUEST HEADER =====');
    console.log(req.headers);
    console.log('===== REQUEST BODY =====');
    console.log(req.body);
    console.log('=========================');

    return res.json({
        foudSignupDate:"2016-03-10"
    });
});



module.exports = router;