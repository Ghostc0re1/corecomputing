/* import got from 'got';
const request = require('https');

    function call_api(finishedAPI, ticker) { got.post(`https://api.iex.cloud/stable/stock/${ticker}/quote?token=sk_1e52d334a01f40309fe157fc217fe8e2`, { json: true }, (err, res, body) => {
            /* req.emit('error', err);
            // For Safety. Some additional errors might fire later on
            // and we need to make sure we don't double-fire the error event.
            req.socket._hadError = true; */
            if (err) { return console.log(err); }
            if (res.statusCode === 200) {
                finishedAPI(body);
            };
            console.log(finishedAPI);
        }).json();
    }

    curl -H'Authorization: cpanel username:APITOKEN' 'https://example.com:2083/execute/Module/function?parameter=value'

/* //call api
function call_api(finishedAPI, ticker) {
    request(`https://api.iex.cloud/stable/stock/${ticker}/quote?token=sk_1e52d334a01f40309fe157fc217fe8e2`, { json: true }, (err, res, body) => {
        req.emit('error', err);
        // For Safety. Some additional errors might fire later on
        // and we need to make sure we don't double-fire the error event.
        req.socket._hadError = true;
        if (err) { return console.log(err); }
        if (res.statusCode === 200) {
            finishedAPI(body);
        };
        console.log(finishedAPI);
    });
} 
//exports.call_api = call_api

