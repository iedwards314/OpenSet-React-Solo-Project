import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import redLogo from '../../logo/OpenSet-Red-Logo.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ul className='navList'>
        <li className='navList-home'>
          <NavLink exact to="/">
            <img href="" src={redLogo} alt="logo"></img>
          </NavLink>
        </li>
        <li className='navList-home'>
          <NavLink className='navButton' exact to="/spots">Spots</NavLink>
        </li>
        <li className='navList-item'>
          <ProfileButton user={sessionUser} />
        </li>
      </ul>
      </>
    );
  } else {
    sessionLinks = (
      <ul className='navList'>
        <li className='navList-home'>
          <NavLink className='navButton' exact to="/">Home</NavLink>
        </li>
        <li className='navList-item'>
          <LoginFormModal />
          <NavLink className='navButton'to="/signup">Sign Up</NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav>
      {isLoaded && sessionLinks}
    </nav>

  );
}

export default Navigation;
