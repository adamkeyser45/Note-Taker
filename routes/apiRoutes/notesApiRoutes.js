const fs = require('fs');
const uniqid = require('uniqid');
const router = require('express').Router();
const notes = require('../../db/db.json');

// router.use(require('./notesApiRoutes'));

router.get('/notes', (req, res) => {
    let data = notes;
    res.json(data);  
});
  
router.post('/notes', (req, res) => {
    // Should receive a new note to save on the request body, add it to the db.json file, 
    // and then return the new note to the client. 
    // You'll need to find a way to give each note a unique id when it's saved 
    // (look into npm packages that could do this for you).
    const newNote = req.body;

    newNote.id = uniqid();

    let data = notes;
  
    console.log(newNote);
  
    notes.push(newNote);

    fs.writeFile('db/db.json', JSON.stringify(notes), err => {
        if (err) throw err;
    });
  
    res.json(newNote);
});

module.exports = router;