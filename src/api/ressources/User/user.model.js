const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  creationTime: {
    type: Date,
    default: () => Date.now(),
  },
  challenge: {
    type: mongoose.Schema.Types.ObjectId,
  }
});

module.exports.User = mongoose.model('User', UserSchema);
