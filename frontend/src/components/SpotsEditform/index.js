import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { ValidationError } from "../utils/validationError";
import ErrorMessage from "../utils/ErrorMessage";
import { createSpot } from "../../store/spots";
import * as sessionActions from "../../store/session";

function SpotsEditForm() {
  const spotParamObj = useParams();
  const spotId = spotParamObj.id;
  const spot = useSelector((state) => state.spots[spotId]);

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [address, setAddress] = useState(spot.address);
  const [city, setCity] = useState(spot.city);
  const [country, setCountry] = useState(spot.country);
  const [name, setName] = useState(spot.name);
  const [price, setPrice] = useState(spot.price);
  const [image, setImage] = useState(spot.mainImageURL);
  const [errors, setErrors] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});
  let history = useHistory();

  useEffect(() => {
    const validationErrors = [];
    if (address.length > 255)
      return validationErrors.push(
        "Please update address to less than 255 characters"
      );
    if (city.length > 40)
      return validationErrors.push("Please limit city to 40 characters");
    if (country.length > 80)
      return validationErrors.push("Please limit country to 80 characters");
    if (name.length > 100)
      return validationErrors.push("Please limit name to 100 characters");
    setErrors(validationErrors);
  }, [address, city, country, name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roundedPrice = Math.round(price * 100) / 100;
    const updatedSpot = {
      userId: sessionUser.id,
      address,
      city,
      country,
      name,
      price: roundedPrice,
      mainImageURL: image,
    };
    console.log(updatedSpot);
    let editedSpot;
    try {
        editedSpot = await dispatch(createSpot(updatedSpot));
      console.log("success");
    } catch (error) {
      console.log("there was an error in the edit spot form");
    }
    if (editedSpot) {
      setErrorMessages({});
      setErrors([]);
      history.push("/spots");
    }
  };

  return (
    <>
      <img src={`${spot.mainImageURL}`}></img>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div>
          <ErrorMessage message={errorMessages.overall} />
        </div>
        <div className="sign-up-form">
          <label className="signup-form-label">
            <div className="signup-form-text">Name</div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="signup-form-label">
            <div className="signup-form-text">Price</div>
            <input
              type="number"
              placeholder="Add Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <label className="signup-form-label">
            <div className="signup-form-text">Image URL</div>
            <input
              type="text"
              placeholder="image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </label>
          <label className="signup-form-label">
            <div className="signup-form-text">Address</div>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label className="signup-form-label">
            <div className="signup-form-text">City</div>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
          <label className="signup-form-label">
            <div className="signup-form-text">Country</div>
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </label>

          <button
            type="submit"
            disabled={errors.length > 0}
            className="btn-Log-in-Log-out"
          >
            Update Spot
          </button>
        </div>
      </form>
    </>
  );
}

export default SpotsEditForm;
