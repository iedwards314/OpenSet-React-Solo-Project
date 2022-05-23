import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SpotCard = ({ spot }) => {
  const sessionUser = useSelector((state) => state.session.user);

  const userEditFunc = (spot) => {
    if (!sessionUser) return;
    if (sessionUser.id === spot.userId) {
      return (
        <div>
          <NavLink className="editButton" exact to={`/spots/${spot.id}/edit`}>
            Edit
          </NavLink>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="spot-card">
      <NavLink to={`/spots/${spot.id}`}>
        <img
          className="spots-list-image"
          src={`${spot?.mainImageURL}`}
          alt="movie set idea"
        ></img>
      </NavLink>
      <h3 className="spot-name">{spot?.name}</h3>
      <h4 className="spot-host">{`Hosted By: ${
        spot.User ? spot.User.username : null
      }`}</h4>
      {userEditFunc(spot)}
    </div>
  );
};

export default SpotCard;
