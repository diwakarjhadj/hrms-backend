const Leave = require('../models/Leave');
const Employee = require('../models/Employee');

// Create a Leave Request
const createLeaveRequest = async (req, res) => {
  try {
    const { employeeId, leaveType, startDate, endDate, reason } = req.body;

    const newLeave = new Leave({
      employeeId,
      leaveType,
      startDate,
      endDate,
      reason,
    });

    const savedLeave = await newLeave.save();
    res.status(201).json(savedLeave);
  } catch (error) {
    res.status(500).json({ message: 'Error creating leave request', error });
  }
};

// Get All Leave Requests
const getLeaveRequests = async (req, res) => {
  try {
    const leaveRequests = await Leave.find().populate('employeeId', 'name department contact');
    res.status(200).json(leaveRequests);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Approve a Leave Request
const approveLeaveRequest = async (req, res) => {
  try {
    const leaveId = req.params.id;
    const leave = await Leave.findById(leaveId);

    if (!leave) {
      return res.status(404).json({ message: 'Leave request not found.' });
    }

    leave.status = 'Approved';
    await leave.save();
    res.status(200).json({ message: 'Leave request approved.', leave });
  } catch (error) {
    res.status(500).json({ message: 'Error approving leave request.', error: error.message });
  }
};

// Reject a Leave Request
const rejectLeaveRequest = async (req, res) => {
  try {
    const leaveId = req.params.id;
    const leave = await Leave.findById(leaveId);

    if (!leave) {
      return res.status(404).json({ message: 'Leave request not found.' });
    }

    leave.status = 'Rejected';
    await leave.save();
    res.status(200).json({ message: 'Leave request rejected.', leave });
  } catch (error) {
    res.status(500).json({ message: 'Error rejecting leave request.', error: error.message });
  }
};

module.exports = {
  createLeaveRequest,
  getLeaveRequests,
  approveLeaveRequest,
  rejectLeaveRequest,
};
