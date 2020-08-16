const fs = require('fs');
const path = require('path');

function createNewNote(body, dbArray) {
    const note = body;
    dbArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: dbArray }, null, 2)
    );
    return note;
};

module.exports = {
    createNewNote
}