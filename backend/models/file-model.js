const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    imagePath: { type: String},
    videoPath: { type: String},
});

module.exports = mongoose.model('File' , fileSchema);