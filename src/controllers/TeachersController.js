const Teacher = require('../models/TeachersModel');

module.exports = {
  async index(req, res) {
    const teachers = await Teacher.find().populate('students');
    try {
      return res.status(200).json({ teachers });
    } catch (e) {
      return res.status(500).json({
        errors: e.message,
      });
    }
  },
  async store(req, res) {
    const {
      name, email, curriculum, age, yearsOfExperience, students,
    } = req.body;

    if (!name && !email && !curriculum && !age && !yearsOfExperience && !students) {
      res.status(400).json({
        err: 'name, email, courriculum, age, years of experience and the students are required',
      });
    }

    const teacher = new Teacher({
      name,
      email,
      curriculum,
      age,
      yearsOfExperience,
      students,
    });
    try {
      await teacher.save();
      return res.status(201).json({
        message: 'A teacher has been created',
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

      const teacher = await Teacher.findByIdAndUpdate({ _id: id }, req.body);
      return res.json(teacher);
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

      const teacher = await Teacher.findByIdAndDelete({ _id: id });
      return res.json(teacher);
    } catch (error) {
      return res.status(400).json();
    }
  },
};
