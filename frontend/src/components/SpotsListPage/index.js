import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getSpots } from "../../store/spots";
import "./SpotsListPage.css";

const SpotsListPage = ({ isLoaded }) => {
  // debugger
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots);

  const spotsArr = Object.values(spots);

  //dispatcher
  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch]);

  if (!spots) {
    return null;
  }

  const createSpotButton = () => {
    if (!sessionUser) {
      return null;
    } else {
      return (
        <>
        <div className="add-button-container">
        <NavLink className="addButton" exact to="/spots/add">
          Add Spot
        </NavLink>
        </div>
        </>
      );
    }
  };

  const userEditFunc = (spot) => {
    if (!sessionUser) return;
    if (sessionUser.id === spot.userId) {
      return (
        <>
          <NavLink className="editButton" exact to={`/spots/${spot.id}/edit`}>
            Edit
          </NavLink>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <h2 className="spot-list-header">Spots List</h2>
      <div className="spots-list-container">
      {createSpotButton()}
      {spotsArr.length <= 0 && <span>No Spots Available Right Now</span>}
      <ul className="spots-list">
        {spotsArr.map((spot) => (
          <li className="spot-item-container" key={spot?.id}>
            <NavLink to={`/spots/${spot.id}`}>
              <img className="spots-list-image" src={`${spot?.mainImageURL}`} alt="movie set idea"></img>
            </NavLink>
            <h3 className="spot-name">{spot?.name}</h3>
            <h4 className="spot-host">{`Hosted By: ${spot.User ? spot.User.username : null}`}</h4>
              {userEditFunc(spot)}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default SpotsListPage;
