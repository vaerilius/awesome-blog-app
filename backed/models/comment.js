const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const commentSchema = mongoose.Schema({
    comment: {
        type: String
    },
    user: String
})
commentSchema.plugin(uniqueValidator)

commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Comment', commentSchema)
