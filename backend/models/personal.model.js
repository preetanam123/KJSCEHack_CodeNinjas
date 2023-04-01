const mongoose = require("mongoose");


const personalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },

        gender: {
            type: String

        },
        age: {
            type: Number,
            required: true
        },
        bloodGroup: {
            type: String,
            required: true
        }
    });

    const Personal = mongoose.model("Personal", personalSchema);

    module.exports = Personal;
