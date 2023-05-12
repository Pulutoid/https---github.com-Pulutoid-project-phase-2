const express = require('express')
const nunjucks = require('nunjucks')
const databaseModule = require('./modules/databaseModule.js');
const app = express()
app.use(express.static('.'))

nunjucks.configure('./views', {
    autoescape: true,
    express: app
});

app.get('/', async (req, res) => {
    const html = nunjucks.render('index.html');
    res.send(html);
})
app.get('/index.html', async (req, res) => {
    const html = nunjucks.render('index.html');
    res.send(html);
})

app.get('/CreateJournal.html', async (req, res) => {
    const html = nunjucks.render('CreateJournal.html');
    res.send(html);
})

app.get('/CreateIdea.html', async (req, res) => {
    const html = nunjucks.render('CreateIdea.html');
    res.send(html);
})

// app.get('/profile.html', async (req, res) => {
//     //     const html = nunjucks.render('profile.html', profile);
//     //     res.send(html);
//     // })

// app.get('/profile.html/:id', async (req, res) => {
app.get('/profile.html', async (req, res) => {


    //locate and initilizde template
    nunjucks.configure('views', {
        autoescape: false,
        express: app
    });




    let profile = await databaseModule.getProfile(1);
    // let porfile = await databaseModule.getProfile(req.params.id);



    const html = nunjucks.render('profile.html', { profile });
    res.send(html);


});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
