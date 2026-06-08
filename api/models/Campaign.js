import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a campaign title'],
      trim: true,
      maxlength: [200, 'Title cannot be more than 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a campaign description'],
      maxlength: [2000, 'Description cannot be more than 2000 characters'],
    },
    goal: {
      type: Number,
      required: [true, 'Please provide a funding goal'],
      min: [0, 'Goal must be a positive number'],
    },
    raised: {
      type: Number,
      default: 0,
      min: [0, 'Raised amount cannot be negative'],
    },
    deadline: {
      type: Date,
      required: [true, 'Please provide a deadline'],
    },
    imageUrl: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: true,
    },
    location: {
      type: String,
      default: null,
    },
    category: {
      type: String,
      enum: ['health', 'education', 'infrastructure', 'emergency', 'other'],
      default: 'other',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Campaign', campaignSchema);
