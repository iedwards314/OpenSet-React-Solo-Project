import React from "react";
import { NavLink } from "react-router-dom";
import blackLogo from "../../logo/OpenSet-Black-Logo.png";

const FooterFunc = () => {
    return (
        <footer className="splash-footer">
            <NavLink className="navList-home" exact to="/">
                <img className="img-logo" src={blackLogo} alt="logo"></img>
            </NavLink>
            <div className="disclaimer-container">
                <p className="disclaimer-text">*This site is for demo purposes only</p>
            </div>
            <div className="author-info">
                <p className="author-text">Created By: Ian Edwards</p>
                <ul>
                    <li>
                        <a className="footer-link logo-github" href="https://github.com/iedwards314/">
                            <ion-icon name="logo-github"></ion-icon>Github
                        </a>
                    </li>
                    <li>
                        <a className="footer-link logo-linkedIn" href="https://www.linkedin.com/in/edwards-ian/">
                            <ion-icon name="logo-linkedin"></ion-icon>LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default FooterFunc;
