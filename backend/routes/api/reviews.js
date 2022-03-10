const express = require("express");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");

const { Spot, Image, User, Review } = require("../../db/models");

const router = express.Router();

const createReviewValidations = [
  check("userId")
    .exists({ checkFalsy: true })
    .withMessage("UserId can't be empty"),
  check("spotId")
    .exists({ checkFalsy: true })
    .withMessage("spotId can't be empty"),
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review can't be empty")
    .isLength({ max: 255 })
    .withMessage("Review can't be longer than 255 characters"),
  check("rating")
    .exists({ checkFalsy: true })
    .withMessage("Review can't be empty"),
  check("rating")
    .isNumeric({ min: 1, max: 10 })
    .withMessage("Rating can't be higher than 10 or lower than 1"),
  handleValidationErrors,
];

router.post(
  "/",
  requireAuth,
  createReviewValidations,
  asyncHandler(async function (req, res, next) {
    const reviewDetails = req.body;
    const review = await Review.create(reviewDetails);
    res.json(review);
  })
);

router.delete(
  "/",
  requireAuth,
  asyncHandler(async function (req, res, next) {
    const userId = req.user.id;
    const spotId = req.body.spotId
    const review = await Review.findOne({
        where:{
            spotId,
            userId
        }
    });
    if (review) {
      if (userId === review.userId) {
        await review.destroy();
      } else {
        const err = Error("Unauthorized user");
        err.errors = [`unauthorized delete`];
        err.title = "User not authorized to delete ";
        err.status = 401;
        return err;
      }
      res.json(review);
    } else {
      next(spotNotFoundError(req.params.id));
    }
  })
);

module.exports = router;
