const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
	"./src/model/unacare.db",
	sqlite3.OPEN_READWRITE,
	(err) => {
		if (err) return console.error(err.message);

		console.log("Data base connection successful");
	},
);

/*const sql = `SELECT * FROM patients`;

db.all(sql, [], (err, rows) => {
	if (err) return console.error(err.message);

	console.log(rows);
});*/

module.exports = db;
