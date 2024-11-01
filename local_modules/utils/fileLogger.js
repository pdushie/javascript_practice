// function to write order and user info to file
const fs = require('node:fs');

// function to log orders to file
function orderLog(content){
    fs.appendFile('./logs/orderActivity.log',`${new Date()}[INFO] ${JSON.stringify(content, null, 4)}`, (err) => {if (err){ throw err.message}});
}

// function to log users to file
function userLog (content){
    fs.appendFile('./logs/userActivity.log', `${new Date()}[INFO] ${JSON.stringify(content, null, 4)}`, (err) => { if (err){ throw err.message}});
}
module.exports = {
    orderLog,
    userLog
}