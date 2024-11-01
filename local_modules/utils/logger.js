// function to log order and user info to the console
function log(input){
    console.log(`[INFO] ${JSON.stringify(input, null, 4)}`);
}
module.exports = {
    log
}