const express = require("express");
const router = express.Router();
const locationsRouter = require("./locationsRoutes");
const patientsRouter = require("./patientsRoutes");
const prescriptionsRouter = require("./prescriptionsRoutes");

router.get("/", (req, res) => res.send({ message: "accessed api route" }));

router.use("/locations", locationsRouter);
router.use("/patients", patientsRouter);
router.use("/prescriptions", prescriptionsRouter);

module.exports = router;
