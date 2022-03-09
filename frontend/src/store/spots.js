import { ValidationError } from "../components/utils/validationError";
import { csrfFetch } from "./csrf";

//constant variable for routing

const SPOTSLIST = "spots/SPOTSLIST";
const GET_ONE_SPOT = "spots/GET_SINGLE_SPOT";
const ADD_SPOT = "spots/ADD_SPOT";

//list action creator
export const spotsList = (spots) => {
  return {
    type: SPOTSLIST,
    spots,
  };
};

export const getOne = (spot) => {
  return {
    type: GET_ONE_SPOT,
    spot,
  };
};

export const addOne = (spot) => {
  return {
    type: ADD_SPOT,
    spot,
  };
};

//read spots list thunk
export const getSpots = () => async (dispatch) => {
  const response = await fetch("/api/spots");
  if (response.ok) {
    const list = await response.json();
    dispatch(spotsList(list));
  }
};

//read one spot thunk
export const getOneSpot = (id) => async (dispatch) => {
  const response = await fetch(`/api/spots/${id}`);
  if (response.ok) {
    const spot = await response.json();
    dispatch(getOne(spot));
  }
};

//create spot thunk

export const createSpot = (data) => async (dispatch) => {
  try {
    const response = await csrfFetch("/api/spots", {
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

    const spot = await response.json();
    dispatch(addOne(spot));
    return spot;
  } catch (error) {
    throw error;
  }
};

const spotsReducer = (state = {}, action) => {
  switch (action.type) {
    case SPOTSLIST: {
      const newState = { ...state };
      action.spots.forEach((spot) => {
        newState[spot.id] = spot;
      });
      return newState;
    }
    case ADD_SPOT:
      const newState = {
        ...state,
        [action.spot.id]: action.spot,
      };
      const newSpotList = newState.spots.map((id) => newState[id]);
      newSpotList.push(action.spot);
      return newState;
    case GET_ONE_SPOT: {
      return {
        ...state,
        [action.spot.id]: {
          ...state[action.spot.id],
          ...action.spot,
        },
      };
    }
    default:
      return state;
  }
};

export default spotsReducer;
