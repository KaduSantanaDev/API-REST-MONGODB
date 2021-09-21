const mongoose = require('mongoose');

const Studentchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  year: {
    type: Number,
    required: true,
  },

});

const TeacherModel = mongoose.model('Student', Studentchema, 'students');

module.exports = TeacherModel;
