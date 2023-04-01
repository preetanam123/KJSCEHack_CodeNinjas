const Symptoms = require('../models/symptoms.model.js');

const symptoms = async (req,res) => {
    try {
        const symptoms = new Symptoms(req.body);
        await symptoms.save();
        res.status(200).send({symptoms});
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = { symptoms };