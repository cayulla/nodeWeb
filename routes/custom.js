'use strict';

var express = require('express');
var router = express.Router();


router.post('/', async (req, res, next) =>{
    console.log('=========================');
    console.log('===== REQUEST HEADER =====');
    console.log(req.headers);
    console.log('===== REQUEST BODY =====');
    console.log(req.body);
    console.log('=========================');

    return res.json({
        success:true
    });
});

module.exports = router;