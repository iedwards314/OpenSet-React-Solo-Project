import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink, Route, useHistory, Redirect } from "react-router-dom";
import { getSpots } from "../../store/spots";
import "./SpotsListPage.css";

const SpotsListPage = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);
  console.log(sessionUser);

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
        <NavLink className="navButton" exact to="/spots/add">
          Add Spot
        </NavLink>
      );
    }
  };

  const userEditFunc = (spot) => {
    if (!sessionUser) return;
    if (sessionUser.id === spot.userId) {
      return (
        <>
          <button>EDIT</button>
          <button>DELETE</button>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <h2>Spots List</h2>
      {createSpotButton()}
      {spotsArr.length <= 0 && <span>No Spots Available Right Now</span>}
      <ul className="spots-list">
        {spotsArr.map((spot) => (
          <li key={spot.id}>
            <h3>{spot.name}</h3>
            <img src={`${spot.Images[0].url}`} alt="movie set idea"></img>
            {userEditFunc(spot)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SpotsListPage;
