import { ValidationError } from "../components/utils/validationError";
import { csrfFetch } from "./csrf";

const GET_REVIEW = "reviews/GET_REVIEW";
const ADD_REVIEW = "reviews/ADD_REVIEW";
const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";
const UPDATE_REVIEW = "reviews/UPDATE_REVIEW";

export const getOne = (review) => {
  return {
    type: GET_REVIEW,
    review,
  };
};

export const addOne = (review) => {
  return {
    type: ADD_REVIEW,
    review,
  };
};

export const removeOne = (id) => {
  return {
    type: REMOVE_REVIEW,
    id,
  };
};

export const updateOne = (review) => {
  return {
    type: UPDATE_REVIEW,
    review,
  };
};

//create review thunk

export const createReview = (data) => async (dispatch) => {
  try {
    const response = await csrfFetch("/api/reviews", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      let error;
      if (response.status === 422) {
        error = await response.json();
        throw new ValidationError(error.errors, response.statusText);
      } else {
        let errorJSON;
        error = await response.text();
        try {
          // Check if the error is JSON, i.e., from the Spot server. If so,
          // don't throw error yet or it will be caught by the following catch
          errorJSON = JSON.parse(error);
        } catch {
          // Case if server could not be reached
          throw new Error(error);
        }
        throw new Error(`${errorJSON.title}: ${errorJSON.message}`);
      }
    }

    const review = await response.json();
    dispatch(addOne(review));
    return review;
  } catch (error) {
    console.log("error in create thunk");
    throw error;
  }
};

//DESTROY REVIEW
export const removeReview = (review) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews`, {
    method: "delete",
  });
  if (response.ok) {
    const destroyedReview = await response.json();
    dispatch(removeOne(destroyedReview.id));
    return destroyedReview;
  }
  return response;
};

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      const newState = {
        ...state,
        [action.review.id]: action.review,
      };
      return newState;
    case GET_REVIEW: {
      return {
        ...state,
        [action.review.id]: {
          ...state[action.review.id],
          ...action.review,
        },
      };
    }
    case REMOVE_REVIEW: {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    default:
      return state;
  }
};

export default reviewsReducer;
