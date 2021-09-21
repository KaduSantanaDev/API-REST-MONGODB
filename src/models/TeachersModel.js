const mongoose = require('mongoose');

const validateEmail = (email) => {
  const validation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return validation.test(email);
};

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  email: {
    type: String,
    require: 'Email adress is required',
    unique: true,
    lowercase: true,
    validate: [validateEmail, 'Fill with a valid email adress'],
  },
  curriculum: {
    type: String,
    required: true,
    minlength: 120,
  },
  age: {
    type: Number,
    required: true,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  students: [{
    type: mongoose.ObjectId,
    required: true,
    ref: 'Student',
  }],
});

const TeacherModel = mongoose.model('Teacher', TeacherSchema);

module.exports = TeacherModel;
