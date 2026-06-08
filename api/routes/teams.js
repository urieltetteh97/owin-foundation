import express from 'express';
import Team from '../models/Team.js';

const router = express.Router();

// GET all team members
router.get('/', async (req, res, next) => {
  try {
    const team = await Team.find().sort({ order: 1, createdAt: 1 });
    res.status(200).json({
      success: true,
      count: team.length,
      data: team,
    });
  } catch (error) {
    next(error);
  }
});

// GET single team member
router.get('/:id', async (req, res, next) => {
  try {
    const teamMember = await Team.findById(req.params.id);
    if (!teamMember) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found',
      });
    }
    res.status(200).json({
      success: true,
      data: teamMember,
    });
  } catch (error) {
    next(error);
  }
});

// POST new team member (TODO: add admin auth)
router.post('/', async (req, res, next) => {
  try {
    const { name, role, bio, imageUrl, email, order } = req.body;

    if (!name || !role) {
      return res.status(400).json({
        success: false,
        message: 'Please provide required fields: name, role',
      });
    }

    const teamMember = await Team.create({
      name,
      role,
      bio,
      imageUrl,
      email,
      order: order || 0,
    });

    res.status(201).json({
      success: true,
      data: teamMember,
    });
  } catch (error) {
    next(error);
  }
});

// PUT update team member
router.put('/:id', async (req, res, next) => {
  try {
    const teamMember = await Team.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!teamMember) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found',
      });
    }

    res.status(200).json({
      success: true,
      data: teamMember,
    });
  } catch (error) {
    next(error);
  }
});

// DELETE team member
router.delete('/:id', async (req, res, next) => {
  try {
    const teamMember = await Team.findByIdAndDelete(req.params.id);

    if (!teamMember) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Team member deleted successfully',
      data: teamMember,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
