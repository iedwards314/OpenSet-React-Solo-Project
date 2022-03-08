
//constant variable for routing

const SPOTSLIST = "spots"

//list action creator
export const spotsList = (spots) => {
    return {
        type: SPOTSLIST,
        spots
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
