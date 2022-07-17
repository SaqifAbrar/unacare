const router = require("express").Router();
const db = require("../../dbConfig");

router.get("/", (req, res) => {
	const paramIsEmpty = JSON.stringify(req.query) === "{}";

	const query = `SELECT ${
		paramIsEmpty ? "*" : req.query.data
	} FROM prescriptions`;

	db.all(query, [], (err, rows) => {
		if (err) return res.send(err.message);
		//console.log(rows);
		res.send(rows);
	});
});

router.get("/:id", (req, res) => {
	//console.log(req.params.id);
	const query = `SELECT * FROM prescriptions WHERE id = ${req.params.id}`;

	db.all(query, [], (err, rows) => {
		if (err) return res.send(err.message);
		//console.log(rows);
		res.send(rows);
	});
});

module.exports = router;
