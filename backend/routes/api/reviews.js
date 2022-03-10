const express = require("express");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");

const { Spot, Image, User, Reviews } = require("../../db/models");

const router = express.Router();

module.exports = router;
