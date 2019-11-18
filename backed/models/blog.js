const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useFindAndModify', false);
const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  likes: Number,
  usersLiked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  ],
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [
    {
      // user:
      // {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      // },
      // comment: String
    }

  ]
})
blogSchema.plugin(uniqueValidator)

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)
