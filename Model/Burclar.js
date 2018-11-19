const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BurcSchema = new Schema({
    BurcAdi: {
        type: String,
    },
    Tarih: {
        type: String,
    },
    Yazi: {
        type: String,
    },
});

module.exports = mongoose.model('GunlukBurc', BurcSchema)