const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');

var saltRound = 10;

var hashedpassword = async(pwd)=>{
    let salt = await bcrypt.genSalt(saltRound);
    let hash = await bcrypt.hash(pwd,salt);
    return hash;
}

var hashcompare = async (pwd,hash)=>{
    let result = await bcrypt.compare(pwd,hash);
    return result;
}

var createtoken = async(name,email,phone,password)=>{
    let token = await JWT.sign({name,email,phone,password},'secret',{expiresIn:'10m'})
    // console.log(token);
    return token;
    

}

var verifytoken = async(token)=>{
    let decode = await jwt_decode(token);
    return decode;
}
module.exports ={hashedpassword, hashcompare, createtoken, verifytoken}


