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

  return (
    <section className="section-spots-list">
      <div className="spots-list-container">
        <h2 className="spot-list-header margin-top-sm">Find the Perfect Set!</h2>
        <div className="margin-top-sm">
        <ul className="spots-list-grid grid--center--v">
          {spotsArr.map((spot) => (
            <li key={spot?.id}>
              <SpotCard spot={spot}/>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
};

export default SpotsListPage;
