const router = require('express').Router();
const notes = require('../../db/db');
const { write } = require('../../utils/fileHandler');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    let note = req.body;
    note.id = Math.floor((Math.random() * 9999) + 0);
    let currentNotes = notes;
    currentNotes.push(note);
    currentNotes = JSON.stringify(currentNotes);
    write('./db/db.json', currentNotes);
    res.status(200).send('Request received.');
});

router.delete('/notes', (req, res) => {

});

module.exports = router;