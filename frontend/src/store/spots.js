
//constant variable for routing

const SPOTSLIST = "spots/SPOTSLIST"
const ADD_SPOT = "spots/ADD_SPOT"

//list action creator
export const spotsList = (spots) => {
    return {
        type: SPOTSLIST,
        spots
    }
}

export const addOne = (spot) => {
    return {
        type: ADD_SPOT,
        spot
    }
}

//read spots list thunk
export const getSpots = () => async dispatch => {
    const response = await fetch('/api/spots');
    if(response.ok) {
        const list = await response.json();
        dispatch(spotsList(list))
    }
}

//create spot thunk

export const createSpot = data => async dispatch => {
    try {
        const response = await fetch("/api/spots", {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

    } catch (error) {
        console.log("error at create spot thunk")
        throw(error)
    }
}

const spotsReducer = (state = {}, action) => {

    switch (action.type) {
        case SPOTSLIST: {
            const newState = {...state};
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            });
            return newState;
        }
        default:
          return state;
    }
}

export default spotsReducer;
