const path = require('path');
module.exports = {
    entry: "./src/tab.js",
    output:{
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    }
}