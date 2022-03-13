import "./SplashPage.css"
import linkedInLogo from "../../LinkedIn-Logos/LI-In-Bug.png"
const SplashPage = () => {


  return (
    <div className="HomePage">
      <div className="home-img-container">
        <img
          className="main-image"
          src="https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="movie clp bord and film"
        ></img>
      </div>
      <div className="Activity-select-container">
        <h1 className="splashHeader">Choose the Right Setting to Power Your Story</h1>
        <ul className="home-page-image-list">
          <li className="home-page-image-list-item">
          <img className="image-rounded" src="https://images.unsplash.com/photo-1643651576156-c062a5b8c324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHR2JTIwcHJvZHVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="movie crew scene"></img>
          </li>
          <li>
          <img className="image-rounded" src="https://images.unsplash.com/photo-1580746353748-e7b3febae39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="movie crew scene"></img>
          </li>
          <li>
          <img className="image-rounded" src="https://images.unsplash.com/photo-1551823934-339dedc2d97d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvcnJvciUyMGZpbG18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="movie crew scene"></img>
          </li>
          <li>
          <img className="image-rounded" src="https://images.unsplash.com/photo-1626899890324-787d4f0c9a65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG1vdmllJTIwcHJvZHVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="movie crew scene"></img>
          </li>
          <li>
          <img className="image-rounded" src="https://images.unsplash.com/photo-1637441211500-67a567b24424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fG1vdmllJTIwcHJvZHVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="movie crew scene"></img>
          </li>
          <li>
          <img className="image-rounded" src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdmllJTIwcHJvZHVjdGlvbiUyMHNhaWxib2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="movie crew scene"></img>
          </li>
          <li>
          <img className="image-rounded" src="https://images.unsplash.com/photo-1598737285721-29346a5c9278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHlhY2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="movie crew scene"></img>
          </li>
          <li>
          <img className="image-rounded" src="https://images.unsplash.com/photo-1593791211660-9fc3ea7fdbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJvYXQlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="movie crew scene"></img>
          </li>
        </ul>
      </div>
      <footer className="splash-footer">
        <div className="disclaimer-container"></div>
        <p className="disclaimer-text">*This site is for demo purposes only</p>
        <div className="author-info">

        <p className="author-text">Author: Ian Edwards</p>
        <p><a href="https://www.linkedin.com/in/edwards-ian/">
          <img className="linkedIn-logo" src={`${linkedInLogo}`}></img></a></p>
        </div>
        </footer>
    </div>
  );
};

export default SplashPage;
