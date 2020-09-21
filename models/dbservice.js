const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'veritas',
    database: 'noteslist'
});

db.connect(err => {
    if(err) throw err.message;
    console.log('DB '+db.state);
});

module.exports = {
    new_note: (title, note) => {
        return new Promise((resolve, reject) => {
            let query = `INSERT INTO list (id, title, body, time, date) VALUES (NULL, "${title}", "${note}", CURTIME(), CURDATE());`;
            db.query(query, (err, results) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },

    read_notes: () => {
        return new Promise((resolve, reject) => {
            let query = 'SELECT title, body, time_date FROM list;';
            db.query(query, (err, results) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },

    edit_note: (title, note, id) => {
        return new Promise((resolve, reject) => {
            let query = `UPDATE list SET title = "${title}", body = "${note}" WHERE id = ${id};`;
            db.query(query, (err, results) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },

    delete_note: (id) => {
        return new Promise((resolve, reject) => {
            let query = `DELETE FROM list WHERE id = ${id};`;
            db.query(query, (err, results) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}