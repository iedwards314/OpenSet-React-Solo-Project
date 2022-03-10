
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { ValidationError } from "../utils/validationError";
import ErrorMessage from "../utils/ErrorMessage";
import { createSpot } from "../../store/spots";
import * as sessionActions from "../../store/session";

function ReviewAddForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
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
    const priceCheck = (typeof(roundedPrice))
    console.log(priceCheck);
    const newSpot = {
      userId: sessionUser.id,
      address,
      city,
      country,
      name,
      price: roundedPrice,
      mainImageURL: image,
    };
    //need to refactor the spot model to include a home image, then use the images table as secondary images
    console.log(newSpot);
    let createdSpot;
    try {
      createdSpot = await dispatch(createSpot(newSpot));
    } catch (error) {
     console.log("there was an error in the handle submit spot form")
     history.push("/spots/add")
    }
    if(createSpot){
      setErrorMessages({});
      setErrors([]);
      history.push("/spots");
    }

  };

  return (
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
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="signup-form-label">
          <input
            type="number"
            placeholder="Add Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label className="signup-form-label">
          <input
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>
        <label className="signup-form-label">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label className="signup-form-label">
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label className="signup-form-label">
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
          Create
        </button>
      </div>
    </form>
  );
}

export default ReviewAddForm;
