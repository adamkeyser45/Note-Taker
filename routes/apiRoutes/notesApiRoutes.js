const fs = require('fs');
const uniqid = require('uniqid');
const router = require('express').Router();
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let data = notes;
    res.json(data);  
});
  
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uniqid();
    console.log(newNote);
    notes.push(newNote);

    fs.writeFile('db/db.json', JSON.stringify(notes), err => {
        if (err) throw err;
    });
    res.json(newNote);
});


// wor in progress for delete button
// router.delete('notes/:id', (req, res) => {
//     const deletedNote = (req.params.id);

//     console.log(deletedNote);

//     notes = notes.filter(function (obj) {
//         return obj.id !== deletedNote;
//     });

//     for (var i = 0; i < notes.length; i++) {
//         if (notes.indexOf(deletedNote) !== -1) {
//             notes.splice(i, 1);
//         }
//     };

//     fs.writeFile('db/db.json', JSON.stringify(notes), function (err, data) {
//         if (err) {
//             throw err 
//         }
        
//         res.send(data);
//     });    
// });

module.exports = router;