var model = require('../model/usermodel')

exports.insert = async (req, res) => {

    var data = await model.create(req.body);

    res.status(200).json({
        data
    })
}
exports.view = async (req, res) => {

    var data = await model.find();

    res.status(200).json({
        data
    })
} 
