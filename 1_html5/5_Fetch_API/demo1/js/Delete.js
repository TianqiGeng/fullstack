const fetch = require("node-fetch");
const url = 'http://localhost:3000/contacts3';
let id = 90;
fetch(url + `/${id}`, {
    method: 'DELETE',
}).then((res) => {
    return res.json()
}).then((res) => {
    console.log(res)
})