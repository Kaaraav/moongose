const mongoose = require('mongoose')
const emailValidator = require('validator')

const addressSchema = new mongoose.Schema({
    contry: String,
    state: String,
    city: String
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                return emailValidator.isEmail(value)
            },
            message: 'Invalid Email'
        }
    },
    phone: Number,
    hobbies: [String],
    address: addressSchema,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
        get: createdAt => FormDate(createdAt)
    },
    updatedAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
})

module.exports = mongoose.model("user", userSchema)