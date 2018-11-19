const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb://hsyn:osm147.1@ds161653.mlab.com:61653/burclar99',{ useNewUrlParser: true })
    
    mongoose.connection.on('open',()=>{
        console.log('Mongodb Baglantısı Başarılı');
    });
    mongoose.connection.on('error',(err)=>{
        console.log('Mongodb',err);
    })
};