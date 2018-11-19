var express = require('express');
var router = express.Router();

const GunlukBurclar = require("../Model/Burclar");

router.post('/',(req,res,next) => {
  const Gburclar = new GunlukBurclar(req.body);
  const promise =  Gburclar.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  });
});

router.get('/list', (req, res, next) => {
  const promise = GunlukBurclar.find({});
  promise.then((data) => {
    res.json({data});
      
    
  }).catch((err) => {
    res.json(err)
  })
});


module.exports = router;
