const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');


async function openConnectionToDB() {

    const db = await sqlite.open({
        filename: './database.db3',
        driver: sqlite3.Database
    });


    return db;
}

module.exports = {
    openConnectionToDB
};
