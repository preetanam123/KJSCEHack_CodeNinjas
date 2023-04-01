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
        },
        height: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true

        }
    });

    const Personal = mongoose.model("Personal", personalSchema);

    module.exports = Personal;
