const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nama: {
        required : true,
        type: String
    },
    nisn: {
        required : true,
        type : Number
    },
    alamat: {
        required : true,
        type : String
    },
})

module.exports = mongoose.model('siswa', dataSchema)