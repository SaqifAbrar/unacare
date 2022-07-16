const router = require("express").Router();

router.get("/", (req, res) => {
	res.send({ message: "accessed patients route" });
});

router.get("/:id", (req, res) => {
	console.log(req.params.id);
	res.send({ message: "accessed patients of id: " + req.params.id });
});

module.exports = router;
