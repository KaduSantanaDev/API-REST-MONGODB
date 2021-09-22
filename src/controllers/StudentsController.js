const Student = require('../models/StudentsModel');

module.exports = {
  async index(req, res) {
    const students = await Student.find();
    try {
      return res.status(200).json({ students });
    } catch (e) {
      return res.status(500).json({
        errors: e.message,
      });
    }
  },
  async store(req, res) {
    const { name, year } = req.body;

    if (!name && !year) {
      res.status(400).json({
        err: 'name and year are both required',
      });
    }

    const student = new Student({
      name,
      year,
    });
    try {
      await student.save();
      return res.status(201).json({
        message: 'A student has been created',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['missing id'],
        });
      }

      const student = await Student.findByIdAndUpdate({ _id: id }, req.body);
      return res.json(student);
    } catch (error) {
      return res.status(400).json();
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

      const student = await Student.findByIdAndDelete({ _id: id });
      return res.json(student);
    } catch (error) {
      return res.status(400).json({
        errors: 'internal server error',
      });
    }
  },
};
