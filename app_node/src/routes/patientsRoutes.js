const router = require("express").Router();

router.get("/", (req, res) => {
	res.send({ message: "accessed patients route" });
});

module.exports = router;
