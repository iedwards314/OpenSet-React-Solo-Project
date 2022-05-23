import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeroFunc = () => {
    const sessionUser = useSelector((state) => state.session.user);

    const heroButton = (sessionUser) => {
        if(!sessionUser){
            return(
                <>
                    <NavLink className="heroButton-signUp" to="/sign-up">
                        Sign Up now!
                    </NavLink>
                </>
            )
        }
        else {
            return (
                <>
                    <NavLink className="heroButton-signUp" to="/spots">
                        Find a set!
                    </NavLink>
                </>
            )
        }

    }

    return (
        <section className="section-hero">
            <div className="hero">
                <div className="home-img-container">
                    <img
                    className="main-image"
                    src="https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="movie clp bord and film"
                    ></img>
                </div>
                <div className="hero-text">
                    <h1 className="heading-primary hero-header">The app to find sets and <span>tell your story</span></h1>
                    <p className="hero-description">
                        Welcome to OpenSet. A place for individuals with unique properties for creative artists to film movies, tv shows, or amazing photography.
                    </p>
                    {heroButton(sessionUser)}
                </div>
            </div>
        </section>
    )
}

export default HeroFunc;
