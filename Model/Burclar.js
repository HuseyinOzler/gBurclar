const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BurcSchema = new Schema({
    
    productImage: {
        type: String,
        required: true
    },
    BurcAdi: {
        type: String,
    },
    Tarih: {
        type: String,
    },
    Tarih2:{
        type:String,
    },
    Yazi: {
        type: String,
    },
    YaziHafta:{
        type:String
    },
    YaziAy:{
        type:String,
    }

});

module.exports = mongoose.model('GunlukBurc', BurcSchema)