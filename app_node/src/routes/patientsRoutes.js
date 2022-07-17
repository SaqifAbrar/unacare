const router = require("express").Router();
const db = require("../../dbConfig");

router.get("/", (req, res) => {
	const query = `SELECT * FROM patients`;

	db.all(query, [], (err, rows) => {
		if (err) return res.send(err.message);
		//console.log(rows);
		res.send(rows);
	});
});

router.get("/:id", (req, res) => {
	//console.log(req.params.id);
	const query = `SELECT * FROM patients WHERE id = ${req.params.id}`;

	db.all(query, [], (err, rows) => {
		if (err) return res.send(err.message);
		//console.log(rows);
		res.send(rows);
	});
});

module.exports = router;
