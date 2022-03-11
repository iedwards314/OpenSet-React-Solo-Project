import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getOneSpot, removeSpot } from "../../store/spots";
import { removeReview } from "../../store/reviews";
import "./SpotsOnePage.css";

const SpotsOnePage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const spotParamObj = useParams();
  const spotId = spotParamObj.id;
  const [deletePrompt, setDeletePrompt] = useState(false);
  const [deleteReviewPrompt, setReviewDeletePrompt] = useState(false);

  let history = useHistory();

  const spot = useSelector((state) => state.spots[spotId]);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getOneSpot(spotId));
  }, [dispatch]);

  let reviews;
  let userVeriSet = new Set();
  if(spot?.Reviews === undefined) {
    return null
  } else {
    reviews = spot?.Reviews
    reviews.forEach(review => {
      userVeriSet.add(review?.id);
    });
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

  const destroySpotButton = async (e) => {
      e.preventDefault();
      const payload = {
          userId: sessionUser.id,
          id: spot?.id
      }
      let destroyedSpot
      destroyedSpot = await dispatch(removeSpot(payload))
      .catch (error => (console.log("error in delete")))

      if(destroyedSpot.id){
        history.push("/spots/");
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

  const userEditFunc = (spot) => {
    if (!sessionUser) return;
    if (sessionUser.id === spot?.userId) {
      return (
        <>
          <NavLink className="navButton" exact to={`/spots/${spot?.id}/edit`}>
            Edit
          </NavLink>
          {showDeleteButtons()}
        </>
      );
    } else {
      return null;
    }
  };

  const reviewsList = (spot) => {
    if(!sessionUser) {
      return (
        <>
          <h3>
            Sign up to see reviews
          </h3>
        </>
      )
    }
    else {
      if(reviews !== undefined){
        if(reviews?.length > 0){
          return(
          <>

          <ul className="review-box">
           {reviews.map((userReview) =>
            <li className='spot-reviews' key={`${userReview?.id}`}>
              <h4 className='review-title'>{userReview?.username}</h4>
              <div className="review-divider"></div>
              <p className='review-text'>{userReview?.Review?.review}</p>
             </li>)}
          </ul>
          </>
          )
        }
        else {
          return null
        }
      }
    }
  }

  const reviewButtons = (spot) => {
    if(!sessionUser){
      return null
    }
    else if (sessionUser.id === spot?.userId) {
      return null
    }
    else if(userVeriSet.size > 0 && userVeriSet.has(sessionUser.id)){

      if (deleteReviewPrompt === true) {
        return (
          <>
          <ul>
              <li>
                  <button
                  type="submit"
                  onClick={destroyReviewButton}
                  className="btn-confirm-delete">Confirm Delete</button>
                  <button className="btn-cancel-delete" onClick={() => setReviewDeletePrompt(false)}>Cancel Delete</button>
              </li>
          </ul>
          </>
        );
      } else {
          return (
          <>
              <button className="btn-cancel-delete" onClick={() => setReviewDeletePrompt(true)}>Delete My Review</button>
          </>
          )

      }
    }
    else{
      console.log("user can review")
      console.log(userVeriSet.has(spot?.userId))
      return(
      <NavLink className="navButton" exact to={`/spots/${spot?.id}/reviewForm`}>
        Add review
      </NavLink>
      )

    }
  }

  const destroyReviewButton = async (e) => {
    e.preventDefault();
    let userReview = {};
    for (let i = 0; i < reviews.length; i++){
      let review = reviews[i];
      if(review?.id === sessionUser.id){
        userReview = reviews[i];
        console.log("spotId is...", userReview.Review.id);
        console.log("userId is...", userReview.id);
        break
      }
    }
    //create a getOne dispatch method to find the exact review. Then destroy it.
    const payload = {
        id: userReview.Review.id,
        userId: userReview.id,
    }
    let destroyedSpot
    destroyedSpot = await dispatch(removeReview(payload))
    .catch (error => (console.log("error in delete")))

    if(destroyedSpot){

      history.push(`/spots`);
    }
}

  return (
    <>
      {createSpotButton()}
      <h3>{spot?.name}</h3>
      {spot ? <img className="spot-image" src={`${spot?.mainImageURL}`} alt="movie set idea"></img> : null}
      <div>{`Price: ${spot?.price}`}</div>
      <div>{`Address: ${spot?.address}, ${spot?.city}, ${spot?.country}`}</div>
      {userEditFunc(spot)}
      {reviewButtons(spot)}
      {reviewsList(spot)}
    </>
  );
};

export default SpotsOnePage;
