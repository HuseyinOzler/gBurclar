const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb://hsyn:osm147.1@ds249503.mlab.com:49503/kpssisilanlari11',{ useNewUrlParser: true })
    
    mongoose.connection.on('open',()=>{
        console.log('Mongodb Baglantısı Başarılı');
    });
    mongoose.connection.on('error',(err)=>{
        console.log('Mongodb',err);
    })
};