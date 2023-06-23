const bcrypt = require('bcrypt');
const {SALT_ROUND} = require('../configs/constant');

module.exports.hashPass = async (req,res,next) => {
    try {
        const {body, body: {password}} = req;

        req.passwordHash = await bcrypt.hash(password, 1);
        // delete body.password;
        next();
    } catch(error) {
        next(error);
    }
}