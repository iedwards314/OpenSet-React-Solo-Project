import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getSpots } from "../../store/spots";
import SpotCard from "./spotCard";
import "./SpotsListPage.css";

const SpotsListPage = ({ isLoaded }) => {
  // debugger
  const sessionUser = useSelector((state) => state.session.user);

  console.log("index page sessionUser is...",sessionUser)

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

  return (
    <section className="section-spots-list">
      <h2 className="spot-list-header">Find the Perfect Set!</h2>
      <div className="spots-list-container">
      {createSpotButton()}
      {spotsArr.length <= 0 && <span>No Spots Available Right Now</span>}
      <ul className="spots-list">
        {spotsArr.map((spot) => (
          <li className="spot-item-container" key={spot?.id}>
            <SpotCard spot={spot}/>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default SpotsListPage;
