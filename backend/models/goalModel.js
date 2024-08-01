const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    imgUrl: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
    target: {
      type: String,
      required: [true, 'Please add a target gender'],
    },
    location: {
      type: String,
      required: [true, 'Please add a location'],
    },
    age: {
      type: String,
      required: [true, 'Please add an age group'],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
