const express = require("express");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");

const { Spot, Image, User } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const spots = await Spot.findAll({
      include: {
        model: Image,
      },
    });
    return res.json(spots);
  })
);

const createSpotValidations = [
  check("name").exists({ checkFalsy: true }).withMessage("Name can't be empty"),
  check("name")
    .isLength({ max: 100 })
    .withMessage("Name can't be longer than 100 characters"),
  check("address")
    .exists({ checkFalsy: true })
    .withMessage("address can't be empty"),
  check("address")
    .isLength({ max: 255 })
    .withMessage("Address can't be longer than 255 characters"),
  check("city").exists({ checkFalsy: true }).withMessage("City can't be empty"),
  check("city")
    .isLength({ max: 40 })
    .withMessage("City can't be longer than 40 characters"),
  check("country")
    .exists({ checkFalsy: true })
    .withMessage("City can't be empty"),
  check("country")
    .isLength({ max: 80 })
    .withMessage("Country can't be longer than 80 characters"),
  check("price")
    .exists({ checkFalsy: true })
    .withMessage("Price can't be empty"),
  check("price")
    .isDecimal({ checkFalsy: true })
    .withMessage("Price must be a decimal"),
  check("mainImageURL")
    .exists({ checkFalsy: true })
    .withMessage("Image URL can't be empty"),
  check("mainImageURL")
    .isLength({ max: 255 })
    .withMessage("Image URL can't be longer than 255 characters"),
  handleValidationErrors,
];

router.post(
  "/",
  requireAuth,
  createSpotValidations,
  asyncHandler(async function (req, res) {
    const spotDetails = req.body;
    const spot = await Spot.create(spotDetails);
    res.json(spot);
  })
);

module.exports = router;
