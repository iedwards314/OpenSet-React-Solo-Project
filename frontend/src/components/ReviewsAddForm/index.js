import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ErrorMessage from "../utils/ErrorMessage";
import { getOneSpot } from "../../store/spots";
import { createReview } from "../../store/reviews";

function ReviewAddForm() {
    const spotParamObj = useParams();
    const spotId = spotParamObj.id;
    const spot = useSelector((state) => state.spots[spotId]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOneSpot(spotId));
    }, [dispatch]);
    const sessionUser = useSelector((state) => state.session.user);
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
    const [errorMessages, setErrorMessages] = useState({});
    let history = useHistory();

    useEffect(() => {
      const validationErrors = [];
      if (review.length > 255)
        validationErrors.push(
          "Please update review to less than 255 characters"
        );
      if (rating > 10 || rating < 1)
         validationErrors.push("Please limit rating to between 1 and 10");
      setErrors(validationErrors);
    }, [review, rating]);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const newReview = {
        userId: sessionUser.id,
        spotId: spotId,
        review,
        rating,
      };
      let addedReview;
      try {
        addedReview = await dispatch(createReview(newReview));
      } catch (error) {
        setErrorMessages[error]="Database Error"
      }
      if (addedReview) {
        setErrorMessages({});
        setErrors([]);
        history.push(`/spots/${spot?.id}/`);
      }
    };

    return (
      <>
        <img src={`${spot?.mainImageURL}`}></img>
        <h2>{`${spot?.name}`}</h2>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div>
            <ErrorMessage message={errorMessages.overall} />
          </div>
          <div className="sign-up-form">
          <label className="signup-form-label">
              <div className="signup-form-text">Rating</div>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </label>
            <label className="signup-form-label">
              <div className="signup-form-text">Review</div>
              <textarea
                className="reviews-textarea"
                type="text"
                placeholder="Please let us know what you think"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />
            </label>
            <button
              type="submit"
              disabled={errors.length > 0}
              className="btn-Log-in-Log-out"
            >
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }

export default ReviewAddForm;
