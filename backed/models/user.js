const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 4
    },
    name:  { type: String, required: true },
    picture: { type: String, required: true },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    passwordHash: String,
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog'
        }
    ],
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // the passwordHash should not be revealed
        delete returnedObject.passwordHash
        delete returnedObject.password
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User