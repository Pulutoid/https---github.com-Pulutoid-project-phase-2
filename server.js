const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
app.use(express.static('.'))

function main() {
    app.get('/', async (req, res) => {

        const html = nunjucks.render('index.html');
        res.send(html);
    })


    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });


}
main()