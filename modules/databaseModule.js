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


async function addJournal(journalData) {
    const db = await openConnectionToDB();

    const result = await db.run('INSERT INTO journals (userID, title, description, text, files, isJournal, isIdea) VALUES (?, ?, ?, ?, ?, 1, 0)', [journalData.userID, journalData.title, journalData.description, journalData.text, journalData.files]);

    return result;

}

async function addIdea(journalData) {
    const db = await openConnectionToDB();

    const result = await db.run('INSERT INTO journals (userID, title, description, text, files, isJournal, isIdea) VALUES (?, ?, ?, ?, ?, 0, 1)', [journalData.userID, journalData.title, journalData.description, journalData.text, journalData.files]);

    // return metadata about the inserted row
    return result;

}


async function newProfile(newUserData) {
    const db = await openConnectionToDB();

    const result = await db.run('INSERT INTO profiles (name, gender, birthdate, creationDate) VALUES (?, ?, ?, ?)', [newUserData.name, newUserData.gender, newUserData.birthdate, newUserData.creationDate]);

    // return metadata about the inserted row
    return result;

}


module.exports = {
    openConnectionToDB,
    getAllJournals,
    getProfile,
    addJournal,
    addIdea,
    newProfile


};
