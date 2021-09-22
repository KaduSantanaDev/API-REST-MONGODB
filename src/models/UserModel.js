const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const validateEmail = (email) => {
  const validation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return validation.test(email);
};
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: [validateEmail, 'fill with a valid email adress'],
  },
  password: {
    type: String,
    minlength: 6,
    default: '',
  },

});

const userModel = mongoose.model('User', UserSchema, 'users');

module.exports = userModel;
exports.passwordValid = function passwordIsValid(password) {
  return bcrypt.compare(password, UserSchema.password);
};
