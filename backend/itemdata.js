var mongoose = require("mongoose");
require('./models/User');
require('./models/Comment');
require('./models/Item');

const comment =mongoose.model("Item");
const data=[{
  "_id": {
    "$oid": "62f6947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "poppy-the-pug-ug1z8z",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "62f6bed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "item2-cvklmj",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6beefc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "23453-us09y6",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6beffc486fb00548f600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "464565-emhnhs",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6bf35c486fb00548f600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "4554-8pit6o",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12f6947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "poppy-the-pug-ug1z8z1",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "12f6bed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "item2-cvklmj1",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12f6bee6c486fb00548f600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "123-7mer1y1",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12f6beefc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "23453-us09y61",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12f6beffc486fb00548f600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "464565-emhnhs1",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12f6bf35c486fb00548f600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "4554-8pit6o1",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "22f6947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "poppy-the-pug-ug1z8",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "22f6bed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "item2-cvklm",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "22f6bee6c486fb00548f600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "123-7mer1",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "22f6beefc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "23453-us09y",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "22f6beffc486fb00548f600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "464565-emhnh",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "22f6bf35c486fb00548f600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "4554-8pit6",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12f6947bc486fb00548f2007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "poppy-the-pug-ug1z8z11",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "12f6bed2c486fb00548f200a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f2006"
  },
  "slug": "item2-cvklmj11",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12f6bee6c486fb00548f200b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f2006"
  },
  "slug": "123-7mer1y11",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12f6beefc486fb00548f200c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "23453-us09y611",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12f6beffc486fb00548f200d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "464565-emhnhs11",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12f6bf35c486fb00548f200e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "4554-8pit6o11",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "32f6947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " poppy-the-pug-ug1z8z",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "32f6bed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " item2-cvklmj",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "32f6bee6c486fb00548f600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 123-7mer1y",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "32f6beefc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 23453-us09y6",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "32f6beffc486fb00548f600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 464565-emhnhs",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "32f6bf35c486fb00548f600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 4554-8pit6o",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "33f6947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " poppy-the-pug-ug1z8z1",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "33f6bed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " item2-cvklmj1",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "33f6bee6c486fb00548f600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 123-7mer1y1",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "33f6beefc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 23453-us09y61",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "33f6beffc486fb00548f600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 464565-emhnhs1",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "33f6bf35c486fb00548f600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 4554-8pit6o1",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "44f6947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " poppy-the-pug-ug1z8 ",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "44f6bed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " item2-cvklm ",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "44f6bee6c486fb00548f600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 123-7mer1 ",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6beefc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 23453-us09y ",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6beffc486fb00548f600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 464565-emhnh ",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6bf35c486fb00548f600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 4554-8pit6 ",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6947bc486fb00548f2007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "  poppy-the-pug-ug1z8z11",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "42f6bed2c486fb00548f200a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f2006"
  },
  "slug": "  item2-cvklmj11",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6bee6c486fb00548f200b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f2006"
  },
  "slug": "1  23-7mer1y11",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6beefc486fb00548f200c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "234  53-us09y611",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6beffc486fb00548f200d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "464565-em  hnhs11",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6bf35c486fb00548f200e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "554-8pit6o11",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6206947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "poppy-the-pug-ug1z8z54852",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "6216bed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "item2-cvklmj54852",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6226bee6c486fb00548f600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "123-7mer1y54852",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6236beefc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "23453-us09y548526",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6246beffc486fb00548f600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "464565-emhnhs54852",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "6256bf35c486fb00548f600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "4554-8pit654852o",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "1266947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "poppy-the-pug-ug548521z8z1",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "1276bed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "item2-cvkl54852mj1",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "1286bee6c486fb00548f600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "123-7mer154852y1",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "1296beefc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "23453-us5485209y61",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12a6beffc486fb00548f600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "464565-emhnh54852s1",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "12b6bf35c486fb00548f600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "4554-8pit548526o1",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "22c6947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "poppy-the-pug-54852ug1z8",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "22d6bed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "item2-cvk54852lm",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "22e6bee6c486fb00548f600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "123-7mer548521",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "2ff6beefc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "23453-us0954852y",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "2ef6beffc486fb00548f600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "464565-emh54852nh",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "2df6bf35c486fb00548f600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "4554-8p54852it6",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "1cf6947bc486fb00548f2007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "poppy-the-p54852ug-ug1z8z11",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "1bf6bed2c486fb00548f200a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f2006"
  },
  "slug": "item2-cvkl54852mj11",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "1af6bee6c486fb00548f200b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f2006"
  },
  "slug": "123-754852mer1y11",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "10f6beefc486fb00548f200c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "2345354852-us09y611",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "19f6beffc486fb00548f200d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "464565-emhnh54852s11",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "18f6bf35c486fb00548f200e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "4554-8pit548526o11",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "37f6947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " poppy-the-pu54852g-ug1z8z",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "36f6bed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " item2-cvk54852lmj",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "f2f6bee6c486fb00548f600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 12354852-7mer1y",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "e2f6beefc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 23453-us5485209y6",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "d2f6beffc486fb00548f600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 464565-emhn54852hs",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "c2f6bf35c486fb00548f600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 4554-8p54852it6o",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "b3f6947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " poppy-th54852e-pug-ug1z8z1",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "a3f6bed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " item254852-cvklmj1",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "03f6bee6c486fb00548f600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 15485223-7mer1y1",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "93f6beefc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 23453-u54852s09y61",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "83f6beffc486fb00548f600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 464565-54852emhnhs1",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "73f6bf35c486fb00548f600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 455454852-8pit6o1",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "64f6947bc486fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " poppy-t54852he-pug-ug1z8 ",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "44f6bed2c486fb00548d600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " item2-cv54852klm ",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "44f6bee6c486fb00548e600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 123-7mer548521 ",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6beefc486fb00548c600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 23453-us09y 54852",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6beffc486fb00548b600d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 464565-emhnh 54852",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6bf35c486fb00548a600e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": " 4554-8pit6 54852",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6947bc486fb0054802007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "  poppy-the-pug-ug154852z8z11",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "42f6bed2c486fb005489200a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f2006"
  },
  "slug": "  item2-54852cvklmj11",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6bee6c486fb005488200b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f2006"
  },
  "slug": "1  23-7mer154852y11",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6beefc486fb005487200c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "234 54852 53-us09y611",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6beffc486fb005486200d"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "464565",
  "description": "3454",
  "image": "3434",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "464565-em 54852 hnhs11",
  "createdAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:39.995Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "42f6bf35c486fb005485200e"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "4554",
  "description": "6767",
  "image": "2312",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "554-8pit654852o1154852",
  "createdAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:59:33.327Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f694733386fb00548f6007"
  },
  "favoritesCount": 0,
  "comments": [
    {
      "$oid": "62f69487c486fb00548f6008"
    },
    {
      "$oid": "62f6b46fc486fb00548f6009"
    }
  ],
  "tagList": [
    "poppy",
    " pug",
    "poppy the pug"
  ],
  "title": "poppy the pug",
  "description": "ye bebo ka poppy the pug he",
  "image": "https://www.youtube.com/watch?v=WXvzjvHuMFU",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "poppy-333the-pug-ug1z8z",
  "createdAt": {
    "$date": "2022-08-12T17:57:15.287Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:13:35.907Z"
  },
  "__v": 2
},{
  "_id": {
    "$oid": "62555ed2c486fb00548f600a"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "item2",
  "description": "123",
  "image": "2131",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "item33332-cvklmj",
  "createdAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:57:54.942Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6bee6c4866600548f600b"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "123",
  "description": "2131",
  "image": "23423",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "123-7345555mer1y",
  "createdAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:14.857Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6ffffc486fb00548f600c"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "23453",
  "description": "4564",
  "image": "54654",
  "seller": {
    "$oid": "62f6942bc486fb00548f6006"
  },
  "slug": "23453434-4543us09y6",
  "createdAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T20:58:23.617Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "62f6d64dc486fb00548f6017"
  },
  "favoritesCount": 0,
  "comments": [],
  "tagList": [],
  "title": "a",
  "description": "a",
  "image": "a",
  "seller": {
    "$oid": "62f6c5b3c486fb00548f6010"
  },
  "slug": "a-bq90tm",
  "createdAt": {
    "$date": "2022-08-12T22:38:05.938Z"
  },
  "updatedAt": {
    "$date": "2022-08-12T22:38:05.938Z"
  },
  "__v": 0
}]

for(let i=0;i<data.length; i++){
    let comments=new comment(data[i]);
    //console.log(comments)
    comments.save()
}