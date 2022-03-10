const express = require("express");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");

const { Spot, Image, User, Review } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const spots = await Spot.findAll();
    return res.json(spots);
  })
);

const spotNotFoundError = (id) => {
  const err = Error("Spot not found");
  err.errors = [`Spot with id of ${id} could not be found.`];
  err.title = "Spot not found.";
  err.status = 404;
  return err;
};

// router.get(
//   "/:id",
//   asyncHandler(async function (req, res, next) {
//     const spot = await Spot.findByPk(req.params.id);
//     if (spot) {
//       res.json(spot);
//     } else {
//       next(spotNotFoundError(req.params.id));
//     }
//   })
// );

router.get(
  "/:id",
  asyncHandler(async function (req, res, next) {
    const spotId = req.params.id;
    const spot = await Spot.findByPk(spotId);
    if (spot) {
      const reviews = await Review.findAll({
        where: {
          spotId: spotId,
        },
      });
      const responseObj = { spot, reviews };
      res.json(responseObj);
    } else {
      next(spotNotFoundError(req.params.id));
    }
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
  handleValidationErrors,
];

router.post(
  "/",
  requireAuth,
  createSpotValidations,
  asyncHandler(async function (req, res, next) {
    const spotDetails = req.body;
    const spot = await Spot.create(spotDetails);
    res.json(spot);
  })
);

router.put(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res, next) {
    const spotId = req.body.id;
    const userId = req.body.userId;
    // const {address, city, country, name, price, mainImageURL} = req.body;
    const address = req.body.address;
    const city = req.body.city;
    const country = req.body.country;
    const name = req.body.name;
    const price = req.body.price;
    const mainImageURL = req.body.mainImageURL;
    const spot = await Spot.findByPk(spotId);
    if (spot) {
      if (userId === spot.userId) {
        spot.address = address;
        spot.city = city;
        spot.country = country;
        spot.name = name;
        spot.price = price;
        spot.mainImageURL = mainImageURL;
        await spot.save();
        res.json(spot);
      } else {
        const err = Error("Unauthorized user");
        err.errors = [`unauthorized delete`];
        err.title = "User not authorized to delete ";
        err.status = 401;
        return err;
      }
    } else {
      next(spotNotFoundError(req.body.id));
    }
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res, next) {
    const userId = req.user.id;
    const spot = await Spot.findByPk(req.params.id);
    if (spot) {
      if (userId === spot.userId) {
        await spot.destroy();
      } else {
        const err = Error("Unauthorized user");
        err.errors = [`unauthorized delete`];
        err.title = "User not authorized to delete ";
        err.status = 401;
        return err;
      }
      res.json(spot);
    } else {
      next(spotNotFoundError(req.params.id));
    }
  })
);

module.exports = router;
