const express = require('express');
const {
  createLeaveRequest,
  getLeaveRequests,
  approveLeaveRequest,
  rejectLeaveRequest,
} = require('../controllers/leaveController');

const router = express.Router();

// Create a new leave request
router.post('/', createLeaveRequest);

// Get all leave requests
router.get('/', getLeaveRequests);

// Approve a leave request
router.patch('/:id/approve', approveLeaveRequest);

// Reject a leave request
router.patch('/:id/reject', rejectLeaveRequest);

module.exports = router;
