const Home = require('../models/HomeModel');

module.exports = {
  async index(req, res) {
    try {
      const teste = await Home.find();
      return res.status(200).json({ teste });
    } catch (e) {
      return res.status(500).json({
        err: e.message,
      });
    }
  },
  async store(req, res) {
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json('missing name');
    }

    const pessoa = new Home({
      nome,
    });

    try {
      await pessoa.save();

      return res.status(201).json({
        message: 'pessoa criada',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  },
};
