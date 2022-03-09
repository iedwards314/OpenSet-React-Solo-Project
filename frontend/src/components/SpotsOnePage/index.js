import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getOneSpot, removeSpot } from "../../store/spots";
import "./SpotsOnePage.css";

const SpotsOnePage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const spotParamObj = useParams();
  const spotId = spotParamObj.id;
  const [errorMessages, setErrorMessages] = useState({});
  const [deletePrompt, setDeletePrompt] = useState(false);
  let history = useHistory();

  const spot = useSelector((state) => state.spots[spotId]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSpot(spotId));
  }, [dispatch]);

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

  const destroySpotButton = async (e) => {
      e.preventDefault();
      const payload = {
          userId: sessionUser.id,
          id: spot.id
      }
      let destroyedSpot
      try{
          destroyedSpot = await dispatch(removeSpot(payload));
      } catch (error) {
          console.log("error in delete")
      }
      if(destroyedSpot){
          history.push("/spots");
      }
  }

  const showDeleteButtons = () => {
    if (deletePrompt === true) {
      return (
        <>
        <ul>
            <li>
                <button
                type="submit"
                onClick={destroySpotButton}
                className="btn-confirm-delete">Confirm Delete</button>
                <button className="btn-cancel-delete" onClick={() => setDeletePrompt(false)}>Cancel Delete</button>
            </li>
        </ul>
        </>
      );
    } else {
        return (
        <>
            <button onClick={() => setDeletePrompt(true)}>Delete</button>
        </>
        )

    }
  };

  const editSpotButton = () => {
    return (
      <NavLink className="navButton" exact to="/spots/add">
        Add Spot
      </NavLink>
    );

  }

  const userEditFunc = (spot) => {
    if (!sessionUser) return;
    if (sessionUser.id === spot.userId) {
      return (
        <>
          <NavLink className="navButton" exact to={`/spots/${spot.id}/edit`}>
            Edit
          </NavLink>
          {showDeleteButtons()}
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <h2>Specific Spots Page</h2>
      {createSpotButton()}
      <h3>{spot.name}</h3>
      <img className="image-spot" src={`${spot.mainImageURL}`} alt="movie set idea"></img>
      {userEditFunc(spot)}
    </>
  );
};

export default SpotsOnePage;
