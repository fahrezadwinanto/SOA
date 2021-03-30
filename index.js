var app = require('express')();
var proxy = require('express-http-proxy');

var PORT = process.env.PORT || 3000;
var ICONFINDER_API_KEY = "pKyaAO9MwR1BGdtHKAXzb16xvmlRS0MMNviGerfItjXO6t0CkuuR8w9vFl96LOrM";

app.use(proxy("api.iconfinder.com", {
    https: true,
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
        proxyReqOpts.headers.authorization = "Bearer " + ICONFINDER_API_KEY;
        return proxyReqOpts;
    }
}));

// Bind the app to the PORT
app.listen(PORT, function() {
    console.log('Example app listening on port', PORT);
});
