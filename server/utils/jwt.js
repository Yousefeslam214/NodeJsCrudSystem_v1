const jwt = require('jsonwebtoken');

module.exports = async (payload) => {
    const token = await jwt.sign(
        payload,
        process.env.JWT_SECERT_KEY,
        { expiresIn: '1s' }
    );
    return token;
};
