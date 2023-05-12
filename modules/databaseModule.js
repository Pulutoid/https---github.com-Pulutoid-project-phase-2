const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');


async function openConnectionToDB() {

    const db = await sqlite.open({
        filename: './database.db3',
        driver: sqlite3.Database
    });


    return db;
}

async function getAllJournals() {
    const db = await openConnectionToDB();
    // console.log('database connection opened');
    const journals = await db.all('SELECT * FROM journals');
    return journals
}

async function getProfile(profile_id) {


    profile_id = 1; //for testing purposes only. it should take any profile id

    const db = await openConnectionToDB();

    returnedRow = await db.get('SELECT * FROM profiles WHERE id = ?', profile_id)

    // console.log(returnedRow);

    return returnedRow;
}



module.exports = {
    openConnectionToDB,
    getAllJournals,
    getProfile

};
