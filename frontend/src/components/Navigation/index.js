import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import redLogo from "../../logo/OpenSet-Red-Logo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser){
    return (
      <header className="header">
        <NavLink className="navList-home" exact to="/">
          <img className="img-logo" src={redLogo} alt="logo"></img>
        </NavLink>
        <div className="nav-search-bar-container">
          <form className="nav-search-bar">
            <input placeholder="searchbar"></input>
            <button>search</button>
          </form>
        </div>
        <nav className="navList">
          <ul className="nav-button-container">
            <li >
            <NavLink className="addButton" exact to="/spots/add">
              Add Spot
            </NavLink>
            </li>
            <li className="navList-spots">
              <NavLink className="navButton" exact to="/spots">
                All Spots
              </NavLink>
            </li>
            <li className="navList-item">
              <ProfileButton user={sessionUser} />
            </li>
          </ul>
        </nav>
      </header>
    )
  } else {
    return (
      <header className="header">
        <NavLink className="navList-home" exact to="/">
          <img className="img-logo" src={redLogo} alt="logo"></img>
        </NavLink>
        <nav className="navList">
          <ul className="nav-button-container">
            <li className="navList-item">
              <LoginFormModal />
            </li>
            <li className="navList-item">
              <NavLink className="navButton-signUp" to="/signup">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation;
