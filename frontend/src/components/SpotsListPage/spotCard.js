import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";

const SpotCard = ({ spot }) => {
  // const sessionUser = useSelector((state) => state.session.user);

  // const userEditFunc = (spot) => {
  //   if (!sessionUser) return;
  //   if (sessionUser.id === spot.userId) {
  //     return (
  //       <div>
  //         <NavLink className="editButton" exact to={`/spots/${spot.id}/edit`}>
  //           Edit
  //         </NavLink>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // };

  const spotPrice = (spot) => {
    const price = Math.round(spot?.price)
    const formattedPrice = price.toLocaleString("en-us")
    return (
      <>
        <p className="spot-list-price">{`$${formattedPrice} per night`}</p>
      </>
    )
  }

  return (

    <>
      <NavLink className="general-link" to={`/spots/${spot.id}`}>
        <div className="spot-card">
          <div className="spot-image-container">
            <img
              className="spots-list-image"
              src={`${spot?.mainImageURL}`}
              alt="movie set idea"
            ></img>
          </div>
          <div className="spot-info">
            <h3 className="spot-name">{spot?.name}</h3>
            <p className="spot-host">{`Hosted By: ${
              spot.User ? spot.User.username : null
            }`}</p>
            <p className="spot-location">{`${spot?.city}, ${spot?.country}`}</p>
            {spotPrice(spot)}
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default SpotCard;
