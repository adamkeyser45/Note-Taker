const fs = require('fs');
const uniqid = require('uniqid');
const router = require('express').Router();
const notes = require('../../db/db.json');
const path = require('path');

router.get('/notes', (req, res) => {
    let data = notes;
    res.json(data);  
});
  
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uniqid();
    console.log("This is the newNote" + newNote);
    notes.push(newNote);

    fs.writeFile('db/db.json', JSON.stringify(notes), err => {
        if (err) throw err;
    });
    res.json(newNote);

    /****
     *  const newNote = req.body;
    newNote.id = uniqid();
    console.log("This is a new NOte" + newNote);
    

    fs.readFile("../../db/db.json", (err, data) => {
        if (err) throw err;
        let dbFile = JSON.parse(data);
        dbFile.push(newNote);

        fs.writeFile('../../db/db.json', JSON.stringify(dbFile), "utf8", err => {
            if (err) throw err;
            console.log("data was saved")
        });


    })
     * 
     */
});


// work in progress for delete button
// router.delete('notes/:id', function (req, res) {



//      const db = fs.readFileSync(path.join(__dirname, "/db/db.json"));

//      const dbFile = JSON.parse(db);
//      console.log("this is the dbFile" + dbFile);

//      const deletedNote = req.params.id;

//      for (let x = 0; x < dbFile.length; x++) {

//          if(dbFile[x].id.toString() === deletedNote) {
//        dbFile.splice(x, 1);
//             console.log(dbFile, "deleted")
//            break;
//          }
//      }
    
//      fs.writeFileSync(path.join(__dirname, "/db/db.json"), JSON.stringify(dbFile));

//      res.sendStatus(200);


    
    /*
    const deletedNote = (req.params.id);

    console.log(deletedNote);

    notes = notes.filter(function (obj) {
        return obj.id !== deletedNote;
    });

    for (var i = 0; i < notes.length; i++) {
        if (notes.indexOf(deletedNote) !== -1) {
            notes.splice(i, 1);
        }
    };

    fs.writeFile('db/db.json', JSON.stringify(notes), function (err, data) {
        if (err) {
            throw err 
        }
        
        res.send(data);
    });
    */    
// });

module.exports = router;