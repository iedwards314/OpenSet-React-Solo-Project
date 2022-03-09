import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getOneSpot } from "../../store/spots";
import "./SpotsOnePage.css";

const SpotsOnePage = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const spotParamObj  = useParams();
    const spotId = spotParamObj.id;

    const spot = useSelector(state => state.spots[spotId]);
    console.log(spot)
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getOneSpot(spotId))
    }, [dispatch])


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

    return(
        <>
        <h2>Specific Spots Page</h2>
        {createSpotButton()}
        <h3>{spot.name}</h3>
        <img src={`${spot.mainImageURL}`} alt="movie set idea"></img>
              {userEditFunc(spot)}
        </>
    )

}

export default SpotsOnePage;
