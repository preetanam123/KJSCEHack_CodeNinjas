const Personal = require("../models/personal.model.js");

const personal = async (req, res) => {
    try {
        const personal = new Personal(req.body);
        await personal.save();
        res.status(200).send({personal});

    }
    catch (err) {
       res.status(500).send(err.message);
    };
}

module.exports = {personal} ;