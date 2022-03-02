const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'users';
const dburl=`mongodb+srv://Jyothsna:Jyothsna123@cluster0.b0dyt.mongodb.net/test/${dbName}`;
module.exports = {MongoClient,dburl,mongodb}

