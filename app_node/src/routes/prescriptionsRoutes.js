const router = require("express").Router();

router.get("/", (req, res) => {
	res.send({ message: "recieving list of prescriptions" });
});

router.get("/:id", (req, res) => {
	const locationId = req.params.id;
	res.send({ message: "recieving prescriptions of id: " + locationId });
});

module.exports = router;
