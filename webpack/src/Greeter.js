var config = require('../config.json');
//创建一个div
module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};