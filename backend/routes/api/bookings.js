const express = require("express");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");

const { Spot, Image, User, Review } = require("../../db/models");

const router = express.Router();

// routes here

module.exports = router;
