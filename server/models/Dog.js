
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let dogModel = {};

const DogSchema = new mongoose.Schema({

name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
},

breed: {
    type: String,
    required: true,
    trim: true,
},

age: {
    type: Number,
    min: 1,
    required: true,
},

createdDate: {
    type: Date,
    default: Date.now,
},


});

DogSchema.statics.findByName = (name, callback) => {
    const search = {
        name,
    };

    return dogModel.findOne(search, callback);

}

dogModel = mongoose.model("Dog",DogSchema);

module.exports.dogModel = dogModel;
module.exports.DogSchema = DogSchema;