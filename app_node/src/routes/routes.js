const express = require("express");
const router = express.Router();
const locationsRouter = require("./locationsRoutes");
const patientsRouter = require("./locationsRoutes");

router.get("/", (req, res) => res.send({ message: "accessed api route" }));

router.use("/locations", locationsRouter);
router.use("/patients", patientsRouter);

module.exports = router;
