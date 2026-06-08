import express from 'express';
import Campaign from '../models/Campaign.js';

const router = express.Router();

// GET all campaigns
router.get('/', async (req, res, next) => {
  try {
    const campaigns = await Campaign.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: campaigns.length,
      data: campaigns,
    });
  } catch (error) {
    next(error);
  }
});

// GET active campaigns only
router.get('/active', async (req, res, next) => {
  try {
    const campaigns = await Campaign.find({ active: true }).sort({ deadline: 1 });
    res.status(200).json({
      success: true,
      count: campaigns.length,
      data: campaigns,
    });
  } catch (error) {
    next(error);
  }
});

// GET single campaign
router.get('/:id', async (req, res, next) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: 'Campaign not found',
      });
    }
    res.status(200).json({
      success: true,
      data: campaign,
    });
  } catch (error) {
    next(error);
  }
});

// POST new campaign (TODO: add admin auth)
router.post('/', async (req, res, next) => {
  try {
    const { title, description, goal, deadline, imageUrl, location, category } = req.body;

    if (!title || !description || !goal || !deadline) {
      return res.status(400).json({
        success: false,
        message: 'Please provide required fields: title, description, goal, deadline',
      });
    }

    const campaign = await Campaign.create({
      title,
      description,
      goal,
      deadline: new Date(deadline),
      imageUrl,
      location,
      category,
    });

    res.status(201).json({
      success: true,
      data: campaign,
    });
  } catch (error) {
    next(error);
  }
});

// PUT update campaign
router.put('/:id', async (req, res, next) => {
  try {
    const campaign = await Campaign.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: 'Campaign not found',
      });
    }

    res.status(200).json({
      success: true,
      data: campaign,
    });
  } catch (error) {
    next(error);
  }
});

// PUT update raised amount (for donation tracking)
router.put('/:id/raised', async (req, res, next) => {
  try {
    const { amount } = req.body;

    if (!amount || typeof amount !== 'number') {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid amount',
      });
    }

    const campaign = await Campaign.findByIdAndUpdate(
      req.params.id,
      { $inc: { raised: amount } },
      { new: true }
    );

    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: 'Campaign not found',
      });
    }

    res.status(200).json({
      success: true,
      data: campaign,
    });
  } catch (error) {
    next(error);
  }
});

// DELETE campaign
router.delete('/:id', async (req, res, next) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(req.params.id);

    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: 'Campaign not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Campaign deleted successfully',
      data: campaign,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
