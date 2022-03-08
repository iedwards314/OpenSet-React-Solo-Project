import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import { getSpots } from "../../store/spots";
import "./SpotsListPage.css";

const SpotsListPage = () => {
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

  return (
    <>
      <h2>Spots List</h2>
      {spotsArr.length <= 0 && <span>No Spots Available Right Now</span>}
      <ul className="spots-list">
        {spotsArr.map((spot) => (
          <li key={spot.id}>
            <h3>{spot.name}</h3>
            <img src={`${spot.Images[0].url}`} alt="movie set idea"></img>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SpotsListPage;
