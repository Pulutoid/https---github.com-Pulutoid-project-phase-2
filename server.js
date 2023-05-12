const express = require('express')
const nunjucks = require('nunjucks')
const databaseModule = require('./modules/databaseModule.js');
const app = express()
app.use(express.static('.'))
app.use(express.json());


nunjucks.configure('./views', {
    autoescape: true,
    express: app
});


async function main() {

    await databaseModule.openConnectionToDB();

    app.get('/', async (req, res) => {

        let journals = await databaseModule.getAllJournals();

        // console.log(journals)
        //render resulting html and send it 
        const html = nunjucks.render('index.html', { journals });
        res.send(html);
    })
    app.get('/index.html', async (req, res) => {


        let journals = await databaseModule.getAllJournals();
        // console.log(journals)

        //render resulting html and send it 
        const html = nunjucks.render('index.html', { journals });
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


    app.get('/signup.html', async (req, res) => {
        const html = nunjucks.render('signup.html');
        res.send(html);
    })

    app.get('/profile.html', async (req, res) => {


        let profile = await databaseModule.getProfile(1);




        const html = nunjucks.render('profile.html', { profile });
        res.send(html);


    });

    app.post('/newJournal/:id', async (req, res) => {

        console.log('post new invoked');
        console.log(req.body);


        result = await databaseModule.addJournal(req.body);




        res.send(JSON.stringify(result));



    });



    app.post('/newIdea/:id', async (req, res) => {

        console.log('post new invoked');
        console.log(req.body);


        result = await databaseModule.addIdea(req.body);




        res.send(JSON.stringify(result));



    });



    app.post('/newProfile/:id', async (req, res) => {

        console.log('post new invoked');
        console.log(req.body);


        result = await databaseModule.newProfile(req.body);




        res.send(JSON.stringify(result));



    });


    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });


}
main()
