const express = require('express');
const asyncHandler = require('express-async-handler');

const { Spot, Image, User } = require('../../db/models');

const router = express.Router();

router.get('/',
    asyncHandler( async function (req, res) {
     const spots = await Spot.findAll();
     return res.json(spots);
    })
);

module.exports = router;
