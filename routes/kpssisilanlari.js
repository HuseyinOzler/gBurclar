var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

const Kpssisilanlari = require("../Model/KpssModel");

/*
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
  const product = new Kpssisilanlari({
    BurcAdi: req.body.BurcAdi,
    Tarih: req.body.Tarih,
    Tarih2: req.body.Tarih2,
    Tarih3: req.body.Tarih3,
    Tarih4: req.body.Tarih4,
    Yazi: req.body.Yazi,
    YaziHafta: req.body.YaziHafta,
    YaziAy: req.body.YaziAy,
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
            Tarih2: req.body.Tarih2,
            Tarih3: req.body.Tarih3,
            Tarih4: req.body.Tarih4,
            Yazi: req.body.Yazi,
            YaziHafta: req.body.YaziHafta,
            YaziAy: req.body.YaziAy,
            request: {
                type: 'GET',
                url: "http://localhost:3000"
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
*/


router.post('/',(req,res,next) => {
  const Gburclar = new Kpssisilanlari(req.body);
  const promise =  Gburclar.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  });
});

router.get('/list', (req, res, next) => {
  const promise = Kpssisilanlari.find({});
  promise.then((data) => {
    res.json({data});
  }).catch((err) => {
    res.json(err)
  })
});



router.put('/:DayUpdate', (req, res, next) => {
  const promise = Kpssisilanlari.findByIdAndUpdate(
    req.params.DayUpdate,
    req.body,
    {
      new:true
    }
  );
  promise.then((data) => {
    if (!data)
      next({
        message: 'The data was not found.',
        code: 99
      });

    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


module.exports = router;
