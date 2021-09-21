const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;
