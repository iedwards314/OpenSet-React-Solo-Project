import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  let history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  if (showMenu) {
    return (
      <div className="dropdown">
        <button onClick={openMenu}>
          <i className="fas fa-user-circle" />
        </button>
        <div className="dropdown-content">
          <div className="dropdown-content-item">{`User: ${user.username}`}</div>
          <div className="dropdown-content-item">{`Email: ${user.email}`}</div>
          <div className="dropdown-content-item">
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dropdown">
        <button onClick={openMenu}>
          <i className="fas fa-user-circle" />
        </button>
      </div>
    );
  }
}

export default ProfileButton;
