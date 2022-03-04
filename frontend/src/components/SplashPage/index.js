const SplashPage = () => {
  return (
    <div className="HomePage">
      <div className="img-container">
        <img
          src="https://media.istockphoto.com/photos/film-movie-background-clapperboard-and-film-reels-in-theatre-picture-id686746978?b=1&k=20&m=686746978&s=170667a&w=0&h=FJfvPe93mHj_cHFFvA5h9V_1H7QjlnTD1vm2qvaG448="
          alt="image of a movie clp bord and film"
        ></img>
      </div>
      <div className="Activity-select-container">
        <h1>Choose Unique Locations To Match Your Project Specifications</h1>
        <div className="Thumbnail-container">
          <div className="specific-thumbnail">
            <a href="/">
              <div className="thumbnail">
                <div className="hover-wrapper"></div>
                <div className="spec-img-container">
                  <img className="image-rounded" src="https://images.unsplash.com/photo-1465301055284-72f355cfd745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaSUyMGZpJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="old cottage house"></img>
                </div>
                <div className="caption">
                    <h4 className="Splash-Genre">Older Homes</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
