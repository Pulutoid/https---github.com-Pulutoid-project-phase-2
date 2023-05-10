const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
app.use(express.static('.'));


async function mainIndexHtml() {

    app.get('/', async (req, res) => {

        //locate and initilizde template
        nunjucks.configure('.', {
            autoescape: false,
            express: app
        });


        //render resulting html and send it 
        const html = nunjucks.render('index.html');
        res.send(html);
    })


};


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});


mainIndexHtml(); 