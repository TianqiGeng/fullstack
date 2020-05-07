const fetch = require("node-fetch");
const url = 'http://localhost:3000/contacts3';
let data = {
    "name": "kkk",
    "email": "sadad@qq.com2",
    "contactno": "asdsad",
    "id": 3
}

fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data)

}).then((res) => {
    return res.json()
}).then((res) => {
    console.log(res)
})