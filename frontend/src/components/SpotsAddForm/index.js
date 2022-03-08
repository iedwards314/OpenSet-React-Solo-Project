import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";


function SpotsAddForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState([]);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSpot = {
        address,
        city,
        country,
        name,
        price,
        image
    }
    //need to refactor the spot model to include a home image, then use the images table as secondary images

    history.push("/")
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className="sign-up-form">
      <label className='signup-form-label'>
        <div className='signup-form-text'>
          Name
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className='signup-form-label'>
        <div className='signup-form-text'>
          Price
        </div>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label className='signup-form-label'>
        <div className='signup-form-text'>
          Image URL
        </div>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </label>
      <label className='signup-form-label'>
        <div className='signup-form-text'>
          Address
        </div>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <label className='signup-form-label'>
        <div className='signup-form-text'>
          City
        </div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <label className='signup-form-label'>
        <div className='signup-form-text'>
          Country
        </div>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </label>

      <button type="submit" className="btn-Log-in-Log-out">Create</button>
      </div>
    </form>
  );
}

export default SpotsAddForm;
