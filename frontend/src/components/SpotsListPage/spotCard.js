import { NavLink } from "react-router-dom";

const SpotCard = ({spot}, {sessionUser}) => {

    const userEditFunc = (spot) => {
        if (!sessionUser) return;
        if (sessionUser.id === spot.userId) {
          return (
            <>
                <p>import working</p>
              {/* <NavLink className="editButton" exact to={`/spots/${spot.id}/edit`}>
                Edit
              </NavLink> */}
            </>
          );
        } else {
          return null;
        }
      };

    return(
        <>
            <NavLink to={`/spots/${spot.id}`}>
              <img className="spots-list-image" src={`${spot?.mainImageURL}`} alt="movie set idea"></img>
            </NavLink>
            <h3 className="spot-name">{spot?.name}</h3>
            <h4 className="spot-host">{`Hosted By: ${spot.User ? spot.User.username : null}`}</h4>
            {userEditFunc(spot)}
        </>
    )
}

export default SpotCard;
