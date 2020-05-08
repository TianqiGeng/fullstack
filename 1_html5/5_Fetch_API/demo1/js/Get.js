const fetch = require("node-fetch");
fetch('http://localhost:3000/contacts3/99', {
    method: 'GET'
})
    .then((res) => {
        return res.text()
    })
    .then((res) => {
        console.log(res)
    })