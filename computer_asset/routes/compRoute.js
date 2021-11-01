const express = require("express");
const router = express.Router();
const Comp = require("../models/compModels");

router.route("/list_of_ids").get((req, res) => {
    Comp.find()
        .then(foundStats => res.json(foundStats))
})

router.route("/home").get((req, res) => {
    Comp.find()
        .then(foundStats => res.json(foundStats))
})

router.route("/soft_inst").get((req, res) => {
    Comp.find()
        .then(foundStats => res.json(foundStats))
})

router.route("/storage_info").get((req, res) => {
    Comp.find()
        .then(foundStats => res.json(foundStats))
})

router.route("/mem_details").get((req, res) => {
    Comp.find()
        .then(foundStats => res.json(foundStats))
})


module.exports = router;