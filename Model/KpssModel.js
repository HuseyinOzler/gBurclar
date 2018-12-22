const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BurcSchema = new Schema({
    

    logo:{
        type:String
    },
    baslik:{
        type: String
    },
    yayintarihi:{
        type: String
    },
    resim:{
        type: String
    },
    personelAlimSayisi:{
        type: String
    }

});

module.exports = mongoose.model('Kpssisilanlari', BurcSchema)