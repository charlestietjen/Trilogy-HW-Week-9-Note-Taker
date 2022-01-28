const router = require('express').Router();
const notes = require('../../db/db');
const { write } = require('../../utils/fileHandler');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    let note = req.body;
    note.id = String(Math.floor((Math.random() * 9999) + 0));
    let currentNotes = notes;
    currentNotes.push(note);
    currentNotes = JSON.stringify(currentNotes);
    write('./db/db.json', currentNotes);
    res.send(note);
});

router.delete('/notes/:id', (req, res) => {
    // console.log(req.params)
    notes.forEach(function(n, i) { 
        if (req.params.id === n.id){
            notes.splice(i, 1);
        }
    })
    write('./db/db.json', JSON.stringify(notes));
    res.send(notes);
});

module.exports = router;