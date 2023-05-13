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

async function getAllJournalsByProfile(profile_id) {
    const db = await openConnectionToDB();
    // console.log('database connection opened');
    const journals = await db.all('SELECT * FROM journals where userID = ?', profile_id);
    return journals
}


async function getProfile(profile_id) {



    const db = await openConnectionToDB();

    returnedRow = await db.get('SELECT * FROM profiles WHERE id = ?', profile_id)

    // console.log(returnedRow);

    return returnedRow;
}

async function allJournals(profile_id) {



    const db = await openConnectionToDB();

    returnedRow = await db.get('SELECT * FROM journals WHERE isJournal = 1')

    // console.log(returnedRow);

    return returnedRow;
}

async function allIdeas() {



    const db = await openConnectionToDB();

    returnedRow = await db.get('SELECT * FROM journals WHERE isIdea = 1 ')

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


async function getAllProfiles() {

    const db = await openConnectionToDB();

    const profiles = await db.all('SELECT * FROM profiles');

    console.log('profiles are ')
    console.log(profiles)
    return profiles;


}


async function getJournalByID(journalID) {

    const db = await openConnectionToDB();

    const journal = await db.all('SELECT * FROM journals WHERE id = ?', journalID);


    return journal;


}

module.exports = {
    openConnectionToDB,
    getAllJournals,
    getProfile,
    addJournal,
    addIdea,
    newProfile,
    getAllProfiles,
    getAllJournalsByProfile,
    getJournalByID,
    allJournals,
    allIdeas




};
