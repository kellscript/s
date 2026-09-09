const express = require("express");
const path = require("path");
const router = express.Router();

const copilotRoute = require("./routes/copilot");
const gimageRoute = require("./routes/gimage");

router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "entrada.html"));
});

router.get("/docs", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "docs.html"));
});

router.get("/suporte", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "suporte.html"));
});

router.use(copilotRoute);
router.use(gimageRoute);

module.exports = router;
