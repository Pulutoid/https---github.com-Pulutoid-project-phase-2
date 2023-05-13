const express = require('express')
const nunjucks = require('nunjucks')
const databaseModule = require('./modules/databaseModule.js');
const app = express()
const cookieParser = require('cookie-parser');
app.use(express.static('.'))
app.use(express.json());

app.use(cookieParser());

nunjucks.configure('./views', {
    autoescape: true,
    express: app
});


async function main() {

    await databaseModule.openConnectionToDB();

    app.get('/', async (req, res) => {
        // Access the profile cookie
        let currentProfile = req.cookies.profile;
        console.log(`current profile id is ${currentProfile}`);

        let journals = await databaseModule.getAllJournalsByProfile(currentProfile);


        // console.log(journals)

        //render resulting html and send it 
        const html = nunjucks.render('index.html', { journals });
        res.send(html);
    })






    app.get('/index.html', async (req, res) => {

        // Access the profile cookie
        let currentProfile = req.cookies.profile;
        console.log(`current profile id is ${currentProfile}`);

        let journals = await databaseModule.getAllJournalsByProfile(currentProfile);


        // console.log(journals)

        //render resulting html and send it 
        const html = nunjucks.render('index.html', { journals });
        res.send(html);
    })



    app.get('/ideaExpanded.html/:id', async (req, res) => {





        let journal = await databaseModule.getJournalByID(req.params.id);


        console.log(journal)

        //render resulting html and send it 
        const html = nunjucks.render('ideaExpanded.html', { journal });
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


        let profile = await databaseModule.getProfile(req.cookies.profile);



        console.log(profile)
        const html = nunjucks.render('profile.html', { profile });
        res.send(html);


    });

    app.post('/newJournal/:id', async (req, res) => {

        // console.log('post new invoked');
        // console.log(req.body);


        result = await databaseModule.addJournal(req.body);




        res.send(JSON.stringify(result));



    });



    app.post('/newIdea/:id', async (req, res) => {

        // console.log('post new invoked');
        // console.log(req.body);


        result = await databaseModule.addIdea(req.body);




        res.send(JSON.stringify(result));



    });



    app.post('/newProfile/:id', async (req, res) => {

        // console.log('post new invoked');
        // console.log(req.body);


        result = await databaseModule.newProfile(req.body);




        res.send(JSON.stringify(result));



    });


    app.get('/chooseProfile.html', async (req, res) => {

        let profiles = await databaseModule.getAllProfiles();



        // console.log('choose profile called')
        // console.log(profiles)
        const html = nunjucks.render('chooseProfile.html', { profiles });
        res.send(html);
    })



    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });


}
main()
