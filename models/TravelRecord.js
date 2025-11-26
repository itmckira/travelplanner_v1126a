const mongoose = require('mongoose');

const travelRecordSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  destination: {
    type: String,
    required: [true, 'Please add a destination'],
    trim: true
  },
  startDate: {
    type: Date,
    required: [true, 'Please add a start date']
  },
  endDate: {
    type: Date,
    required: [true, 'Please add an end date']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  budget: {
    type: Number,
    min: [0, 'Budget cannot be negative']
  },
  participants: {
    type: [String],
    default: []
  },
  activities: {
    type: [String],
    default: []
  },
  notes: {
    type: String,
    maxlength: [2000, 'Notes cannot be more than 2000 characters']
  },
  status: {
    type: String,
    enum: ['planned', 'ongoing', 'completed', 'cancelled'],
    default: 'planned'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('TravelRecord', travelRecordSchema);
