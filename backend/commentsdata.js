const mongoose = require('mongoose');
require('./models/User');
require('./models/Item');  
require('./models/Comment');

const comment =mongoose.model("Comment");
data=[{
  "_id": {
    "$oid": "62f69487c486fb00548f6008"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6009"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6018"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6019"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6028"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6029"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6118"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6119"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f60a8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f60a9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6a18"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6a19"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6a28"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6a29"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f61a8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f61a9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6098"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6099"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f60b8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f60b9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f60c8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f60c9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6088"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6089"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6ab8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6ab9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6ac8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6ac9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f61d8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f61d9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6000"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6001"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6012"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6013"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6024"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6025"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f69487c486fb00548f6116"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6b46fc486fb00548f6117"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f19487c486fb00548f60a8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f2b46fc486fb00548f60a9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f39487c486fb00548f6a18"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f4b46fc486fb00548f6a19"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f09487c486fb00548f6a28"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f5b46fc486fb00548f6a29"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f79487c486fb00548f61a8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f8b46fc486fb00548f61a9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f99487c486fb00548f6098"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62fab46fc486fb00548f6099"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62fb9487c486fb00548f60b8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62fcb46fc486fb00548f60b9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "02f69487c486fb00548f6008"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12f6b46fc486fb00548f6009"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "22f69487c486fb00548f6018"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "32f6b46fc486fb00548f6019"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f69487c486fb00548f6028"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "52f6b46fc486fb00548f6029"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "72f69487c486fb00548f6118"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "82f6b46fc486fb00548f6119"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "92f69487c486fb00548f60a8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "a2f6b46fc486fb00548f60a9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "b2f69487c486fb00548f6a18"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "c2f6b46fc486fb00548f6a19"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "d2f69487c486fb00548f6a28"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "e2f6b46fc486fb00548f6a29"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "f2f69487c486fb00548f61a8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "60f6b46fc486fb00548f61a9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "61f69487c486fb00548f6098"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "63f6b46fc486fb00548f6099"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "64f69487c486fb00548f60b8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "65f6b46fc486fb00548f60b9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "66f69487c486fb00548f60c8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "67f6b46fc486fb00548f60c9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "68f69487c486fb00548f6088"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "69f6b46fc486fb00548f6089"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6af69487c486fb00548f6ab8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6bf6b46fc486fb00548f6ab9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6cf69487c486fb00548f6ac8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6df6b46fc486fb00548f6ac9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6ef69487c486fb00548f61d8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6ff6b46fc486fb00548f61d9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62069487c486fb00548f6000"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6216b46fc486fb00548f6001"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62269487c486fb00548f6012"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6236b46fc486fb00548f6013"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62469487c486fb00548f6024"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6256b46fc486fb00548f6025"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62669487c486fb00548f6116"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6276b46fc486fb00548f6117"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62819487c486fb00548f60a8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6292b46fc486fb00548f60a9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62a39487c486fb00548f6a18"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62b4b46fc486fb00548f6a19"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62c09487c486fb00548f6a28"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62d5b46fc486fb00548f6a29"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62e79487c486fb00548f61a8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f8b46f1486fb00548f61a9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f994875486fb00548f6098"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62fab46fa486fb00548f6099"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62fb94879486fb00548f60b8"
  },
  "body": "hello poppy",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T17:57:27.186Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62fcb46f04060b00548f60b9"
  },
  "body": "hello poppy 2",
  "item": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "createdAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.899Z"
  },
  "__v": 0
}]
for(let i=0;i<data.length; i++){
    let comments=new comment(data[i]);
    //console.log(comments)
    comments.save()
}
