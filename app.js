"use strict"

const express = require('express');
const dbservice = require('./models/dbservice');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Create New Note
app.post('/addnote', (req, res) => {
    dbservice.new_note(req.body.title, req.body.note)
        .then(results => {
            console.log(results);
            res.send();
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
});

// Read List of Notes
app.get('/readnotes', (req, res) => {
    dbservice.read_notes()
        .then(results => {
            results.forEach(result => {
                console.log(result.title, result.body, result.time_date, result.time_date);
            });
            res.send();
        })
        .catch(err => {
            console.error(err)
            res.sendStatus(500);
        });
});

// Edit A Note
app.put('/editnote/:id', (req, res) => {
    dbservice.edit_note(req.body.title, req.body.note, parseInt(req.params.id))
        .then(results => {
            console.log(results);
            res.send();
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
});

// Delete a note
app.delete('/deletenote/:id', (req, res) => {
    dbservice.delete_note(parseInt(req.params.id))
        .then(results => {
            console.log(results);
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});