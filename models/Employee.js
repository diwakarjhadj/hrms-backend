const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  contact: String,
  email: String,
  leaveBalance: { type: Number, default: 12 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
