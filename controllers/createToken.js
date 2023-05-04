const jwt = require('jsonwebtoken');

const createToken = (_id)=>{
    return jwt.createToken({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

export default createToken;