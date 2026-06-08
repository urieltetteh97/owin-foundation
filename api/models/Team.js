import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a team member name'],
      trim: true,
      maxlength: [100, 'Name cannot be more than 100 characters'],
    },
    role: {
      type: String,
      required: [true, 'Please provide a role'],
      trim: true,
      maxlength: [100, 'Role cannot be more than 100 characters'],
    },
    bio: {
      type: String,
      maxlength: [1000, 'Bio cannot be more than 1000 characters'],
    },
    imageUrl: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Team', teamSchema);
