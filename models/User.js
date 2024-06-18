const mongoose = require('mongoose');

// Define User model schema
const UserSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  upiIds: [
    {
      type: String,
      required: true,
    },
  ],
});

// Export User model
module.exports = mongoose.model('User', UserSchema);
