var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

const GunlukBurclar = require("../Model/Burclar");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname);
  }
});


const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.post("/update", upload.single('productImage'), (req, res, next) => {
  const product = new GunlukBurclar({
    BurcAdi: req.body.BurcAdi,
    Tarih: req.body.Tarih,
    Yazi: req.body.Yazi,
    productImage: req.file.path
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
            BurcAdi: result.BurcAdi,
            Tarih: req.body.Tarih,
            Yazi: req.body.Yazi,
            request: {
                type: 'GET',
                url: "http://localhost:3000/uploads"
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});






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
