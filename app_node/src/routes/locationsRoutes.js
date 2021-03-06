const router = require("express").Router();

router.get("/", (req, res) => {
	res.send({ message: "recieving list of locations" });
});

router.get("/:id", (req, res) => {
	const locationId = req.params.id;
	res.send({ message: "recieving location of id: " + locationId });
});

module.exports = router;
