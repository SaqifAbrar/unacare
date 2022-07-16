const router = require("express").Router();

router.get("/", (req, res) => {
	res.send({ message: "accessed locations route" });
});

module.exports = router;
