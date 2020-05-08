const fetch = require('./All.js');
fetch.GET('http://localhost:3000/contacts3/', 9);
fetch.DELETE('http://localhost:3000/contacts3/', 3);//如果id=3的用户不存在，输出报错信息
fetch.PATCH('http://localhost:3000/contacts3/', 9, {
    "name": "DDD"
});

fetch.POST('http://localhost:3000/contacts3/', {
    "name": "CCC",
    "email": "4345345353@qq.com2",
    "contactno": "1111130",
    //不写id，是因为会自动添加
});
