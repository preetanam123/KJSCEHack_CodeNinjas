const mongoose = require('mongoose');

const symptomsSchema = new mongoose.Schema({
    lymphocytes: {
        type: Number,
        required: true
    },
    platelets:{
        type: Number,
        required: true
    },
    RBCs: {
        type: Number,
        required: true
    },
    haemoglobin: {
        type: Number,
        required: true
    }
});

const Symptoms = mongoose.model("Symptoms", symptomsSchema);

module.exports = Symptoms;
