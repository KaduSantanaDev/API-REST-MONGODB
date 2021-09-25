const User = require('../models/UserModel');

module.exports = {
  async index(req, res) {
    const users = await User.find();
    try {
      return res.status(200).json({ users });
    } catch (e) {
      return res.status(500).json({
        errors: e.message,
      });
    }
  },
  async store(req, res) {
    const { email, password } = req.body;

    if (!email && !password) {
      res.status(400).json({
        err: 'email and password are required',
      });
    }

    const user = new User({
      email,
      password,
    });
    try {
      await user.save();
      return res.status(201).json({
        message: 'A user has been created',
        user,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['missing id'],
        });
      }

      const user = await User.findByIdAndDelete({ _id: id });
      return res.json(user);
    } catch (error) {
      return res.status(400).json();
    }
  },
};
