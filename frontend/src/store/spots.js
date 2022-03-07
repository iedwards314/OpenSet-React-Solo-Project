
//constant variable for routing

const SPOTSLIST = "spots"

console.log("hitting SPOTSLIST", SPOTSLIST);

//list action creator
export const spotsList = (spots) => {
    console.log("we are at the action creator");
    return {
        type: SPOTSLIST,
        spots
    }
}

//read spots list thunk
export const getSpots = () => async dispatch => {
    console.log("we are at the thunk")
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
