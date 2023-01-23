const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
//const { call_API } = require("./call_API");
const bodyParser = require('body-parser');
const { request } = require('https');

const PORT = process.env.PORT || 5000;

// use bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));

//set handlebars middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//set handlebar index GET route
/* app.get('/', function(_req, res) {
    call_API(function (doneAPI) {
        res.render('home', {
            stock: doneAPI,
        });
        console.log(doneAPI);
    });
}); */


//set handlebar index POST route
/* app.post('/', (_req, res) => {
        call_API(function (doneAPI) {
            //posted_stuff = _req.body.Ticker;
            res.render('home', {
                stock: doneAPI,
            });
        }, _req.body.Ticker); //console.log(doneAPI);
    }); */
//create about page
app.get('/info.html', (_req, res) => {
    res.render('info')
});

//create home page
app.get('/', (_req, res) => {
    res.render('home')
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//log output to console
app.listen(PORT, () => console.log('listening on port ' + PORT));