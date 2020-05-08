const fetch = require("node-fetch");
const url = 'http://localhost:3000/contacts3';
let id = 9;
let data = {
    "name": "SSS",

}
fetch(url + `/${id}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data)

}).then((res) => {
    return res.json()
}).then((res) => {
    console.log(res)
})