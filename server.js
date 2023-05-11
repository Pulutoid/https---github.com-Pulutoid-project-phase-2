const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
app.use(express.static('.'))

nunjucks.configure('.', {
    autoescape: true,
    express: app
});

app.get('/', async (req, res) => {
    const html = nunjucks.render('index.html');
    res.send(html);
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
