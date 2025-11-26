const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TravelRecord = require('../models/TravelRecord');

// @route   GET /api/travel-records
// @desc    Get all travel records
// @access  Public
router.get('/', async (req, res) => {
  try {
    const travelRecords = await TravelRecord.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: travelRecords.length,
      data: travelRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @route   GET /api/travel-records/:id
// @desc    Get single travel record
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid travel record ID'
      });
    }

    const travelRecord = await TravelRecord.findById(req.params.id);
    
    if (!travelRecord) {
      return res.status(404).json({
        success: false,
        error: 'Travel record not found'
      });
    }

    res.json({
      success: true,
      data: travelRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @route   POST /api/travel-records
// @desc    Create a travel record
// @access  Public
router.post('/', async (req, res) => {
  try {
    const travelRecord = await TravelRecord.create(req.body);
    
    res.status(201).json({
      success: true,
      data: travelRecord
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// @route   PUT /api/travel-records/:id
// @desc    Update a travel record
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid travel record ID'
      });
    }

    const travelRecord = await TravelRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!travelRecord) {
      return res.status(404).json({
        success: false,
        error: 'Travel record not found'
      });
    }

    res.json({
      success: true,
      data: travelRecord
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// @route   DELETE /api/travel-records/:id
// @desc    Delete a travel record
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid travel record ID'
      });
    }

    const travelRecord = await TravelRecord.findByIdAndDelete(req.params.id);

    if (!travelRecord) {
      return res.status(404).json({
        success: false,
        error: 'Travel record not found'
      });
    }

    res.json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
