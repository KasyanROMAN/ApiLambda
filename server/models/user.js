const {Schema, model, ObjectId} = require("mongoose")

const user = new Schema({
    language: {type: Number, required: true, unique: true},
    mimetype: {type: Number, required: true},
    count: {type: Number, required: true, unique: true},
    countCost: {type: Number, required: true, unique: true},
    result: {type: Number, required: true},
    add: {type: Number, required: true}
})
module.exports = model('user', user)