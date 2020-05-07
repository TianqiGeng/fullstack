
const fetch = require("node-fetch");
function crudFetcdh(url, options, method = 'GET', data = {}) {
    url += options; //拼接url
    if (method === 'GET' || method === 'DELETE') {
        initObj = {
            method: method,
            credentials: 'include' //// 强制加入凭据头
        }
    } else {
        initObj = {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)

        }
    }
    //console.log(initObj);
    fetch(url, initObj).then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res)
    }).catch(error => { console.log(error) }) //输出报错
}


function GET(url, options) {
    return crudFetcdh(url, options, 'GET')
}


function POST(url, data) {
    return crudFetcdh(url, options = "", 'POST', data)
}

function PATCH(url, options, data) {
    return crudFetcdh(url, options, 'PATCH', data)
}

function DELETE(url, options) {
    return crudFetcdh(url, options, 'DELETE')
}

module.exports = {
    GET,
    POST,
    PATCH,
    DELETE

}